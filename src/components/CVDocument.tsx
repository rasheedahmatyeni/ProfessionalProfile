import { forwardRef } from 'react';
import { Mail, Linkedin, MapPin, Award } from 'lucide-react';
import { profile, education, workHistory, experience, projects, certificationGroups } from '../data/content';

const skills = [
  { category: 'Software Development', items: ['AI-powered platforms', 'Web development', 'System design'] },
  { category: 'AI & Machine Learning', items: ['Generative AI', 'LLMs', 'ML algorithms'] },
  { category: 'Prompt Engineering', items: ['ChatGPT', 'AI tool configuration', 'Chain-of-thought prompting'] },
  { category: 'Python & Data Science', items: ['Python', 'Data analysis', 'IBM Data Science'] },
  { category: 'Professional Skills', items: ['Communication & presentation', 'Team collaboration', 'Time management', 'Emotional intelligence'] },
];

const cvCertGroups = ['ai-ml', 'prompt-ai-tools', 'data-python', 'ethics-leadership', 'professional-soft-skills'];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
      <span className="h-px flex-1 bg-amber-200" />
      {children}
      <span className="h-px w-4 bg-amber-200" />
    </h2>
  );
}

function SideHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-amber-200 pb-1 text-xs font-bold uppercase tracking-widest text-amber-600">
      {children}
    </h2>
  );
}

export const CVDocument = forwardRef<HTMLDivElement>(function CVDocument(_, ref) {
  const allExperience = [
    {
      role: experience.role,
      org: experience.company,
      location: 'South Africa',
      period: '2025 – Present',
      points: experience.points,
    },
    ...workHistory.map((w) => ({
      role: w.role,
      org: w.organisation,
      location: w.location,
      period: w.period,
      points: w.highlights,
    })),
  ];

  const cvGroups = certificationGroups.filter((g) => cvCertGroups.includes(g.id));

  return (
    <div
      ref={ref}
      className="cv-sheet mx-auto max-w-[860px] bg-white shadow-warm"
      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
    >
      {/* ── Header ─────────────────────────────────────── */}
      <header className="cv-header border-b-4 border-amber-500 bg-[#F5F0E8] px-10 py-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#1A1F23]">
          {profile.name}
        </h1>
        <p className="mt-1.5 text-base font-semibold tracking-wide text-amber-600">
          IT Intern &nbsp;·&nbsp; IT Professional &nbsp;·&nbsp; AI &amp; Software Development Enthusiast
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#5A6469]">
          <span className="flex items-center gap-1.5">
            <Mail size={13} className="text-amber-500" />
            {profile.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Linkedin size={13} className="text-amber-500" />
            {profile.linkedin}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-amber-500" />
            {profile.location}
          </span>
        </div>
      </header>

      <div className="cv-body grid grid-cols-[1fr_260px] gap-0">
        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <main className="cv-left border-r border-[#E8E1D4] px-9 py-8">
          {/* Summary */}
          <section className="cv-section">
            <SectionHeading>Professional Summary</SectionHeading>
            <p className="text-sm leading-relaxed text-[#3F484C]">
              {profile.summary}
            </p>
          </section>

          {/* Experience */}
          <section className="cv-section mt-7">
            <SectionHeading>Work Experience</SectionHeading>
            <div className="space-y-6">
              {allExperience.map((job) => (
                <div key={job.org + job.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <span className="text-sm font-bold text-[#1A1F23]">{job.role}</span>
                      <span className="mx-1.5 text-amber-500">·</span>
                      <span className="text-sm font-semibold text-[#1F5A5A]">{job.org}</span>
                      {job.location && (
                        <span className="ml-1 text-xs text-[#5A6469]">— {job.location}</span>
                      )}
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-4">
                    {job.points.slice(0, 3).map((pt) => (
                      <li key={pt} className="relative text-xs leading-relaxed text-[#5A6469] before:absolute before:-left-3 before:text-amber-400 before:content-['›']">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="cv-section mt-7">
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-4">
              {[...education].reverse().map((ed) => (
                <div key={ed.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-bold text-[#1A1F23]">{ed.title}</span>
                    <span className="whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-[#1F5A5A]">{ed.institution}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5A6469]">{ed.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="cv-section mt-7">
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-bold text-[#1A1F23]">{proj.name}</span>
                    {proj.status && (
                      <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-600 border border-teal-200">
                        {proj.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-[#1F5A5A]">{proj.subtitle}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5A6469]">
                    <span className="font-medium text-[#3F484C]">Role:</span> {proj.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* ── RIGHT SIDEBAR ────────────────────────────── */}
        <aside className="cv-right bg-[#FDFAF4] px-6 py-8">
          {/* Skills */}
          <section className="cv-section">
            <SideHeading>Skills</SideHeading>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.category}>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1A4747]">{s.category}</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-amber-100 px-2 py-0.5 text-xs text-amber-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="cv-section mt-6">
            <SideHeading>Certifications</SideHeading>
            <div className="space-y-4">
              {cvGroups.map((group) => (
                <div key={group.id}>
                  <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-[#1A4747]">
                    {group.title}
                  </p>
                  <ul className="space-y-1">
                    {group.certifications.map((cert) => (
                      <li key={cert.name} className="flex items-start gap-1.5">
                        <Award size={9} className="mt-0.5 flex-shrink-0 text-amber-500" />
                        <span className="text-xs leading-snug text-[#3F484C]">{cert.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E8E1D4] bg-[#F5F0E8] px-10 py-4 text-center">
        <p className="text-xs text-[#5A6469]">
          {profile.name} &nbsp;·&nbsp; {profile.email} &nbsp;·&nbsp; {profile.linkedin}
        </p>
      </footer>
    </div>
  );
});
