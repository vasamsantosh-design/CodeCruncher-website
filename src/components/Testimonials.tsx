const testimonials = [
  {
    quote:
      "I'm a project manager and learned enough JavaScript in three months to automate my team's reporting. The 15-minute format made it actually stick.",
    name: 'Priya Nair',
    role: 'Project Manager → Junior Developer',
  },
  {
    quote:
      "Started as a complete beginner with zero tech background. Nine months later I landed my first frontend role. The mentor reviews made all the difference.",
    name: 'Marcus Bell',
    role: 'Operations Analyst → Frontend Developer',
  },
  {
    quote:
      "I code on my commute, on flights, between meetings. CodeCruncher is the only platform that respected how little free time I actually have.",
    name: 'Sofia Reyes',
    role: 'Marketing Lead → Full-Stack Developer',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learners who turned a break into a career
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-base-900/60 p-7"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="mt-0.5 text-xs text-brand-300">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
