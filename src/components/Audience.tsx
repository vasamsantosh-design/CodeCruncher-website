import { Briefcase, GraduationCap } from 'lucide-react';

const professionalPoints = [
  'Reskill or upskill without quitting your job',
  'Turn idle commute and lunch time into a new skill',
  'Switch into a higher-paying tech role',
  'Automate parts of your current job with code',
  'Stay current with modern development practices',
];

const beginnerPoints = [
  'Start with zero assumptions about prior knowledge',
  'Plain-English explanations, not jargon',
  'Build confidence with tiny, early wins',
  'A guided path so you never feel lost on "what next"',
  'A supportive community of fellow first-timers',
];

export default function Audience() {
  return (
    <section id="audience" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Made for two kinds of learners
          </h2>
          <p className="mt-4 text-slate-300">
            Whether you're retooling mid-career or writing your very first line of code,
            CodeCruncher meets you where you are.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Working professionals */}
          <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-400/15 text-sky-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Working Professionals</h3>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              You have a full-time job, limited time, and a real reason to learn — a
              promotion, a pivot, or simply staying sharp. CodeCruncher is built around
              your calendar.
            </p>
            <ul className="mt-6 space-y-3">
              {professionalPoints.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Beginners */}
          <div className="rounded-2xl border border-brand-400/20 bg-brand-500/5 p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-400/15 text-brand-300">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Complete Beginners</h3>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              You've never written code, and the whole thing feels intimidating. We
              start at the very beginning and hold your hand through every concept.
            </p>
            <ul className="mt-6 space-y-3">
              {beginnerPoints.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
