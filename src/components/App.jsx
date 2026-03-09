import React, { useEffect } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  BoxSelect,
  Compass,
  FileCode2,
  Flag,
  Gauge,
  GitBranch,
  Play,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  Wrench
} from "lucide-react";

const shippedFeatures = [
  {
    title: "Native build pipeline",
    body:
      "Thagore builds native binaries through its Rust compiler pipeline and LLVM 14 backend. Current release assets ship for Windows, macOS, and Linux."
  },
  {
    title: "Compiler tooling",
    body:
      "The public toolchain includes `thagc`, release installers, formatter and LSP-oriented infrastructure, with current packaging centred on reproducible release manifests."
  },
  {
    title: "Browser playground",
    body:
      "The playground uses a dedicated WASM build and browser-safe interpreter so documentation, examples and interactive checks stay aligned with the current language surface."
  },
  {
    title: "Current language focus",
    body:
      "Today the strongest path is a typed, native-first language core with clear syntax, direct build/run workflows, and active work on stronger compile-time contracts."
  }
];

const goals = [
  "A language with a serious native deployment story, not only a syntax experiment.",
  "Compiler-visible program contracts around intent, flow and typestate, added only when they are implementable and diagnosable.",
  "Tooling that is honest about what is shipped now, what is measured, and what is still under construction."
];

const proof = [
  {
    label: "CLI startup",
    value: "14.87 ms",
    meta: "p50 for `thagc --version`, 20 samples"
  },
  {
    label: "Tiny build",
    value: "342.75 ms",
    meta: "p50 for `thagc build`, 8 samples"
  },
  {
    label: "Native runtime sample",
    value: "6.08 ms",
    meta: "p50 on the public benchmark pack, 12 samples"
  },
  {
    label: "Public benchmark source",
    value: "8f82706e",
    meta: "benchmark pack dated 2026-03-03 UTC"
  }
];

const releaseFacts = [
  "Current public line: v0.9.6",
  "Windows, macOS and Linux release assets published",
  "Docs, installers and playground updated on the same line",
  "This project remains marked as in development"
];

const roadmap = [
  {
    title: "Bootstrap and trust",
    body:
      "Strengthen bootstrap contracts, seed toolchain rules, and release acceptance so public binaries match the source and CI story more closely."
  },
  {
    title: "Toolchain reliability",
    body:
      "Reduce manual release handling, harden install/update paths, and keep cross-platform smoke checks as part of normal release work."
  },
  {
    title: "Language direction",
    body:
      "Advance typestate, intent and flow carefully: only with diagnostics, tests and clear boundaries between implemented language and proposed language."
  }
];

const links = [
  {
    label: "Install",
    href: "https://docs.thagore.org/install/quick-start/"
  },
  {
    label: "Documentation",
    href: "https://docs.thagore.org/"
  },
  {
    label: "Playground",
    href: "https://playground.thagore.org/"
  },
  {
    label: "GitHub",
    href: "https://github.com/thagore-foundation/thagore"
  }
];

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("landing-ready");
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-shell">
      <div className="landing-noise" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Thagore home">
          <img src="/thagore-logo.svg" alt="Thagore" />
          <span>Thagore</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#ship">Shipped</a>
          <a href="#proof">Measured</a>
          <a href="#goals">Goals</a>
          <a href="#future">Future</a>
        </nav>
        <a className="topbar-cta" href="https://docs.thagore.org/install/quick-start/">
          Install
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <Flag size={16} />
              <span>In development toolchain</span>
            </div>
            <h1>
              A native language project
              <span>built in public, measured in public, and still under active construction.</span>
            </h1>
            <p className="hero-lead">
              Thagore is a programming language and toolchain project focused on native builds,
              compiler-visible program structure, and a serious release story across Windows,
              macOS and Linux. This landing page only states what is shipped, measured, or
              explicitly planned.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="https://docs.thagore.org/install/quick-start/">
                <TerminalSquare size={18} />
                <span>Install v0.9.6</span>
              </a>
              <a className="secondary-link" href="https://docs.thagore.org/">
                <span>Read the docs</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <aside className="hero-panel" data-reveal>
            <div className="warning-card">
              <div className="warning-head">
                <ShieldAlert size={18} />
                <span>Status warning</span>
              </div>
              <p>
                Thagore is not presented here as a finished platform. The public release track is
                <strong> indev</strong>. Interfaces, capabilities and release handling may still
                change.
              </p>
            </div>
            <div className="apology-card">
              <div className="warning-head">
                <AlertTriangle size={18} />
                <span>About the previous landing page</span>
              </div>
              <p>
                The previous site overclaimed, compared Thagore recklessly to other languages, and
                blurred the line between shipped work and aspiration. That was a mistake. This page
                is the correction.
              </p>
            </div>
          </aside>
        </section>

        <section className="statement-band" data-reveal>
          <div>
            <Sparkles size={18} />
            <span>What this page does</span>
          </div>
          <p>
            It describes the current toolchain, the measured performance numbers that exist in the
            repository today, the direction of the language, and the work still ahead.
          </p>
        </section>

        <section className="section-grid" id="ship">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Shipped now</span>
            <h2>Current features and standout points</h2>
            <p>
              These are present in the current public line. They are not promises about an imagined
              future implementation.
            </p>
          </div>
          <div className="feature-grid">
            {shippedFeatures.map((item, index) => (
              <article className="feature-card" data-reveal key={item.title} style={{ transitionDelay: `${index * 70}ms` }}>
                <div className="feature-index">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-layout" id="proof">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Measured and tested</span>
            <h2>Performance numbers from the public benchmark pack</h2>
            <p>
              Latest published benchmark pack in the repository: commit <strong>8f82706e</strong>,
              timestamp <strong>2026-03-03T17:55:52Z</strong>. These figures are reported as measured
              data, not as universal claims.
            </p>
          </div>
          <div className="proof-grid">
            {proof.map((item, index) => (
              <article className="proof-card" data-reveal key={item.label} style={{ transitionDelay: `${index * 60}ms` }}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.meta}</p>
              </article>
            ))}
          </div>
          <div className="proof-note" data-reveal>
            <Gauge size={18} />
            <p>
              Public release verification for the current line includes installer, docs, Windows
              executable output, and playground deployment. Re-run the benchmark pack before making
              fresh performance statements.
            </p>
          </div>
        </section>

        <section className="dual-panel" id="goals">
          <article className="panel serious-panel" data-reveal>
            <div className="panel-head">
              <Compass size={18} />
              <span>What Thagore is trying to become</span>
            </div>
            <ul>
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </article>
          <article className="panel release-panel" data-reveal>
            <div className="panel-head">
              <Boxes size={18} />
              <span>Current public release facts</span>
            </div>
            <ul>
              {releaseFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="direction" id="future">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Future work</span>
            <h2>Next priorities</h2>
            <p>
              The next serious release should improve trust in the toolchain and reduce hand-edited
              release work, not decorate the project with bigger claims.
            </p>
          </div>
          <div className="roadmap-grid">
            {roadmap.map((item, index) => (
              <article className="roadmap-card" data-reveal key={item.title} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="panel-head">
                  {index === 0 ? <GitBranch size={18} /> : index === 1 ? <Wrench size={18} /> : <BoxSelect size={18} />}
                  <span>{item.title}</span>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-strip" data-reveal>
          <div>
            <span className="section-kicker">Use the project carefully</span>
            <h2>Install, read, test, and verify against the current release line.</h2>
          </div>
          <div className="cta-links">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-mark">
          <img src="/thagore-logo.svg" alt="Thagore" />
          <div>
            <strong>Thagore</strong>
            <span>Compiler, runtime, tooling, and browser playground.</span>
          </div>
        </div>
        <div className="footer-meta">
          <span>No language comparisons.</span>
          <span>No stability claims.</span>
          <span>Only shipped, measured, or planned work.</span>
        </div>
      </footer>
    </div>
  );
}
