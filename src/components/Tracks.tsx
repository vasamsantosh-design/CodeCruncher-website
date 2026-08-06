import { Code2, Database, Server, Brain, Smartphone, Shield } from 'lucide-react';

const tracks = [
  {
    icon: Code2,
    name: 'Web Development Fundamentals',
    level: 'Beginner',
    time: '8 weeks',
    lessons: 42,
    desc: 'HTML, CSS, and JavaScript from zero. Build and deploy your first three interactive websites.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Database,
    name: 'Data & SQL Essentials',
    level: 'Beginner → Intermediate',
    time: '6 weeks',
    lessons: 30,
    desc: 'Query databases, design schemas, and turn raw data into insights your team can act on.',
    tags: ['SQL', 'PostgreSQL', 'Analytics'],
  },
  {
    icon: Server,
    name: 'Backend with Node.js',
    level: 'Intermediate',
    time: '10 weeks',
    lessons: 48,
    desc: 'Build APIs, handle auth, connect databases, and deploy production services to the cloud.',
    tags: ['Node.js', 'APIs', 'Auth'],
  },
  {
    icon: Smartphone,
    name: 'Frontend with React',
    level: 'Intermediate',
    time: '9 weeks',
    lessons: 45,
    desc: 'Component architecture, state management, and the patterns used in real product teams.',
    tags: ['React', 'TypeScript', 'UI'],
  },
  {
    icon: Shield,
    name: 'DevOps & Cloud Basics',
    level: 'Intermediate',
    time: '7 weeks',
    lessons: 28,
    desc: 'Docker, CI/CD, and deploying applications with confidence. From local to production.',
    tags: ['Docker', 'CI/CD', 'AWS'],
  },
  {
    icon: Brain,
    name: 'DSA & Interview Prep',
    level: 'All levels',
    time: '12 weeks',
    lessons: 60,
    desc: 'Data structures, algorithms, and the patterns behind every technical interview question.',
    tags: ['Algorithms', 'Patterns', 'Mock Interviews'],
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learning tracks for every goal
          </h2>
          <p className="mt-4 text-slate-300">
            Pick a track and follow a structured path. Each one is broken into
            bite-sized lessons you can finish during a lunch break.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-base-900/60 p-6 transition-all duration-300 hover:border-sky-400/40 hover:bg-base-800/60"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-400/10 text-sky-400">
                  <t.icon size={22} />
                </div>
                <span className="rounded-full bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-300">
                  {t.level}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{t.desc}</p>

              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                <span>{t.time}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>{t.lessons} lessons</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
