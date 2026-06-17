'use client';

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import type { WheelItem } from '@/lib/types';
import { getContrastColor, truncateText } from '@/lib/utils';

export interface WheelCanvasHandle {
  spin: () => void;
}

interface WheelCanvasProps {
  items: WheelItem[];
  isSpinning: boolean;
  onSpinStart: (durationMs: number) => void;
  onSpinEnd: (winner: WheelItem) => void;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const WheelCanvas = forwardRef<WheelCanvasHandle, WheelCanvasProps>(
  ({ items, isSpinning, onSpinStart, onSpinEnd }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rotationRef = useRef(0);
    const animFrameRef = useRef<number | null>(null);
    // Use refs for animation closure so we don't capture stale state
    const isSpinningRef = useRef(isSpinning);
    const itemsRef = useRef(items);
    useEffect(() => { isSpinningRef.current = isSpinning; }, [isSpinning]);
    useEffect(() => { itemsRef.current = items; }, [items]);

    const draw = useCallback((rotation: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const SIZE = 600;
      const cx = SIZE / 2;
      const cy = SIZE / 2;
      const outerR = cx - 10;

      ctx.clearRect(0, 0, SIZE, SIZE);

      const currentItems = itemsRef.current;

      if (currentItems.length === 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, outerR, 0, 2 * Math.PI);
        ctx.fillStyle = '#f3f4f6';
        ctx.fill();
        ctx.fillStyle = '#9ca3af';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '600 18px Inter, system-ui, sans-serif';
        ctx.fillText('Add items to get started', cx, cy);
        return;
      }

      const n = currentItems.length;
      const segAngle = (2 * Math.PI) / n;

      // Wheel drop shadow (drawn before segments)
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.18)';
      ctx.shadowBlur = 32;
      ctx.shadowOffsetY = 8;
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();

      // Segments
      currentItems.forEach((item, i) => {
        const start = rotation + i * segAngle;
        const end = rotation + (i + 1) * segAngle;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, outerR, start, end);
        ctx.closePath();
        ctx.fillStyle = item.color;
        ctx.fill();

        ctx.strokeStyle = 'rgba(255,255,255,0.55)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Text label
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(start + segAngle / 2);

        const contrast = getContrastColor(item.color);
        const maxW = outerR * 0.6;
        // Scale font with number of segments
        const fs = n <= 6 ? 17 : n <= 12 ? 14 : n <= 20 ? 11 : 9;

        ctx.font = `600 ${fs}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = contrast;
        ctx.shadowColor = 'rgba(0,0,0,0.15)';
        ctx.shadowBlur = 4;

        const label = truncateText(ctx, item.name, maxW);
        ctx.fillText(label, outerR - 20, 0);
        ctx.restore();
      });

      // Outer ring border
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.strokeStyle = 'rgba(0,0,0,0.08)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Center pin
      const pinR = Math.max(20, outerR * 0.065);
      const grad = ctx.createRadialGradient(cx - 3, cy - 3, 1, cx, cy, pinR);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(1, '#d1d5db');
      ctx.beginPath();
      ctx.arc(cx, cy, pinR, 0, 2 * Math.PI);
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 10;
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // TEMP DIAGNOSTIC — remove after diagnosing canvas flicker
      const rect = canvas.getBoundingClientRect();
      console.log('[WheelCanvas draw]', {
        attrW: canvas.width, attrH: canvas.height,
        cssW: Math.round(rect.width), cssH: Math.round(rect.height),
        offsetW: canvas.offsetWidth, offsetH: canvas.offsetHeight,
      });
    }, []);

    useEffect(() => {
      draw(rotationRef.current);
    }, [draw, items]);

    const spin = useCallback(() => {
      if (isSpinningRef.current || itemsRef.current.length < 2) return;

      const current = itemsRef.current;
      const n = current.length;
      const winnerIndex = Math.floor(Math.random() * n);
      const segAngle = (2 * Math.PI) / n;

      // Pointer is at top (−π/2). We want the midpoint of the winner's segment
      // to land there: rotation + (winnerIndex + 0.5) * segAngle ≡ −π/2 (mod 2π)
      const targetNorm =
        ((-Math.PI / 2 - (winnerIndex + 0.5) * segAngle) % (2 * Math.PI) +
          2 * Math.PI) %
        (2 * Math.PI);
      const currentNorm =
        ((rotationRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      let delta = targetNorm - currentNorm;
      if (delta <= 0.05) delta += 2 * Math.PI;

      const fullRotations = (6 + Math.floor(Math.random() * 4)) * 2 * Math.PI;
      const totalTarget = rotationRef.current + fullRotations + delta;
      const duration = 4500 + Math.random() * 1500;

      const startTime = performance.now();
      const startRotation = rotationRef.current;

      onSpinStart(duration);

      const frame = (now: number) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = easeOutQuart(t);
        const r = startRotation + (totalTarget - startRotation) * eased;

        rotationRef.current = r;
        draw(r);

        if (t < 1) {
          animFrameRef.current = requestAnimationFrame(frame);
        } else {
          rotationRef.current = totalTarget;
          draw(totalTarget);
          onSpinEnd(current[winnerIndex]);
        }
      };

      animFrameRef.current = requestAnimationFrame(frame);
    }, [draw, onSpinStart, onSpinEnd]);

    useImperativeHandle(ref, () => ({ spin }), [spin]);

    return (
      <div className="relative w-full max-w-[520px] mx-auto select-none">
        {/* Pointer triangle at 12 o'clock */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <svg
            width="26"
            height="34"
            viewBox="0 0 26 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="ps" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
            </filter>
            <polygon
              points="13,34 0,4 26,4"
              fill="#dc2626"
              filter="url(#ps)"
            />
            <polygon points="13,30 3,6 23,6" fill="#ef4444" />
            <circle cx="13" cy="10" r="3" fill="rgba(255,255,255,0.45)" />
          </svg>
        </div>

        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          onClick={spin}
          role="button"
          aria-label="Spin the wheel"
          className={[
            'w-full h-auto aspect-square rounded-full',
            !isSpinning && items.length >= 2
              ? 'cursor-pointer active:scale-[0.99] transition-transform duration-100'
              : 'cursor-default',
          ].join(' ')}
          style={{ display: 'block' }}
        />
      </div>
    );
  },
);

WheelCanvas.displayName = 'WheelCanvas';

export default WheelCanvas;
