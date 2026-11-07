import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useState, type ReactNode } from 'react';

export const AGENT_COLORS = ['#A855F7', '#22C55E', '#F59E0B', '#3B82F6', '#EC4899'];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const offset = (min: number, max: number) => {
  const a = rand(0, Math.PI * 2);
  const d = rand(min, max);
  return { x: Math.cos(a) * d, y: Math.sin(a) * d };
};

// Each agent gets its own random path: where it flies in from, which edge point of the
// element it works at, a small jiggle while working, and where it leaves to.
function randomPath() {
  const along = rand(5, 95);
  const edge = Math.floor(rand(0, 4));
  const at = edge === 0 ? { left: along, top: 0 } : edge === 1 ? { left: 100, top: along } : edge === 2 ? { left: along, top: 100 } : { left: 0, top: along };
  return { at, from: offset(180, 340), to: offset(90, 170), jiggle: offset(6, 14) };
}

// One piece of the page "built" by an agent cursor when it scrolls into view: the cursor
// flies in, a dashed guide marks the spot, the content appears, the cursor leaves.
export function Built({
  agent,
  color = AGENT_COLORS[0],
  delay = 0,
  className = 'w-fit',
  children,
}: {
  agent: string;
  color?: string;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const [{ at, from, to, jiggle }] = useState(randomPath);
  if (reduce) return <div className={className}>{children}</div>;

  const cursor: Variants = {
    hidden: { x: from.x, y: from.y, opacity: 0 },
    shown: {
      x: [from.x, 0, jiggle.x, 0, to.x],
      y: [from.y, 0, jiggle.y, 0, to.y],
      opacity: [0, 1, 1, 1, 0],
      transition: { delay, duration: 1.7, times: [0, 0.32, 0.5, 0.68, 1], ease: 'easeInOut' },
    },
  };
  const guide: Variants = {
    hidden: { opacity: 0 },
    shown: { opacity: [0, 1, 1, 0], transition: { delay: delay + 0.4, duration: 1.2, times: [0, 0.15, 0.75, 1] } },
  };
  const content: Variants = {
    hidden: { opacity: 0, y: 8 },
    shown: { opacity: 1, y: 0, transition: { delay: delay + 0.45, duration: 0.45 } },
  };

  return (
    <motion.div initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.3 }} className={`relative ${className}`}>
      <motion.div aria-hidden variants={guide} className="pointer-events-none absolute -inset-2 rounded-lg border border-dashed" style={{ borderColor: color }} />
      <motion.div variants={content} className="h-full">
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        variants={cursor}
        className="pointer-events-none absolute z-30 flex items-start gap-1"
        style={{ left: `${at.left}%`, top: `${at.top}%` }}
      >
        <svg width="16" height="20" viewBox="0 0 16 20" className="-ml-px -mt-px">
          <path d="M1 1 L1 16 L5 12.5 L8 19 L10.5 18 L7.5 11.5 L13 11.5 Z" fill={color} stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
        <span className="mt-3 whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-[10px] text-white" style={{ background: color }}>
          {agent}
        </span>
      </motion.div>
    </motion.div>
  );
}
