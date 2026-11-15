import React, { useState } from 'react';
import './Contact.css';

export default function Contact({ onNotify }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'contactaiugc@gmail.com';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      if (onNotify) {
        onNotify('Email address copied to clipboard: ' + emailAddress);
      }
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const emailTemplates = [
    {
      label: 'New AI UGC Ad Inquiry',
      subject: '[Inquiry] AI UGC Ad Campaign for E-Commerce Brand',
      body: 'Hi Chandan,%0D%0A%0D%0AI came across your AI UGC portfolio and would like to discuss video ad concepts for our brand.%0D%0A%0D%0AProduct Website: %0D%0ATarget Platforms (TikTok/Meta): %0D%0AEstimated Timeline: %0D%0A%0D%0ABest,%0D%0A[Your Name]'
    },
    {
      label: 'Spec Ad Concept Request',
      subject: '[Spec Concept] AI Commercial Demo Request',
      body: 'Hi Chandan,%0D%0A%0D%0AWe are interested in exploring a custom AI spec ad concept for our upcoming product launch.%0D%0A%0D%0AStore URL: %0D%0AKey Product Benefit: %0D%0A%0D%0ALooking forward to hearing your thoughts.%0D%0A%0D%0A[Your Name]'
    }
  ];

  return (
    <section id="contact" className="section section-border-top subtle-grid-bg">
      <div className="container contact-container">
        <div className="contact-badge-wrap">
          <div className="section-tag">
            <span className="status-dot"></span>
            <span>GET IN TOUCH</span>
          </div>
        </div>

        {/* Contact Headline */}
        <h2 className="contact-headline">
          LET’S CREATE SOMETHING <span className="headline-accent">GREAT.</span>
        </h2>

        {/* Subtitle / Explanatory Text */}
        <p className="contact-subtitle">
          Whether you are looking to test fresh AI-driven hooks for your Meta & TikTok ad spend, 
          or need cinematic product demonstration concepts without long production cycles, 
          send an email to discuss your brand's upcoming creative needs.
        </p>

        {/* Main Email Interaction Box */}
        <div className="contact-card">
          <div className="contact-card-inner">
            <span className="contact-direct-label">DIRECT INQUIRY CHANNEL</span>
            <div className="contact-email-row">
              <a 
                href={`mailto:${emailAddress}?subject=${encodeURIComponent('[Inquiry] AI UGC Project Discussion')}`} 
                className="contact-email-link"
                title="Open default email client"
              >
                {emailAddress}
              </a>

              <div className="contact-actions-row">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`btn-copy ${copied ? 'is-copied' : ''}`}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent('[Inquiry] AI UGC Video Ads Collaboration')}`}
                  className="btn btn-primary contact-send-btn"
                >
                  <span>Open Email Client</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Clickable Email Starters */}
        <div className="contact-templates-wrap">
          <span className="templates-label">Quick Mail Templates:</span>
          <div className="templates-pills">
            {emailTemplates.map((tmpl) => (
              <a
                key={tmpl.label}
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(tmpl.subject)}&body=${tmpl.body}`}
                className="template-pill"
                title={`Click to email with pre-filled subject: ${tmpl.subject}`}
              >
                <span>{tmpl.label}</span>
                <span className="pill-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* What to Expect Box */}
        <div className="expectations-grid">
          <div className="expectation-item">
            <span className="expectation-title">RESPONSIVE COLLABORATION</span>
            <p className="expectation-desc">Direct communication with Chandan. No account managers or communication bottlenecks.</p>
          </div>
          <div className="expectation-item">
            <span className="expectation-title">US TIME ZONE ALIGNMENT</span>
            <p className="expectation-desc">Flexible overlap with Eastern and Pacific working hours for prompt updates and revisions.</p>
          </div>
          <div className="expectation-item">
            <span className="expectation-title">RAPID INITIAL CONCEPTS</span>
            <p className="expectation-desc">Receive initial script concepts, visual storyboards, and hook variations within days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
