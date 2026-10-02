# Architectural Static Showcase Environment (`portfolio-static-demo`)

A dedicated, lightweight, zero-animation single-page showcase environment providing an instant scannable overview of all 7 environmental realms in the portfolio architecture.

---

## 🚀 Quick Start

To run the static demo locally:

```bash
cd portfolio-static-demo
npm install
npm run dev
```

Or run the production preview build:

```bash
npm run build
npm run preview
```

The preview server runs by default on `http://127.0.0.1:5188/` (or `http://localhost:5174/` in dev mode).

---

## 🏛 Structural Sections Overview

| Section | Node Name | Description & Key Static Elements |
|---|---|---|
| **01** | **The Castle Entry Gateway** | **Closed & Open Dual-Panel Layout**: Layout A shows the gothic closed gate, carved signboard profile trigger, and mobile guidance pill. Layout B shows the perspective-swung double doors and camera fly-through tunnel. |
| **02** | **The Scholar Study Chamber Desk** | **Interactive Hotspots Viewport**: Full desk scene with plain-view pins for Tome of Works (Sketchbook), Archive of Knowledge (Skills), Personal Chronicles (Timeline), Cartographer's Sea Chart (World Map), Arcane Codex Scroll (11-Quest Lock), and Desk Ink Bug. |
| **03** | **The Arcane Quest Journal** | **11 Checkpoints Fully Expanded**: Dual-column weathered parchment displaying all 11 quest achievements, key IDs, triggers, and Awakening Flashback mechanic breakdown. |
| **04** | **The Isles of the Kraken** | **Beachfront Wooden Boardwalk**: Tropical inlet composition with the stone lighthouse (`latarnia.webp`), origami paper boat (`statek.webp`), wooden boardwalk pier (`molo.webp`), and the 5 Carved Social Barrels (GitHub, Instagram, LinkedIn, Facebook, Gmail). |
| **05** | **The Crag of the Fallen & Demonic Altar** | **Dual-Stage Occult Sanctum**: Stage 1 shows the exterior volcanic monoliths and gargoyle blood gate. Stage 2 shows the inner candlelit altar with Grimoire, twin blood seals, central blood descent bowl, and return portal. |
| **06** | **The Rift Vault** | **Misty Pentagram Cliff Overview**: High-altitude basalt cliff precipice over a sea of volumetric mist with the blood-inscribed summoning pentagram (11th quest requirement `descendToMist`). |
| **07** | **The Frozen Citadel** | **Subterranean Sand Library & Bookshelf Grid**: Cathedral cavern with towering arched bookshelves, drifting ancient sand dunes, and interactive Grimoire nodes (Shaders, 3D Flight Engines, Forgotten Stacks). |

---

## 💎 Architectural Principles
1. **Zero Animations / Preloaders**: Completely stripped of GSAP timelines, WebGL shaders, ScrollTrigger scrub engines, video playback loops, and password blocks. Loads instantaneously.
2. **High-Contrast Breadcrumb Ribbons**: Every section features a dark-and-gold specification card listing the room node name, source asset file paths, and runtime interaction behaviors.
3. **Responsive Protection Boundaries**: Container elements locked with dynamic units (`width: 100vw; min-height: 100dvh; display: flex; align-items: center; position: relative;`) to guarantee seamless display across both wide desktop monitors and mobile phone viewports.
4. **Complete Independence**: 100% isolated inside its own folder without mixing styles or scripts from the core portfolio codebases.
