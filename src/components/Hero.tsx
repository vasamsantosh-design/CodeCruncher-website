import { ArrowRight, Code2, Sparkles } from 'lucide-react';

type Token = { text: string; cls?: string };

const codeLines: Token[][] = [
  [{ text: '// 15-min lesson: async functions', cls: 'text-slate-500' }],
  [
    { text: 'async function', cls: 'text-sky-400' },
    { text: ' ' },
    { text: 'crunch', cls: 'text-brand-300' },
    { text: '(task) {' },
  ],
  [
    { text: '  ' },
    { text: 'const', cls: 'text-sky-400' },
    { text: ' result = ' },
    { text: 'await', cls: 'text-sky-400' },
    { text: ' task.run();' },
  ],
  [
    { text: '  ' },
    { text: 'return', cls: 'text-sky-400' },
    { text: ' result.summary;' },
  ],
  [{ text: '}' }],
  [{ text: '' }],
  [{ text: '// Your turn — fix the bug below', cls: 'text-slate-500' }],
  [
    { text: 'const', cls: 'text-sky-400' },
    { text: ' score = ' },
    { text: 'await', cls: 'text-sky-400' },
    { text: ' crunch(dailyGoal);' },
  ],
  [
    { text: 'console.' },
    { text: 'log', cls: 'text-sky-400' },
    { text: '(' },
    { text: '`Streak: ${score} days`', cls: 'text-accent-300' },
    { text: ')', cls: 'cursor-blink text-brand-300' },
  ],
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid pt-32 pb-20">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-10 h-60 w-60 rounded-full bg-sky-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-300">
            <Sparkles size={14} /> Built for busy professionals &amp; absolute beginners
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Crunch code into your
            <br />
            <span className="text-gradient">career breaks.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            CodeCruncher turns 15-minute lunch breaks into real programming skills.
            Bite-sized lessons, hands-on projects, and a path from first line of code
            to job-ready developer — designed around a working adult&apos;s calendar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tracks"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-sky-500 px-6 py-3 font-semibold text-base-950 transition-transform hover:scale-[1.03]"
            >
              Explore learning tracks
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Code2 size={18} /> See the curriculum
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-400" /> No prior experience needed
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" /> Learn at your own pace
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-400" /> Real projects, not just videos
            </span>
          </div>
        </div>

        <div className="relative animate-float-slow">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-base-900/90 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">lesson-03.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              {codeLines.map((tokens, i) => (
                <div key={i}>
                  {tokens.map((t, j) => (
                    <span key={j} className={t.cls}>
                      {t.text}
                    </span>
                  ))}
                </div>
              ))}
            </pre>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-base-800/95 px-4 py-3 shadow-xl">
            <p className="text-xs text-slate-400">Today&apos;s progress</p>
            <p className="font-mono text-lg font-semibold text-brand-300">3 / 5 lessons</p>
          </div>
        </div>
      </div>
    </section>
  );
}
