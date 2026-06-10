import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// ── Wheel geometry ───────────────────────────────────────────────────────────
// 8 equal segments, cx=220 cy=220 r=185 in a 440×440 viewBox
// Points at each 45° step: r·cos(45°) = 185 × 0.70711 = 130.82 ≈ 130.8
const COLORS = [
  '#FF6B6B', // coral red
  '#FF9F43', // orange
  '#FECA57', // yellow
  '#26D0CE', // teal
  '#1DD1A1', // mint green
  '#54A0FF', // sky blue
  '#A29BFE', // lavender
  '#FD79A8', // pink
];

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

// Spoke lines from center to each spoke endpoint
const SPOKES = [
  'M220,220 L405,220', 'M220,220 L350.8,350.8',
  'M220,220 L220,405', 'M220,220 L89.2,350.8',
  'M220,220 L35,220',  'M220,220 L89.2,89.2',
  'M220,220 L220,35',  'M220,220 L350.8,89.2',
];

// Segment labels at mid-arc radius 118 from center
// Angles: 22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5 degrees
// x = 220 + 118·cos(a), y = 220 + 118·sin(a)
const LABELS = [
  { text: 'Names',   x: 329.1, y: 265.1, rot: 22.5  },
  { text: 'Games',   x: 265.1, y: 329.1, rot: 67.5  },
  { text: 'Food',    x: 174.9, y: 329.1, rot: 112.5 },
  { text: 'Movies',  x: 110.9, y: 265.1, rot: 157.5 },
  { text: 'Places',  x: 110.9, y: 174.9, rot: 202.5 },
  { text: 'Ideas',   x: 174.9, y: 110.9, rot: 247.5 },
  { text: 'Tasks',   x: 265.1, y: 110.9, rot: 292.5 },
  { text: 'Fun',     x: 329.1, y: 174.9, rot: 337.5 },
];

// SVG rendered at 410×410; viewBox 0 0 440 440 → scale = 410/440 = 0.9318
// Center in rendered px: 220×0.9318 ≈ 205. Emoji div: 52×52, so left=205-26=179
const EMOJI_LEFT = 179;
const EMOJI_TOP  = 179;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1500,
          height: 500,
          display: 'flex',
          background: 'linear-gradient(135deg, #1a0533 0%, #0d1b4b 55%, #090d2e 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* ── Background glow blobs ──────────────────────────────── */}
        <div style={{
          position: 'absolute', top: -120, left: -120,
          width: 560, height: 560, borderRadius: '50%',
          background: 'rgba(124,58,237,0.14)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -120, right: 160,
          width: 440, height: 440, borderRadius: '50%',
          background: 'rgba(79,70,229,0.10)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(167,139,250,0.07)',
          display: 'flex',
        }} />

        {/* ── Left: Spinning wheel ──────────────────────────────── */}
        <div style={{
          width: 490,
          height: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          position: 'relative',
        }}>
          {/* Purple glow halo behind wheel */}
          <div style={{
            position: 'absolute',
            width: 430,
            height: 430,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(124,58,237,0.10) 50%, transparent 70%)',
            display: 'flex',
          }} />

          {/* SVG + emoji overlay container */}
          <div style={{ position: 'relative', display: 'flex', width: 410, height: 410 }}>
            <svg
              width="410"
              height="410"
              viewBox="0 0 440 440"
            >
              {/* Outer soft ring */}
              <circle cx="220" cy="220" r="202" fill="rgba(139,92,246,0.18)" />

              {/* Coloured segments */}
              {SEGS.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={COLORS[i]}
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="2.5"
                />
              ))}

              {/* Spoke lines */}
              {SPOKES.map((d, i) => (
                <path key={`s${i}`} d={d} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
              ))}

              {/* Outer border ring */}
              <circle cx="220" cy="220" r="186" fill="none" stroke="white" strokeWidth="5" />

              {/* Segment text labels */}
              {LABELS.map((l) => (
                <text
                  key={l.text}
                  x={l.x}
                  y={l.y}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="white"
                  transform={`rotate(${l.rot} ${l.x} ${l.y})`}
                  style={{ letterSpacing: 0.5 }}
                >
                  {l.text}
                </text>
              ))}

              {/* Pointer arrow (right side, pointing left into wheel) */}
              <polygon
                points="416,208 397,220 416,232"
                fill="white"
                stroke="rgba(0,0,0,0.25)"
                strokeWidth="1"
              />

              {/* Center white hub */}
              <circle cx="220" cy="220" r="47" fill="white" />
              <circle cx="220" cy="220" r="43" fill="white" stroke="rgba(124,58,237,0.25)" strokeWidth="3" />
            </svg>

            {/* Emoji centred over SVG hub */}
            <div style={{
              position: 'absolute',
              left: EMOJI_LEFT,
              top: EMOJI_TOP,
              width: 52,
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
            }}>
              🎡
            </div>
          </div>
        </div>

        {/* ── Right: Text content ───────────────────────────────── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 44,
          paddingRight: 72,
          paddingTop: 40,
          paddingBottom: 40,
        }}>

          {/* Top badge */}
          <div style={{
            display: 'flex',
            alignSelf: 'flex-start',
            background: 'rgba(167,139,250,0.18)',
            border: '1px solid rgba(167,139,250,0.38)',
            borderRadius: 20,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 18,
            paddingRight: 18,
            marginBottom: 18,
          }}>
            <span style={{
              color: '#c4b5fd',
              fontSize: 13,
              letterSpacing: 2,
              fontWeight: 700,
            }}>
              ✨  FREE  ·  NO LOGIN  ·  ANY DEVICE
            </span>
          </div>

          {/* Main title */}
          <div style={{
            display: 'flex',
            color: 'white',
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: -3,
            lineHeight: 1,
            marginBottom: 14,
          }}>
            Spin The Choice
          </div>

          {/* Subtitle */}
          <div style={{
            display: 'flex',
            color: '#a78bfa',
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: -0.5,
            marginBottom: 24,
          }}>
            Free Wheel Spinner
          </div>

          {/* Feature pills */}
          <div style={{ display: 'flex', marginBottom: 28 }}>
            {[
              { emoji: '🎓', label: 'Classrooms' },
              { emoji: '🎉', label: 'Parties' },
              { emoji: '💼', label: 'Teams' },
              { emoji: '🎯', label: 'Decisions' },
            ].map((f) => (
              <div key={f.label} style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: 20,
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 15,
                paddingRight: 15,
                marginRight: 10,
                color: 'rgba(255,255,255,0.78)',
                fontSize: 16,
                fontWeight: 500,
              }}>
                <span style={{ marginRight: 7, fontSize: 17 }}>{f.emoji}</span>
                {f.label}
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #7c3aed, #4338ca)',
              borderRadius: 30,
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 38,
              paddingRight: 38,
              marginRight: 26,
              color: 'white',
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: -0.3,
            }}>
              Try It Free  →
            </div>
            <div style={{
              display: 'flex',
              color: 'rgba(255,255,255,0.38)',
              fontSize: 17,
              letterSpacing: 0.5,
            }}>
              spinthechoice.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1500,
      height: 500,
    },
  );
}
