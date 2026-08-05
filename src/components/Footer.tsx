import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { navLinks, routeHref } from '../router';
import { profile } from '../data/content';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ivory-200 bg-ivory-200">
      <div className="container-content py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-serif text-xl font-semibold text-ink-700">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-ink-300">{profile.tagline}</p>
            <p className="mt-5 max-w-xs text-sm text-ink-300">
              Turning ideas into practical, meaningful solutions through AI and
              software.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigate
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.route.name}>
                  <a
                    href={routeHref(link.route)}
                    className="text-sm text-ink-400 transition-colors hover:text-amber-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-ink-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory-300 text-ink-400 transition-colors group-hover:bg-amber-200">
                    <Mail size={15} />
                  </span>
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-ink-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory-300 text-ink-400 transition-colors group-hover:bg-amber-200">
                    <Linkedin size={15} />
                  </span>
                  <span className="flex items-center gap-1">
                    LinkedIn
                    <ArrowUpRight size={13} className="opacity-60" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ivory-300 pt-6 sm:flex-row">
          <p className="text-xs text-ink-300">
            © 2025 {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-300">
            Built with warmth — designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
