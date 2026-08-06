import { useState } from 'react';
import { Check, Loader2, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState<'beginner' | 'professional' | ''>('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !experience) {
      setStatus('error');
      setMessage('Please enter your email and pick a level.');
      return;
    }

    setStatus('loading');
    setMessage('');

    if (!supabase) {
      setStatus('error');
      setMessage('Sign-up is unavailable right now. Please try again later.');
      return;
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, experience });

    if (error) {
      if (error.code === '23505') {
        setStatus('success');
        setMessage("You're already on the list — welcome back!");
        return;
      }
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setMessage("You're in! Check your inbox for your first lesson.");
    setEmail('');
    setExperience('');
  };

  return (
    <section id="newsletter" className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-800 to-base-900 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-500/15 blur-[90px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-300">
                <Mail size={14} /> Free starter kit
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get your first 5 lessons free
              </h2>
              <p className="mt-3 text-slate-300">
                Join 48,000+ working professionals and beginners. One email a week,
                a free starter track, and zero spam. Unsubscribe anytime.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@workemail.com"
                  className="w-full rounded-xl border border-white/10 bg-base-950/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand-400/60"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-200">
                  Where are you starting from?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['beginner', 'professional'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setExperience(opt)}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium capitalize transition-all ${
                        experience === opt
                          ? 'border-brand-400/60 bg-brand-400/15 text-brand-200'
                          : 'border-white/10 bg-base-950/60 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {opt === 'professional' ? 'Working professional' : 'Complete beginner'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-sky-500 px-5 py-3 font-semibold text-base-950 transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : status === 'success' ? (
                  <Check size={18} />
                ) : (
                  <Mail size={18} />
                )}
                {status === 'loading'
                  ? 'Signing you up…'
                  : status === 'success'
                    ? 'Subscribed!'
                    : 'Send me the free lessons'}
              </button>

              {message && (
                <p
                  className={`text-sm ${
                    status === 'error' ? 'text-red-400' : 'text-brand-300'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
