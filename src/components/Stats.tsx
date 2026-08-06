const stats = [
  { value: '48k+', label: 'Working professionals learning' },
  { value: '15 min', label: 'Average lesson length' },
  { value: '120+', label: 'Hands-on projects' },
  { value: '92%', label: 'Complete a track within 90 days' },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-base-900/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center">
            <p className="text-3xl font-bold text-gradient sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
