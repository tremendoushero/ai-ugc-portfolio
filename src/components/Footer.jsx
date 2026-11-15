import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        {/* Upper Footer: Brand & Quick Navigation */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <span className="footer-name">CHANDAN<span className="brand-dot">.</span></span>
              <span className="footer-role">AI UGC CREATOR</span>
            </div>
            <p className="footer-tagline">
              Crafting high-retention AI video creatives, virtual creator UGC, and product commercials 
              for modern US e-commerce brands.
            </p>
            <div className="footer-contact-link-wrap">
              <span className="footer-contact-label">Direct Contact:</span>
              <a href="mailto:contactaiugc@gmail.com" className="footer-email-link">
                contactaiugc@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-heading">NAVIGATION</span>
            <ul className="footer-nav-list">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#work">Selected Spec Work</a></li>
              <li><a href="#services">Services & Formats</a></li>
              <li><a href="#why-me">Why Work With Me</a></li>
              <li><a href="#process">Creative Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-focus-col">
            <span className="footer-col-heading">FOCUS & EXPERTISE</span>
            <ul className="footer-focus-list">
              <li>AI UGC Video Ads (TikTok & Meta)</li>
              <li>Hyper-Realistic AI Personas</li>
              <li>Macro Product Demonstrations</li>
              <li>D2C Commercial Spec Concepts</li>
              <li>High-Retention Creative Iteration</li>
            </ul>
          </div>
        </div>

        {/* Prominent Independent Spec-Ad Disclaimer */}
        <div className="footer-disclaimer-box">
          <div className="disclaimer-header">
            <span className="disclaimer-tag">INDEPENDENT CREATIVE SPEC AD DISCLAIMER</span>
          </div>
          <p className="disclaimer-body">
            All company names, brand names, product references, and trademarks (including but not limited to HASK®, 
            OCOOKER®, and referenced cosmetic lines) depicted across this portfolio are the registered intellectual property 
            of their respective trademark holders. The video materials, creative concepts, and demonstrations featured here 
            are <strong>unofficial spec advertisements and independent concepts</strong> produced exclusively for portfolio 
            demonstration purposes to display AI-assisted video production and creative capabilities. 
            No endorsement, direct sponsorship, official client relationship, or commercial partnership is claimed or implied.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Chandan. All rights reserved. Chandan AI UGC Creator.
          </p>

          <a href="#hero" onClick={scrollToTop} className="back-to-top" aria-label="Back to top of page">
            <span>Back to top</span>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12.6667V3.33334M8 3.33334L4 7.33334M8 3.33334L12 7.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
