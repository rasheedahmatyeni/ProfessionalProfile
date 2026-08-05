import { Tag, User, Wrench, Flag, AlertCircle, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Things I'm building"
        intro="A growing portfolio of work across health, networking, and AI — from hackathon research to a ticketing system that triages itself."
      />

      <section className="container-content py-20">
        <div className="space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <article className="group overflow-hidden rounded-3xl border border-ivory-200 bg-ivory-50 transition-all duration-300 hover:border-amber-300 hover:shadow-warm">
                <div className="grid md:grid-cols-[auto_1fr]">
                  {/* Visual sidebar */}
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-amber-200 via-ivory-300 to-teal-400 px-10 py-12 md:w-56">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 50%)',
                      }}
                    />
                    <span className="relative font-serif text-6xl">
                      {project.emoji}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-2xl font-semibold text-teal-700">
                        {project.name}
                      </h3>
                      {project.status && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-amber-700">
                      {project.subtitle}
                    </p>

                    {project.sector || project.focus ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.sector && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory-300 px-3 py-1 text-xs font-medium text-ink-500">
                            <Tag size={12} /> Sector: {project.sector}
                          </span>
                        )}
                        {project.focus && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory-300 px-3 py-1 text-xs font-medium text-ink-500">
                            <Flag size={12} /> {project.focus}
                          </span>
                        )}
                      </div>
                    ) : null}

                    <p className="mt-5 text-sm leading-relaxed text-ink-400">
                      {project.solution}
                    </p>

                    {project.problem && (
                      <div className="mt-4 flex items-start gap-3 rounded-xl border border-slate-200 bg-ivory-200 p-4">
                        <AlertCircle
                          size={16}
                          className="mt-0.5 flex-shrink-0 text-slate-500"
                        />
                        <p className="text-sm leading-relaxed text-ink-400">
                          {project.problem}
                        </p>
                      </div>
                    )}

                    <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          <User size={13} /> Role
                        </dt>
                        <dd className="mt-1.5 text-sm text-ink-500">
                          {project.role}
                        </dd>
                      </div>
                      {project.tools && (
                        <div>
                          <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            <Wrench size={13} /> Tools
                          </dt>
                          <dd className="mt-1.5 text-sm text-ink-500">
                            {project.tools}
                          </dd>
                        </div>
                      )}
                      {project.outcome && (
                        <div>
                          <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            <Flag size={13} /> Outcome
                          </dt>
                          <dd className="mt-1.5 text-sm text-ink-500">
                            {project.outcome}
                          </dd>
                        </div>
                      )}
                    </dl>

                    {project.link && (
                      <a
                        href={project.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 underline-offset-4 transition-colors hover:text-amber-700 hover:underline"
                      >
                        {project.link.label}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
