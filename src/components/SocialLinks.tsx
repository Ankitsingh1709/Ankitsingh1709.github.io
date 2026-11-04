import { Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, GITHUB, LINKEDIN } from './Buttons';

const LINKS = [
  { href: LINKEDIN, label: 'LinkedIn', Icon: Linkedin },
  { href: GITHUB, label: 'GitHub', Icon: Github },
  { href: `mailto:${EMAIL}`, label: 'Email', Icon: Mail },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 md:h-12 md:w-12"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
