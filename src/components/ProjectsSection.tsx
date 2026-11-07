import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import MoreProjects from './MoreProjects';
import { LiveProjectButton } from './Buttons';
import { AGENT_COLORS, Built } from './AgentBuild';

type Project = {
  name: string;
  category: string;
  desc: string;
  stack: string[];
  href: string;
  cta: string;
  images: [string, string, string];
};

const PROJECTS: Project[] = [
  {
    name: 'Reflect.ai',
    category: 'Live · GenAI app',
    desc: 'AI journal with Gemini replies, search by meaning over past entries, a four-model fallback and safety handling for distressing entries. Built for the Google Cloud Gen AI ideathon.',
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini', 'Cloud Run'],
    href: 'https://ai-journal-reflections-202050000797.us-central1.run.app',
    cta: 'Live Project',
    images: ['/projects/reflect-ai-3.jpg', '/projects/reflect-ai-4.jpg', '/projects/reflect-ai-1.jpg'],
  },
  {
    name: 'Call Desk Agent',
    category: 'GenAI · Open source',
    desc: 'LangGraph agent for call-centre QA. Hybrid RAG (FAISS + BM25) over policy documents, rubric scoring of transcripts, role-based access, conversation memory and 42 tests.',
    stack: ['Python', 'LangGraph', 'FAISS', 'BM25', 'Streamlit'],
    href: 'https://github.com/Ankitsingh1709/llm_projects/tree/main/Call-Desk-Agent',
    cta: 'View Code',
    images: ['/projects/call-desk-1.jpg', '/projects/call-desk-2.jpg', '/projects/call-desk-3.jpg'],
  },
  {
    name: 'Drape',
    category: 'Live · AI app',
    desc: 'AI wardrobe and outfit-styling app. My own idea, running on Google Cloud Run.',
    stack: ['GenAI', 'Google Cloud Run'],
    href: 'https://drape-173367747529.us-central1.run.app',
    cta: 'Live Project',
    images: ['/projects/drape-1.jpg', '/projects/drape-2.jpg', '/projects/drape-3.jpg'],
  },
];

const ROUNDED = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function Card({ project, index, progress }: { project: Project; index: number; progress: MotionValue<number> }) {
  const total = PROJECTS.length;
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        className={`w-full border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${ROUNDED}`}
        style={{ scale, top: `${index * 28}px`, position: 'relative', transformOrigin: 'top center' }}
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col text-[#D7E2EA]">
              <span className="font-medium uppercase tracking-wider" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.2rem)' }}>
                {project.category}
              </span>
              <span className="font-light" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}>
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href}>{project.cta}</LiveProjectButton>
        </div>

          <Built agent="agent/design" color={AGENT_COLORS[3]} className="w-full">
          <div className="flex gap-3 sm:gap-4">
            <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
              <img src={project.images[0]} alt={`${project.name} screenshot`} className={`w-full object-cover object-left-top ${ROUNDED}`} style={{ height: 'clamp(130px, 16vw, 230px)' }} />
              <img src={project.images[1]} alt={`${project.name} screenshot`} className={`w-full object-cover object-left-top ${ROUNDED}`} style={{ height: 'clamp(160px, 22vw, 340px)' }} />
            </div>
            <div className="relative w-[60%]">
              <img src={project.images[2]} alt={`${project.name} screenshot`} className={`absolute inset-0 h-full w-full object-cover object-left-top ${ROUNDED}`} />
            </div>
          </div>
          </Built>

          <Built agent="agent/writer" color={AGENT_COLORS[0]} delay={0.5} className="mt-5 w-full">
          <div className="flex flex-col gap-4 px-2 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl font-light leading-relaxed text-[#D7E2EA]/80" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.1rem)' }}>
              {project.desc}
            </p>
            <Stack items={project.stack} />
          </div>
          </Built>
      </motion.div>
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-[#D7E2EA]/40 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA] sm:text-sm">
          {s}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-28"
    >
      <Built agent="agent/planner" color={AGENT_COLORS[2]} className="mx-auto w-fit">
        <h2 className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Projects
        </h2>
      </Built>
      <div ref={ref} className="mx-auto max-w-6xl">
        {PROJECTS.map((p, i) => (
          <Card key={p.name} project={p} index={i} progress={scrollYProgress} />
        ))}
      </div>
      <MoreProjects />
    </section>
  );
}
