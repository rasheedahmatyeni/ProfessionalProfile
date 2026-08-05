import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import { profile } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect"
        intro="Whether it's an opportunity, a collaboration, or just a shared interest in AI — I'd love to hear from you."
      />

      <section className="container-content py-20">
        <Reveal>
          <div className="mx-auto max-w-lg space-y-4">
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

            <a
              href="https://github.com/rasheedahmatyeni"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ivory-200 bg-ivory-50 p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-ink-700">
                <Github size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  GitHub
                </p>
                <p className="text-sm text-ink-600">@rasheedahmatyeni</p>
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
      </section>
    </>
  );
}
