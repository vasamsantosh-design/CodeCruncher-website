import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'For You', href: '#audience' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-base-950/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#newsletter"
            className="rounded-lg bg-gradient-to-r from-brand-400 to-sky-500 px-4 py-2 text-sm font-semibold text-base-950 transition-transform hover:scale-[1.03]"
          >
            Start Free
          </a>
        </div>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-base-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-gradient-to-r from-brand-400 to-sky-500 px-4 py-2 text-center text-sm font-semibold text-base-950"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
