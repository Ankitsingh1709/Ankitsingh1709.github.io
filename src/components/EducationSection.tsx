import { AGENT_COLORS, Built } from './AgentBuild';

const EDUCATION = [
  { title: 'MBA, Business Administration', place: 'Hochschule Hof, Germany', date: '2021 – 2023' },
  { title: 'B.E. Electrical Engineering', place: 'Rajiv Gandhi Technical University, India', date: '2018' },
];

const CERTS = [
  {
    title: 'Power BI Data Analyst (PL-300)',
    place: 'Microsoft · renewed 2026',
    date: '2023',
    href: 'https://learn.microsoft.com/en-us/users/ankitsingh-4978/credentials/f0d9e4c1f763cd6b',
  },
  { title: 'Fabric Analytics Engineer (DP-600)', place: 'Microsoft · exam scheduled', date: 'Nov 2026' },
  {
    title: 'Azure AI Fundamentals (AI-900)',
    place: 'Microsoft',
    date: '2025',
    href: 'https://learn.microsoft.com/en-us/users/ankitsingh-4978/credentials/99b649b902cffef5',
  },
  {
    title: 'Generative AI & Agentic AI for Developers',
    place: 'IIT Patna · 6-month programme',
    date: 'Oct 2026',
    href: 'https://verification.iitpatna.com/verify/IITP/GID/USDC/0112',
  },
  {
    title: 'Google Cloud Gen AI Academy',
    place: 'APAC 2026, Cohort 3 · Hack2skill',
    date: 'Sep 2026',
    href: 'https://certificate.hack2skill.com/claim/5181539e0a8c9420e2f7a0c26e8e822e6dfc18649de90d78703b7e0be8d7a542',
  },
  {
    title: 'Gen AI Academy Ideathon',
    place: 'Google Cloud · participation, Cohort 3',
    date: 'Nov 2026',
    href: 'https://certificate.hack2skill.com/verify/2026H2S09GCGENAIAPACC3I-P00752',
  },
];

type Item = { title: string; place: string; date: string; href?: string };

function List({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium uppercase tracking-widest opacity-60">{heading}</h3>
      {items.map((item, i) => (
        <Built key={item.title} agent="agent/verify" color={AGENT_COLORS[i % AGENT_COLORS.length]} delay={i * 0.15} className="w-full">
        <div className="flex items-baseline justify-between gap-4 border-t border-[#0C0C0C]/15 py-5">
          <div>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="font-medium underline-offset-4 hover:underline" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
                {item.title} ↗
              </a>
            ) : (
              <p className="font-medium" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
                {item.title}
              </p>
            )}
            <p className="font-light opacity-60">{item.place}</p>
          </div>
          <span className="shrink-0 font-light opacity-60">{item.date}</span>
        </div>
        </Built>
      ))}
    </div>
  );
}

export default function EducationSection() {
  return (
    <section className="relative z-20 -mt-10 rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <Built agent="agent/verify" color={AGENT_COLORS[4]} className="mx-auto mb-16 w-fit sm:mb-20">
        <h2 className="text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}>
          Education
        </h2>
      </Built>
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-16">
        <List heading="Degrees" items={EDUCATION} />
        <List heading="Certifications" items={CERTS} />
      </div>
    </section>
  );
}
