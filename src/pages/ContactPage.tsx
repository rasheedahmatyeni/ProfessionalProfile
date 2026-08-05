import { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { profile } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const supabase =
  supabaseUrl && supabaseAnon
    ? createClient(supabaseUrl, supabaseAnon)
    : null;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    if (!supabase) {
      setStatus('error');
      setErrorMsg("The contact form isn't configured. Please email me directly.");
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email me directly.'
      );
    }
  };

  const fields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Your name',
      required: true,
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'you@example.com',
      required: true,
    },
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect"
        intro="Whether it's an opportunity, a collaboration, or just a shared interest in AI — I'd love to hear from you."
      />

      <section className="container-content py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-ivory-200 bg-ivory-50 p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-ink-700">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <p className="text-sm text-ink-600">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ivory-200 bg-ivory-50 p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-ink-700">
                  <Linkedin size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>
                  <p className="text-sm text-ink-600">{profile.linkedin}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-ivory-200 bg-ivory-50 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ivory-200 text-ink-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="text-sm text-ink-600">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ivory-200 bg-ivory-50 p-8 shadow-soft sm:p-10"
            >
              <h2 className="font-serif text-2xl font-semibold text-teal-700">
                Send me a message
              </h2>
              <p className="mt-2 text-sm text-ink-300">
                Fill in the form and I'll get back to you as soon as I can.
              </p>

              <div className="mt-8 space-y-6">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-ink-600"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      value={form[field.id]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field.id]: e.target.value }))
                      }
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm text-ink-700 placeholder:text-slate-300 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Your message..."
                    className="mt-2 w-full resize-y rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm text-ink-700 placeholder:text-slate-300 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-teal-600"
                    />
                    <p className="text-sm text-teal-700">
                      Thank you — your message has been sent. I'll be in touch
                      soon.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-red-600"
                    />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : "Let's Connect"}
                  {status !== 'submitting' && <Send size={16} />}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
