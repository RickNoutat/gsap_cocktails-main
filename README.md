# Mojito Bar — Animated Cocktail Website

![Project Banner](public/readme/hero.png)

![React 19](https://img.shields.io/badge/-React_19-blue?style=for-the-badge&logo=react&logoColor=white)
![GSAP 3](https://img.shields.io/badge/-GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/-Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Table of Contents

1. [About the Project](#about-the-project)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## About the Project

A passion project I built to push my skills with GSAP and scroll-driven UI design.

The concept is a high-end cocktail bar landing page — **Mojito Bar, Paris** — designed to feel cinematic from the first scroll. Every section has a deliberate animation: character-level text reveals, a video that scrubs frame by frame with the scroll wheel, parallax depth on decorative elements, and a fully custom carousel with no third-party slider library.

The goal was to build something that looks and feels premium, while keeping the code clean and component-based under the hood.

## Tech Stack

- **[React 19](https://react.dev/)** — component architecture with the `useGSAP` hook for animation lifecycle management.

- **[GSAP 3](https://gsap.com/)** — core animation engine. Leverages `ScrollTrigger`, `SplitText`, pinned sections, parallax timelines, scroll-synced video, and image masking transitions.

- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling with custom theme tokens and reusable utility classes for the design system.

- **[Vite](https://vitejs.dev/)** — instant HMR and fast builds, essential when iterating on animation-heavy code.

## Features

- **SplitText Reveals** — character-by-character animated titles with gradient effects on load and scroll entry
- **Scroll-Synced Video** — the hero video scrubs forward frame by frame as you scroll, no autoplay
- **Pinned Sections** — content locked in viewport while inner GSAP timelines play out fully
- **ScrollTrigger Timelines** — every section animates relative to its scroll position
- **Parallax Depth** — layered leaf and background elements move at independent speeds
- **Image Masking** — cinematic wipe transitions between sections using CSS clip-path
- **Custom Carousel** — handbuilt slider with tab navigation and animated slide transitions, zero dependencies
- **Responsive** — layout and animations adapt cleanly from mobile to desktop

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

### Clone the repo

```bash
git clone https://github.com/rickydavinci/gsap-cocktails.git
cd gsap-cocktails
```

### Install dependencies

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
