export type SoundMode = 'both' | 'tick' | 'cheer' | 'silent';

let ac: AudioContext | null = null;

function getAC(): AudioContext {
  if (!ac) {
    ac = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
  }
  if (ac.state === 'suspended') ac.resume();
  return ac;
}

/** One short tick click (triangle wave). */
export function playTick(vol: number, when?: number): void {
  if (vol <= 0) return;
  const ctx = getAC();
  const t = when ?? ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(1100, t);
  osc.frequency.exponentialRampToValueAtTime(550, t + 0.02);
  gain.gain.setValueAtTime(vol * 0.55, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);

  osc.start(t);
  osc.stop(t + 0.06);
}

/** Rising C-major arpeggio fanfare. */
export function playCheer(vol: number): void {
  if (vol <= 0) return;
  const ctx = getAC();
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6

  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const t = now + i * 0.11;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol * 0.28, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);

    osc.start(t);
    osc.stop(t + 0.43);
  });
}

/**
 * Pre-schedule ticks for the entire spin duration using the Web Audio clock.
 * Intervals start tight (≈65 ms) and widen to match the wheel's deceleration.
 * Returns a cleanup function that cancels any un-played ticks.
 */
export function scheduleSpinTicks(durationMs: number, vol: number): () => void {
  if (vol <= 0) return () => {};
  const ctx = getAC();
  const start = ctx.currentTime;
  const dur = durationMs / 1000;
  const scheduled: OscillatorNode[] = [];

  let elapsed = 0;
  while (elapsed < dur - 0.05) {
    const progress = elapsed / dur;
    // Interval grows from 65 ms → ~700 ms following a quadratic curve that
    // roughly mirrors the easeOutQuart wheel deceleration.
    const interval = 0.065 + Math.pow(progress, 1.8) * 0.635;
    const t = start + elapsed;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1100, t);
    osc.frequency.exponentialRampToValueAtTime(550, t + 0.02);
    gain.gain.setValueAtTime(vol * 0.55, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);

    osc.start(t);
    osc.stop(t + 0.06);
    scheduled.push(osc);

    elapsed += interval;
  }

  return () => {
    const now = ctx.currentTime;
    scheduled.forEach((o) => { try { o.stop(now); } catch { /* already stopped */ } });
  };
}
