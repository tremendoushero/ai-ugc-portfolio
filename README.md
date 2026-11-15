# Chandan | AI UGC Creator Portfolio

A production-ready, high-converting one-page portfolio website built for **Chandan**, an AI UGC Creator targeting US e-commerce brands. Engineered with React, Vite, and vanilla CSS featuring a premium dark monochrome studio aesthetic (`#080808`).

---

## ✦ Creative Concept & Identity
- **Creator**: Chandan
- **Brand**: Chandan AI UGC Creator
- **Audience**: US E-Commerce Brands (Beauty, Cosmetics, D2C Gadgets, Home Goods)
- **Primary Inquiry Channel**: `contactaiugc@gmail.com`
- **Core Positioning**: Unofficial spec ad showcase, hyper-realistic AI creator personas, cinematic product demonstrations, and scroll-stopping vertical social ad creative concepts.

---

## ✦ Page Structure & Features
1. **Sticky Minimal Navigation**: Monogram logo (`CHANDAN.`), smooth anchor links (`#work`, `#services`, `#why-me`, `#process`, `#contact`), and an animated mobile drawer menu.
2. **Hero Section**: 
   - `AVAILABLE FOR CREATIVE PROJECTS` pulsing status badge
   - Headline: `AI UGC THAT MAKES PRODUCTS IMPOSSIBLE TO IGNORE.`
   - Subtitle: `Scroll-stopping AI-powered video ads for modern e-commerce brands.`
   - Action buttons: `VIEW MY WORK` & `LET'S WORK TOGETHER`
   - Editorial 16:9 studio showreel monitor frame with telemetry markers, audio/pipeline metrics, and spec compilation badge.
3. **Selected Work (Spec Projects)**:
   - **Project 01**: `Skincare — AI Product Commercial` (Macro serum texture, fluid physics, high-contrast studio glow)
   - **Project 02**: `HASK Hydrate Coconut Oil Conditioner — AI Creator-led UGC` (Bathroom selfie persona, natural cadence, moisture proof)
   - **Project 03**: `OCOOKER Kitchen Gadget — AI Product Demonstration` (High-speed vortex blending, cordless mobility)
   - Every card explicitly labeled: `UNOFFICIAL SPEC AD / INDEPENDENT CONCEPT`
   - Playable HTML5 video previews with `controls`, `muted`, `playsInline`, and graceful fallback states when local video files are not yet mounted.
4. **Services**: 5 bespoke capability cards with clean SVG icons:
   - AI UGC-Style Video Ads
   - AI Influencer Videos
   - Product Demonstrations
   - Cinematic Product Commercials
   - Short-Form Social Creatives
5. **Why Work With Me**: 4 genuine strategic advantages:
   - Product-Focused Storytelling
   - Custom Creative Concepts
   - Multiple Visual Styles
   - Social-First Vertical Formats
6. **Creative Process**: Transparent 4-step production timeline (Discover → Concept → Create → Deliver).
7. **Contact CTA**:
   - `LET'S CREATE SOMETHING GREAT.`
   - Interactive 1-click **Copy Email** with clipboard confirmation toast
   - Direct `mailto:contactaiugc@gmail.com` links with pre-configured subject lines.
8. **Footer**:
   - Monogram and brand descriptor
   - Copyright 2026
   - Prominent, transparent **Independent Spec Ad Disclaimer** affirming that all brand trademarks (HASK, OCOOKER, etc.) belong to their respective owners.

---

## ✦ Video Asset Setup & Placeholder Instructions

The video players are configured to read local MP4 files directly from the `public/videos/` directory:

| Project | File Path | Aspect Ratio | Category | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Project 01 (Skincare)** | `public/videos/skincare-ad.mp4` | 9:16 Vertical / 16:9 | Cosmetics & D2C Beauty | **Connected & Live** |
| **Project 02 (HASK Conditioner)** | `public/videos/hask-conditioner-ad.mp4` | 9:16 Vertical | Hair Care & Organic Beauty | **Connected & Live** |
| **Project 03 (OCOOKER Gadget)** | `public/videos/ocooker-blender-ad.mp4` | 9:16 Vertical | Smart Kitchen Gadgets | **Connected & Live** |

### When Videos Are Not Present:
The portfolio does **not break or display an empty broken media icon**. Instead, it renders an editorial fallback card with:
- A custom vector graphic representation of the product.
- An alert tag indicating fallback preview mode.
- Exact path hint: `public/videos/<filename>.mp4`.
- Complete brief details (Visual Style, Hook Angle, Target Platforms, Production Tech).

### Adding Your Real Videos:
Simply copy your exported `.mp4` files into the `public/videos/` folder matching the filenames above. Once placed, Vite will serve them immediately and the video player will automatically switch to live playable mode with native video controls.

### Changing Poster Images:
To supply static poster images before video play, place your JPG or WebP images in `public/posters/` and add the `poster="/posters/<your-poster>.jpg"` attribute to the `<video>` element inside `src/components/ProjectCard.jsx`.

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev
```

The application will be live at `http://localhost:5173/` (or `http://localhost:3000/`).

### Production Build
```bash
# Compile and optimize for production
npm run build

# Preview the production build locally
npm run preview
```
The optimized static build will be generated in the `dist/` directory.

---

## ✦ Deployment Guide

### Deploying to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or import your repository directly via [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your Git repository via [netlify.com](https://netlify.com).
2. Base directory: leave blank or `./`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

### Deploying to GitHub Pages
Add `"base": "./"` in `vite.config.js` and use GitHub Actions to deploy the `dist/` folder to the `gh-pages` branch.

---

## ✦ Brand Disclaimer
All brand names, product references, and trademarks (including HASK® and OCOOKER®) featured throughout this website are the property of their respective trademark holders. All video projects and commercial assets are unofficial spec ads and independent concepts produced solely for demonstration of AI video creation capabilities.
