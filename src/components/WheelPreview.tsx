'use client';

import { useEffect, useRef } from 'react';
import { getContrastColor, truncateText } from '@/lib/utils';

interface WheelPreviewProps {
  items: { name: string; color: string }[];
  size?: number;
}

export default function WheelPreview({ items, size = 120 }: WheelPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const S = 240;
    const cx = S / 2;
    const cy = S / 2;
    const r = cx - 6;
    ctx.clearRect(0, 0, S, S);

    if (items.length === 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.fillStyle = '#f3f4f6';
      ctx.fill();
      return;
    }

    const n = items.length;
    const segAngle = (2 * Math.PI) / n;

    // Drop shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.restore();

    items.forEach((item, i) => {
      // Start segments at top (−π/2) so the wheel looks "ready to spin"
      const start = i * segAngle - Math.PI / 2;
      const end = (i + 1) * segAngle - Math.PI / 2;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Only draw text when segments are large enough to be readable
      if (n <= 8) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(start + segAngle / 2);
        const fs = n <= 4 ? 16 : n <= 6 ? 13 : 11;
        ctx.font = `600 ${fs}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = getContrastColor(item.color);
        ctx.shadowColor = 'rgba(0,0,0,0.12)';
        ctx.shadowBlur = 3;
        ctx.fillText(truncateText(ctx, item.name, r * 0.58), r - 14, 0);
        ctx.restore();
      }
    });

    // Outer ring
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.strokeStyle = 'rgba(0,0,0,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Center pin
    const pinR = Math.max(10, r * 0.07);
    ctx.beginPath();
    ctx.arc(cx, cy, pinR, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 6;
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [items]);

  return (
    <canvas
      ref={canvasRef}
      width={240}
      height={240}
      style={{ width: size, height: size, display: 'block' }}
      className="rounded-full"
    />
  );
}
