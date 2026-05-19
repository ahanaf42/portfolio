"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { submitContact } from "../app/actions";

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
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700/80 dark:text-amber-500/80">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-stone-600 dark:text-stone-400">{description}</p>
    </div>
  );
}

function Pill({ children, rotate = false }: { children: React.ReactNode; rotate?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-1 text-sm text-stone-700 dark:text-stone-300 shadow-sm transition-transform duration-300 ${
        rotate ? "hover:-rotate-2 hover:scale-105" : "hover:scale-105"
      }`}
      style={{
        boxShadow: "2px 2px 0px rgba(44, 40, 37, 0.1)",
      }}
    >
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
    <article className="group flex h-full flex-col rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-stone-950/50">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700/80 dark:text-amber-500/80">
          Featured Project
        </span>
        <span className="rounded-sm border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 px-2 py-1 text-xs text-stone-500 dark:text-stone-400">
          Equal focus
        </span>
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{summary}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700 dark:text-stone-300">
        {details.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-700 dark:bg-amber-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Pill key={tag} rotate={i % 2 === 0}>
            {tag}
          </Pill>
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
    <article className="relative rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 shadow-sm transition-shadow hover:shadow-md dark:hover:shadow-stone-950/50">
      <div className="absolute left-0 top-6 h-12 w-1 rounded-r-sm bg-amber-700 dark:bg-amber-500" />
      <div className="pl-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">{title}</h3>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{subtitle}</p>
          </div>
          <span className="rounded-sm border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 px-3 py-1 text-xs text-stone-500 dark:text-stone-400">
            {period}
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-400">{description}</p>
      </div>
    </article>
  );
}

export function PortfolioPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactResult, setContactResult] = useState<{ success: boolean; message: string; error?: string } | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setContactResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await submitContact(null, formData);

    setContactResult(result);
    setIsSubmitting(false);

    if (result.success) {
      form.reset();
    }
  }

  return (
    <main className="text-stone-800 dark:text-stone-200">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-6 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-20 -mx-6 border-b border-stone-200/50 dark:border-stone-800/50 bg-[#fdfbf7]/80 dark:bg-[#1c1917]/80 px-6 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
                Ayoub Hanaf
              </p>
              <p className="font-serif text-xs italic text-stone-500 dark:text-stone-400 mt-0.5">
                Morocco · Software Engineering student
              </p>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-stone-500 dark:text-stone-400 md:flex">
              <Link href="#about" className="transition-colors hover:text-amber-700 dark:hover:text-amber-500">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-amber-700 dark:hover:text-amber-500">
                Skills
              </Link>
              <Link href="#experience" className="transition-colors hover:text-amber-700 dark:hover:text-amber-500">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-amber-700 dark:hover:text-amber-500">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-amber-700 dark:hover:text-amber-500">
                Contact
              </Link>
            </nav>
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            )}
          </div>
        </header>

        <section className="grid items-center gap-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-sm border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-4 py-2 text-sm text-stone-700 dark:text-stone-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for a 6-month graduation internship (PFE)
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-serif text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 sm:text-6xl lg:text-7xl">
                Software engineering student building systems and web products with
                precision.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400 sm:text-xl">
                Based in Morocco and currently seeking a 6-month PFE internship in
                Software Engineering or Full Stack Development. I like working on
                software that feels rigorous, fast, and ready for real users.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Pill rotate>Full-stack mindset</Pill>
              <Pill>Systems-level rigor</Pill>
              <Pill rotate>Recruiter-friendly presentation</Pill>
              <Pill>Print-first UI</Pill>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm bg-amber-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Discuss PFE opportunity
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-6 py-3.5 text-sm font-semibold text-stone-700 dark:text-stone-200 transition-colors hover:bg-stone-50 dark:hover:bg-stone-700 shadow-sm hover:shadow-md"
              >
                View featured projects
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 rotate-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 shadow-sm" />
            <div className="absolute inset-0 -rotate-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 shadow-sm" />
            
            <div className="relative grid gap-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-[#fdfbf7] dark:bg-stone-900 p-6 shadow-lg dark:shadow-stone-950/50">
              <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">
                  Profile Card
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
                  <p className="flex justify-between border-b border-stone-100 dark:border-stone-700/50 pb-1">
                    <span>Name:</span> <span className="font-medium text-stone-900 dark:text-stone-100">Ayoub Hanaf</span>
                  </p>
                  <p className="flex justify-between border-b border-stone-100 dark:border-stone-700/50 pb-1">
                    <span>Location:</span> <span className="font-medium text-stone-900 dark:text-stone-100">Morocco</span>
                  </p>
                  <p className="flex justify-between pb-1">
                    <span>Focus:</span> <span className="font-medium text-stone-900 dark:text-stone-100 text-right">Software Engineering<br/>Full Stack Dev</span>
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">Education track</p>
                  <p className="mt-2 font-serif text-lg font-medium text-stone-900 dark:text-stone-100">1337 School + OFPPT</p>
                </div>
                <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">Project style</p>
                  <p className="mt-2 font-serif text-lg font-medium text-stone-900 dark:text-stone-100">Systems + product engineering</p>
                </div>
              </div>

              <div className="rounded-md border border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/10 p-5 text-sm leading-7 text-amber-900 dark:text-amber-200 shadow-sm">
                <span className="font-serif italic">"Calm, technical, and practical design language tailored for recruiters at companies like Orange, BCG, and UM6P."</span>
              </div>
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
            <div className="rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100">Summary</h3>
              <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                I am a Software Engineering student actively looking for a 6-month PFE
                internship. My background spans full-stack web development, systems
                programming, and server-side architecture, with a preference for work
                that demands clarity, reliability, and thoughtful execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>Morocco</Pill>
                <Pill rotate>Seeking PFE internship</Pill>
                <Pill>Software Engineering</Pill>
                <Pill rotate>Full Stack Development</Pill>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100">Education</h3>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="rounded-md border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 p-5 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-stone-900 dark:text-stone-200">{item.school}</p>
                        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{item.degree}</p>
                      </div>
                      <span className="font-serif text-sm italic text-stone-500 dark:text-stone-500">{item.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-sm lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100">Interests</h3>
              <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                In my free time I enjoy competitive football simulations like PES and
                eFootball, following Moroccan club football, and doing hands-on
                motorcycle mechanics and maintenance on my QJ RKS 125.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center rounded-sm border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 p-4 text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm">
                ⚽ Competitive football
              </div>
              <div className="flex items-center rounded-sm border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 p-4 text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm">
                🇲🇦 Moroccan club football
              </div>
              <div className="flex items-center rounded-sm border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 p-4 text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm">
                🏍️ Motorcycle maintenance
              </div>
              <div className="flex items-center rounded-sm border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 p-4 text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm">
                🔧 Practical problem solving
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group) => (
              <div key={group.title} className="rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm transition-shadow hover:shadow-md dark:hover:shadow-stone-950/50">
                <h3 className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-800 pb-3">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <Pill key={item} rotate={i % 2 !== 0}>{item}</Pill>
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

        <section id="contact" className="scroll-mt-28 pb-20">
          <div className="grid gap-8 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-xl dark:shadow-stone-950/50 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Open to conversations about a 6-month PFE internship."
                description="If you are hiring for software engineering or full stack roles, this section is ready to be wired to your preferred email or application flow."
              />
              <div className="rounded-md border border-stone-200 dark:border-stone-700/50 bg-stone-50 dark:bg-stone-800/30 p-6 shadow-inner">
                <p className="font-serif italic text-stone-600 dark:text-stone-400 text-lg">
                  "The layout is intentionally recruiter-friendly: concise, readable, and easy to scan on desktop or mobile."
                </p>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="grid gap-5 rounded-lg border border-stone-200 dark:border-stone-800 bg-[#fdfbf7] dark:bg-stone-900/50 p-8 shadow-md">
              <h3 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100 mb-2">Send a Message</h3>
              
              {contactResult?.success && (
                <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 text-sm">
                  {contactResult.message}
                </div>
              )}
              {contactResult?.error && (
                <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm">
                  {contactResult.error}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium text-stone-700 dark:text-stone-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 px-4 py-3 text-stone-900 dark:text-stone-100 shadow-sm outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-amber-700 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-700 dark:focus:ring-amber-500"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-stone-700 dark:text-stone-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 px-4 py-3 text-stone-900 dark:text-stone-100 shadow-sm outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-amber-700 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-700 dark:focus:ring-amber-500"
                  />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-medium text-stone-700 dark:text-stone-300">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role, team, and timeline."
                  className="rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 px-4 py-3 text-stone-900 dark:text-stone-100 shadow-sm outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-amber-700 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-700 dark:focus:ring-amber-500 resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-amber-700 dark:bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-amber-800 dark:hover:bg-amber-500 focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-900 disabled:opacity-70 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {isSubmitting ? "Sending..." : "Ready to connect"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}