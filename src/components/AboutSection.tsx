import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import { ContactButton } from './Buttons';

const TEXT =
  "I'm a Data & BI Analyst in Frankfurt with about five years of data work at PMI, Stellantis, Bosch and Daimler Truck. I build Power BI reporting, data-quality automation and SQL and Python pipelines, and I build GenAI tools with LangGraph, RAG and Gemini. EU Blue Card holder, available from January 2027.";

const STATS = [
  { value: '70%', label: 'fewer late data submissions' },
  { value: '60%', label: 'less reporting time' },
  { value: '70+', label: 'markets in my dashboards' },
  { value: '300+', label: 'weekly report users' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10">
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={TEXT}
            className="max-w-[600px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:gap-x-16 md:grid-cols-4">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="flex flex-col items-center text-center">
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                {s.value}
              </span>
              <span className="mt-2 max-w-[140px] text-xs font-light uppercase tracking-wide text-[#D7E2EA] sm:text-sm">{s.label}</span>
            </FadeIn>
          ))}
        </div>
        <ContactButton>Let&apos;s talk</ContactButton>
      </div>
    </section>
  );
}
