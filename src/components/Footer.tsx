import Logo from './Logo';

const columns = [
  {
    title: 'Learn',
    links: ['Curriculum', 'Learning tracks', 'Free starter kit', 'Project library'],
  },
  {
    title: 'Company',
    links: ['About us', 'Mentors', 'Careers', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Community', 'Contact', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy policy', 'Terms of service', 'Refund policy'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-950">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Bite-sized coding lessons for working professionals and absolute
              beginners. Turn your breaks into a new career.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CodeCruncher. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600">
            Built for learners who don't have time to waste.
          </p>
        </div>
      </div>
    </footer>
  );
}
