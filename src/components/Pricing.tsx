import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    desc: 'For trying it out and learning the fundamentals.',
    features: [
      'Access to Phase 01: Foundations',
      'First 20 lessons free',
      'Community discussion access',
      'Browser-based code editor',
    ],
    cta: 'Start learning free',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$24',
    period: '/month',
    desc: 'For working professionals going all in.',
    features: [
      'All tracks and every phase',
      'Mentor-reviewed project feedback',
      'Industry-verified certificates',
      'Mock interviews & career coaching',
      'Offline lesson downloads',
      'Priority community support',
    ],
    cta: 'Go Professional',
    highlighted: true,
  },
  {
    name: 'Team',
    price: 'Custom',
    period: '',
    desc: 'For upskilling an entire team or org.',
    features: [
      'Everything in Professional',
      'Team dashboard & progress tracking',
      'Dedicated learning paths per role',
      'Manager analytics reports',
      'Single sign-on (SSO)',
    ],
    cta: 'Talk to us',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pricing that fits a working budget
          </h2>
          <p className="mt-4 text-slate-300">
            Start free, upgrade when you're ready. Cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.highlighted
                  ? 'border-brand-400/50 bg-gradient-to-b from-brand-500/10 to-base-900/60 shadow-xl shadow-brand-500/10'
                  : 'border-white/10 bg-base-900/60'
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 to-sky-500 px-3 py-1 text-xs font-semibold text-base-950">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="mb-1 text-sm text-slate-400">{p.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-slate-200">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#newsletter"
                className={`mt-7 rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.highlighted
                    ? 'bg-gradient-to-r from-brand-400 to-sky-500 text-base-950'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
