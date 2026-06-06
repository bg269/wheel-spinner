import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Spin The Choice – Free Online Wheel Spinner';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 50%, #ddd6fe 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative background circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(167, 139, 250, 0.15)',
          }}
        />

        {/* Wheel emoji */}
        <div style={{ fontSize: 96, lineHeight: 1, marginBottom: 24 }}>🎡</div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#1a1a2e',
            letterSpacing: '-2px',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Spin The Choice
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: '#6d28d9',
            marginTop: 20,
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          Free Online Wheel Spinner
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 40,
          }}
        >
          {['🎓 Classroom', '🎲 Games', '🎁 Giveaways', '🍕 Decisions'].map((label) => (
            <div
              key={label}
              style={{
                padding: '8px 20px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1.5px solid rgba(139, 92, 246, 0.3)',
                borderRadius: 50,
                fontSize: 18,
                color: '#4c1d95',
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            fontSize: 18,
            color: '#7c3aed',
            fontWeight: 600,
            opacity: 0.7,
          }}
        >
          spinthechoice.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
