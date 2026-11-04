import { Fragment } from 'react';
import FadeIn from './FadeIn';

const JOBS = [
  {
    role: 'Data & BI Analyst',
    company: 'Philip Morris International (via YER)',
    dates: 'Jan 2025 – Present · Frankfurt',
    desc: 'I run reporting for global customer service across 70+ markets: Power BI dashboards, data-quality automation and the quarterly business review for leadership.',
  },
  {
    role: 'Customer Experience Data Analyst',
    company: 'Stellantis Germany',
    dates: 'Jan 2024 – Dec 2024 · Frankfurt',
    desc: 'Built one shared data model for sales and after-sales across 3 business units, cutting decision-making time by 60%.',
  },
  {
    role: 'Market & Customer Insights Intern',
    company: 'Bosch Engineering',
    dates: 'Jul 2023 – Dec 2023 · Abstatt',
    desc: 'Market and customer analysis that shaped the launch strategy for a new consumer product.',
  },
  {
    role: 'Market Intelligence Intern',
    company: 'Daimler Truck',
    dates: 'May 2022 – May 2023 · Stuttgart',
    desc: 'Turned data from 4 departments into 10 Power BI dashboards, saving 3 days of manual reporting a month.',
  },
  {
    role: 'Data Analyst Associate',
    company: 'Anuation Research & Consulting',
    dates: 'Aug 2018 – Oct 2020 · New Delhi',
    desc: 'Global client reporting and market research, raising reporting efficiency by 20%.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Experience
      </h2>
      <div className="mx-auto max-w-5xl">
        {JOBS.map((job, i) => (
          <Fragment key={job.company}>
            {i > 0 && <div style={{ height: 1, background: 'rgba(12, 12, 12, 0.15)' }} />}
            <FadeIn delay={i * 0.1} className="flex items-start gap-6 py-8 text-[#0C0C0C] sm:gap-10 sm:py-10 md:gap-16 md:py-12">
              <span className="font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {job.role}
                </h3>
                <p className="font-medium" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)' }}>
                  {job.company} <span className="font-light opacity-60">· {job.dates}</span>
                </p>
                <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {job.desc}
                </p>
              </div>
            </FadeIn>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
