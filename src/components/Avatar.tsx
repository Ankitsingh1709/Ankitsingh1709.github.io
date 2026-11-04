import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

// Drop your 3D avatar at public/avatar.webp (transparent background) and it replaces the placeholder.
export default function Avatar() {
  const [missing, setMissing] = useState(false);
  const reduce = useReducedMotion();
  // Cursor position across the window, -0.5..0.5, drives the head's tilt.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 120, damping: 15 };
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), spring);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), spring);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce, mx, my]);

  if (missing) {
    return (
      <div className="mx-auto flex aspect-square w-[85%] items-center justify-center rounded-full border-2 border-dashed border-[#D7E2EA]/40 bg-gradient-to-b from-[#7621B0]/30 to-[#0C0C0C] text-center text-sm uppercase tracking-widest text-[#D7E2EA]/70 sm:mb-10">
        Your 3D avatar
        <br />
        public/avatar.webp
      </div>
    );
  }

  return (
    <div className="relative" style={{ perspective: 900 }}>
      {/* purple glow behind the head for depth */}
      <div
        aria-hidden
        className="absolute inset-[12%] -z-10 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(118,33,176,0.55), transparent 70%)' }}
      />
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <img
          src="/avatar.webp"
          alt="Ankit Singh 3D avatar"
          className="mx-auto max-h-[78vh] w-auto"
          style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.7)) drop-shadow(0 0 1px rgba(215,226,234,0.25))' }}
          onError={() => setMissing(true)}
        />
      </motion.div>
    </div>
  );
}
