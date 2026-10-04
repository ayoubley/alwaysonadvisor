import { useEffect, useRef } from "react";

type Node = {
  ring: number;
  angle: number;
  speed: number;
  size: number;
  gold: boolean;
  phase: number;
};

type Pulse = { ring: number; node: number; t: number; speed: number };

const GOLD = "216, 183, 142";
const WARM = "245, 244, 240";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const nodes: Node[] = [];
    const ringDefs = [
      { r: 0.34, count: 3, speed: 0.1 },
      { r: 0.52, count: 4, speed: -0.065 },
      { r: 0.7, count: 5, speed: 0.045 },
    ];
    ringDefs.forEach((ring, ri) => {
      for (let i = 0; i < ring.count; i++) {
        nodes.push({
          ring: ri,
          angle: (i / ring.count) * Math.PI * 2 + ri * 1.3,
          speed: ring.speed * (0.85 + Math.random() * 0.3),
          size: 1.6 + Math.random() * 1.4,
          gold: Math.random() > 0.45,
          phase: Math.random() * Math.PI * 2,
        });
      }
    });

    const stars = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
    }));

    const pulses: Pulse[] = [];
    let pulseTimer = 0;

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const drawRing = (cx: number, cy: number, radius: number, time: number, dir: number) => {
      ctx.strokeStyle = `rgba(${WARM}, 0.055)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // comet highlight — segments along an arc with fading alpha
      const segs = 26;
      const arcLen = 1.1;
      const start = time * dir * 0.24;
      for (let i = 0; i < segs; i++) {
        const a0 = start + (i / segs) * arcLen;
        const a1 = start + ((i + 1) / segs) * arcLen;
        const alpha = Math.pow(i / segs, 2.2) * 0.35;
        ctx.strokeStyle = `rgba(${GOLD}, ${alpha})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, a0, a1);
        ctx.stroke();
      }
    };

    const render = (time: number) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, w, h);

      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;

      const cx = w / 2 + mouse.x * 10;
      const cy = h / 2 + mouse.y * 8;
      const base = Math.min(w, h) / 2;

      // drifting starfield
      stars.forEach((s) => {
        const tw = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        ctx.fillStyle = `rgba(${WARM}, ${0.028 + tw * 0.05})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // outer breathing glow
      const glowR = base * (0.72 + 0.03 * Math.sin(t * 0.6));
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      glow.addColorStop(0, `rgba(${GOLD}, 0.055)`);
      glow.addColorStop(0.55, `rgba(${GOLD}, 0.014)`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      // orbit rings + comets
      ringDefs.forEach((ring, ri) => {
        drawRing(cx, cy, ring.r * base, t * (ri % 2 === 0 ? 1 : -1), ri % 2 === 0 ? 1 : -1);
      });

      // node positions
      const pos = nodes.map((n) => {
        const ring = ringDefs[n.ring];
        const a = n.angle + t * n.speed;
        return {
          x: cx + Math.cos(a) * ring.r * base,
          y: cy + Math.sin(a) * ring.r * base,
          n,
        };
      });

      // spokes core → nodes
      pos.forEach((p) => {
        ctx.strokeStyle = `rgba(${WARM}, 0.045)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      });

      // pulses traveling outward
      pulseTimer -= 1 / 60;
      if (pulseTimer <= 0 && pulses.length < 5) {
        pulses.push({
          ring: Math.floor(Math.random() * ringDefs.length),
          node: Math.floor(Math.random() * 4),
          t: 0,
          speed: 0.45 + Math.random() * 0.3,
        });
        pulseTimer = 0.9 + Math.random() * 1.1;
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += (1 / 60) * p.speed;
        const target = pos.filter((q) => q.n.ring === p.ring)[p.node % Math.max(1, pos.filter((q) => q.n.ring === p.ring).length)];
        if (!target) {
          pulses.splice(i, 1);
          continue;
        }
        if (p.t >= 1) {
          // landing ripple on the node
          const rip = (p.t - 1) * 5;
          if (rip < 1) {
            ctx.strokeStyle = `rgba(${GOLD}, ${(1 - rip) * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(target.x, target.y, 4 + rip * 10, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            pulses.splice(i, 1);
          }
          continue;
        }
        const ease = 1 - Math.pow(1 - p.t, 3);
        const px = cx + (target.x - cx) * ease;
        const py = cy + (target.y - cy) * ease;
        // trail
        const tailT = Math.max(0, ease - 0.12);
        ctx.strokeStyle = `rgba(${GOLD}, 0.28)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(cx + (target.x - cx) * tailT, cy + (target.y - cy) * tailT);
        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.fillStyle = `rgba(${GOLD}, 0.18)`;
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(240, 221, 188, 0.95)`;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes
      pos.forEach((p) => {
        const pulse = 0.75 + 0.25 * Math.sin(t * 1.4 + p.n.phase);
        const col = p.n.gold ? GOLD : WARM;
        ctx.fillStyle = `rgba(${col}, ${0.1 * pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.n.size * 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${col}, ${0.85 * pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.n.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // core
      const coreR = base * 0.085;
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3.1);
      coreGlow.addColorStop(0, `rgba(240, 221, 188, 0.32)`);
      coreGlow.addColorStop(0.4, `rgba(${GOLD}, 0.1)`);
      coreGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 3.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(250, 249, 245, 0.95)`;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 0.34, 0, Math.PI * 2);
      ctx.fill();

      // rotating dashed core arcs (counter-rotating)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.5);
      ctx.strokeStyle = `rgba(${GOLD}, 0.5)`;
      ctx.lineWidth = 1.3;
      ctx.setLineDash([coreR * 1.5, coreR * 1.1]);
      ctx.beginPath();
      ctx.arc(0, 0, coreR * 1.55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.32);
      ctx.strokeStyle = `rgba(${WARM}, 0.22)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([coreR * 0.9, coreR * 1.6]);
      ctx.beginPath();
      ctx.arc(0, 0, coreR * 2.25, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.setLineDash([]);
    };

    const loop = (time: number) => {
      render(time);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    container.addEventListener("mousemove", onMouse);

    if (reduced) {
      render(1200);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full cursor-crosshair" role="img" aria-label="Animated visualization of an always-on intelligence system — signals orbiting a central core, connecting into insights.">
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
    </div>
  );
}
