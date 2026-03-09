import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  BoxSelect,
  Compass,
  Flag,
  Gauge,
  GitBranch,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  Wrench
} from "lucide-react";

const copy = {
  en: {
    nav: {
      shipped: "Shipped",
      ideas: "Ideas",
      measured: "Measured",
      goals: "Goals",
      future: "Future"
    },
    install: "Install",
    community: "Join Discord",
    communityNote: "Discuss, debate, and send feedback to the community.",
    eyebrow: "In development toolchain",
    heroTitle: "A native language project",
    heroTitleSub:
      "built for resilient systems, measured in public, and still under active construction.",
    heroLead:
      "Thagore is a programming language designed for resilient and adaptable software, where programs can continue from prior state after interruption instead of treating every failure as a full restart. This page states what is shipped, what is measured, and what is still in progress.",
    heroPrimary: "Install v0.9.6",
    heroSecondary: "Read the docs",
    warningTitle: "Status warning",
    warningBody:
      "Thagore is not presented here as a finished platform. The public release track is indev. Interfaces, capabilities and release handling may still change.",
    apologyTitle: "About the previous landing page",
    apologyBody:
      "The previous site overclaimed, compared Thagore recklessly to other languages, and blurred the line between shipped work and aspiration. That was a mistake. This page is the correction.",
    statementTitle: "What this page does",
    statementBody:
      "It describes the current toolchain, the strongest ideas behind the project, the measured performance numbers already published in the repository, and the work still ahead.",
    shippedKicker: "Shipped now",
    shippedTitle: "Current features and standout points",
    shippedBody:
      "These are present in the current public line. They are not promises about an imagined future implementation.",
    shippedFeatures: [
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
    ],
    ideasKicker: "Two core ideas",
    ideasTitle: "Flow and Intent are the clearest long-term bets",
    ideasBody:
      "These are not presented as fully shipped language features today. They are the two strongest ideas behind Thagore's direction and the reason the project keeps pushing on compiler-visible structure instead of surface syntax alone.",
    ideas: [
      {
        title: "Flow",
        body:
          "Flow aims to let multi-step processes and workflows resume from earlier state after server restart or system disruption, reducing operational mistakes and improving application reliability."
      },
      {
        title: "Intent",
        body:
          "Intent aims to let developers describe what the code is trying to achieve, so the compiler can apply bounded, testable optimizations or generate more effective code paths."
      }
    ],
    measuredKicker: "Measured and tested",
    measuredTitle: "Performance numbers from the public benchmark pack",
    measuredBody:
      "Latest published benchmark pack in the repository: commit 8f82706e, timestamp 2026-03-03T17:55:52Z. These figures are reported as measured data, not as universal claims.",
    proof: [
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
    ],
    proofNote:
      "Public release verification for the current line includes installer, docs, Windows executable output, and playground deployment. Re-run the benchmark pack before making fresh performance statements.",
    goalsKicker: "Target systems",
    goalsTitle: "Where Thagore is intended to matter",
    goalsBody:
      "The near-term direction is resilient software and long-running operational systems, not generic hype about being for everything at once.",
    goals: [
      "Backend services",
      "Workflow automation",
      "Task pipelines",
      "Asynchronous processing systems",
      "Payment systems",
      "Order processing",
      "Distributed jobs",
      "AI workflows"
    ],
    releaseTitle: "Current public release facts",
    releaseFacts: [
      "Current public line: v0.9.6",
      "Windows, macOS and Linux release assets published",
      "Docs, installers and playground updated on the same line",
      "This project remains marked as in development"
    ],
    futureKicker: "Future work",
    futureTitle: "Longer-term range",
    futureBody:
      "Beyond the main resilience goal, Thagore is being kept light and flexible enough to expand into more domains over time.",
    roadmap: [
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
        title: "Future application range",
        body:
          "Desktop applications with HTML-based UI, Android applications, game engines and scripting, developer tools, automation, and broader AI workflow systems are future-facing targets rather than present claims."
      }
    ],
    unifiedTitle: "Long-term objective",
    unifiedBody:
      "The long-term objective is a unified programming platform where the same language can be used to build servers, applications, and more complex interactive systems without pretending that all of that already exists today.",
    ctaKicker: "Use the project carefully",
    ctaTitle: "Install, read, test, and verify against the current release line.",
    footer: [
      "No language comparisons.",
      "No stability claims.",
      "Only shipped, measured, or planned work."
    ]
  },
  vi: {
    nav: {
      shipped: "Hiện có",
      ideas: "Ý tưởng",
      measured: "Đo đạc",
      goals: "Mục tiêu",
      future: "Tương lai"
    },
    install: "Cài đặt",
    community: "Vào Discord",
    communityNote: "Thảo luận, tranh luận và góp ý cùng cộng đồng.",
    eyebrow: "Toolchain đang phát triển",
    heroTitle: "Một dự án ngôn ngữ native",
    heroTitleSub:
      "được thiết kế cho các hệ thống bền vững, đo đạc công khai, và vẫn đang được hoàn thiện tích cực.",
    heroLead:
      "Thagore là một ngôn ngữ lập trình được thiết kế để xây dựng ứng dụng bền vững và linh hoạt, nơi chương trình có thể tiếp tục từ trạng thái trước đó sau khi bị gián đoạn thay vì xem mọi lỗi như một lần khởi động lại hoàn toàn. Trang này chỉ ghi những gì đã phát hành, đã đo đạc và đang được làm tiếp.",
    heroPrimary: "Cài v0.9.6",
    heroSecondary: "Đọc tài liệu",
    warningTitle: "Cảnh báo trạng thái",
    warningBody:
      "Thagore không được giới thiệu ở đây như một nền tảng đã hoàn thiện. Nhánh phát hành công khai hiện là indev. Giao diện, khả năng và quy trình phát hành vẫn có thể thay đổi.",
    apologyTitle: "Về landing page trước đó",
    apologyBody:
      "Trang trước đã overclaim, so sánh Thagore một cách thiếu nghiêm túc với các ngôn ngữ khác và làm mờ ranh giới giữa phần đã ship và phần mới chỉ là định hướng. Đó là sai lầm. Trang này là bản sửa lại.",
    statementTitle: "Trang này làm gì",
    statementBody:
      "Nó mô tả toolchain hiện tại, hai ý tưởng mạnh nhất của dự án, các số đo hiệu năng đã được công bố trong repository, và phần việc còn ở phía trước.",
    shippedKicker: "Hiện có",
    shippedTitle: "Những gì đang có và đáng chú ý",
    shippedBody:
      "Đây là những gì nằm trong nhánh public hiện tại. Không phải các lời hứa về một tương lai tưởng tượng.",
    shippedFeatures: [
      {
        title: "Pipeline build native",
        body:
          "Thagore tạo binary native qua compiler pipeline viết bằng Rust và backend LLVM 14. Release hiện có asset cho Windows, macOS và Linux."
      },
      {
        title: "Compiler tooling",
        body:
          "Toolchain public hiện gồm `thagc`, release installer, formatter và hạ tầng phục vụ LSP, với đóng gói xoay quanh release manifest có thể kiểm tra lại."
      },
      {
        title: "Browser playground",
        body:
          "Playground dùng build WASM riêng và interpreter an toàn cho trình duyệt để tài liệu, ví dụ và phần kiểm tra tương tác bám sát bề mặt ngôn ngữ hiện tại."
      },
      {
        title: "Trọng tâm ngôn ngữ hiện tại",
        body:
          "Hiện nay đường đi rõ nhất là một lõi ngôn ngữ typed, native-first, cú pháp rõ ràng, build/run trực tiếp, và tiếp tục đầu tư vào các compile-time contract mạnh hơn."
      }
    ],
    ideasKicker: "Hai ý tưởng cốt lõi",
    ideasTitle: "Flow và Intent là hai hướng đáng giá nhất",
    ideasBody:
      "Chúng không được trình bày như các tính năng ngôn ngữ đã ship hoàn chỉnh hôm nay. Đây là hai ý tưởng mạnh nhất phía sau định hướng của Thagore, và là lý do dự án tiếp tục đầu tư vào cấu trúc mà compiler có thể hiểu được chứ không chỉ vào cú pháp bề mặt.",
    ideas: [
      {
        title: "Flow",
        body:
          "Flow hướng tới việc cho phép các tiến trình nhiều bước và workflow tiếp tục từ trạng thái trước đó khi server restart hoặc hệ thống bị gián đoạn, từ đó giảm lỗi vận hành và tăng độ tin cậy."
      },
      {
        title: "Intent",
        body:
          "Intent hướng tới việc cho phép lập trình viên mô tả ý định của đoạn code, để compiler có thể áp dụng các tối ưu bị ràng buộc, có thể test và có thể giải thích được."
      }
    ],
    measuredKicker: "Đã đo và đã test",
    measuredTitle: "Số liệu từ benchmark pack public",
    measuredBody:
      "Benchmark pack public mới nhất trong repository: commit 8f82706e, timestamp 2026-03-03T17:55:52Z. Các con số này là dữ liệu đo đạc, không phải lời khẳng định phổ quát.",
    proof: [
      {
        label: "CLI startup",
        value: "14.87 ms",
        meta: "p50 cho `thagc --version`, 20 mẫu"
      },
      {
        label: "Tiny build",
        value: "342.75 ms",
        meta: "p50 cho `thagc build`, 8 mẫu"
      },
      {
        label: "Native runtime sample",
        value: "6.08 ms",
        meta: "p50 trên benchmark pack public, 12 mẫu"
      },
      {
        label: "Nguồn benchmark public",
        value: "8f82706e",
        meta: "benchmark pack ngày 2026-03-03 UTC"
      }
    ],
    proofNote:
      "Việc verify release public hiện bao gồm installer, docs, output executable trên Windows và playground deployment. Cần chạy lại benchmark pack trước khi đưa ra nhận định hiệu năng mới.",
    goalsKicker: "Hệ thống mục tiêu",
    goalsTitle: "Những nơi Thagore muốn giải quyết tốt",
    goalsBody:
      "Hướng gần là phần mềm bền vững và các hệ thống vận hành dài hạn, không phải kiểu quảng bá chung chung rằng nó dành cho mọi thứ cùng lúc.",
    goals: [
      "Backend services",
      "Workflow automation",
      "Task pipelines",
      "Hệ thống xử lý bất đồng bộ",
      "Payment systems",
      "Order processing",
      "Distributed jobs",
      "AI workflows"
    ],
    releaseTitle: "Sự thật về nhánh release hiện tại",
    releaseFacts: [
      "Nhánh public hiện tại: v0.9.6",
      "Đã có release asset cho Windows, macOS và Linux",
      "Docs, installer và playground đã được cập nhật cùng line",
      "Toàn bộ dự án vẫn được đánh dấu là đang phát triển"
    ],
    futureKicker: "Tương lai",
    futureTitle: "Biên độ mở rộng dài hạn",
    futureBody:
      "Ngoài mục tiêu chính về tính liên tục và độ tin cậy, Thagore đang được giữ ở mức nhẹ và linh hoạt để về sau có thể mở sang nhiều lĩnh vực hơn.",
    roadmap: [
      {
        title: "Bootstrap và độ tin cậy",
        body:
          "Siết chặt bootstrap contract, seed toolchain rule và acceptance của release để binary public khớp hơn với source và câu chuyện CI."
      },
      {
        title: "Độ tin cậy của toolchain",
        body:
          "Giảm xử lý release thủ công, làm chắc đường install/update và giữ smoke check đa nền tảng như một phần bình thường của release."
      },
      {
        title: "Biên độ ứng dụng trong tương lai",
        body:
          "Desktop application với UI dựa trên HTML, Android application, game engine và scripting, developer tools, automation và AI workflow rộng hơn là các hướng tương lai chứ không phải claim hiện tại."
      }
    ],
    unifiedTitle: "Mục tiêu dài hạn",
    unifiedBody:
      "Mục tiêu dài hạn là trở thành một nền tảng lập trình thống nhất, nơi cùng một ngôn ngữ có thể dùng để xây server, ứng dụng và các hệ thống tương tác phức tạp, mà không giả vờ rằng toàn bộ điều đó đã tồn tại ngay hôm nay.",
    ctaKicker: "Hãy dùng dự án một cách cẩn trọng",
    ctaTitle: "Cài đặt, đọc, test và tự verify theo line release hiện tại.",
    footer: [
      "Không so sánh ngôn ngữ.",
      "Không tự nhận ổn định hoàn chỉnh.",
      "Chỉ nói về thứ đã ship, đã đo hoặc đã lên kế hoạch."
    ]
  }
};

const links = [
  {
    key: "install",
    href: "https://docs.thagore.org/install/quick-start/"
  },
  {
    key: "docs",
    href: "https://docs.thagore.org/"
  },
  {
    key: "playground",
    href: "https://playground.thagore.org/"
  },
  {
    key: "github",
    href: "https://github.com/thagore-foundation/thagore"
  }
];

const linkLabels = {
  en: {
    install: "Install",
    docs: "Documentation",
    playground: "Playground",
    github: "GitHub"
  },
  vi: {
    install: "Cài đặt",
    docs: "Tài liệu",
    playground: "Playground",
    github: "GitHub"
  }
};

export default function App() {
  const [locale, setLocale] = useState("en");
  const t = useMemo(() => copy[locale], [locale]);

  useEffect(() => {
    document.documentElement.classList.add("landing-ready");
    document.documentElement.lang = locale;
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
  }, [locale]);

  return (
    <div className="landing-shell">
      <div className="landing-noise" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Thagore home">
          <img src="/thagore-logo.svg" alt="Thagore" />
          <span>Thagore</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#ship">{t.nav.shipped}</a>
          <a href="#ideas">{t.nav.ideas}</a>
          <a href="#proof">{t.nav.measured}</a>
          <a href="#goals">{t.nav.goals}</a>
          <a href="#future">{t.nav.future}</a>
        </nav>
        <div className="topbar-tools">
          <div className="lang-switch" aria-label="Language switch">
            <button
              className={locale === "en" ? "is-active" : ""}
              onClick={() => setLocale("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={locale === "vi" ? "is-active" : ""}
              onClick={() => setLocale("vi")}
              type="button"
            >
              VI
            </button>
          </div>
          <a className="topbar-cta" href="https://docs.thagore.org/install/quick-start/">
            {t.install}
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <Flag size={16} />
              <span>{t.eyebrow}</span>
            </div>
            <h1>
              {t.heroTitle}
              <span>{t.heroTitleSub}</span>
            </h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a className="primary-link" href="https://docs.thagore.org/install/quick-start/">
                <TerminalSquare size={18} />
                <span>{t.heroPrimary}</span>
              </a>
              <a className="secondary-link" href="https://docs.thagore.org/">
                <span>{t.heroSecondary}</span>
                <ArrowRight size={18} />
              </a>
              <a className="discord-link" href="https://discord.gg/WhFxrCuNvn">
                <MessageSquare size={18} />
                <span>{t.community}</span>
              </a>
            </div>
          </div>

          <aside className="hero-panel" data-reveal>
            <div className="warning-card">
              <div className="warning-head">
                <ShieldAlert size={18} />
                <span>{t.warningTitle}</span>
              </div>
              <p>{t.warningBody}</p>
            </div>
            <div className="apology-card">
              <div className="warning-head">
                <AlertTriangle size={18} />
                <span>{t.apologyTitle}</span>
              </div>
              <p>{t.apologyBody}</p>
            </div>
            <div className="community-card">
              <div className="warning-head">
                <MessageSquare size={18} />
                <span>{t.community}</span>
              </div>
              <p>{t.communityNote}</p>
              <a className="community-button" href="https://discord.gg/WhFxrCuNvn">
                {t.community}
              </a>
            </div>
          </aside>
        </section>

        <section className="statement-band" data-reveal>
          <div>
            <Sparkles size={18} />
            <span>{t.statementTitle}</span>
          </div>
          <p>{t.statementBody}</p>
        </section>

        <section className="section-grid" id="ship">
          <div className="section-head" data-reveal>
            <span className="section-kicker">{t.shippedKicker}</span>
            <h2>{t.shippedTitle}</h2>
            <p>{t.shippedBody}</p>
          </div>
          <div className="feature-grid">
            {t.shippedFeatures.map((item, index) => (
              <article
                className="feature-card"
                data-reveal
                key={item.title}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="feature-index">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="ideas">
          <div className="section-head" data-reveal>
            <span className="section-kicker">{t.ideasKicker}</span>
            <h2>{t.ideasTitle}</h2>
            <p>{t.ideasBody}</p>
          </div>
          <div className="feature-grid">
            {t.ideas.map((item, index) => (
              <article
                className="feature-card"
                data-reveal
                key={item.title}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="feature-index">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-layout" id="proof">
          <div className="section-head" data-reveal>
            <span className="section-kicker">{t.measuredKicker}</span>
            <h2>{t.measuredTitle}</h2>
            <p>{t.measuredBody}</p>
          </div>
          <div className="proof-grid">
            {t.proof.map((item, index) => (
              <article
                className="proof-card"
                data-reveal
                key={item.label}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.meta}</p>
              </article>
            ))}
          </div>
          <div className="proof-note" data-reveal>
            <Gauge size={18} />
            <p>{t.proofNote}</p>
          </div>
        </section>

        <section className="dual-panel" id="goals">
          <article className="panel serious-panel" data-reveal>
            <div className="panel-head">
              <Compass size={18} />
              <span>{t.goalsTitle}</span>
            </div>
            <p className="panel-copy">{t.goalsBody}</p>
            <ul>
              {t.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </article>
          <article className="panel release-panel" data-reveal>
            <div className="panel-head">
              <Boxes size={18} />
              <span>{t.releaseTitle}</span>
            </div>
            <ul>
              {t.releaseFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="direction" id="future">
          <div className="section-head" data-reveal>
            <span className="section-kicker">{t.futureKicker}</span>
            <h2>{t.futureTitle}</h2>
            <p>{t.futureBody}</p>
          </div>
          <div className="roadmap-grid">
            {t.roadmap.map((item, index) => (
              <article
                className="roadmap-card"
                data-reveal
                key={item.title}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="panel-head">
                  {index === 0 ? (
                    <GitBranch size={18} />
                  ) : index === 1 ? (
                    <Wrench size={18} />
                  ) : (
                    <BoxSelect size={18} />
                  )}
                  <span>{item.title}</span>
                </div>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <article className="panel unified-panel" data-reveal>
            <div className="panel-head">
              <Boxes size={18} />
              <span>{t.unifiedTitle}</span>
            </div>
            <p className="panel-copy">{t.unifiedBody}</p>
          </article>
        </section>

        <section className="cta-strip" data-reveal>
          <div>
            <span className="section-kicker">{t.ctaKicker}</span>
            <h2>{t.ctaTitle}</h2>
          </div>
          <div className="cta-links">
            {links.map((link) => (
              <a key={link.key} href={link.href}>
                {linkLabels[locale][link.key]}
              </a>
            ))}
            <a href="https://discord.gg/WhFxrCuNvn">{t.community}</a>
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
          {t.footer.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
