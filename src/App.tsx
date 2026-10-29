import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { CosmicBackground } from './components/canvas/CosmicBackground';
import { Hero3DScene } from './components/canvas/Hero3DScene';
import { portfolioData, type SkillCategory } from './data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const tabs: Array<'labs' | 'education' | 'work'> = ['labs', 'education', 'work'];
const categories: Array<'All' | SkillCategory> = ['All', 'Prompt Engineering', 'LLM Paradigms', 'AI Workflows & Output', 'Testing & Optimization'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');
  const [activeSkillTitle, setActiveSkillTitle] = useState(portfolioData.skills[0].title);
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioData.projects)[number] | null>(null);
  const [selectedExperienceTab, setSelectedExperienceTab] = useState<'labs' | 'education' | 'work'>('labs');
  const [showResume, setShowResume] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') return portfolioData.skills;
    return portfolioData.skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  const activeSkill = filteredSkills.find((skill) => skill.title === activeSkillTitle) ?? filteredSkills[0] ?? portfolioData.skills[0];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setFormMessage('Please complete all fields before sending the message.');
      return;
    }

    setFormMessage('Thank you! Your message has been queued for follow-up.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-space-950 text-slate-100">
      <CosmicBackground />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-space-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 font-display text-lg font-bold tracking-wide text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-purple-600 text-sm text-slate-950 shadow-neon-cyan">
              GN
            </span>
            Gunavathi Natam
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setShowResume(true)}
            className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            Resume
          </button>
        </div>
      </header>

      <main id="home" className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-violet-200">
                <Sparkles className="h-3.5 w-3.5" />
                Prompt Engineering Specialist
              </div>

              <div className="space-y-5">
                <h1 className="max-w-xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                  {portfolioData.personal.headline}
                </h1>
                <p className="max-w-lg text-lg leading-8 text-slate-300">{portfolioData.personal.subheadline}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-medium text-slate-950 shadow-neon-cyan transition hover:scale-[1.02]"
                >
                  Explore My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowResume(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-300/60 hover:bg-white/10"
                >
                  About Me
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-slate-300">
                <button type="button" onClick={() => handleCopy('prompt-template')} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-300/60">
                  <Copy className="h-4 w-4 text-cyan-300" />
                  {copied ? 'Copied!' : 'Copy Prompt'}
                </button>
                <div className="flex items-center gap-3">
                  <a href={portfolioData.personal.githubPlaceholder} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900/60 p-2 transition hover:border-cyan-300/60">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={portfolioData.personal.linkedinPlaceholder} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900/60 p-2 transition hover:border-cyan-300/60">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${portfolioData.personal.email}`} className="rounded-full border border-white/10 bg-slate-900/60 p-2 transition hover:border-cyan-300/60">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {portfolioData.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-black text-cyan-300">{stat.value}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-violet-500/10 to-purple-500/15 blur-2xl" />
              <div className="glass-panel relative h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-space-900/70 p-4 shadow-[0_0_60px_rgba(79,70,229,0.25)]">
                <div className="mb-6 flex items-center justify-between px-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    live terminal
                  </div>
                  <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                    AI core
                  </div>
                </div>

                <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/80">
                  <Hero3DScene />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">About</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Engineering better AI interactions</h2>
            </div>
            <div className="hidden rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200 md:block">
              Verified by practice
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-base leading-8 text-slate-300">
                I work at the intersection of human intention and machine execution. My approach focuses on making prompts more precise,
                outputs more structured, and AI workflows easier to trust across creative and analytical tasks.
              </p>
              <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm text-violet-100">
                <span className="font-semibold text-white">Verification promise:</span> I do not claim fabricated credentials or inflated results. My practice is grounded in real experimentation, prompt evaluation, and transparent iteration.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.pillars.map((pillar) => (
                <div key={pillar.title} className="glass-panel rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Skill architecture</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Prompt engineering patterns that scale</h2>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? 'border-cyan-300 bg-cyan-500/15 text-cyan-100'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-4">
              {filteredSkills.map((skill) => (
                <button
                  type="button"
                  key={skill.title}
                  onClick={() => setActiveSkillTitle(skill.title)}
                  className={`rounded-[1.5rem] border p-4 text-left transition ${
                    activeSkill.title === skill.title
                      ? 'border-cyan-300/70 bg-cyan-500/10 shadow-neon-cyan'
                      : 'border-white/10 bg-slate-900/60 hover:border-cyan-300/40 hover:bg-white/5'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-semibold text-white">{skill.title}</span>
                    <ChevronRight className="h-4 w-4 text-cyan-300" />
                  </div>
                  <p className="text-sm text-slate-300">{skill.description}</p>
                </button>
              ))}
            </div>

            <div className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Pattern inspector</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">{activeSkill.title}</h3>
                </div>
                <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                  {activeSkill.category}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Formula</p>
                  <p className="rounded-2xl border border-white/10 bg-space-950/60 p-4 font-mono text-sm text-cyan-200">{activeSkill.formula}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Use case</p>
                  <p className="text-base leading-7 text-slate-300">{activeSkill.useCase}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Prompt template</p>
                  <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-space-950/60 p-4 font-mono text-xs leading-6 text-slate-200">
                    {activeSkill.promptTemplate}
                  </pre>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(activeSkill.promptTemplate)}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/15"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? 'Template copied' : 'Copy template'}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Projects</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Concepts and prototypes in active development</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.projects.map((project) => (
              <article key={project.id} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-200">
                    {project.category}
                  </span>
                  <span className="text-xs text-cyan-300">{project.metric}</span>
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold text-white">{project.name}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-300">{project.summary}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                >
                  View details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Experience</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Hands-on labs, learning, and practice</h2>
          </div>

          <div className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/60 p-5 sm:p-6">
            <div className="mb-6 flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedExperienceTab(tab)}
                  className={`rounded-full border px-4 py-2 text-sm capitalize transition ${
                    selectedExperienceTab === tab
                      ? 'border-cyan-300 bg-cyan-500/15 text-cyan-100'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(portfolioData.experience[selectedExperienceTab] ?? []).map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-space-950/50 p-5">
                  <div className="mb-3 flex items-center gap-2 text-cyan-300">
                    {selectedExperienceTab === 'labs' ? <Sparkles className="h-4 w-4" /> : selectedExperienceTab === 'education' ? <BookOpen className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                    <span className="text-xs uppercase tracking-[0.2em]">{item.meta}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Certifications</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Verified learning milestones</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.certifications.map((cert) => (
              <div key={`${cert.name}-${cert.year}`} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{cert.year}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-white">{cert.name}</h3>
                <p className="text-sm text-slate-300">{cert.issuer}</p>
                <div className="mt-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Contact</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Let’s build something intelligent</h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <span>{portfolioData.personal.emailPlaceholder}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Github className="h-4 w-4 text-cyan-300" />
                  <a href={portfolioData.personal.githubPlaceholder} target="_blank" rel="noreferrer">GitHub profile</a>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Linkedin className="h-4 w-4 text-cyan-300" />
                  <a href={portfolioData.personal.linkedinPlaceholder} target="_blank" rel="noreferrer">LinkedIn profile</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] border border-white/10 bg-slate-900/65 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  <span className="mb-2 block">Name</span>
                  <input
                    value={formState.name}
                    onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-space-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                    placeholder="Your name"
                  />
                </label>

                <label className="text-sm text-slate-300">
                  <span className="mb-2 block">Email</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-space-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm text-slate-300">
                <span className="mb-2 block">Subject</span>
                <input
                  value={formState.subject}
                  onChange={(event) => setFormState((current) => ({ ...current, subject: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-space-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                  placeholder="Project, collaboration, or role"
                />
              </label>

              <label className="mt-5 block text-sm text-slate-300">
                <span className="mb-2 block">Message</span>
                <textarea
                  value={formState.message}
                  onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-space-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
                  placeholder="Tell me about the challenge, goal, or workflow you'd like to build."
                />
              </label>

              {formMessage && <p className="mt-4 text-sm text-cyan-200">{formMessage}</p>}

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-medium text-slate-950 shadow-neon-cyan transition hover:scale-[1.01]"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-space-950/90 px-4 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Crafted for intelligent product experiences.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="transition hover:text-cyan-300">Back to top</a>
            <a href={`mailto:${portfolioData.personal.email}`} className="transition hover:text-cyan-300">Email</a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-space-900 p-6 shadow-[0_0_60px_rgba(6,182,212,0.25)]">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Prototype</p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white">{selectedProject.name}</h3>
              </div>
              <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:border-cyan-300/50">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Objective</p>
                <p className="text-base leading-7 text-slate-200">{selectedProject.objective}</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Scenario</p>
                <p className="text-base leading-7 text-slate-200">{selectedProject.scenario}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <h4 className="mb-3 font-display text-xl text-white">Prompt blueprint</h4>
                <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-cyan-100">{selectedProject.prompt}</pre>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <h4 className="mb-3 font-display text-xl text-white">Workflow</h4>
                <ul className="space-y-2 text-sm text-slate-200">
                  {selectedProject.workflow.map((step, index) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-0.5 text-cyan-300">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <h4 className="mb-3 font-display text-xl text-white">Evaluation</h4>
                <ul className="space-y-2 text-sm text-slate-200">
                  {selectedProject.rubric.map((criterion) => (
                    <li key={criterion} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleCopy(selectedProject.prompt)}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                <Copy className="h-4 w-4" />
                {copied ? 'Copied' : 'Copy prompt'}
              </button>
              <button type="button" onClick={() => setSelectedProject(null)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-space-900 p-6 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl font-bold text-white">Resume status</h3>
              <button type="button" onClick={() => setShowResume(false)} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:border-cyan-300/50">
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mb-6 leading-7 text-slate-300">
              The portfolio is intentionally designed to reveal honest qualifications and practical AI experimentation. Once a verified resume is added to the public folder, the download action becomes active.
            </p>

            {portfolioData.personal.resumeAvailable ? (
              <a href="/Gunavathi_Natam_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-medium text-slate-950">
                <Download className="h-4 w-4" />
                Download resume
              </a>
            ) : (
              <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-100">
                Resume download is currently inactive until a final PDF is placed in the public directory.
              </div>
            )}

            <div className="mt-6 flex items-center justify-end">
              <button type="button" onClick={() => setShowResume(false)} className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100">
                Close
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
