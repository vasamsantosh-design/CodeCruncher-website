import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'I have a full-time job. How much time do I really need?',
    a: 'Most lessons take 10–15 minutes. We recommend one lesson a day, five days a week — roughly an hour and a half per week. You can go faster or slower; nothing expires.',
  },
  {
    q: "I've never written a single line of code. Is this for me?",
    a: 'Absolutely. The Foundations phase assumes zero prior knowledge and explains every concept in plain English. Thousands of our learners started exactly where you are now.',
  },
  {
    q: 'Do I need to install anything on my computer?',
    a: 'No. Every lesson includes a full coding environment that runs in your browser. If you prefer to set up a local environment later, we walk you through that too — but it is never required.',
  },
  {
    q: 'Are the certificates recognized by employers?',
    a: 'Certificates are issued for completed tracks and reflect real, project-based work. While no certificate guarantees a job, the portfolio you build alongside it is what employers actually evaluate.',
  },
  {
    q: 'Can I learn on my phone or tablet?',
    a: 'Yes. Lessons, videos, and reading work great on mobile. For hands-on coding we recommend a laptop or desktop with a keyboard, but a tablet with a keyboard works too.',
  },
  {
    q: 'What if I get stuck?',
    a: 'Every lesson has a community discussion thread, and Professional plan members get mentor-reviewed feedback on projects. You are never stuck alone.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-white/10 bg-base-900/60"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-white">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
