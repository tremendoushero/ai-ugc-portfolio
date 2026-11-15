import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section subtle-grid-bg">
      {/* Background ambient lighting glow */}
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span className="hero-badge-text">AVAILABLE FOR CREATIVE PROJECTS</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline">
          AI UGC THAT MAKES PRODUCTS <span className="headline-accent">IMPOSSIBLE TO IGNORE.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Scroll-stopping AI-powered video ads for modern e-commerce brands.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            <span>VIEW MY WORK</span>
            <svg className="btn-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>LET’S WORK TOGETHER</span>
          </a>
        </div>

        {/* Sophisticated Video/Showreel Placeholder Area (Editorial Studio Frame) */}
        <div className="hero-showreel-wrapper">
          <div className="showreel-frame">
            {/* Top monitor bar */}
            <div className="showreel-header">
              <div className="showreel-header-left">
                <span className="rec-dot"></span>
                <span className="showreel-label">AI STUDIO MONITOR • SPEC AD COMPILATION</span>
              </div>
              <div className="showreel-header-right">
                <span className="showreel-meta">4K MASTER / 24 FPS / DCI-P3</span>
              </div>
            </div>

            {/* Visual preview screen area */}
            <div className="showreel-screen">
              {/* Corner crosshair markers */}
              <div className="crosshair crosshair-tl">+</div>
              <div className="crosshair crosshair-tr">+</div>
              <div className="crosshair crosshair-bl">+</div>
              <div className="crosshair crosshair-br">+</div>

              {/* Center interactive play anchor pointing to Selected Work */}
              <a href="#work" className="showreel-play-btn" aria-label="Jump to Selected Work videos">
                <div className="play-icon-glow"></div>
                <div className="play-icon-inner">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </div>
                <span className="play-btn-label">EXPLORE SPEC PROJECTS</span>
              </a>

              {/* Subtle ambient scanline overlay */}
              <div className="showreel-overlay-lines" aria-hidden="true"></div>

              {/* Timecode & format watermark */}
              <div className="showreel-watermark">
                <span>TIMECODE 00:01:24:08</span>
                <span>ASPECT RATIO 9:16 & 16:9 OPTIMIZED</span>
              </div>
            </div>

            {/* Bottom monitor metrics bar */}
            <div className="showreel-footer">
              <div className="footer-metric">
                <span className="metric-label">PIPELINE</span>
                <span className="metric-val">NEURAL RENDER & MOTION SYNTHESIS</span>
              </div>
              <div className="footer-metric">
                <span className="metric-label">AUDIO</span>
                <span className="metric-val">AI VOICE & DYNAMIC SFX</span>
              </div>
              <div className="footer-metric hide-mobile">
                <span className="metric-label">DELIVERABLES</span>
                <span className="metric-val">PAID META / TIKTOK AD HOOKS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
