import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { GITHUB, LINKEDIN } from './Buttons';

const TYPES = ['All', 'GenAI', 'BI & Dashboards', 'SQL', 'Python & ML'] as const;
type ProjectType = Exclude<(typeof TYPES)[number], 'All'>;

type Project = {
  name: string;
  summary: string;
  types: ProjectType[];
  stack: string[];
  href: string;
};

const LLM_REPO = `${GITHUB}/llm_projects`;
const DA_REPO = `${GITHUB}/Data_Analyst_Portfolio_projects`;

const PROJECTS: Project[] = [
  {
    name: 'Mirra: AI Visibility Audit',
    summary: 'Scrapes a brand’s web presence, asks 4 models how they see the brand, scores it 0–100 on 5 criteria and exports a PDF report.',
    types: ['GenAI'],
    stack: ['Python', 'Flask', 'Crawl4AI', 'Ollama'],
    href: LLM_REPO,
  },
  {
    name: 'Google Cloud Gen AI Academy labs',
    summary: 'Three agents on Cloud Run, including Gemma self-hosted on a Cloud Run GPU and connected to BigQuery through MCP.',
    types: ['GenAI'],
    stack: ['Google ADK', 'Gemini', 'vLLM', 'BigQuery MCP'],
    href: LINKEDIN,
  },
  {
    name: 'Customer Support AI Pipeline',
    summary: 'Ticket classification and response evaluation for tone, accuracy and resolution across LLM providers.',
    types: ['GenAI'],
    stack: ['Python', 'OpenAI', 'Gemini', 'Ollama'],
    href: LLM_REPO,
  },
  {
    name: 'Multi-model chatbot',
    summary: 'Routes each message to a specialist local model and keeps a rolling-summary memory.',
    types: ['GenAI'],
    stack: ['Python', 'Ollama', 'Streamlit'],
    href: LLM_REPO,
  },
  {
    name: 'LLM benchmarking',
    summary: 'Compares latency, tokens and output quality of hosted and local models.',
    types: ['GenAI'],
    stack: ['Python', 'Gemini', 'Ollama'],
    href: LLM_REPO,
  },
  {
    name: 'n8n resume writer',
    summary: 'Local resume-generation workflow with no external APIs.',
    types: ['GenAI'],
    stack: ['n8n', 'Ollama', 'Llama 3'],
    href: LLM_REPO,
  },
  {
    name: 'Power BI dashboards',
    summary: 'Energy consumption (4 dashboards) and quality analysis reports.',
    types: ['BI & Dashboards'],
    stack: ['Power BI', 'DAX'],
    href: `${GITHUB}/Power_BI_Projects`,
  },
  {
    name: 'Manufacturing data ETL',
    summary: 'Source-to-target mappings and transformation logic for backlog and inventory, with Power BI for planning.',
    types: ['BI & Dashboards', 'SQL'],
    stack: ['PostgreSQL', 'dbt', 'Python', 'Power BI'],
    href: LINKEDIN,
  },
  {
    name: 'Retail customer retention',
    summary: 'Cohort-based monthly retention analysis.',
    types: ['BI & Dashboards'],
    stack: ['Power BI'],
    href: LINKEDIN,
  },
  {
    name: 'Parch & Posey sales analysis',
    summary: 'Revenue by channel and region, top sales rep per region, sales trends and retention ratios.',
    types: ['SQL'],
    stack: ['SQL', 'CTEs'],
    href: `${GITHUB}/SQL-Sales-and-business-analysis`,
  },
  {
    name: 'SQL data cleaning & exploration',
    summary: 'Cleaned Nashville housing data and explored COVID data with window functions, CTEs and temp tables.',
    types: ['SQL'],
    stack: ['SQL Server', 'T-SQL'],
    href: `${GITHUB}/PortfolioProjects`,
  },
  {
    name: 'Telecom churn prediction',
    summary: 'Classification on 7,000+ customer records to find what drives churn.',
    types: ['Python & ML'],
    stack: ['pandas', 'scikit-learn'],
    href: DA_REPO,
  },
  {
    name: 'Energy price-sensitivity EDA',
    summary: 'SME churn versus price for a utility, in a BCG-style task.',
    types: ['Python & ML'],
    stack: ['Python', 'pandas'],
    href: DA_REPO,
  },
  {
    name: 'CardioGood customer profiling',
    summary: 'Customer profiles for each treadmill product.',
    types: ['Python & ML'],
    stack: ['Python', 'Statistics'],
    href: DA_REPO,
  },
  {
    name: 'Medical cost & salary prediction',
    summary: 'Regression models, including a salary dataset of 32,000+ rows.',
    types: ['Python & ML'],
    stack: ['Python', 'scikit-learn'],
    href: DA_REPO,
  },
];

export default function MoreProjects() {
  const [active, setActive] = useState<(typeof TYPES)[number]>('All');
  const visible = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.types.includes(active));

  return (
    <div className="mx-auto mt-24 max-w-6xl md:mt-32">
      <h3 className="hero-heading mb-8 text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}>
        More projects
      </h3>

      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {TYPES.map((type) => {
          const count = type === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.types.includes(type)).length;
          const selected = type === active;
          return (
            <button
              key={type}
              onClick={() => setActive(type)}
              aria-pressed={selected}
              className={`rounded-full border-2 px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors sm:px-6 sm:text-sm ${
                selected ? 'border-transparent text-white' : 'border-[#D7E2EA]/40 text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
              }`}
              style={selected ? { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' } : undefined}
            >
              {type} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.a
              layout
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col gap-4 rounded-[32px] border-2 border-[#D7E2EA]/25 p-6 transition-colors hover:border-[#D7E2EA]/70"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-widest text-[#B600A8]">{p.types.join(' · ')}</span>
                <ArrowUpRight size={20} className="shrink-0 text-[#D7E2EA] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h4 className="text-xl font-medium uppercase leading-tight text-[#D7E2EA]">{p.name}</h4>
              <p className="flex-1 font-light leading-relaxed text-[#D7E2EA]/70">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]/80">
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
