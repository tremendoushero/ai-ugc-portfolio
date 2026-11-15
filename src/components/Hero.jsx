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
      </div>
    </section>
  );
}
