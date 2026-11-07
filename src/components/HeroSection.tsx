import { AGENT_COLORS, Built } from './AgentBuild';
import Magnet from './Magnet';
import Avatar from './Avatar';
import SocialLinks from './SocialLinks';
import { ContactButton } from './Buttons';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <nav className="relative z-30 flex justify-between px-6 pt-6 md:px-10 md:pt-8">
        {['About', 'Experience', 'Projects', 'Contact'].map((label, i) => (
          <Built key={label} agent="agent/nav" color={AGENT_COLORS[(i + 1) % AGENT_COLORS.length]} delay={0.15 + i * 0.12}>
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {label}
          </a>
          </Built>
        ))}
      </nav>

      <div>
        <Built agent="agent/writer" color={AGENT_COLORS[0]} className="w-full">
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[14vw] md:-mt-3 md:text-[15vw] lg:text-[15.5vw]">
            Hi, i&apos;m ankit
          </h1>
        </Built>
      </div>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 top-1/2 z-10 w-[300px] -translate-x-1/2 -translate-y-1/2 sm:bottom-24 sm:top-auto sm:w-[420px] sm:translate-y-0 md:w-[480px] lg:w-[560px]"
      >
        <Built agent="agent/design" color={AGENT_COLORS[3]} delay={0.3} className="w-full">
          <Avatar />
        </Built>
      </Magnet>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <div className="flex flex-col gap-4">
          <Built agent="agent/writer" color={AGENT_COLORS[0]} delay={0.6}>
          <p
            className="max-w-[170px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[230px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            data &amp; bi analyst who automates reporting and builds genai tools
          </p>
          </Built>
          <Built agent="agent/router" color={AGENT_COLORS[1]} delay={0.75}>
            <SocialLinks />
          </Built>
        </div>
        <Built agent="agent/router" color={AGENT_COLORS[4]} delay={0.9}>
          <ContactButton href="#contact" />
        </Built>
      </div>
    </section>
  );
}
