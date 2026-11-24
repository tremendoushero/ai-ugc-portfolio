import React from 'react';
import ProjectCard from './ProjectCard';
import './SelectedWork.css';

export default function SelectedWork() {
  const projects = [
    {
      title: 'Beauty From Bees — AI Product Commercial',
      category: 'Cosmetics & D2C Beauty',
      aspectRatio: '9:16 Vertical / 23s',
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
      title: 'OCOOKER Kitchen Gadget — AI Product Demonstration',
      category: 'Home Goods & Smart Kitchen Gadgets',
      aspectRatio: '9:16 Vertical / 23s',
      ratioSlug: 'vertical',
      videoPath: '/videos/ocooker-blender-ad.mp4',
      description:
        'A dynamic product demo illustrating ultra-fast smoothie blending, magnetic safety interlocking, and one-touch pulse vortex action. Designed to demystify product mechanics and drive high click-through intent on paid social feeds.',
      visualStyle: 'Modern kitchen counter staging, dynamic motion blur, crisp sound design sync',
      platforms: 'TikTok Shop Creatives, Meta Feed Ads, Amazon Product Detail Video',
      hookAngle: '"Stop dragging out a massive, heavy blender just to make one shake or chop onions."',
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
    },
    {
      title: 'Jewellery Advertisement — AI Luxury Commercial',
      category: 'Luxury & Fine Jewellery',
      aspectRatio: '9:16 Vertical Video',
      ratioSlug: 'vertical',
      videoPath: '/videos/jewellery-ad.mp4',
      description:
        'A high-end luxury jewellery spec commercial spotlighting diamond facet reflections, metallic gold luster, and cinematic macro motion. Crafted to elevate brand prestige and capture immediate attention in premium social feeds.',
      visualStyle: 'Moody editorial studio lighting, ray-traced gemstone refraction, slow-motion orbit',
      platforms: 'Instagram Reels, TikTok Luxury Ads, High-Ticket E-Commerce',
      hookAngle: '"Timeless brilliance in motion" — macro diamond sparkle and light dispersion in 3 seconds',
      techUsed: 'Neural Ray Reconstruction, Macro Camera Control, Spatial Audio Sound Design',
      fallbackGraphic: (
        <svg viewBox="0 0 320 480" className="fallback-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Aesthetic Luxury Diamond Ring Graphic */}
          <rect width="320" height="480" fill="#0d0d0d"/>
          <circle cx="160" cy="220" r="110" fill="url(#jewelleryGlow)" opacity="0.15"/>
          <defs>
            <radialGradient id="jewelleryGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Faceted Gemstone / Diamond */}
          <polygon points="160,110 200,150 180,190 140,190 120,150" stroke="#777777" strokeWidth="1.5" fill="#181818"/>
          <polygon points="160,110 175,150 160,190 145,150" stroke="#555555" strokeWidth="1" fill="#1f1f1f"/>
          <line x1="120" y1="150" x2="200" y2="150" stroke="#666666" strokeWidth="1"/>
          {/* Ring Band */}
          <ellipse cx="160" cy="270" rx="60" ry="70" stroke="#555555" strokeWidth="3" fill="none"/>
          <ellipse cx="160" cy="270" rx="52" ry="62" stroke="#222222" strokeWidth="1.5" fill="none"/>
          {/* Sparkle glints */}
          <path d="M195 125 L200 110 L205 125 L220 130 L205 135 L200 150 L195 135 L180 130 Z" fill="#ffffff" opacity="0.8"/>
          <circle cx="125" cy="180" r="2" fill="#ffffff" opacity="0.6"/>
          <circle cx="195" cy="195" r="2.5" fill="#ffffff" opacity="0.7"/>
          {/* Technical markers */}
          <text x="160" y="420" fill="#71717a" fontSize="10" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="2">
            FINE JEWELLERY SPEC • MACRO SHINE
          </text>
        </svg>
      )
    },
    {
      title: 'Vitamin C Glow Serum — AI Creator-Led UGC',
      category: 'Cosmetics & D2C Skincare',
      aspectRatio: '9:16 Vertical / 20s',
      ratioSlug: 'vertical',
      videoPath: '/videos/lv_0_20261124113246.mp4',
      description:
        'An engaging creator-led spec advertisement featuring an ultra-realistic AI creator demonstrating a morning skincare routine. Highlights fluid dropper consistency, macro skin luminescence, and conversational direct-to-camera hook pacing.',
      visualStyle: 'Native creator selfie camera, radiant ambient lighting, natural conversational cadence',
      platforms: 'TikTok Spark Ads, Instagram Reels, D2C Product Funnels',
      hookAngle: '"My 30-second secret to glass skin every morning" — direct dropper application to cheek with instant glow',
      techUsed: 'Digital Human Synthesis, Facial Geometry Tracking, Neural Audio Sync',
      fallbackGraphic: (
        <svg viewBox="0 0 320 480" className="fallback-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Aesthetic Vitamin C Serum Dropper Bottle */}
          <rect width="320" height="480" fill="#0d0d0d"/>
          <circle cx="160" cy="220" r="110" fill="url(#vitCGlow)" opacity="0.15"/>
          <defs>
            <radialGradient id="vitCGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Dropper Bulb & Pipette */}
          <rect x="156" y="85" width="8" height="42" rx="3" stroke="#555555" strokeWidth="1.5" fill="#1c1c1c"/>
          <path d="M152 127 H168 L165 142 H155 Z" fill="#333333"/>
          <rect x="150" y="64" width="20" height="24" rx="6" stroke="#444444" strokeWidth="1.5" fill="#141414"/>
          {/* Bottle Collar */}
          <rect x="145" y="142" width="30" height="14" rx="2" stroke="#666666" strokeWidth="1.5" fill="#222222"/>
          {/* Bottle Silhouette */}
          <path d="M130 160 C130 157 132 157 140 157 H180 C188 157 190 157 190 160 L198 185 C200 190 200 195 200 205 V320 C200 332 190 342 178 342 H142 C130 342 120 332 120 320 V205 C120 195 120 190 122 185 Z" 
                stroke="#555555" strokeWidth="1.5" fill="#121212"/>
          {/* Amber fluid */}
          <path d="M123 235 Q160 228 197 235 V320 C197 330 188 338 178 338 H142 C132 338 123 330 123 320 Z" 
                fill="#1f180e" stroke="#443216" strokeWidth="1"/>
          {/* Vitamin C label */}
          <rect x="135" y="250" width="50" height="44" rx="2" stroke="#333333" fill="#0d0d0d"/>
          <text x="160" y="268" fill="#f59e0b" fontSize="9" fontWeight="800" fontFamily="Space Grotesk, sans-serif" textAnchor="middle">VITAMIN C</text>
          <line x1="145" y1="276" x2="175" y2="276" stroke="#777777" strokeWidth="1.5"/>
          <line x1="150" y1="284" x2="170" y2="284" stroke="#444444" strokeWidth="1"/>
          {/* Droplet */}
          <path d="M160 380 C160 380 153 392 153 398 C153 402 156 405 160 405 C164 405 167 402 167 398 C167 392 160 380 160 380 Z" 
                fill="#f59e0b" opacity="0.85"/>
          <text x="160" y="440" fill="#666666" fontSize="10" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="2">
            AI CREATOR UGC • VITAMIN C SPEC
          </text>
        </svg>
      )
    },
    {
      title: 'Luxury Diamond Necklace — AI Haute Joaillerie Commercial',
      category: 'High Jewelry & Luxury Goods',
      aspectRatio: '9:16 Vertical / 15s',
      ratioSlug: 'vertical',
      videoPath: '/videos/lv_0_20261124122649.mp4',
      description:
        'A cinematic high-jewelry spec commercial showcasing a pear-cut diamond solitaire pendant set within a marquise diamond leaf wreath necklace. Illustrates ray-traced prismatic light dispersion, rich gold reflections, and dramatic starburst flares against black velvet.',
      visualStyle: 'Moody editorial studio lighting, optical starburst glints, ray-traced gemstone refraction',
      platforms: 'Instagram Reels, TikTok Luxury Creatives, High-Ticket E-Commerce',
      hookAngle: '"Pure brilliance captured in light" — dramatic spotlight ignition with starburst diamond flares',
      techUsed: 'Ray-Traced Light Dispersion, Micro-Camera Pathing, Cinematic Audio Stems',
      fallbackGraphic: (
        <svg viewBox="0 0 320 480" className="fallback-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Aesthetic Luxury Diamond Necklace Graphic */}
          <rect width="320" height="480" fill="#0d0d0d"/>
          <circle cx="160" cy="220" r="110" fill="url(#necklaceGlow)" opacity="0.15"/>
          <defs>
            <radialGradient id="necklaceGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Necklace chain curve */}
          <path d="M60 80 Q160 180 260 80" stroke="#777777" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
          {/* Diamond leaves */}
          <ellipse cx="120" cy="150" rx="8" ry="16" transform="rotate(-30 120 150)" stroke="#666666" strokeWidth="1" fill="#1f1f1f"/>
          <ellipse cx="140" cy="180" rx="8" ry="16" transform="rotate(-15 140 180)" stroke="#777777" strokeWidth="1" fill="#242424"/>
          <ellipse cx="180" cy="180" rx="8" ry="16" transform="rotate(15 180 180)" stroke="#777777" strokeWidth="1" fill="#242424"/>
          <ellipse cx="200" cy="150" rx="8" ry="16" transform="rotate(30 200 150)" stroke="#666666" strokeWidth="1" fill="#1f1f1f"/>
          {/* Pear cut solitaire pendant */}
          <path d="M160 215 C150 235 138 255 138 275 C138 295 148 305 160 305 C172 305 182 295 182 275 C182 255 170 235 160 215 Z" 
                stroke="#aaaaaa" strokeWidth="1.5" fill="#1a1a1a"/>
          {/* Facets inside pear */}
          <polygon points="160,230 172,275 160,295 148,275" stroke="#777777" strokeWidth="1" fill="#262626"/>
          {/* Starburst glint */}
          <path d="M160 200 L163 212 L175 215 L163 218 L160 230 L157 218 L145 215 L157 212 Z" fill="#ffffff" opacity="0.9"/>
          <circle cx="160" cy="215" r="3" fill="#ffffff"/>
          {/* Technical text */}
          <text x="160" y="420" fill="#71717a" fontSize="10" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="2">
            SOLITAIRE NECKLACE • HAUTE JOAILLERIE
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
              with featured brands (such as OCOOKER or cosmetic lines) is implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
