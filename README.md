# Modern Editorial Developer Portfolio

A motion-animated, minimalist developer portfolio inspired by the **Novaire** editorial aesthetic, built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

To start the local development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173` to see your live portfolio!

To build for production:

```bash
npm run build
```

---

## 🎨 Features & Architecture

1. **Hero Section (Screenshot 1 Replica)**:
   - Giant layered watermark typography (`DEVELOPER`) behind the portrait.
   - Grayscale cutout avatar with smooth bottom gradient fade mask.
   - Interactive mouse parallax depth.
   - 6 Floating skill badges with multi-speed floating physics and hover glow.
   - Signature editorial headline with celebratory confetti on *"Let's work together!"*.

2. **About & Career Timeline (Screenshot 2 Replica)**:
   - Interactive Tech Stack Dock pinned at the bottom-left of the portrait (React, Next.js, Node.js, Tailwind, Cloud & AI) with bouncy hover lift.
   - Live availability badge (`🟢 Open for projects`).
   - Editorial italic serif styling (*"A journey through thoughtful engineering"*).
   - Scroll-linked vertical career timeline with milestones, achievements, and dates.

3. **Projects Showcase (Screenshot 3 - Work & Project Details)**:
   - Category filtering (*All, Full Stack, Frontend, AI / Machine Learning, Cloud & Systems*).
   - Dynamic **3D Card Tilt** with spring physics reacting to cursor position.
   - Full **Case Study Modal** showing architecture overview, technical challenges, solutions, and metrics.

4. **Blog & Editorial Reader (Screenshot 3 - Blog & Article)**:
   - Technical articles list with reading time and category badges.
   - In-app interactive article reader with code syntax preview.

5. **Contact Section (Screenshot 3 - Contact)**:
   - One-click **Copy Email to Clipboard** with instant toast feedback.
   - Interactive inquiry form with celebration confetti on submission.
   - Social links and timezone availability info.

6. **Interactive Developer CLI Terminal**:
   - Built-in terminal drawer accessible from the navbar or floating pill in bottom-right corner.
   - Try typing commands:
     - `help`
     - `skills`
     - `projects`
     - `cat about.txt`
     - `contact`
     - `matrix`
     - `clear`

7. **Motion & UI Polish**:
   - Interactive canvas particle mesh connected by hairline filaments.
   - Smooth magnetic custom cursor.
   - Optional UI audio feedback on interactions.

---

## ⚙️ How to Customize Your Details

Open [`src/data/portfolioData.ts`](file:///c:/Users/gauta/OneDrive/Desktop/New%20folder/src/data/portfolioData.ts):
- Change `fullName`, `role`, `tagline`, `email`, `socials`.
- Replace `avatarUrl` and `aboutPortraitUrl` with your own photos.
- Add or edit projects, timeline milestones, and blog articles.

