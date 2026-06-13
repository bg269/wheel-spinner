// scripts/generate-twitter-header.js
// Generates public/twitter-header.png (1500×500) using sharp + SVG rendering.
// Run from the project root: node scripts/generate-twitter-header.js
'use strict';

const sharp = require('sharp');
const path = require('path');

// ── Wheel geometry (matches /api/twitter-header route) ────────────────────
const COLORS = ['#FF6B6B','#FF9F43','#FECA57','#26D0CE','#1DD1A1','#54A0FF','#A29BFE','#FD79A8'];

const SEGS = [
  'M220,220 L405,220 A185,185 0 0,1 350.8,350.8 Z',
  'M220,220 L350.8,350.8 A185,185 0 0,1 220,405 Z',
  'M220,220 L220,405 A185,185 0 0,1 89.2,350.8 Z',
  'M220,220 L89.2,350.8 A185,185 0 0,1 35,220 Z',
  'M220,220 L35,220 A185,185 0 0,1 89.2,89.2 Z',
  'M220,220 L89.2,89.2 A185,185 0 0,1 220,35 Z',
  'M220,220 L220,35 A185,185 0 0,1 350.8,89.2 Z',
  'M220,220 L350.8,89.2 A185,185 0 0,1 405,220 Z',
];

const SPOKES = [
  'M220,220 L405,220', 'M220,220 L350.8,350.8',
  'M220,220 L220,405', 'M220,220 L89.2,350.8',
  'M220,220 L35,220',  'M220,220 L89.2,89.2',
  'M220,220 L220,35',  'M220,220 L350.8,89.2',
];

const LABELS = [
  { text: 'Names',  x: 329.1, y: 265.1, rot: 22.5  },
  { text: 'Games',  x: 265.1, y: 329.1, rot: 67.5  },
  { text: 'Food',   x: 174.9, y: 329.1, rot: 112.5 },
  { text: 'Movies', x: 110.9, y: 265.1, rot: 157.5 },
  { text: 'Places', x: 110.9, y: 174.9, rot: 202.5 },
  { text: 'Ideas',  x: 174.9, y: 110.9, rot: 247.5 },
  { text: 'Tasks',  x: 265.1, y: 110.9, rot: 292.5 },
  { text: 'Fun',    x: 329.1, y: 174.9, rot: 337.5 },
];

// ── Layout constants ──────────────────────────────────────────────────────
// Left column: 490px wide, wheel centered inside
// Wheel rendered at 410×410 (viewBox 440×440, scale = 410/440 = 0.9318)
const WX = 40;   // wheel SVG left edge (centres 410px in 490px column)
const WY = 45;   // wheel SVG top  edge (centres 410px in 500px column)
const WS = 410 / 440; // 0.93182

// Right column content area
const RX  = 534; // 490 (col boundary) + 44 (paddingLeft)
const PAD = 40;  // paddingTop

// Computed Y baselines (flex-column layout: pad → badge → title → subtitle → pills → CTA)
const BADGE_TOP       = PAD;               // 40
const BADGE_H         = 34;
const BADGE_MARGIN    = 18;
const TITLE_TOP       = BADGE_TOP + BADGE_H + BADGE_MARGIN; // 92
const TITLE_FONT      = 82;
// Approximate ascent ≈ 78% of font-size for typical sans-serif
const TITLE_BASELINE  = TITLE_TOP  + Math.round(TITLE_FONT * 0.78); // 92+64=156
const TITLE_H         = TITLE_FONT;
const TITLE_MARGIN    = 14;
const SUB_TOP         = TITLE_TOP  + TITLE_H + TITLE_MARGIN; // 188
const SUB_FONT        = 34;
const SUB_BASELINE    = SUB_TOP    + Math.round(SUB_FONT  * 0.78); // 188+26=214
const SUB_H           = SUB_FONT;
const SUB_MARGIN      = 24;
const PILL_TOP        = SUB_TOP    + SUB_H   + SUB_MARGIN;  // 246
const PILL_H          = 34;
const PILL_MARGIN     = 28;
const BTN_TOP         = PILL_TOP   + PILL_H  + PILL_MARGIN; // 308
const BTN_H           = 50;

// Feature pills
const PILLS = [
  { emoji: '🎓', label: 'Classrooms', w: 145 },
  { emoji: '🎉', label: 'Parties',    w: 120 },
  { emoji: '💼', label: 'Teams',      w: 108 },
  { emoji: '🎯', label: 'Decisions',  w: 135 },
];
let pillX = RX;
const pillData = PILLS.map(p => {
  const x = pillX;
  pillX += p.w + 10;
  return { ...p, x };
});

// ── SVG string ────────────────────────────────────────────────────────────
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500">
  <defs>
    <!-- Background gradient (135deg ≈ top-left → bottom-right) -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%"   stop-color="#1a0533"/>
      <stop offset="55%"  stop-color="#0d1b4b"/>
      <stop offset="100%" stop-color="#090d2e"/>
    </linearGradient>

    <!-- CTA button gradient -->
    <linearGradient id="cta" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%"   stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>

    <!-- Wheel glow halo -->
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#a78bfa" stop-opacity="0.30"/>
      <stop offset="50%"  stop-color="#7c3aed" stop-opacity="0.10"/>
      <stop offset="70%"  stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>

    <!-- Badge pill clip -->
    <clipPath id="badgeClip">
      <rect x="${RX}" y="${BADGE_TOP}" width="360" height="${BADGE_H}" rx="17"/>
    </clipPath>
  </defs>

  <!-- ── Background ── -->
  <rect width="1500" height="500" fill="url(#bg)"/>

  <!-- Background glow blobs -->
  <ellipse cx="0"    cy="0"   rx="280" ry="280" fill="#7c3aed" fill-opacity="0.14"/>
  <ellipse cx="1200" cy="580" rx="220" ry="220" fill="#4f46e5" fill-opacity="0.10"/>
  <ellipse cx="1450" cy="0"   rx="160" ry="160" fill="#a78bfa" fill-opacity="0.07"/>

  <!-- ── Left column: wheel ── -->
  <!-- Glow halo -->
  <circle cx="${WX + 205}" cy="${WY + 205}" r="215" fill="url(#halo)"/>

  <!-- Wheel segments, spokes, rings (scaled from 440×440 viewBox to 410×410) -->
  <g transform="translate(${WX}, ${WY}) scale(${WS.toFixed(6)})">

    <!-- Outer soft ring -->
    <circle cx="220" cy="220" r="202" fill="#8b5cf6" fill-opacity="0.18"/>

    <!-- Coloured segments -->
    ${SEGS.map((d, i) => `<path d="${d}" fill="${COLORS[i]}" stroke="rgba(255,255,255,0.95)" stroke-width="2.5"/>`).join('\n    ')}

    <!-- Spokes -->
    ${SPOKES.map(d => `<path d="${d}" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" fill="none"/>`).join('\n    ')}

    <!-- Outer border ring -->
    <circle cx="220" cy="220" r="186" fill="none" stroke="white" stroke-width="5"/>

    <!-- Segment text labels -->
    ${LABELS.map(l => `<text x="${l.x}" y="${l.y}" text-anchor="middle" font-size="14" font-weight="bold" fill="white" transform="rotate(${l.rot},${l.x},${l.y})" font-family="sans-serif">${l.text}</text>`).join('\n    ')}

    <!-- Pointer arrow (right) -->
    <polygon points="416,208 397,220 416,232" fill="white" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>

    <!-- Center white hub -->
    <circle cx="220" cy="220" r="47" fill="white"/>
    <circle cx="220" cy="220" r="43" fill="white" stroke="#7c3aed" stroke-opacity="0.25" stroke-width="3"/>
    <!-- Hub icon - simple star/asterisk since emoji might not render -->
    <text x="220" y="232" text-anchor="middle" font-size="32" font-weight="bold" fill="#7c3aed" font-family="sans-serif">&#9733;</text>
  </g>

  <!-- ── Right column: text content ── -->

  <!-- Badge background pill -->
  <rect x="${RX}" y="${BADGE_TOP}" width="360" height="${BADGE_H}" rx="17"
        fill="#a78bfa" fill-opacity="0.18" stroke="#a78bfa" stroke-opacity="0.38" stroke-width="1"/>
  <!-- Badge text -->
  <text x="${RX + 180}" y="${BADGE_TOP + 22}"
        text-anchor="middle" font-size="12" font-weight="bold" fill="#c4b5fd"
        letter-spacing="2" font-family="sans-serif">FREE  ·  NO LOGIN  ·  ANY DEVICE</text>

  <!-- Main headline -->
  <text x="${RX}" y="${TITLE_BASELINE}"
        font-size="${TITLE_FONT}" font-weight="900" fill="white"
        letter-spacing="-2" font-family="sans-serif">Spin The Choice</text>

  <!-- Subtitle -->
  <text x="${RX}" y="${SUB_BASELINE}"
        font-size="${SUB_FONT}" font-weight="600" fill="#a78bfa"
        font-family="sans-serif">Free Wheel Spinner</text>

  <!-- Feature pills -->
  ${pillData.map(p => `
  <rect x="${p.x}" y="${PILL_TOP}" width="${p.w}" height="${PILL_H}" rx="17"
        fill="white" fill-opacity="0.07" stroke="white" stroke-opacity="0.13" stroke-width="1"/>
  <text x="${p.x + p.w / 2}" y="${PILL_TOP + 22}"
        text-anchor="middle" font-size="14" fill="rgba(255,255,255,0.78)"
        font-family="sans-serif">${p.label}</text>`).join('')}

  <!-- CTA button -->
  <rect x="${RX}" y="${BTN_TOP}" width="230" height="${BTN_H}" rx="25" fill="url(#cta)"/>
  <text x="${RX + 115}" y="${BTN_TOP + 33}"
        text-anchor="middle" font-size="20" font-weight="bold" fill="white"
        font-family="sans-serif">Try It Free</text>

  <!-- URL -->
  <text x="${RX + 246}" y="${BTN_TOP + 33}"
        font-size="17" fill="white" fill-opacity="0.38"
        letter-spacing="0.5" font-family="sans-serif">spinthechoice.com</text>

</svg>`;

// ── Generate PNG ──────────────────────────────────────────────────────────
const outPath = path.join(__dirname, '..', 'public', 'twitter-header.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath, (err, info) => {
    if (err) {
      console.error('ERROR generating twitter-header.png:', err.message);
      process.exit(1);
    }
    console.log('✓  public/twitter-header.png generated');
    console.log(`   ${info.width} × ${info.height} px  |  ${(info.size / 1024).toFixed(1)} KB`);
  });
