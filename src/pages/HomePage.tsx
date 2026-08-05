import { ArrowRight, Sparkles, GraduationCap, Briefcase, Award, Download, Loader2 } from 'lucide-react';
import { profile } from '../data/content';
import { routeHref } from '../router';
import { Reveal } from '../components/Reveal';
import { CVDocument } from '../components/CVDocument';
import { useCvDownload } from '../hooks/useCvDownload';

export function HomePage() {
  const { cvRef, downloading, download } = useCvDownload();

  return (
    <>
      {/* Hidden CV document rendered for PDF generation — visible to html2canvas but not the user */}
      <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, width: '900px', zIndex: -1, opacity: 0, pointerEvents: 'none' }}>
        <CVDocument ref={cvRef} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory-200 via-ivory-100 to-ivory-100">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 10%, rgba(212, 154, 63, 0.16), transparent 40%), radial-gradient(circle at 10% 90%, rgba(31, 90, 90, 0.10), transparent 45%)',
          }}
        />
        <div className="container-content relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-700">
              <Sparkles size={14} />
              {profile.title}
            </span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-teal-700 sm:text-6xl md:text-7xl">
              {profile.firstName}
              <span className="block text-ink-600">Matyeni</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ink-300">
              {profile.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-400">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={routeHref({ name: 'projects' })} className="btn-primary">
                View My Work
                <ArrowRight size={16} />
              </a>
              <button
                onClick={download}
                disabled={downloading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-warm transition-all duration-300 hover:bg-amber-600 active:scale-95 disabled:cursor-wait disabled:opacity-70"
              >
                {downloading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Generating…
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download CV
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Photo — elegant decorative frame */}
          <div className="relative mx-auto w-full max-w-sm animate-scale-in lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-ivory-200 shadow-warm">
              <img
                src="/IMG_6686.png"
                alt={`${profile.name} — ${profile.title}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-ivory-100/90 px-5 py-4 backdrop-blur-sm">
                <p className="font-serif text-lg font-semibold text-ink-700">
                  {profile.name}
                </p>
                <p className="text-xs text-ink-300">{profile.location}</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-amber-300 bg-ivory-100/60 backdrop-blur-sm" />
            <div className="absolute -bottom-3 -left-3 h-14 w-14 rounded-full bg-amber-300/70" />
          </div>
        </div>
      </section>

      {/* Highlights / quick nav */}
      <section className="container-content py-20">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            Explore
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-semibold text-teal-700 sm:text-4xl">
            A journey in technology
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: 'Experience',
              text: 'IT Intern at CAPACITI GQ — building real solutions with modern, AI-powered tools.',
              route: { name: 'experience' as const },
            },
            {
              icon: GraduationCap,
              title: 'Education',
              text: 'From an IT Management diploma to an Advanced Diploma in Information Resource Management.',
              route: { name: 'education' as const },
            },
            {
              icon: Award,
              title: 'Projects',
              text: 'A rural emergency app, an NPO networking solution, and an AI automated ticketing system.',
              route: { name: 'projects' as const },
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <a
                href={routeHref(card.route)}
                className="group block h-full rounded-2xl border border-ivory-200 bg-ivory-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-warm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-ivory-50">
                  <card.icon size={22} />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-teal-700">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {card.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 transition-transform group-hover:translate-x-1">
                  Explore
                  <ArrowRight size={15} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications teaser */}
      <section className="border-y border-ivory-200 bg-ivory-200">
        <div className="container-content py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                Always learning
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-teal-700 sm:text-4xl">
                20+ certifications across AI, data, and ethics
              </h2>
              <p className="mt-5 max-w-xl text-ink-400">
                From foundational machine learning to prompt engineering and
                responsible AI, every certification is a deliberate step toward
                building technology thoughtfully.
              </p>
              <a
                href={routeHref({ name: 'certifications' })}
                className="btn-primary mt-7"
              >
                View all certifications
                <ArrowRight size={16} />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Google AI Essentials',
                  'Generative AI with LLMs',
                  'Python for Data Science',
                  'Advanced Learning Algorithms',
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-4 text-sm font-medium text-ink-500"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
