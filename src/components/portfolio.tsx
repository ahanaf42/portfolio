import Link from "next/link";

const skills = [
  {
    title: "Languages",
    items: ["C", "C++", "TypeScript"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "NestJS",
      "HTTP/1.1 protocols",
      "REST APIs",
      "Dependency Injection",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Makefiles"],
  },
  {
    title: "Core Concepts",
    items: [
      "Low-level system programming",
      "Memory management",
      "Web engineering",
    ],
  },
];

const projects = [
  {
    name: "ft_transcendence",
    summary:
      "Architected a full-stack Single Page Application for a real-time multiplayer Pong platform.",
    details: [
      "Designed the game-facing SPA experience with a responsive, production-minded interface.",
      "Balanced real-time interaction, structured state, and a polished user journey.",
      "Built for extensibility so new gameplay and social features can slot in cleanly.",
    ],
    tags: ["Full-stack SPA", "Real-time multiplayer", "Product thinking"],
  },
  {
    name: "Webserv",
    summary:
      "Built a fully functional HTTP/1.1 compliant web server from scratch in C++.",
    details: [
      "Implemented protocol-aware request handling with a strong focus on correctness.",
      "Applied object-oriented design to keep the server maintainable and testable.",
      "Demonstrated deep understanding of networking, parsing, and server lifecycle control.",
    ],
    tags: ["C++", "HTTP/1.1", "Systems programming"],
  },
  {
    name: "Minishell",
    summary:
      "Recreated a functional Unix shell supporting pipelines, redirections, and environment variables.",
    details: [
      "Handled shell command parsing and execution flow with careful process management.",
      "Implemented pipelines, redirections, and environment variable behavior.",
      "Strengthened command-line tooling instincts through low-level Unix mechanics.",
    ],
    tags: ["Unix shell", "Pipelines", "Process control"],
  },
];

const experience = [
  {
    role: "Web Developer & IT Manager",
    company: "SantaCruz Hostel, Tamraght",
    period: "End-of-Studies Internship, 2023",
    summary:
      "Handled web development and IT support responsibilities in a real business environment, strengthening delivery discipline and operational awareness.",
  },
];

const education = [
  {
    school: "1337 School (42 Network), Benguerir",
    degree: "Software Engineering and Computer Science",
    period: "2023 - Present",
  },
  {
    school: "OFPPT (ISTA), Morocco",
    degree: "Specialized Diploma in Full Stack Web Development",
    period: "2021 - 2023",
  },
  {
    school: "Aourir High School",
    degree: "Baccalaureate in Physics (Scientific Option)",
    period: "2020",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
      {children}
    </span>
  );
}

function ProjectCard({
  name,
  summary,
  details,
  tags,
}: {
  name: string;
  summary: string;
  details: string[];
  tags: string[];
}) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/7">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          Featured Project
        </span>
        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
          Equal focus
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {details.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
    </article>
  );
}

function TimelineCard({
  title,
  subtitle,
  period,
  description,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}) {
  return (
    <article className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-6">
      <div className="absolute left-0 top-6 h-12 w-1 rounded-r-full bg-gradient-to-b from-cyan-300 to-amber-300" />
      <div className="pl-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {period}
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </article>
  );
}

export function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_right,_rgba(251,191,36,0.08),_transparent_28%),linear-gradient(180deg,_#050816_0%,_#08111f_40%,_#03050b_100%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-6 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-20 -mx-6 border-b border-white/5 bg-slate-950/70 px-6 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
                Ayoub Hanaf
              </p>
              <p className="text-xs text-slate-400">Morocco · Software Engineering student</p>
            </div>
            <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
              <Link href="#about" className="transition hover:text-white">
                About
              </Link>
              <Link href="#skills" className="transition hover:text-white">
                Skills
              </Link>
              <Link href="#experience" className="transition hover:text-white">
                Experience
              </Link>
              <Link href="#projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="#contact" className="transition hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <section className="grid items-center gap-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Available for a 6-month graduation internship (PFE)
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Software engineering student building systems and web products with
                precision.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Based in Morocco and currently seeking a 6-month PFE internship in
                Software Engineering or Full Stack Development. I like working on
                software that feels rigorous, fast, and ready for real users.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Pill>Full-stack mindset</Pill>
              <Pill>Systems-level rigor</Pill>
              <Pill>Recruiter-friendly presentation</Pill>
              <Pill>Dark-mode first UI</Pill>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Discuss PFE opportunity
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                View featured projects
              </Link>
            </div>
          </div>

          <aside className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Profile
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <p>
                  Name: <span className="text-white">Ayoub Hanaf</span>
                </p>
                <p>
                  Location: <span className="text-white">Morocco</span>
                </p>
                <p>
                  Focus: <span className="text-white">Software Engineering / Full Stack Development</span>
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                <p className="text-sm text-slate-400">Education track</p>
                <p className="mt-2 text-lg font-semibold text-white">1337 School + OFPPT</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                <p className="text-sm text-slate-400">Project style</p>
                <p className="mt-2 text-lg font-semibold text-white">Systems + product engineering</p>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/10 p-5 text-sm leading-7 text-amber-50/90">
              Calm, technical, and practical design language tailored for recruiters at
              companies like Orange, BCG, and UM6P.
            </div>
          </aside>
        </section>

        <section id="about" className="space-y-8 scroll-mt-28">
          <SectionHeading
            eyebrow="About"
            title="A focused profile with strong systems instincts and web delivery experience."
            description="I combine low-level engineering interests with modern web development, which gives me a broad technical base and a strong appreciation for how software behaves under real constraints."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Summary</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I am a Software Engineering student actively looking for a 6-month PFE
                internship. My background spans full-stack web development, systems
                programming, and server-side architecture, with a preference for work
                that demands clarity, reliability, and thoughtful execution.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Morocco</Pill>
                <Pill>Seeking PFE internship</Pill>
                <Pill>Software Engineering</Pill>
                <Pill>Full Stack Development</Pill>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white">{item.school}</p>
                        <p className="mt-1 text-sm text-slate-300">{item.degree}</p>
                      </div>
                      <span className="text-xs text-slate-400">{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="text-xl font-semibold text-white">Interests</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                In my free time I enjoy competitive football simulations like PES and
                eFootball, following Moroccan club football, and doing hands-on
                motorcycle mechanics and maintenance on my QJ RKS 125.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                Competitive football simulations
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                Moroccan club football
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                Motorcycle maintenance
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                Practical problem solving
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-8 scroll-mt-28">
          <SectionHeading
            eyebrow="Skills"
            title="Technical depth across programming, backend architecture, and delivery tooling."
            description="This skill set reflects both product-focused full stack work and low-level engineering habits."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8 scroll-mt-28">
          <SectionHeading
            eyebrow="Experience"
            title="Real-world responsibility in a hospitality environment sharpened delivery and support instincts."
            description="A professional internship at SantaCruz Hostel gave me exposure to practical web and IT work, and to the expectations that come with supporting a live business."
          />

          <div className="space-y-4">
            {experience.map((item) => (
              <TimelineCard
                key={`${item.role}-${item.company}`}
                title={item.role}
                subtitle={item.company}
                period={item.period}
                description={item.summary}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8 scroll-mt-28">
          <SectionHeading
            eyebrow="Projects"
            title="Three flagship projects, each presented with equal emphasis."
            description="These projects demonstrate breadth across product engineering, protocol awareness, and low-level Unix behavior."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 pb-10">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,28,0.96),rgba(16,23,40,0.9))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Contact"
                title="Open to conversations about a 6-month PFE internship."
                description="If you are hiring for software engineering or full stack roles, this section is ready to be wired to your preferred email or application flow."
              />
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                The layout is intentionally recruiter-friendly: concise, readable, and
                easy to scan on desktop or mobile.
              </p>
            </div>

            <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-200">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-200">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-slate-200">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell me about the role, team, and timeline."
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                />
              </label>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Ready to connect
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}