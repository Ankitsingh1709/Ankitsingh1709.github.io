import { AGENT_COLORS, Built } from './AgentBuild';
import AnimatedText from './AnimatedText';
import { ContactButton, LINKEDIN } from './Buttons';

const TEXT =
  "I'm Ankit, and I solve problems with data. My data journey started in India and brought me to Germany, where I've worked with Daimler Truck, Bosch, Stellantis and PMI. Sometimes the data I was given didn't answer the right business question, sometimes nobody fully trusted it, and sometimes good data never turned into insight. That's where I come in. SQL, Python, Power BI, dbt, Fabric and BigQuery are tools to me, not medals. I learn what the problem needs, then deliver. At PMI that meant building data-quality checks across 70+ markets and 5+ vendors, fixing a problem that had kept coming back for three years, ever since vendor files moved to a new Snowflake and AWS pipeline. I'm based in Frankfurt and hold an EU Blue Card.";

// Verbatim from LinkedIn recommendations (Oct 2026). Do not paraphrase.
const QUOTES = [
  {
    text: "He doesn't look at technology in isolation. He seeks to understand the business need behind a problem.",
    name: 'Anum Baig',
    role: 'my manager at PMI',
  },
  {
    text: 'He has demonstrated great initiative by developing a data quality report and learning how to leverage Power Automate to speed up early detection and data quality flags.',
    name: 'James Forsyth',
    role: 'Head of Customer Service Performance Management, PMI',
  },
];

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
          <Built agent="agent/writer" color={AGENT_COLORS[0]}>
            <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
              About me
            </h2>
          </Built>
          <AnimatedText
            text={TEXT}
            className="max-w-[680px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <div className="grid max-w-[960px] gap-10 md:grid-cols-2 md:gap-14">
            {QUOTES.map((q, i) => (
              <Built key={q.name} agent="agent/review" color={AGENT_COLORS[2 + i]} delay={0.3 + i * 0.3} className="w-full">
                <figure className="text-center text-[#D7E2EA]">
                  <blockquote className="font-light italic leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}>
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                    {q.name} · {q.role}
                  </figcaption>
                </figure>
              </Built>
            ))}
          </div>
          <a
            href={`${LINKEDIN}/details/recommendations/`}
            target="_blank"
            rel="noreferrer"
            className="-mt-4 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 underline-offset-4 transition-colors hover:text-[#D7E2EA] hover:underline sm:-mt-6 sm:text-sm"
          >
            Read full recommendations on LinkedIn ↗
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:gap-x-16 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Built key={s.label} agent="agent/analyst" color={AGENT_COLORS[(i + 1) % AGENT_COLORS.length]} delay={i * 0.25} className="mx-auto w-fit">
              <div className="flex flex-col items-center text-center">
                <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                  {s.value}
                </span>
                <span className="mt-2 max-w-[140px] text-xs font-light uppercase tracking-wide text-[#D7E2EA] sm:text-sm">{s.label}</span>
              </div>
            </Built>
          ))}
        </div>
        <ContactButton>Let&apos;s talk</ContactButton>
      </div>
    </section>
  );
}
