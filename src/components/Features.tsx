import { Clock, Target, Users, Laptop, BadgeCheck, Rocket } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '15-minute lessons',
    desc: "Every lesson fits in a coffee break, a commute, or the gap between meetings. No more 'I don't have time to learn'.",
  },
  {
    icon: Target,
    title: 'Project-first learning',
    desc: 'Build real, portfolio-worthy apps from day one. You write code, run it, and ship it — not just watch someone else.',
  },
  {
    icon: Laptop,
    title: 'No setup required',
    desc: 'A full coding environment runs right in your browser. Open a lesson and start typing. Nothing to install or configure.',
  },
  {
    icon: Users,
    title: 'Mentor-reviewed work',
    desc: 'Submit projects and get feedback from working engineers. Learn the habits that actually ship software in the industry.',
  },
  {
    icon: BadgeCheck,
    title: 'Industry certificates',
    desc: 'Earn a verifiable certificate for every completed track. Share it on LinkedIn and show employers real, demonstrated skill.',
  },
  {
    icon: Rocket,
    title: 'Career-ready tracks',
    desc: 'From "what is a variable?" to system design interviews — follow a clear path mapped to real junior and mid-level roles.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why professionals choose CodeCruncher
          </h2>
          <p className="mt-4 text-slate-300">
            We rebuilt the learning experience around the reality of a working adult's
            schedule — short, focused, and genuinely practical.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-base-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-base-800/60"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-400/10 text-brand-300 transition-colors group-hover:bg-brand-400/20">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
