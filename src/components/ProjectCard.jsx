import React, { useState, useRef, useEffect, useCallback } from 'react';
import './SelectedWork.css';

export default function ProjectCard({ project, index }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Playback control with Promise error handling
  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.warn(`[${project.title}] Playback error:`, err);
          }
        });
    }
  }, [project.title]);

  const pauseVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  }, []);

  // Synchronize React state with native video events (videoRef as single source of truth)
  const handlePlayEvent = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePauseEvent = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleEndedEvent = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleErrorEvent = useCallback((e) => {
    console.warn(`[${project.title}] Video load error:`, e);
    setVideoError(true);
    setVideoLoaded(false);
    setIsPlaying(false);
  }, [project.title]);

  const handleLoadedEvent = useCallback(() => {
    setVideoLoaded(true);
    setVideoError(false);
  }, []);

  // Monitor video readiness and error states
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 1) {
      handleLoadedEvent();
    }

    video.addEventListener('loadedmetadata', handleLoadedEvent);
    video.addEventListener('loadeddata', handleLoadedEvent);
    video.addEventListener('canplay', handleLoadedEvent);
    video.addEventListener('play', handlePlayEvent);
    video.addEventListener('pause', handlePauseEvent);
    video.addEventListener('ended', handleEndedEvent);
    video.addEventListener('error', handleErrorEvent);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedEvent);
      video.removeEventListener('loadeddata', handleLoadedEvent);
      video.removeEventListener('canplay', handleLoadedEvent);
      video.removeEventListener('play', handlePlayEvent);
      video.removeEventListener('pause', handlePauseEvent);
      video.removeEventListener('ended', handleEndedEvent);
      video.removeEventListener('error', handleErrorEvent);
    };
  }, [handleLoadedEvent, handlePlayEvent, handlePauseEvent, handleEndedEvent, handleErrorEvent, project.videoPath]);

  // Click on the actual HTML5 video element:
  // - If clicked near the bottom 56px (controls bar), yield to native controls.
  // - If clicked on the video body, toggle play/pause using video.paused as single source of truth.
  // - Call e.preventDefault() to prevent browser default click actions from conflicting with our toggle.
  const handleVideoClick = (e) => {
    e.preventDefault();
    const video = videoRef.current;
    if (!video) return;

    const rect = video.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    if (clickY > rect.height - 56) {
      // Yield to native controls bar
      return;
    }

    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  };

  // Dedicated custom play button handler (toggles play/pause based on video.paused)
  const handleCustomPlayClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  };

  // Audio mute/unmute toggle without interfering with playback
  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <article className="project-card" aria-labelledby={`project-title-${index}`}>
      {/* Editorial Card Top Bar */}
      <div className="card-top-bar">
        <div className="card-index-badge">
          <span className="index-num">PROJECT {String(index + 1).padStart(2, '0')}</span>
          <span className="spec-disclaimer-pill">UNOFFICIAL SPEC AD / INDEPENDENT CONCEPT</span>
        </div>
        <div className="card-format-pill">{project.aspectRatio}</div>
      </div>

      <div className="project-card-grid">
        {/* Left / Top: Video Player Frame (9:16 Aspect Ratio) */}
        <div className="project-media-wrapper">
          {/* Note: NO onClick handler on parent container */}
          <div 
            className={`video-container aspect-${project.ratioSlug} ${videoLoaded ? 'has-video-loaded' : ''}`}
          >
            {/* The HTML5 Video Element: Directly clickable, native controls, playsInline */}
            {!videoError && (
              <video
                ref={videoRef}
                src={project.videoPath}
                className="project-video-element"
                muted={isMuted}
                playsInline
                controls
                preload="auto"
                onClick={handleVideoClick}
                onPlay={handlePlayEvent}
                onPause={handlePauseEvent}
                onEnded={handleEndedEvent}
                onError={handleErrorEvent}
                title={`${project.title} - AI UGC Video`}
              />
            )}

            {/* Custom Play Button Overlay: only shown when video is loaded and paused */}
            {videoLoaded && !videoError && !isPlaying && (
              <div className="video-play-overlay">
                <button
                  type="button"
                  className="custom-play-btn"
                  onClick={handleCustomPlayClick}
                  aria-label={`Play ${project.title}`}
                >
                  <div className="video-play-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="7,4 20,12 7,20" />
                    </svg>
                  </div>
                  <span className="video-play-tag">CLICK TO PLAY</span>
                </button>
              </div>
            )}

            {/* Quick Unmute Floating Badge when video is playing */}
            {videoLoaded && !videoError && isPlaying && (
              <button
                type="button"
                className="video-sound-toggle"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isMuted ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                    <span>UNMUTE AUDIO</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                    <span>SOUND ON</span>
                  </>
                )}
              </button>
            )}

            {/* Fallback & Poster State: ONLY visible if the video file fails to load */}
            {(!videoLoaded || videoError) && (
              <div className="video-fallback-screen">
                <div className="fallback-art-container" aria-hidden="true">
                  {project.fallbackGraphic}
                </div>

                <div className="fallback-badge-overlay">
                  <div className="fallback-badge">
                    <span className="fallback-badge-dot"></span>
                    <span>{videoError ? 'FALLBACK PREVIEW' : 'CONNECTING STREAM'}</span>
                  </div>
                </div>

                <div className="fallback-info-card">
                  <div className="fallback-file-box">
                    <span className="fallback-file-label">ASSET PATH EXPECTED:</span>
                    <code className="fallback-file-code">{project.videoPath}</code>
                  </div>
                  <p className="fallback-file-hint">
                    {videoError
                      ? 'Drop the MP4 file in public/videos to enable live playback.'
                      : 'Buffering local video stream...'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right / Bottom: Project Information & Spec Details */}
        <div className="project-content-wrapper">
          <div className="project-category">{project.category}</div>
          <h3 id={`project-title-${index}`} className="project-title">
            {project.title}
          </h3>

          <div className="project-mandate">
            <span className="mandate-label">Creative Brief & Concept:</span>
            <p className="project-desc">{project.description}</p>
          </div>

          <div className="project-metadata-grid">
            <div className="meta-item">
              <span className="meta-label">VISUAL STYLE</span>
              <span className="meta-value">{project.visualStyle}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">TARGET PLATFORMS</span>
              <span className="meta-value">{project.platforms}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">CREATIVE HOOK</span>
              <span className="meta-value">{project.hookAngle}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">PRODUCTION TECH</span>
              <span className="meta-value">{project.techUsed}</span>
            </div>
          </div>

          <div className="project-card-footer">
            <div className="file-status-indicator">
              <span className={`status-pill ${videoLoaded ? 'status-ready' : 'status-spec'}`}>
                {videoLoaded ? (
                  <span className="status-live-wrapper">
                    <span className="live-indicator-dot"></span>
                    <span>Live Video Connected</span>
                  </span>
                ) : (
                  '○ Spec Placeholder Mode'
                )}
              </span>
            </div>

            <a href="#contact" className="project-inquire-link">
              <span>Discuss Similar Concept</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
