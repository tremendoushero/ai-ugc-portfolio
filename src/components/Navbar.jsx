import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-name">CHANDAN<span className="brand-dot">.</span></span>
          <span className="brand-tag">AI UGC</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <a href="#work" className="nav-link">Work</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#why-me" className="nav-link">Why Me</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-action">
          <a href="#contact" className="btn btn-secondary navbar-cta">
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="container mobile-menu-inner">
          <nav className="mobile-nav-links">
            <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">01</span>
              <span className="mobile-link-text">Selected Work</span>
            </a>
            <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">02</span>
              <span className="mobile-link-text">Services</span>
            </a>
            <a href="#why-me" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">03</span>
              <span className="mobile-link-text">Why Work With Me</span>
            </a>
            <a href="#process" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">04</span>
              <span className="mobile-link-text">Creative Process</span>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-link-num">05</span>
              <span className="mobile-link-text">Contact</span>
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-status">
              <span className="status-dot"></span>
              <span>Available for US E-Commerce Projects</span>
            </div>
            <a href="#contact" className="btn btn-primary mobile-cta-btn" onClick={closeMenu}>
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
