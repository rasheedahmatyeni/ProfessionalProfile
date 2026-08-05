import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'education' }
  | { name: 'experience' }
  | { name: 'projects' }
  | { name: 'certifications' }
  | { name: 'contact' }
  | { name: 'cv' };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0].trim();
  switch (hash) {
    case 'about':
      return { name: 'about' };
    case 'education':
      return { name: 'education' };
    case 'experience':
    case 'work':
      return { name: 'experience' };
    case 'projects':
      return { name: 'projects' };
    case 'certifications':
      return { name: 'certifications' };
    case 'contact':
      return { name: 'contact' };
    case 'cv':
      return { name: 'cv' };
    default:
      return { name: 'home' };
  }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash());

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export const navLinks: { label: string; route: Route }[] = [
  { label: 'Home', route: { name: 'home' } },
  { label: 'About', route: { name: 'about' } },
  { label: 'Education', route: { name: 'education' } },
  { label: 'Experience', route: { name: 'experience' } },
  { label: 'Projects', route: { name: 'projects' } },
  { label: 'Certifications', route: { name: 'certifications' } },
  { label: 'Contact', route: { name: 'contact' } },
];

export function routeHref(route: Route): string {
  if (route.name === 'home') return '#/';
  return `#/${route.name}`;
}
