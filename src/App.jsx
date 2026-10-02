import React from 'react';

// ── Checkpoints Data Matrix ──
const QUEST_CHECKPOINTS = [
  {
    id: 'viewBio',
    num: '01',
    name: "The Ancestral Tablet",
    location: "Castle Gate Signboard",
    desc: "Examine the carved stone signboard beside the entrance doors to uncover Rahi's developer profile.",
  },
  {
    id: 'viewKnowledge',
    num: '02',
    name: "Tomes of Knowledge",
    location: "Scholar's Top Bookshelf",
    desc: "Unseal the standing grimoire volumes across the bookshelf rack to inspect technical proficiencies.",
  },
  {
    id: 'viewTomeOfWorks',
    num: '03',
    name: "The Tome of Works",
    location: "Green Book on Desk",
    desc: "Open the green leatherbound sketchbook on the right desk to explore interactive case studies.",
  },
  {
    id: 'openMap',
    num: '04',
    name: "Cartographer's Sea Chart",
    location: "Center Desk Manuscript",
    desc: "Unfurl the large nautical exploration chart to unlock planetary routes and flight navigation paths.",
  },
  {
    id: 'goJungleIsland',
    num: '05',
    name: "Isles of the Kraken",
    location: "Tropical Beachfront Pier",
    desc: "Journey to the coastal river inlet to discover the stone lighthouse and carved social barrels.",
  },
  {
    id: 'goDeathPlace',
    num: '06',
    name: "Crag of the Fallen",
    location: "Volcanic Monolith Gate",
    desc: "Traverse stormy basalt spires and unseal the gothic portcullis leading into the Demonic Altar.",
  },
  {
    id: 'goDarkPlace',
    num: '07',
    name: "The Frozen Citadel",
    location: "Subterranean Sand Vaults",
    desc: "Infiltrate the vast underground library where ancient dunes bury multi-story knowledge archives.",
  },
  {
    id: 'goDarkForest',
    num: '08',
    name: "The Sylvan Dark Forest",
    location: "Ancient Canopy Wilds",
    desc: "Brave the overland ascent through shadowy pines and misty sylvan trails to inspect hidden forest landmarks.",
  },
  {
    id: 'viewForgottenArchive',
    num: '09',
    name: "The Forgotten Stacks",
    location: "Frozen Citadel Bookshelf",
    desc: "Inspect the deepest bookshelf alcoves within the Sand Library to reveal classified blueprints.",
  },
  {
    id: 'openSketchbook',
    num: '10',
    name: "The Grand Portfolio",
    location: "3D Sketchbook Engine",
    desc: "Browse through all portfolio case study pages, inspect live code repositories, and verify design artifacts.",
  },
  {
    id: 'descendToMist',
    num: '11',
    name: "The Blood Descent",
    location: "Demonic Altar Sanctuary",
    desc: "Conduct the occult pentagram blood ritual at the altar to descend into the misty abyss of the Rift Vault.",
  },
];

// ── Geographic Map Nodes Matrix ──
const MAP_POINTS = [
  { id: 'main-city', label: 'MAIN CITY (CITADEL)', x: '75%', y: '83.5%', desc: 'Current starting sanctuary in southeastern peaks' },
  { id: 'jungle-islands', label: 'JUNGLE ISLAND (KRAKEN)', x: '62.5%', y: '28%', desc: 'Skull Rock Island & Tropical Social Pier' },
  { id: 'death-place', label: 'DEATH PLACE (ALTAR)', x: '55%', y: '83%', desc: 'Volcanic crags & gargoyle blood sanctuary' },
  { id: 'dark-place', label: 'DARK PLACE (CITADEL)', x: '32%', y: '56%', desc: 'Middle-left frozen spires & Sand Library' },
  { id: 'dark-forest', label: 'DARK FOREST (CANOPY)', x: '29%', y: '75%', desc: 'Dense primeval woodland canopy trail' },
];

// ── Breadcrumb Specifications Ribbon Component ──
function SpecRibbon({ badge, title, assets, behaviors }) {
  return (
    <div className="spec-ribbon">
      <div className="spec-ribbon-top">
        <span className="spec-badge">{badge}</span>
        <h2 className="spec-title">{title}</h2>
      </div>

      <div className="spec-assets-row">
        <span className="spec-assets-label">SOURCE ASSETS:</span>
        {assets.map((asset, i) => (
          <span key={i} className="spec-asset-tag">
            📁 {asset}
          </span>
        ))}
      </div>

      <div className="spec-behavior-box">
        <div className="spec-behavior-title">ACTIVE RUNTIME INTERACTION MATRIX</div>
        <ul className="spec-behavior-list">
          {behaviors.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="static-showcase-engine">
      {/* ── Fixed Global Navigation Header ── */}
      <header className="demo-global-header">
        <div className="demo-brand">
          <span className="demo-sigil">⚜</span>
          <div className="demo-title-group">
            <h1>ARCHITECTURAL SHOWCASE DEMO</h1>
            <p>Static Multi-Realm Layout Engine • Zero Animations • High-Contrast Specs</p>
          </div>
        </div>

        <nav className="demo-nav-strip">
          <a href="#section-1" className="demo-nav-btn">01. Castle Gate</a>
          <a href="#section-2" className="demo-nav-btn">02. Study Chamber</a>
          <a href="#section-3" className="demo-nav-btn">03. Green Journal</a>
          <a href="#section-4" className="demo-nav-btn">04. Knowledge Archive</a>
          <a href="#section-5" className="demo-nav-btn">05. Timeline Bio</a>
          <a href="#section-6" className="demo-nav-btn">06. Quest Journal</a>
          <a href="#section-7" className="demo-nav-btn">07. Adventure Map</a>
          <a href="#section-8" className="demo-nav-btn">08. Kraken Isles</a>
          <a href="#section-9" className="demo-nav-btn">09. Demonic Altar</a>
          <a href="#section-10" className="demo-nav-btn">10. Rift Vault</a>
          <a href="#section-11" className="demo-nav-btn">11. Frozen Citadel</a>
          <a href="#section-12" className="demo-nav-btn">12. Dark Forest</a>
        </nav>
      </header>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1: The Castle Entry Gateway                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-1" className="showcase-section">
        <SpecRibbon
          badge="NODE 01 // ENTRY REALM"
          title="The Castle Entry Gateway (Authentication & Profile Tablet)"
          assets={[
            '/castle-bg.jpg',
            '/vintage-paper.jpg',
            '/stone-tablet.png'
          ]}
          behaviors={[
            "Paper Preloader: Tears vertically in 2 halves revealing ancient stone gateway facade",
            "Door Hotspot: Prompts with '⚔ Click the Gate to Enter ⚔' and mobile desktop guidance line",
            "Signboard Zone: Clicking carved stone signboard reveals the Chiseled Stone Tablet with Rahi's developer bio",
            "Incantation Lockbox: Password modal prompts for master secret 'rahi' with error-shake physics",
            "Gateway Fly-Through: Entering password unseals the gate and accelerates camera zoom 4.0x into chamber"
          ]}
        />

        <div className="showcase-content">
          <div className="panel-viewport" style={{ minHeight: '420px', position: 'relative' }}>
            <img src="/castle-bg.jpg" alt="Castle Entry Gateway" />
            {/* Clean Hotspot Pins */}
            <div className="hotspot-pin" style={{ top: '56%', left: '50%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">DOOR INCANTATION LOCK (HOTSPOT)</div>
            </div>
            <div className="hotspot-pin" style={{ top: '58%', left: '76%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">CARVED PROFILE SIGNBOARD</div>
            </div>
            <div className="hotspot-pin" style={{ top: '88%', left: '50%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">MOBILE DESKTOP GUIDANCE PILL</div>
            </div>
          </div>

          {/* Modal Previews (Lockbox + Stone Tablet) */}
          <div className="gate-preview-split">
            <div className="parchment-lock-mockup">
              <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.2rem', color: '#8b5a2b' }}>⚜</span>
                <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.88rem', color: '#3b2410', letterSpacing: '0.12em' }}>
                  ✦ ENTER THE INCANTATION ✦
                </h4>
                <p style={{ fontSize: '0.72rem', color: '#6e4720' }}>
                  Speak the secret phrase to unseal the ancient stronghold
                </p>
              </div>
              <div style={{
                background: '#fffdf6',
                border: '1px solid #9e7d54',
                borderRadius: '4px',
                padding: '6px 12px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                color: '#2a1a0c',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>rahi</span>
                <span style={{ color: '#16a34a', fontSize: '0.75rem', fontWeight: 'bold' }}>✓ VALIDATED</span>
              </div>
            </div>

            <div className="tablet-bio-mockup">
              <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.92rem', color: '#ffd700', letterSpacing: '0.16em', marginBottom: '4px' }}>
                RAHI • CREATIVE DEVELOPER
              </h4>
              <p style={{ fontSize: '0.74rem', color: '#d5cfc5', lineHeight: '1.4' }}>
                Forging immersive 3D web spaces, procedural animations, and responsive digital architectures where creative art harmonizes with engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: The Scholar Study Chamber Desk (CORRECTED COORDINATES)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-2" className="showcase-section">
        <SpecRibbon
          badge="NODE 02 // REALM HUB"
          title="The Scholar Study Chamber Desk (Corrected Item Hotspot Layout)"
          assets={[
            '/study-chamber.jpg'
          ]}
          behaviors={[
            "Central Portfolio Navigation Nexus: Connects all environmental realms from the scholar's desk",
            "Top Bookshelf Rack: Archive of Knowledge (Technical Skills & Grimoire Stacks)",
            "Green Book (Right Desk): Tome of Works (Interactive 3D Sketchbook Portfolio)",
            "Two Small Books (Left of Center): Personal Chronicles & Bio (Interactive Timeline)",
            "Center Parchment Sheet: Cartographer's Sea Chart (3D World Exploration Map)",
            "Open Rolled Scroll with Stone (Lower Left): Arcane Codex Scroll (11-Quest Lockout)",
            "Open Notebook (Lower Center): Scholar's Quest Journal (Task Checkpoint Log)",
            "Steaming Coffee Cup (Center Top): Social Contact & Parlor"
          ]}
        />

        <div className="showcase-content">
          <div className="panel-viewport" style={{ minHeight: '440px', position: 'relative' }}>
            <img src="/study-chamber.jpg" alt="Scholar Study Chamber Desk" />

            {/* 1. TOP BOOKSHELF RACK: Archive of Knowledge (Skills) */}
            <div className="hotspot-pin" style={{ top: '12%', left: '56%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">📚 ARCHIVE OF KNOWLEDGE (BOOKSHELF)</div>
            </div>

            {/* 2. STEAMING COFFEE CUP on green saucer */}
            <div className="hotspot-pin" style={{ top: '33%', left: '52%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">☕ STEAMING COFFEE CUP</div>
            </div>

            {/* 3. TWO SMALL BOOKS: Personal Chronicles (Timeline & Bio) */}
            <div className="hotspot-pin" style={{ top: '53%', left: '42%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">🖋 PERSONAL CHRONICLES (TIMELINE)</div>
            </div>

            {/* 4. CENTER PARCHMENT: Cartographer's Sea Chart (World Map) */}
            <div className="hotspot-pin" style={{ top: '58%', left: '56%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">🗺 CARTOGRAPHER'S SEA CHART (MAP)</div>
            </div>

            {/* 5. GREEN BOOK ON RIGHT: Tome of Works (3D Sketchbook) */}
            <div className="hotspot-pin" style={{ top: '50%', left: '70%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#22c55e', boxShadow: '0 0 15px #22c55e' }} />
              <div className="hotspot-label" style={{ color: '#86efac' }}>📖 TOME OF WORKS (GREEN BOOK)</div>
            </div>

            {/* 6. OPEN SCROLL WITH RUNESTONE ON LOWER-LEFT: Arcane Scroll (11-Quest Lock) */}
            <div className="hotspot-pin" style={{ top: '78%', left: '24%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#f59e0b', boxShadow: '0 0 15px #f59e0b' }} />
              <div className="hotspot-label" style={{ color: '#fde68a' }}>✦ ARCANE SCROLL (11-QUEST LOCK) ✦</div>
            </div>

            {/* 7. OPEN NOTEBOOK ON LOWER-CENTER: Scholar's Quest Journal */}
            <div className="hotspot-pin" style={{ top: '78%', left: '45%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">📜 SCHOLAR'S QUEST JOURNAL</div>
            </div>
          </div>

          {/* Corrected Hotspot Matrix Grid */}
          <div className="hotspot-matrix-grid">
            <div className="hotspot-card">
              <div className="hotspot-card-title">📖 Green Book (Tome of Works)</div>
              <div className="hotspot-card-desc">Right desk surface. Triggers golden leaf-dissolve into the 3D Sketchbook portfolio gallery.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">📚 Top Bookshelf Rack (Archive)</div>
              <div className="hotspot-card-desc">Standing rows across the top. Opens the 7 medieval grimoires indexing technical skills and web runtimes.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">🖋 Two Small Books (Timeline)</div>
              <div className="hotspot-card-desc">Left of center manuscript. Boots retro CRT terminal preloader into the biographical journey.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">🗺 Center Parchment (World Map)</div>
              <div className="hotspot-card-desc">Large map spread across the table. Expands 3D WebGL cartographer chart with real-time flight paths.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">✦ Rolled Scroll with Stone</div>
              <div className="hotspot-card-desc">Lower-left corner. Pinned by runestone; locked until all 11 quest achievements trigger the Awakening Flash.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">📜 Open Notebook near Pen</div>
              <div className="hotspot-card-desc">Lower-center desk. Displays the 11 quest milestones tracking cross-realm portfolio exploration.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: Green Journal (Tome of Works) Inner Spread               */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-3" className="showcase-section">
        <SpecRibbon
          badge="NODE 03 // ILLUMINATED FOLIO"
          title="The Green Journal (Tome of Works) Inner Page Spread"
          assets={[
            '/sketchbook-main.jpg'
          ]}
          behaviors={[
            "Authentic 2-Page Folio Layout: Leatherbound green sketchbook opening into illuminated parchment spreads",
            "Left Folio: Codex Architectura with hand-drawn geometric blueprints & responsive viewport schemas",
            "Right Folio: Project Case Studies with tech badges, live demo anchors, and architectural rationales",
            "Leaf-Dissolve Transition: Autumn leaves flutter across screen when entering from the study desk",
            "Fullscreen Inspection: Allows deep scrutiny of code snippets and 3D web canvas modules"
          ]}
        />

        <div className="showcase-content">
          <div className="sketchbook-stage">
            <div className="sketchbook-spread">
              {/* Left Page */}
              <div className="sketchbook-page">
                <span className="page-tag">Blueprint I • Geometry & Architecture</span>
                <h3 className="page-title">Codex Architectura</h3>
                <div className="page-body">
                  <p>
                    Schematic study of harmonic pentagonal proportions, isometric camera coordinate matrices, and spatial canvas transformations.
                  </p>
                  <div className="schematic-box">
                    <svg viewBox="0 0 100 60" fill="none" strokeWidth="1.2">
                      <polygon points="50,5 95,38 78,58 22,58 5,38" />
                      <circle cx="50" cy="35" r="22" strokeDasharray="3 3" />
                      <line x1="50" y1="5" x2="50" y2="58" strokeDasharray="2 2" />
                      <line x1="5" y1="38" x2="95" y2="38" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <p>
                    Engineered with modular Vite pipelines, hardware-accelerated CSS transforms, and zero-dependency reactive components.
                  </p>
                </div>
                <div className="page-num">Folio 01</div>
              </div>

              {/* Right Page */}
              <div className="sketchbook-page">
                <span className="page-tag">Project Alpha • Three.js WebGL</span>
                <h3 className="page-title">Citadel of Shaders</h3>
                <div className="page-body">
                  <div className="work-card">
                    <h4>WebGL Spatial Chamber</h4>
                    <p>Real-time PBR lighting, atmospheric depth fog, and dynamic shadow rendering.</p>
                    <span className="tag-badge">Three.js</span>
                    <span className="tag-badge">GLSL Shaders</span>
                    <span className="tag-badge">Vite</span>
                  </div>
                  <div className="work-card">
                    <h4>Volumetric Light Burst</h4>
                    <p>High-speed camera fly-through with bloom acceleration curve.</p>
                    <span className="tag-badge">GSAP 3</span>
                    <span className="tag-badge">CSS 3D Transforms</span>
                  </div>
                </div>
                <div className="page-num">Folio 02</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: Archive of Knowledge (Technical Skills Grimoire)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-4" className="showcase-section">
        <SpecRibbon
          badge="NODE 04 // SCRIPTORIUM ARCHIVE"
          title="The Archive of Knowledge (Technical Stack & Proficiencies)"
          assets={[
            '(text-only section — no rendered images)'
          ]}
          behaviors={[
            "7 Medieval Volumes: Handcrafted illuminated manuscripts indexing full-stack disciplines",
            "Volume I (Kinematics): React 19, GSAP 3 motion systems, fluid state machines, 60/120 FPS budgets",
            "Volume II (Spatial Web): Custom GLSL fragment/vertex shaders, Three.js pipelines, WebGPU",
            "Volume III (Software Systems): Modular Node.js architectures, TypeScript, headless automation",
            "Golden Parchment Preloader: Runs countdown animation prior to unsealing library shelves"
          ]}
        />

        <div className="showcase-content">
          <div className="archive-manuscript-grid">
            <div className="grimoire-card">
              <div className="grimoire-card-header">
                <span className="grimoire-vol">TOME I</span>
                <span className="spec-badge">FRONTEND & KINEMATICS</span>
              </div>
              <h3>The Art of Kinematic Interfaces</h3>
              <p>Mastery of synchronous layout effects, reactive state machines, and the elimination of 1-frame rendering jitters across complex viewport architectures.</p>
              <div className="grimoire-skills-list">
                <span className="grimoire-skill-pill">React 19</span>
                <span className="grimoire-skill-pill">GSAP 3 Core</span>
                <span className="grimoire-skill-pill">TypeScript</span>
                <span className="grimoire-skill-pill">Vite</span>
                <span className="grimoire-skill-pill">60 FPS Budget</span>
              </div>
            </div>

            <div className="grimoire-card">
              <div className="grimoire-card-header">
                <span className="grimoire-vol">TOME II</span>
                <span className="spec-badge">3D GRAPHICS & SHADERS</span>
              </div>
              <h3>Spatial Real-Time Rendering</h3>
              <p>Crafting procedural 3D environments, raymarched volumetric mists, custom GLSL lighting shaders, and low-latency WebGL canvas scenes.</p>
              <div className="grimoire-skills-list">
                <span className="grimoire-skill-pill">Three.js</span>
                <span className="grimoire-skill-pill">Custom GLSL</span>
                <span className="grimoire-skill-pill">R3F / Drei</span>
                <span className="grimoire-skill-pill">PBR Shaders</span>
                <span className="grimoire-skill-pill">Post-Processing</span>
              </div>
            </div>

            <div className="grimoire-card">
              <div className="grimoire-card-header">
                <span className="grimoire-vol">TOME III</span>
                <span className="spec-badge">SYSTEMS & ARCHITECTURE</span>
              </div>
              <h3>Robust Engine Architecture</h3>
              <p>Designing modular state machines, automated headless browser verification pipelines, and clean cross-realm navigation abstractions.</p>
              <div className="grimoire-skills-list">
                <span className="grimoire-skill-pill">Node.js</span>
                <span className="grimoire-skill-pill">CDP DevTools</span>
                <span className="grimoire-skill-pill">REST & WebSockets</span>
                <span className="grimoire-skill-pill">CI/CD Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5: Personal Chronicles (Timeline & Bio)                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-5" className="showcase-section">
        <SpecRibbon
          badge="NODE 05 // RETRO CHRONICLES"
          title="Personal Chronicles (Biographical Timeline & CRT Terminal)"
          assets={[
            '/vintage-paper.jpg'
          ]}
          behaviors={[
            "Retro CRT Preloader: Boots green-phosphor CRT television scanner before opening biography",
            "Handwritten Paper Note: Authentic personal greeting from Rahi with travel & engineering highlights",
            "Interactive Career Milestones: Chronological progression from foundational software craft to 3D spatial web",
            "Raw 3D Experience Scene: Minimal, elegant typography layout without modern UI clutter"
          ]}
        />

        <div className="showcase-content">
          <div className="chronicles-container">
            {/* CRT Terminal Box */}
            <div className="crt-terminal-box">
              <div className="crt-header">
                <span>[TERMINAL_INITIALIZED]</span>
                <span>BAUD: 9600 // CRT_PHOSPHOR</span>
              </div>
              <div className="crt-line">&gt; SYSTEM.BOOT("RAHI_CHRONICLES_V2")</div>
              <div className="crt-line">&gt; LOADING TIMELINE MILESTONES... [OK]</div>
              <div className="crt-line">&gt; 2022: Foundational Algorithms & Web Mechanics</div>
              <div className="crt-line">&gt; 2023: Advanced Three.js & Shader Experimentation</div>
              <div className="crt-line">&gt; 2024: Procedural 3D Environments & Game UI</div>
              <div className="crt-line">&gt; 2025: Spatial Computing & High-Performance Motion</div>
              <div className="crt-line">&gt; CURRENT STATUS: Senior Creative Engineer</div>
            </div>

            {/* Handwritten Note */}
            <div className="handwritten-note-card">
              <h3 className="handwritten-heading">Welcome to my portfolio!!</h3>
              <p className="handwritten-body">
                "I'm a creative engineer specializing in custom real-time shaders, procedural 3D environments, and interactive spatial web applications. Bridging algorithmic graphics and tactile frontend craft to build immersive virtual worlds that feel responsive, organic, and alive."
              </p>
              <div style={{ fontSize: '0.8rem', color: '#66421c', fontStyle: 'italic', marginBottom: '8px' }}>
                p.s. I ♡ traveling & developing!!
              </div>
              <div className="handwritten-sig">- RAHI</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 6: The Arcane Quest Journal (11 Checkpoints)                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-6" className="showcase-section">
        <SpecRibbon
          badge="NODE 06 // QUEST ENGINE"
          title="The Arcane Quest Journal (All 11 Progress Checkpoints)"
          assets={[
            '/vintage-paper.jpg'
          ]}
          behaviors={[
            "Global Progress Matrix: Tracks 11 unique realm exploration achievements across the entire app",
            "Persistent Floating Shortcut: Bronze dragon-seal shortcut button on lower-right allows instant journal access",
            "Cross-Realm Flashback Trigger: The exact millisecond the 11th task flips, triggers an instant 0.6s white flash",
            "Automatic Return Teleportation: Snaps routing state from remote realms back to the study desk",
            "Arcane Scroll Awakening: The study chamber scroll glows with celestial runes upon completion"
          ]}
        />

        <div className="showcase-content">
          <div className="parchment-journal-wrapper">
            <div className="journal-header">
              <h2>✦ CHRONICLES OF REALMS & OCCULT SEALS ✦</h2>
              <div className="journal-status-pill">
                ✓ ALL 11 CHECKPOINTS DISCOVERED & COMPLETED
              </div>
            </div>

            <div className="journal-grid">
              {QUEST_CHECKPOINTS.map((task) => (
                <div key={task.id} className="journal-task-card">
                  <div className="journal-task-check">✓</div>
                  <div className="journal-task-info">
                    <div className="journal-task-name">{task.num}. {task.name}</div>
                    <div className="journal-task-key">id: {task.id} • {task.location}</div>
                    <div className="journal-task-desc">{task.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="journal-flashback-notice">
              <strong>✦ THE CROSS-REALM FLASHBACK MECHANIC (AWAKENING FLASH):</strong> When the 11th checkpoint ('descendToMist') is achieved at the Demonic Altar, if the traveler is on a remote page, inputs lock instantly, a 0.6s volumetric white flash engulfs the glass, and the scene automatically returns to the Scholar Study Chamber where the Arcane Scroll radiates unlocked celestial light!
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 7: Cartographer's Sea Chart (Adventure Map)                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-7" className="showcase-section">
        <SpecRibbon
          badge="NODE 07 // WORLD CHART"
          title="Cartographer's Sea Chart (3D Adventure Map & Flight Routes)"
          assets={[
            '/fantasy-map.jpg',
            '/study-chamber.jpg'
          ]}
          behaviors={[
            "Interactive Planetary Chart: Displays 5 geographic destination nodes mapped across ancient maritime parchment",
            "Paper Airplane Flight Navigation: Smooth 3D aircraft flying along realistic flight corridors between realms",
            "Region Inspection Modals: Clicking any node highlights destination lore, difficulty rating, and transit path",
            "Anchor Home Base: Main City citadel located in the southeastern mountain ranges",
            "Return to Desk Portal: Instant smooth zoom-out returning directly to the Study Chamber table"
          ]}
        />

        <div className="showcase-content">
          <div className="map-canvas-wrapper">
            <img src="/fantasy-map.jpg" alt="Cartographer's Sea Chart" />

            {/* Mapped Geographic Nodes */}
            {MAP_POINTS.map((pt) => (
              <div key={pt.id} className="map-point-pin" style={{ top: pt.y, left: pt.x }}>
                <div className="map-point-pulse" />
                <div className="map-point-label">{pt.label}</div>
              </div>
            ))}
          </div>

          <div className="hotspot-matrix-grid">
            {MAP_POINTS.map((pt) => (
              <div key={pt.id} className="hotspot-card">
                <div className="hotspot-card-title">📍 {pt.label}</div>
                <div className="hotspot-card-desc">{pt.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 8: The Isles of the Kraken (Beachfront Page - NO WALK BOARD) */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-8" className="showcase-section">
        <SpecRibbon
          badge="NODE 08 // CONTACT SANCTUARY"
          title="The Isles of the Kraken (Beachfront Inlet & Social Barrels)"
          assets={[
            '/textures/contact/latarnia.webp',
            '/textures/contact/statek.webp',
            '/textures/contact/beczka_painted.webp'
          ]}
          behaviors={[
            "Pure Coastal Water Inlet: Multi-layer crystal aqua and turquoise sparkling riverbed wave shaders",
            "Stone Lighthouse ('latarnia.webp'): Giant sentinel towering over the left coastal inlet",
            "Floating Paper Vessel ('statek.webp'): Looping sine-wave floating and rocking physics animation",
            "5 Carved Social Barrels: Positioned floating directly over the crystal waters with external dispatch hooks",
            "Direct Social Connections: Immediate access to GitHub, Instagram, LinkedIn, Facebook, and Gmail messaging"
          ]}
        />

        <div className="showcase-content">
          <div className="beach-stage-pure">
            {/* Lighthouse */}
            <img
              src="/textures/contact/latarnia.webp"
              alt="Stone Lighthouse"
              className="beach-lighthouse"
            />

            {/* Paper Boat */}
            <img
              src="/textures/contact/statek.webp"
              alt="Origami Paper Boat"
              className="beach-boat"
            />

            {/* Social Barrels Floating over Water (No oversized boardwalk!) */}
            <div className="beach-barrels-floating">
              <div className="barrel-card">
                <img src="/textures/contact/beczka_painted.webp" alt="GitHub Barrel" />
                <span className="barrel-name">GITHUB</span>
                <span className="barrel-link">RahiGupta26</span>
              </div>
              <div className="barrel-card">
                <img src="/textures/contact/beczka_painted.webp" alt="Instagram Barrel" />
                <span className="barrel-name">INSTAGRAM</span>
                <span className="barrel-link">@_rahi._gupta_</span>
              </div>
              <div className="barrel-card">
                <img src="/textures/contact/beczka_painted.webp" alt="LinkedIn Barrel" />
                <span className="barrel-name">LINKEDIN</span>
                <span className="barrel-link">in/rahi-gupta</span>
              </div>
              <div className="barrel-card">
                <img src="/textures/contact/beczka_painted.webp" alt="Facebook Barrel" />
                <span className="barrel-name">FACEBOOK</span>
                <span className="barrel-link">Rahi Gupta</span>
              </div>
              <div className="barrel-card">
                <img src="/textures/contact/beczka_painted.webp" alt="Email Barrel" />
                <span className="barrel-name">GMAIL</span>
                <span className="barrel-link">rahirahi2006@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="hotspot-matrix-grid">
            <div className="hotspot-card">
              <div className="hotspot-card-title">🗼 Stone Lighthouse</div>
              <div className="hotspot-card-desc">Massive hand-painted lighthouse positioned along the left reef edge, casting guiding light across the inlet.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">⛵ Floating Vessel ('statek.webp')</div>
              <div className="hotspot-card-desc">Origami paper boat rocking rhythmically across 5 distinct translucent river water layers with sine wave physics.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">🪵 Carved Social Barrels</div>
              <div className="hotspot-card-desc">Floating barrels with custom runic seals dispatching immediate external browser connections to developer profiles.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 9: The Crag of the Fallen & Demonic Altar Room             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-9" className="showcase-section">
        <SpecRibbon
          badge="NODE 09 // OCCULT SANCTUARY"
          title="The Crag of the Fallen & Demonic Altar Room (Death Place Sanctuary)"
          assets={[
            '/death-place-bg.jpg',
            '/demonic-altar.jpg'
          ]}
          behaviors={[
            "Dual-Stage Occult Journey: The Crag of the Fallen overview leads directly into the Demonic Altar inner sanctum",
            "Crag of the Fallen: Volcanic crags, gargoyle monoliths, and glowing blood-red portcullis gate",
            "Demonic Altar Chamber: Obsidian sanctuary illuminated by burning candles and crimson runes",
            "Ancient Grimoire Lectern: Hover reveals forgotten summoning texts and forbidden lore tooltips",
            "Twin Blood Seals: Left & right glowing runes maintaining the dimensional seal",
            "Central Pentagram Blood Collector: Locked until sketchbook tasks complete; clicking initiates descent sequence"
          ]}
        />

        <div className="showcase-content">
          <div className="dual-display-grid">
            <div className="panel-card">
              <div className="panel-header">
                <span>STAGE 1: THE CRAG OF THE FALLEN (APPROACH)</span>
                <span className="spec-badge">EXTERIOR</span>
              </div>
              <div className="panel-viewport">
                <img src="/death-place-bg.jpg" alt="The Crag of the Fallen" />
                <div className="hotspot-pin" style={{ top: '52%', left: '50%' }}>
                  <div className="hotspot-pulse" style={{ borderColor: '#ef4444', boxShadow: '0 0 16px #ef4444' }} />
                  <div className="hotspot-label" style={{ color: '#fca5a5' }}>GARGOYLE BLOOD GATE (ENTRY)</div>
                </div>
              </div>
              <div className="panel-footer">
                <strong>Approach Overview:</strong> Volcanic peaks shrouded in obsidian dust. Clicking the central arched gate prompts 'Enter the Blood Sanctuary' and transitions inside the altar chamber.
              </div>
            </div>

            <div className="panel-card">
              <div className="panel-header">
                <span>STAGE 2: THE DEMONIC ALTAR (INNER SANCTUM)</span>
                <span className="spec-badge">INTERIOR</span>
              </div>
              <div className="panel-viewport">
                <img src="/demonic-altar.jpg" alt="Demonic Altar Sanctuary" />
                <div className="hotspot-pin" style={{ top: '48%', left: '24%' }}>
                  <div className="hotspot-pulse" style={{ borderColor: '#ef4444' }} />
                  <div className="hotspot-label">ANCIENT GRIMOIRE</div>
                </div>
                <div className="hotspot-pin" style={{ top: '64%', left: '50%' }}>
                  <div className="hotspot-pulse" style={{ borderColor: '#ef4444', boxShadow: '0 0 20px #ef4444' }} />
                  <div className="hotspot-label" style={{ color: '#fca5a5' }}>BLOOD COLLECTOR (DESCENT)</div>
                </div>
                <div className="hotspot-pin" style={{ top: '38%', left: '80%' }}>
                  <div className="hotspot-pulse" style={{ borderColor: '#ef4444' }} />
                  <div className="hotspot-label">TWIN BLOOD SEALS</div>
                </div>
              </div>
              <div className="panel-footer">
                <strong>Occult Mechanism:</strong> The central blood collector bowl remains locked until the user finishes reading the sketchbook portfolio. Clicking triggers the mist descent into the Rift Vault.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 10: The Rift Vault (Misty Pentagram Cliff)                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-10" className="showcase-section">
        <SpecRibbon
          badge="NODE 10 // ABYSS PRECIPICE"
          title="The Rift Vault (Misty Pentagram Cliff Overview)"
          assets={[
            '/misty-pentagram.jpg'
          ]}
          behaviors={[
            "Fullscreen Cliff Composition: High-altitude mountain precipice overlooking an endless sea of volumetric mist",
            "Blood-Inscribed Pentagram: Giant occult star carved into the stone cliff face, glowing faintly through mountain fog",
            "Deceleration Camera Arrival: Smooth incoming zoom deceleration curve from 1.15 down to 1.0",
            "Final Checkpoint Registration: Automatically fulfills the 11th quest requirement ('descendToMist')",
            "Flashback Awakening Bridge: Initiates the cross-realm awakening white flash returning to the Study Chamber"
          ]}
        />

        <div className="showcase-content">
          <div className="panel-viewport" style={{ minHeight: '440px', position: 'relative' }}>
            <img src="/misty-pentagram.jpg" alt="The Rift Vault Misty Pentagram Cliff" />

            <div className="hotspot-pin" style={{ top: '65%', left: '50%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#ef4444', boxShadow: '0 0 25px #ef4444' }} />
              <div className="hotspot-label" style={{ color: '#fca5a5' }}>
                BLOOD-INSCRIBED SUMMONING PENTAGRAM (CHECKPOINT 11)
              </div>
            </div>

            <div className="hotspot-pin" style={{ top: '25%', left: '50%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#93c5fd' }} />
              <div className="hotspot-label">VOLUMETRIC ABYSSAL MIST VOID</div>
            </div>

            <div className="hotspot-pin" style={{ top: '85%', left: '15%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">ALTAR ASCENT RETURN ROUTE</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 11: The Frozen Citadel (Sand Library & Bookshelves)         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-11" className="showcase-section">
        <SpecRibbon
          badge="NODE 11 // SUBTERRANEAN CITADEL"
          title="The Frozen Citadel (Dark Place Sand Library & Ashen Press Grid)"
          assets={[
            '/frozen-citadel-library.jpg'
          ]}
          behaviors={[
            "Subterranean Cathedral Architecture: Immense arched stone vaults housing towering multi-tier mahogany bookshelves",
            "Ancient Sand Dunes: Floor blanketed in fine drifting desert sand burying stone flagstones and forgotten tomes",
            "Interactive Bookshelf Grid: Mousing over bookshelf zones reveals classified architectural blueprints and project lore",
            "The Forgotten Stacks Checkpoint: Uncovers secret manuscripts required for the 9th quest checkpoint ('viewForgottenArchive')",
            "Citadel Monolith Portal: Archway navigation anchor linking back to the Cartographer's Sea Chart and Study Chamber"
          ]}
        />

        <div className="showcase-content">
          <div className="panel-viewport" style={{ minHeight: '440px', position: 'relative' }}>
            <img src="/frozen-citadel-library.jpg" alt="The Frozen Citadel Sand Library" />

            <div className="hotspot-pin" style={{ top: '35%', left: '26%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">SHELF 01: PROCEDURAL SHADER GRIMOIRES</div>
            </div>

            <div className="hotspot-pin" style={{ top: '35%', left: '74%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">SHELF 02: 3D FLIGHT ENGINES & CHUNKS</div>
            </div>

            <div className="hotspot-pin" style={{ top: '65%', left: '50%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#f59e0b', boxShadow: '0 0 15px #f59e0b' }} />
              <div className="hotspot-label" style={{ color: '#fde68a' }}>
                FORGOTTEN ARCHIVE STACKS (CHECKPOINT 09)
              </div>
            </div>

            <div className="hotspot-pin" style={{ top: '88%', left: '50%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">ANCIENT CITADEL DUNES & RETURN MONOLITH</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 12: The Sylvan Dark Forest (NEWLY REQUESTED PAGE)           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="section-12" className="showcase-section">
        <SpecRibbon
          badge="NODE 12 // SYLVAN WILDERNESS"
          title="The Sylvan Dark Forest (Ancient Woodland Canopy & Overland Trail)"
          assets={[
            '/dark-forest-bg.jpg'
          ]}
          behaviors={[
            "Pure Sylvan Atmosphere: Zero modern border panels or digital boxes overlaying the raw artwork",
            "Primeval Pine Canopy: Towering ancient trees shrouded in deep sylvan fog and moss-draped branches",
            "Overland Ascent Trail: Rugged forest pathway traveled between the Cartographer's Sea Chart and remote mountain shrines",
            "Pathfinder Quest Registration: Grants the 8th progress checkpoint ('goDarkForest') upon arrival",
            "Monolithic Return Waypoint: Forest boundary anchor allowing immediate return back to the World Map"
          ]}
        />

        <div className="showcase-content">
          <div className="panel-viewport" style={{ minHeight: '440px', position: 'relative' }}>
            <img src="/dark-forest-bg.jpg" alt="The Sylvan Dark Forest" />

            <div className="hotspot-pin" style={{ top: '35%', left: '50%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#10b981', boxShadow: '0 0 16px #10b981' }} />
              <div className="hotspot-label" style={{ color: '#a7f3d0' }}>PRIMEVAL WOODLAND CANOPY (OVERLAND)</div>
            </div>

            <div className="hotspot-pin" style={{ top: '68%', left: '35%' }}>
              <div className="hotspot-pulse" style={{ borderColor: '#10b981' }} />
              <div className="hotspot-label" style={{ color: '#a7f3d0' }}>SYLVAN TRAIL WAYPOINT (CHECKPOINT 08)</div>
            </div>

            <div className="hotspot-pin" style={{ top: '85%', left: '65%' }}>
              <div className="hotspot-pulse" />
              <div className="hotspot-label">FOREST MONOLITH (RETURN TO MAP)</div>
            </div>
          </div>

          <div className="hotspot-matrix-grid">
            <div className="hotspot-card">
              <div className="hotspot-card-title">🌲 Primeval Pine Canopy</div>
              <div className="hotspot-card-desc">Dense woodland canopy with volumetric atmosphere, moss-covered ground, and ancient branches.</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">🌿 Sylvan Trail Waypoint</div>
              <div className="hotspot-card-desc">Rugged dirt path through towering pines. Grants the 8th quest checkpoint ('goDarkForest').</div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-card-title">🗺 Return Monolith Waypoint</div>
              <div className="hotspot-card-desc">Ancient standing runestone serving as the quick return boundary back to the Cartographer's World Map.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: '30px 20px',
        textAlign: 'center',
        background: '#040206',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        color: '#8b8399',
        fontSize: '0.78rem',
        letterSpacing: '0.08em'
      }}>
        ✦ ARCHITECTURAL STATIC SHOWCASE ENVIRONMENT • 12 SEQUENTIAL REALM NODES ✦
      </footer>
    </div>
  );
}
