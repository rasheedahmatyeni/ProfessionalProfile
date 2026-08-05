import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, routeHref, useRoute, type Route } from '../router';
import { profile } from '../data/content';

export function Navbar() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  const isActive = (r: Route) => r.name === route.name;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-100/85 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between py-4">
        <a
          href={routeHref({ name: 'home' })}
          className="group flex items-center gap-3"
          aria-label="Rasheedah Matyeni — home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-serif text-lg font-semibold text-ivory-50 transition-transform duration-300 group-hover:scale-105">
            RM
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-base font-semibold text-ink-700">
              {profile.name}
            </span>
            <span className="text-xs text-ink-300">{profile.title}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.route.name}>
              <a
                href={routeHref(link.route)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.route)
                    ? 'text-ink-700'
                    : 'text-ink-300 hover:text-ink-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-amber-500 transition-transform duration-300 ${
                    isActive(link.route) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink-700 transition-colors hover:bg-ivory-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-ivory-200 bg-ivory-100/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-content flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.route.name}>
              <a
                href={routeHref(link.route)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.route)
                    ? 'bg-amber-50 text-ink-700'
                    : 'text-ink-400 hover:bg-ivory-200'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
