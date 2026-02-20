"use client";

import Image from "next/image";
import AiBackground from "@/components/AiBackground";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Github,
  Mail,
  MapPin,
  Phone,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Wrench,
  Code2,
  Users,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useMemo, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // smooth "easeOut"-like curve
    },
  }),
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  const NAME = "Madhav Kaushik";
  const EMAIL = "madhavkaushikx7@gmail.com";
  const PHONE = "825-461-2856";
  const LOCATION = "Edmonton, AB";

  // Socials (your provided links)
  const GITHUB_URL = "https://github.com/madhavkaushik06";
  const LINKEDIN_URL = "https://www.linkedin.com/in/madhav-kaushik-b6a752211/";
  const INSTAGRAM_URL = "https://www.instagram.com/paneer_bhujia/";

  // Files in /public
  const PROFILE_PHOTO = "/me.jpeg";

  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Opportunity / Collaboration");
    const body = encodeURIComponent(
      `Hi Madhav,\n\nI saw your portfolio and wanted to reach out about...\n\n—`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [EMAIL]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = mailto;
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white/20">
      <AiBackground />

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        {/* TOP BAR */}
        <motion.nav
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-800 bg-zinc-900/40 text-sm font-semibold">
              MK
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">{NAME}</div>
              <div className="flex items-center gap-1 text-zinc-400">
                <MapPin size={14} /> {LOCATION}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm hover:border-zinc-600" href="#about">
              About
            </a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm hover:border-zinc-600" href="#photos">
              Photos
            </a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm hover:border-zinc-600" href="#experience">
              Experience
            </a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm hover:border-zinc-600" href="#certs">
              Certifications
            </a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm hover:border-zinc-600" href="#projects">
              Projects
            </a>
            <a className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm hover:border-zinc-600" href="#contact">
              Contact
            </a>
          </div>
        </motion.nav>

        {/* HERO */}
        <section className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-sm text-zinc-300"
            >
              <GraduationCap size={16} />
              Computer Science Undergraduate • Founder
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Building real projects that look clean and work fast.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="mt-4 max-w-2xl text-zinc-300"
            >
              I’m a Computer Science undergraduate and entrepreneur based in Edmonton. I’ve built and
              scaled a local service business while developing strong skills in customer experience,
              operations, and technical problem solving.
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white"
              >
                <Mail size={16} /> Email me
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy email"}
              </button>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={16} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Instagram size={16} /> Instagram <ArrowUpRight size={16} />
              </a>

              <a
                href="/Madhav-Kaushik-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                Resume <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* SKILL PILLS */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={5}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                "Python",
                "HTML & CSS",
                "Cloud Fundamentals",
                "Git & GitHub",
                "Customer Service",
                "Operations",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-900/60 transition"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* PROFILE CARD */}
          <motion.aside
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={6}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40">
                <Image src={PROFILE_PHOTO} alt={NAME} fill className="object-cover" priority />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">{NAME}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                  <Mail size={14} /> {EMAIL}
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                  <Phone size={14} /> {PHONE}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <MiniStat title="$10k+ revenue" sub="WeedOutYEG (6 months)" />
              <MiniStat title="50+ 5-star reviews" sub="Consistent service delivery" />
              <MiniStat title="Inventory & ops" sub="Retail + community roles" />
            </div>

            <div className="mt-6 grid gap-2">
              <SocialRow icon={<Github size={16} />} label="GitHub" href={GITHUB_URL} />
              <SocialRow icon={<Linkedin size={16} />} label="LinkedIn" href={LINKEDIN_URL} />
              <SocialRow icon={<Instagram size={16} />} label="Instagram" href={INSTAGRAM_URL} />
            </div>
          </motion.aside>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20"
        >
          <SectionHeader icon={<GraduationCap size={18} />} title="About me" />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <p className="text-zinc-300">
                I’m a Computer Science undergraduate at MacEwan University (Class of 2028) and a builder
                who likes learning by doing. I’m also the founder of WeedOutYEG, where I’ve handled
                real-world operations like pricing, scheduling, customer experience, and scaling.
              </p>
              <p className="mt-4 text-zinc-300">
                On the technical side, I’m focused on Python and web development, and I’m currently building
                projects that combine clean UI with practical functionality. I’m looking for opportunities
                where I can contribute fast, learn fast, and ship real work.
              </p>
            </Card>

            <Card>
              <div className="text-sm text-zinc-400">Education</div>
              <div className="mt-3 font-semibold text-white">BSc Computer Science</div>
              <div className="text-zinc-400">MacEwan University • Class of 2028</div>
              <div className="mt-4 text-sm text-zinc-300">
                Courses/learning: CS50 Python, CS50 AI (Harvard edX)
              </div>
            </Card>
          </div>
        </motion.section>

        {/* PHOTOS */}
        <motion.section
          id="photos"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 space-y-4"
        >
          <SectionHeader icon={<Users size={18} />} title="Photos" />
          <p className="text-zinc-300">A few moments from work, projects, and life.</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["/me.jpeg", "/me2.jpeg", "/me3.jpeg", "/me4.jpeg"].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30"
              >
                <Image
                  src={src}
                  alt={`Madhav photo ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE (updated using your job details) */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20"
        >
          <SectionHeader icon={<Briefcase size={18} />} title="Experience" />
          <div className="mt-6 grid gap-4">
            <ExpCard
              role="Grocery Clerk — Save-On-Foods"
              meta="Edmonton • Sep 2024 – Present"
              bullets={[
                "Managed inventory, stocked shelves, rotated products for freshness, and kept aisles organized and clean.",
                "Worked with receiving to unload deliveries, verify shipments, and restock efficiently.",
                "Ran inventory counts, monitored stock levels, and flagged low/overstock items for timely replenishment.",
                "Contributed to improving store layout and product placement to support seasonal promotions and visual appeal.",
                "Recognized for strong efficiency and attention to detail; improved replenishment flow and reduced stock outages by ~20%.",
              ]}
            />

            <ExpCard
              role="Founder & Owner — WeedOutYEG"
              meta="Edmonton • Jun 2024 – Present"
              bullets={[
                "Founded and operated a seasonal weed removal business serving residential clients across Edmonton.",
                "Generated $10,000+ in revenue within six months of summer operations.",
                "Earned 50+ five-star reviews through consistent, high-quality service delivery.",
                "Built pricing strategies, optimized routes, and improved repeat-customer retention.",
              ]}
            />

            <ExpCard
              role="Student Volunteer — Edmonton’s Food Bank"
              meta="Edmonton • Jul 2020 – Present"
              bullets={[
                "Sorted and organized incoming food donations; inspected items for quality and safety standards.",
                "Assembled and packaged food hampers for distribution, ensuring dietary and quantity requirements were met.",
                "Supported community food drives by assisting with awareness and collection logistics.",
                "Helped improve processing efficiency by working closely with volunteers to streamline sorting and packing workflows.",
              ]}
            />

            <ExpCard
              role="Cadet — Canadian Forces Cadet Instructors Cadre (CIC)"
              meta="Edmonton • Apr 2019 – Present"
              bullets={[
                "Participated in leadership training, team-building, and community service initiatives.",
                "Helped organize cadet events and drills; ensured activities ran smoothly and on time.",
                "Mentored younger cadets by providing guidance and support, building confidence and responsibility.",
                "Recognized for reliability, teamwork, and commitment to service.",
              ]}
            />
          </div>
        </motion.section>

        {/* CERTIFICATIONS + TOOLS */}
        <motion.section
          id="certs"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <SectionHeaderSmall icon={<BadgeCheck size={18} />} title="Certifications" />
              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>IBM Cloud Computing Core (2026)</li>
                <li>AWS Cloud Careers edX (2026)</li>
                <li>Python PCEP & PCAP (2021)</li>
              </ul>
            </Card>

            <Card>
              <SectionHeaderSmall icon={<Wrench size={18} />} title="Tools" />
              <div className="mt-4 flex flex-wrap gap-2">
                {["VS Code", "GitHub", "Command Line", "Google Workspace"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-sm text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20"
        >
          <SectionHeader icon={<Code2 size={18} />} title="Projects" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="WeedOutYEG Website"
              desc="Designed and developed a clean, responsive webpage to showcase services, pricing, and contact info, improving local visibility and customer inquiries."
              tags={["HTML", "CSS", "Responsive"]}
              href="#"
            />
            <ProjectCard
              title="CS50 Python"
              desc="Built problem-solving programs using loops, conditionals, and functions."
              tags={["Python"]}
              href="#"
            />
            <ProjectCard
              title="CS50 AI"
              desc="Implemented introductory AI concepts including search, logic, and Python-based decision models."
              tags={["Python", "AI"]}
              href="#"
            />
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mt-20 pb-10"
        >
          <SectionHeader icon={<Mail size={18} />} title="Contact" />
          <Card className="mt-6">
            <p className="text-zinc-300">
              Want to collaborate or talk about an opportunity? Email is best.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white"
              >
                <Mail size={16} /> Email me
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Copy size={16} />
                {copied ? "Copied!" : "Copy email"}
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} />
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={16} />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/30 px-4 py-2 text-sm font-semibold hover:border-zinc-500"
              >
                <Instagram size={16} /> Instagram <ArrowUpRight size={16} />
              </a>
            </div>
          </Card>
        </motion.section>

        <footer className="border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} {NAME}
        </footer>
      </div>
    </main>
  );
}

/* ---------- UI Components ---------- */

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-zinc-300">{icon}</span>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}

function SectionHeaderSmall({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-zinc-300">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 ${className}`}>
      {children}
    </div>
  );
}

function MiniStat({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="font-semibold text-white">{title}</div>
      <div className="text-sm text-zinc-400">{sub}</div>
    </div>
  );
}

function ExpCard({
  role,
  meta,
  bullets,
}: {
  role: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="text-lg font-semibold text-white">{role}</div>
        <div className="text-sm text-zinc-400">{meta}</div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  href,
}: {
  title: string;
  desc: string;
  tags: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5 hover:border-zinc-600 transition"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold group-hover:text-white">{title}</div>
        <ArrowUpRight className="text-zinc-500" size={18} />
      </div>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

function SocialRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm hover:border-zinc-600"
    >
      <span className="flex items-center gap-2 text-zinc-200">
        {icon} {label}
      </span>
      <ArrowUpRight size={16} className="text-zinc-500" />
    </a>
  );
}