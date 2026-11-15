import React from 'react';
import ProjectCard from './ProjectCard';
import './SelectedWork.css';

export default function SelectedWork() {
  const projects = [
    {
      title: 'Skincare — AI Product Commercial',
      category: 'Cosmetics & D2C Beauty',
      aspectRatio: '9:16 Vertical / 16:9 Cut',
      ratioSlug: 'vertical',
      videoPath: '/videos/skincare-ad.mp4',
      description:
        'A cinematic spec commercial exploring high-viscosity serum drops, macro skin texture illumination, and ethereal studio lighting. Engineered to showcase active hydration without requiring expensive on-location camera rigs or physical studio rentals.',
      visualStyle: 'Cinematic studio lighting, macro fluid physics, high-contrast glow',
      platforms: 'Meta Ads (IG Reels), TikTok, D2C Homepage Hero',
      hookAngle: '"The 3-second glow transformation" — macro drop contact with immediate luminescence',
      techUsed: 'Diffusion Video Synthesis, Neural Camera Motion, Custom Audio Grading',
      fallbackGraphic: (
        <svg viewBox="0 0 320 480" className="fallback-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Aesthetic Luxury Serum Bottle Graphic */}
          <rect width="320" height="480" fill="#0d0d0d"/>
          <circle cx="160" cy="220" r="110" fill="url(#skincareGlow)" opacity="0.15"/>
          <defs>
            <radialGradient id="skincareGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Dropper Pipette */}
          <rect x="156" y="90" width="8" height="40" rx="3" stroke="#555555" strokeWidth="1.5" fill="#1c1c1c"/>
          <path d="M152 130 H168 L165 145 H155 Z" fill="#333333"/>
          {/* Dropper Bulb */}
          <rect x="150" y="68" width="20" height="24" rx="6" stroke="#444444" strokeWidth="1.5" fill="#141414"/>
          {/* Bottle Cap Collar */}
          <rect x="145" y="145" width="30" height="14" rx="2" stroke="#666666" strokeWidth="1.5" fill="#222222"/>
          {/* Bottle Body */}
          <path d="M130 162 C130 159 132 159 140 159 H180 C188 159 190 159 190 162 L198 185 C200 190 200 195 200 205 V320 C200 332 190 342 178 342 H142 C130 342 120 332 120 320 V205 C120 195 120 190 122 185 Z" 
                stroke="#555555" strokeWidth="1.5" fill="#121212"/>
          {/* Fluid Level */}
          <path d="M123 235 Q160 228 197 235 V320 C197 330 188 338 178 338 H142 C132 338 123 330 123 320 Z" 
                fill="#1f1f1f" stroke="#333333" strokeWidth="1"/>
          {/* Minimalist label */}
          <rect x="135" y="255" width="50" height="38" rx="2" stroke="#333333" fill="#0d0d0d"/>
          <line x1="145" y1="268" x2="175" y2="268" stroke="#777777" strokeWidth="1.5"/>
          <line x1="150" y1="276" x2="170" y2="276" stroke="#444444" strokeWidth="1"/>
          {/* Hanging Droplet */}
          <path d="M160 380 C160 380 153 392 153 398 C153 402 156 405 160 405 C164 405 167 402 167 398 C167 392 160 380 160 380 Z" 
                fill="#ffffff" opacity="0.75"/>
          {/* Technical markers */}
          <text x="160" y="440" fill="#666666" fontSize="10" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="2">
            AI SKINCARE SPEC • MACRO TEXTURE
          </text>
        </svg>
      )
    },
    {
      title: 'HASK Hydrate Coconut Oil Conditioner — AI Creator-led UGC',
      category: 'Hair Care & Organic Beauty',
      aspectRatio: '9:16 Vertical Ad',
      ratioSlug: 'vertical',
      videoPath: '/videos/hask-conditioner-ad.mp4',
      description:
        'An authentic, relatable creator-led spec advertisement featuring a hyper-realistic AI creator persona in a warm bathroom setting. Demonstrates rich coconut oil emulsion, split-end smoothing, and effortless detangling with organic voiceover cadence.',
      visualStyle: 'Native creator selfie-style, warm ambient bathroom lighting, unscripted aesthetic',
      platforms: 'TikTok Spark Ads, Instagram Reels, YouTube Shorts',
      hookAngle: '"If your ends feel like straw after bleaching, stop scrolling" — immediate pain-point address',
      techUsed: 'Generative Digital Human Persona, Voice Cloning, Temporal Consistency Engine',
      fallbackGraphic: (
        <svg viewBox="0 0 320 480" className="fallback-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Aesthetic Hair Care Bottle & Organic Motif */}
          <rect width="320" height="480" fill="#0d0d0d"/>
          <circle cx="160" cy="200" r="120" fill="url(#haskGlow)" opacity="0.12"/>
          <defs>
            <radialGradient id="haskGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4d4d8"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Dispenser Pump Top */}
          <rect x="156" y="80" width="8" height="28" stroke="#555555" strokeWidth="1.5" fill="#1b1b1b"/>
          <path d="M152 80 H185 C190 80 192 84 188 88 L175 92 H152 Z" stroke="#666666" strokeWidth="1.5" fill="#242424"/>
          {/* Bottle Neck */}
          <rect x="146" y="108" width="28" height="16" rx="2" stroke="#444444" strokeWidth="1.5" fill="#171717"/>
          {/* Bottle Silhouette */}
          <path d="M125 140 C125 128 135 124 146 124 H174 C185 124 195 128 195 140 L204 220 C206 240 206 310 200 340 C198 348 190 354 180 354 H140 C130 354 122 348 120 340 C114 310 114 240 116 220 Z" 
                stroke="#555555" strokeWidth="1.5" fill="#131313"/>
          {/* Bottle Label Area */}
          <rect x="130" y="180" width="60" height="110" rx="3" stroke="#333333" fill="#0a0a0a"/>
          {/* Botanical leaf detail inside label */}
          <path d="M160 205 C150 215 152 230 160 238 C168 230 170 215 160 205 Z" 
                stroke="#777777" strokeWidth="1.2" fill="#1c1c1c"/>
          <line x1="160" y1="210" x2="160" y2="235" stroke="#555555" strokeWidth="1"/>
          {/* Minimalist label text lines */}
          <line x1="140" y1="250" x2="180" y2="250" stroke="#888888" strokeWidth="1.5"/>
          <line x1="145" y1="260" x2="175" y2="260" stroke="#444444" strokeWidth="1"/>
          <line x1="148" y1="270" x2="172" y2="270" stroke="#444444" strokeWidth="1"/>
          {/* Creator UI badge overlay */}
          <rect x="35" y="380" width="250" height="34" rx="17" fill="#161616" stroke="#2e2e2e"/>
          <circle cx="54" cy="397" r="10" fill="#2a2a2a"/>
          <text x="74" y="401" fill="#a1a1aa" fontSize="10.5" fontFamily="Space Grotesk, sans-serif" letterSpacing="0.5">
            CREATOR-LED SPEC DEMO
          </text>
        </svg>
      )
    },
    {
      title: 'OCOOKER Kitchen Gadget — AI Product Demonstration',
      category: 'Home Goods & Smart Kitchen Gadgets',
      aspectRatio: '9:16 Vertical Video',
      ratioSlug: 'vertical',
      videoPath: '/videos/ocooker-blender-ad.mp4',
      description:
        'A dynamic product demo illustrating ultra-fast smoothie blending, magnetic safety interlocking, and one-touch pulse vortex action. Designed to demystify product mechanics and drive high click-through intent on paid social feeds.',
      visualStyle: 'Modern kitchen counter staging, dynamic motion blur, crisp sound design sync',
      platforms: 'TikTok Shop Creatives, Meta Feed Ads, Amazon Product Detail Video',
      hookAngle: '"Crushing ice in 12 seconds with zero cord hassle" — speed and convenience proof',
      techUsed: 'Physics-Accurate Fluid Generation, Multi-Angle AI Camera Rig, Audio Stems',
      fallbackGraphic: (
        <svg viewBox="0 0 320 480" className="fallback-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Aesthetic Modern Kitchen Appliance Graphic */}
          <rect width="320" height="480" fill="#0d0d0d"/>
          <circle cx="160" cy="240" r="115" fill="url(#blenderGlow)" opacity="0.12"/>
          <defs>
            <radialGradient id="blenderGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Jar Lid & Seal */}
          <rect x="140" y="105" width="40" height="12" rx="3" stroke="#666666" strokeWidth="1.5" fill="#262626"/>
          <rect x="130" y="117" width="60" height="8" rx="2" stroke="#555555" strokeWidth="1" fill="#1b1b1b"/>
          {/* Transparent Jar Body */}
          <path d="M130 125 L138 250 C139 256 144 260 150 260 H170 C176 260 181 256 182 250 L190 125 Z" 
                stroke="#666666" strokeWidth="1.5" fill="#141414"/>
          {/* Vortex dynamic spiral lines */}
          <path d="M145 155 Q160 145 175 155 Q160 170 148 185 Q160 195 172 205 Q160 220 152 235" 
                stroke="#777777" strokeWidth="1.5" strokeDasharray="3 3" fill="none"/>
          {/* Blade Assembly */}
          <path d="M152 250 L168 250 L165 245 L155 245 Z" fill="#888888"/>
          {/* Motor Base */}
          <path d="M132 263 C132 260 135 258 140 258 H180 C185 258 188 260 188 263 L194 340 C195 348 188 355 180 355 H140 C132 355 125 348 126 340 Z" 
                stroke="#555555" strokeWidth="1.5" fill="#181818"/>
          {/* Central Power Ring / Dial */}
          <circle cx="160" cy="305" r="14" stroke="#888888" strokeWidth="1.5" fill="#111111"/>
          <circle cx="160" cy="305" r="7" fill="#ffffff" opacity="0.8"/>
          {/* Rubber Base Feet */}
          <rect x="136" y="355" width="10" height="4" rx="1" fill="#333333"/>
          <rect x="174" y="355" width="10" height="4" rx="1" fill="#333333"/>
          {/* Label Banner */}
          <text x="160" y="415" fill="#71717a" fontSize="10" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="2">
            SMART BLENDER SPEC • SPEED DEMO
          </text>
        </svg>
      )
    }
  ];

  return (
    <section id="work" className="section section-border-top">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="status-dot"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">SELECTED SPEC WORK</h2>
          <p className="section-subtitle">
            Concept video advertisements developed to demonstrate AI-powered visual fidelity, 
            rapid narrative hook pacing, and social-first creative formats.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="projects-collection">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Transparent Compliance Notice */}
        <div className="compliance-box">
          <div className="compliance-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div className="compliance-content">
            <h4 className="compliance-title">Transparent Production Standard</h4>
            <p className="compliance-text">
              Every project presented above is an <strong>independent concept / unofficial spec ad</strong> produced 
              to showcase AI video generation workflows. No official affiliation, endorsement, or client partnership 
              with featured brands (such as HASK, OCOOKER, or cosmetic manufacturers) is implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
