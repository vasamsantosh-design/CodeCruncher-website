import { Check } from 'lucide-react';

const modules = [
  {
    phase: 'Phase 01',
    title: 'Foundations',
    weeks: 'Weeks 1–3',
    points: [
      'How computers interpret your code',
      'Variables, types, and control flow',
      'Your first program — and debugging it',
      'Reading error messages without panic',
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Core Skills',
    weeks: 'Weeks 4–8',
    points: [
      'Functions, arrays, and objects in depth',
      'Working with APIs and real data',
      'Version control with Git & GitHub',
      'Building a complete small project',
    ],
  },
  {
    phase: 'Phase 03',
    title: 'Specialization',
    weeks: 'Weeks 9–16',
    points: [
      'Pick a track: frontend, backend, or data',
      'Frameworks and industry tooling',
      'Testing, deployment, and best practices',
      'A capstone project reviewed by mentors',
    ],
  },
  {
    phase: 'Phase 04',
    title: 'Career Launch',
    weeks: 'Weeks 17+',
    points: [
      'Resume and portfolio polishing',
      'Mock technical interviews',
      'Open-source contribution practice',
      'Job-readiness review with mentors',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A clear path from beginner to hireable
          </h2>
          <p className="mt-4 text-slate-300">
            Four phases, each building on the last. You always know what comes next
            and why it matters.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div
              key={m.phase}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-base-800/60 to-base-900/60 p-6"
            >
              <p className="font-mono text-xs font-medium text-brand-300">{m.phase}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{m.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{m.weeks}</p>
              <ul className="mt-5 space-y-3">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
