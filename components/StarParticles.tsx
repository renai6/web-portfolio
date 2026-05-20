"use client";

import { useEffect, useRef } from "react";

export function StarParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleEls = useRef<Array<HTMLDivElement | null>>([]);
  const positions = useRef(
    [] as {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      size: number;
      basePhase: number;
      orbitRadius: number;
      orbitSpeed: number;
    }[],
  );
  const cursor = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const NUM = 140;

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // initialize particles (orbit parameters)
    positions.current = Array.from({ length: NUM }).map(() => {
      const size = Math.random() * 5 + 2;
      const x = Math.random() * w;
      const y = Math.random() * h;
      const basePhase = Math.random() * Math.PI * 2;
      const orbitRadius = Math.random() * 8 + 2; // px
      const orbitSpeed = 0.15 + Math.random() * 0.6; // rotations per second
      return {
        x,
        y,
        vx: 0,
        vy: 0,
        baseX: x,
        baseY: y,
        size,
        basePhase,
        orbitRadius,
        orbitSpeed,
      };
    });

    // apply initial styles
    for (let i = 0; i < NUM; i++) {
      const el = particleEls.current[i];
      const p = positions.current[i];
      if (el && p) {
        el.style.width = `${p.size}px`;
        el.style.height = `${p.size}px`;
        el.style.left = `${p.baseX}px`;
        el.style.top = `${p.baseY}px`;
        el.style.opacity = "0.85";
      }
    }

    function onMove(e: MouseEvent) {
      cursor.current = { x: e.clientX, y: e.clientY };
    }

    function onLeave() {
      cursor.current = null;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const radius = Math.min(w, h) * 0.18; // repulsion radius
    const strength = 0.8;

    function tick(now?: number) {
      const time = (now ?? performance.now()) / 1000;
      const cur = cursor.current;
      for (let i = 0; i < NUM; i++) {
        const p = positions.current[i];
        if (!p) continue;

        if (cur) {
          const dx = p.x - cur.x;
          const dy = p.y - cur.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          if (dist < radius) {
            const force = ((radius - dist) / radius) * strength;
            const nx = dx / dist;
            const ny = dy / dist;
            p.vx += nx * force * 1.4;
            p.vy += ny * force * 1.4;
          }
        }

        // gentle attraction back to base position
        const ax = (p.baseX - p.x) * 0.0015;
        const ay = (p.baseY - p.y) * 0.0015;
        p.vx += ax;
        p.vy += ay;

        // apply friction
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;

        const el = particleEls.current[i];
        if (el) {
          // orbital motion around base position
          const angle = p.basePhase + time * p.orbitSpeed * Math.PI * 2;
          const orbitX = Math.cos(angle) * p.orbitRadius;
          const orbitY = Math.sin(angle) * p.orbitRadius * 0.6; // slight ellipse

          // translate relative to base to keep layout stable
          const tx = p.x - p.baseX + orbitX;
          const ty = p.y - p.baseY + orbitY;
          el.style.transform = `translate(${tx}px, ${ty}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
    >
      {Array.from({ length: NUM }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            particleEls.current[i] = el;
          }}
          className="absolute rounded-full bg-white/90"
          style={{
            left: 0,
            top: 0,
            transform: "translate(0,0)",
            filter: "blur(1px)",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
