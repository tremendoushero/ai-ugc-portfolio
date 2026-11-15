import React from 'react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Brand & Product Alignment',
      desc: 'We review your product features, high-converting customer reviews, target demographics, and current paid creative bottlenecks to pinpoint high-probability angles.',
      activities: ['Product Benefit Mapping', 'Audience Demographics Check', 'Competitor Creative Analysis']
    },
    {
      step: '02',
      name: 'Concept',
      tagline: 'Hook & Script Architecture',
      desc: 'Developing multiple scroll-stopping hook hypotheses, natural-sounding voiceover scripts, visual staging boards, and persona selections crafted for high retention.',
      activities: ['3-Second Hook Writing', 'Storyboard Framing', 'Persona & Setting Selection']
    },
    {
      step: '03',
      name: 'Create',
      tagline: 'Neural Generation & Craft',
      desc: 'Executing generative AI video rendering, photorealistic camera motions, voice synthesis, motion graphics, captions, and high-impact sound design.',
      activities: ['AI Video Synthesis', 'Voice Cloning & Timing', 'Audio & Motion Polish']
    },
    {
      step: '04',
      name: 'Deliver',
      tagline: 'Ready-to-Deploy Assets',
      desc: 'Final high-resolution master exports formatted to exact platform specifications (9:16 vertical and optional 16:9), organized with clean filenames for ad managers.',
      activities: ['Platform-Ready MP4 Files', 'Hook Variation Splits', 'Organized Delivery Deck']
    }
  ];

  return (
    <section id="process" className="section section-border-top">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="status-dot"></span>
            <span>PRODUCTION ROADMAP</span>
          </div>
          <h2 className="section-title">CREATIVE PROCESS</h2>
          <p className="section-subtitle">
            A structured, repeatable workflow designed to turn product concepts into ready-to-test 
            video assets swiftly and predictably.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="process-timeline">
          {steps.map((item, idx) => (
            <div key={item.step} className="process-step-card">
              <div className="process-header">
                <div className="process-step-num">{item.step}</div>
                <div className="process-line-accent" aria-hidden="true"></div>
              </div>

              <div className="process-body">
                <span className="process-tagline">{item.tagline}</span>
                <h3 className="process-name">{item.name}</h3>
                <p className="process-desc">{item.desc}</p>

                <div className="process-checklist">
                  {item.activities.map((act) => (
                    <div key={act} className="checklist-item">
                      <span className="checklist-dash">—</span>
                      <span>{act}</span>
                    </div>
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
