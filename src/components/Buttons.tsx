import type { ReactNode } from 'react';

export const EMAIL = 'ankitsingh.de@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/ankit-ankit';
export const GITHUB = 'https://github.com/Ankitsingh1709';

export function ContactButton({ href = `mailto:${EMAIL}`, children = 'Contact Me' }: { href?: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {children}
    </a>
  );
}

export function LiveProjectButton({ href, children = 'Live Project' }: { href: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="shrink-0 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 sm:px-10 sm:py-3.5 text-xs sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
    >
      {children}
    </a>
  );
}
