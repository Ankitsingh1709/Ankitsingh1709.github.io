import { AGENT_COLORS, Built } from './AgentBuild';
import SocialLinks from './SocialLinks';
import { EMAIL, ContactButton } from './Buttons';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-30 -mt-10 flex min-h-[80vh] flex-col items-center justify-center gap-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-24 text-center sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <Built agent="agent/writer" color={AGENT_COLORS[0]}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Let&apos;s talk
        </h2>
      </Built>
      <Built agent="agent/writer" color={AGENT_COLORS[0]} delay={0.4}>
        <p className="max-w-[520px] font-light leading-relaxed text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
          Open to BI, data analyst and analytics engineer roles in Germany. Hybrid, on-site or remote.
        </p>
      </Built>
      <Built agent="agent/router" color={AGENT_COLORS[1]} delay={0.8}>
        <div className="flex flex-col items-center gap-6">
          <ContactButton>{EMAIL}</ContactButton>
          <SocialLinks />
        </div>
      </Built>
      <div className="absolute bottom-6 flex flex-col items-center gap-2">
        <Built agent="agent/review" color={AGENT_COLORS[2]} delay={1.2}>
          <p className="font-mono text-xs text-[#D7E2EA]/60">◇ The sections above were placed by agents while you scrolled.</p>
        </Built>
        <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">© 2026 Ankit Singh · Frankfurt am Main</p>
      </div>
    </section>
  );
}
