import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'AI UGC-Style Video Ads',
      desc: 'Native-looking vertical video ads built to mirror organic TikTok and Instagram feed posts. Includes unboxing angles, direct-to-camera hooks, and relatable consumer reactions that bypass user ad fatigue.',
      deliverables: ['9:16 Vertical Cut', 'Captions & Dynamic Subtitles', 'Multiple Hook Variations'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <circle cx="12" cy="18" r="1" />
          <path d="M9 6h6" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'AI Influencer Videos',
      desc: 'Virtual creator personas tailored to your target demographic. Eliminates lengthy talent scouting, contract negotiations, and creator ghosting while maintaining consistent on-camera brand representation.',
      deliverables: ['Custom Persona Selection', 'Natural Voice Synthesis', 'Script-to-Video Workflow'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Product Demonstrations',
      desc: 'Clear visual walkthroughs showcasing product functionality, texture, usage mechanics, and real-world utility. Ideal for consumer electronics, innovative home gadgets, and problem-solving D2C items.',
      deliverables: ['Feature Callout Overlays', 'Exploded / Assembly Views', 'Problem-Solution Structure'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Cinematic Product Commercials',
      desc: 'High-end lighting, macro lens physics, and dynamic camera orbits that evoke luxury brand television spots. Gives emerging brands a premium visual aesthetic on modern digital ad budgets.',
      deliverables: ['Macro Texture Passes', 'Dynamic Lighting Sweeps', 'Spatial Audio Mastering'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <circle cx="8" cy="10" r="2" />
          <path d="m21 15-5-5L5 20" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Short-Form Social Creatives',
      desc: 'High-volume creative iteration engineered for paid media testing across Meta and TikTok. Rapidly test diverse visual hooks, sound trends, and call-to-actions to pinpoint top-performing angles.',
      deliverables: ['Iterative Hook Testing', 'Fast Turnaround Delivery', 'Ad Platform Sizing Ready'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section section-border-top">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="status-dot"></span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="section-title">SERVICES & FORMATS</h2>
          <p className="section-subtitle">
            Tailored AI video production designed specifically for US e-commerce brands seeking 
            scalable, agile creative assets without traditional studio friction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((item) => (
            <div key={item.num} className="service-card">
              <div className="service-card-top">
                <span className="service-num">{item.num}</span>
                <div className="service-icon-wrap" aria-hidden="true">
                  {item.icon}
                </div>
              </div>

              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>

              <div className="service-deliverables">
                <span className="deliverables-heading">Deliverables:</span>
                <div className="deliverable-tags">
                  {item.deliverables.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
