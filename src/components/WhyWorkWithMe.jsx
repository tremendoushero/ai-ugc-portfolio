import React from 'react';
import './WhyWorkWithMe.css';

export default function WhyWorkWithMe() {
  const pillars = [
    {
      number: '01',
      title: 'Product-Focused Storytelling',
      desc: 'Every cut, macro angle, and scene transition is engineered around your product’s distinct value proposition. Rather than relying on generic fluff, each ad visually isolates customer pain points and demonstrates tangible product benefits.'
    },
    {
      number: '02',
      title: 'Custom Creative Concepts',
      desc: 'Every video starts with tailored script concepts and narrative hooks designed for your brand voice. No cookie-cutter templates or recycled prompts—only original creative structures built to capture viewer retention in the critical first three seconds.'
    },
    {
      number: '03',
      title: 'Multiple Visual Styles',
      desc: 'Flexibility across creative aesthetics: from authentic, unpolished iPhone-style UGC testimonials that feel native to user feeds, to high-end cinematic commercials featuring macro lighting, fluid dynamics, and studio-grade finish.'
    },
    {
      number: '04',
      title: 'Social-First Vertical Formats',
      desc: 'Built natively in 9:16 vertical ratio with ad platform safe zones in mind. Dynamic kinetic captions, clear text overlays, and responsive mobile framing optimized specifically for TikTok, Meta Reels, and YouTube Shorts campaigns.'
    }
  ];

  return (
    <section id="why-me" className="section section-border-top">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="status-dot"></span>
            <span>CREATIVE ADVANTAGE</span>
          </div>
          <h2 className="section-title">WHY WORK WITH ME</h2>
          <p className="section-subtitle">
            An agile, independent AI video production approach built for e-commerce operators who value 
            clarity, visual craft, and fast creative iteration.
          </p>
        </div>

        {/* Why Grid */}
        <div className="why-grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="why-card">
              <div className="why-card-header">
                <span className="why-card-num">{pillar.number}</span>
                <div className="why-card-rule" aria-hidden="true"></div>
              </div>
              <h3 className="why-card-title">{pillar.title}</h3>
              <p className="why-card-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
