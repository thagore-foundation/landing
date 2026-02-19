import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Zap,
  Cpu,
  ArrowRight,
  Code2,
  Flame,
  Layers
} from "lucide-react";
import anime from "animejs/lib/anime.es.js";

const SplitText = ({ children, className, itemClass }) => {
  return (
    <span
      className={className}
      style={{ display: "inline-block", perspective: "1000px" }}
    >
      {children.split(" ").map((word, wordIdx, wordsArr) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className={`inline-block ${itemClass}`}
              style={{ opacity: 0, transformOrigin: "50% 100%" }}
            >
              {char}
            </span>
          ))}
          {wordIdx < wordsArr.length - 1 && (
            <span className="inline-block w-[0.3em]">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

const TerminalWindow = () => {
  const [typedText, setTypedText] = useState("");
  const codeString = `func fib(n: int) -> int:
    if (n <= 1):
        return n
    return fib(n-1) + fib(n-2)

# Chạy trực tiếp (Thông dịch)
# Hoặc biên dịch AOT ra mã máy
print(v"Hiệu suất cực đại: {fib(40)}")`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeString.length) {
        setTypedText(codeString.slice(0, i + 1));
        i += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="code-text-anim rounded-none border border-gray-800 bg-[#0a0a0a] shadow-[0_0_50px_rgba(225,29,72,0.1)] relative group opacity-0 translate-x-[50px]">
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-red-600 blur opacity-20 group-hover:opacity-40 transition duration-1000 pointer-events-none"></div>
      <div className="relative bg-[#0a0a0a] z-10">
        <div className="flex items-center px-4 py-3 bg-[#111] border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-gray-700 hover:bg-rose-500 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 bg-gray-700 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 bg-rose-600 cursor-pointer shadow-[0_0_10px_rgba(225,29,72,0.8)]"></div>
          </div>
          <div className="mx-auto font-mono text-xs text-gray-500 tracking-widest">
            main.tg
          </div>
        </div>
        <div className="p-8 font-mono text-sm md:text-base leading-loose overflow-x-auto text-gray-300 min-h-[350px]">
          <pre>
            <code>
              <span className="text-rose-400">{"func "}</span>
              <span className="text-blue-400">{"fib"}</span>
              <span>{"(n: "}</span>
              <span className="text-yellow-300">{"i32"}</span>
              <span>{") -> "}</span>
              <span className="text-yellow-300">{"i32"}</span>
              <span>{":\n"}</span>
              {typedText.split("\n").slice(1).join("\n")}
              <span className="animate-pulse bg-rose-500 w-2 h-5 inline-block align-middle ml-1"></span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const codeRef = useRef(null);
  const benchRef = useRef(null);
  const featureRef = useRef(null);
  const philosophyRef = useRef(null);
  const logo = "/thagore-logo.svg";

  useEffect(() => {
    const heroTimeline = anime.timeline({ loop: false });
    heroTimeline
      .add({
        targets: ".hero-title .letter",
        rotateX: [-90, 0],
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutElastic(1, .6)",
        duration: 1500,
        delay: anime.stagger(40)
      })
      .add(
        {
          targets: ".hero-subtitle",
          opacity: [0, 1],
          translateY: [20, 0],
          easing: "easeOutCubic",
          duration: 1000
        },
        "-=1000"
      )
      .add(
        {
          targets: ".hero-dragon",
          opacity: [0, 0.25],
          scale: [1.1, 1],
          filter: ["blur(10px)", "blur(0px)"],
          easing: "easeOutQuad",
          duration: 1500
        },
        "-=1500"
      );

    anime({
      targets: ".hero-dragon",
      translateY: [-15, 15],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 4000
    });

    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.target === codeRef.current) {
          anime({
            targets: ".code-text-anim",
            translateX: [-30, 0],
            opacity: [0, 1],
            easing: "easeOutQuart",
            duration: 1200,
            delay: anime.stagger(200)
          });
          observer.unobserve(entry.target);
        }

        if (entry.target === benchRef.current) {
          anime({
            targets: ".bench-number",
            innerHTML: [0, (el) => el.getAttribute("data-val")],
            round: 1,
            easing: "easeOutExpo",
            duration: 3000
          });
          anime({
            targets: ".bench-label",
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 1000,
            delay: 500
          });
          observer.unobserve(entry.target);
        }

        if (entry.target === featureRef.current) {
          anime({
            targets: ".feature-card",
            translateY: [60, 0],
            opacity: [0, 1],
            rotateX: [-20, 0],
            easing: "easeOutCirc",
            duration: 1000,
            delay: anime.stagger(150)
          });
          observer.unobserve(entry.target);
        }

        if (entry.target === philosophyRef.current) {
          anime({
            targets: ".phil-word",
            opacity: [0, 1],
            filter: ["blur(20px)", "blur(0px)"],
            scale: [1.2, 1],
            easing: "easeOutQuart",
            duration: 1800,
            delay: anime.stagger(300)
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (codeRef.current) observer.observe(codeRef.current);
    if (benchRef.current) observer.observe(benchRef.current);
    if (featureRef.current) observer.observe(featureRef.current);
    if (philosophyRef.current) observer.observe(philosophyRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-rose-600 selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Thagore Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-2xl tracking-tighter">THAGORE</span>
        </div>
        <div className="hidden md:flex gap-10 font-mono text-xs tracking-[0.3em] uppercase text-gray-400">
          <a href="#features" className="hover:text-rose-500 transition-colors">Kiến trúc Thagore</a>
          <a href="#docs" className="hover:text-rose-500 transition-colors">Tổng quan ngôn ngữ</a>
          <a href="#community" className="hover:text-rose-500 transition-colors">Benchmark hiệu năng</a>
        </div>
        <a href="https://docs.thagore.io.vn/install/quick-start/">
        <button className="px-8 py-3 bg-rose-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-rose-500 transition-colors shadow-[0_0_20px_rgba(225,29,72,0.4)]">
          Tải xuống
        </button>
        </a>
      </nav>

      <main className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto flex flex-col justify-center min-h-screen">
        <div className="hero-dragon absolute top-1/4 right-10 md:right-32 pointer-events-none opacity-0">
          <img
            src={logo}
            alt="Biểu tượng rồng của ngôn ngữ lập trình Thagore"
            className="w-[300px] h-[300px] md:w-[700px] md:h-[700px] object-contain drop-shadow-[0_0_120px_rgba(225,29,72,0.5)]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl">
          <h1 className="hero-title text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-10">
            <SplitText itemClass="letter" className="text-white block drop-shadow-lg md:drop-shadow-xl">
              CÚ PHÁP ĐƠN GIẢN.
            </SplitText>
            <SplitText itemClass="letter" className="text-rose-600 block mt-2 drop-shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              SỨC MẠNH VƯỢT TRỘI.
            </SplitText>
          </h1>
          <h2 className="text-rose-600 font-mono text-base md:text-xl mb-6 tracking-[0.2em] md:tracking-[0.3em] uppercase flex items-center gap-3">
            <Flame className="w-5 h-5 animate-pulse" /> Ngôn ngữ lập trình thế hệ mới
          </h2>
          <div className="hero-subtitle opacity-0" style={{ transform: "translateY(20px)" }}>
            <p className="text-lg md:text-2xl font-light text-gray-400 max-w-3xl leading-relaxed mb-12">
              Thagore là ngôn ngữ lập trình thế hệ mới kết hợp cú pháp thanh lịch kiểu Python và hiệu năng cấp C/C++.
              Vừa <strong className="text-white font-semibold border-b border-rose-500">thông dịch</strong> linh hoạt cho phát triển nhanh, vừa <strong className="text-white font-semibold border-b border-rose-500">biên dịch AOT</strong> để triển khai tối ưu trên production.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 font-mono text-sm">
              <a href="https://docs.thagore.io.vn/install/quick-start/">
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold hover:bg-rose-600 hover:text-white hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] transition-all uppercase tracking-widest">
                <Terminal className="w-5 h-5" /> Cài đặt ngay
              </button>
              </a>
              <a href="https://docs.thagore.io.vn">
              <button className="flex items-center justify-center gap-3 px-10 py-5 border border-gray-800 hover:border-rose-600 hover:text-rose-500 transition-colors uppercase tracking-widest group bg-black/50 backdrop-blur-sm">
                <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Đọc Tài liệu <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <section ref={philosophyRef} id="docs" className="py-24 md:py-32 overflow-hidden bg-rose-600 text-black flex items-center justify-center min-h-[60vh] md:min-h-[70vh] relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        <h2 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-black uppercase tracking-tighter text-center leading-[0.9] md:leading-[0.85] relative z-10 px-4">
          <div className="phil-word opacity-0 text-black">Code</div>
          <div className="phil-word opacity-0 text-white">Ngắn.</div>
          <div className="phil-word opacity-0 mt-8 md:mt-12 text-black">Chạy</div>
          <div className="phil-word opacity-0 text-white">Nhanh</div>
        </h2>
      </section>

      <section ref={codeRef} id="code" className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/4 left-[-5%] text-[15rem] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
          NO GIL NO LIMITS
        </div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="code-text-anim text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-none opacity-0">
              VIẾT ÍT HƠN.<br />
              <span className="text-rose-600">CHẠY NHANH HƠN.</span>
            </h2>
            <p className="code-text-anim text-xl md:text-2xl text-gray-400 font-light mb-12 opacity-0 leading-relaxed">
              Không cần học lại cú pháp. Nếu bạn biết Python, bạn đã biết Thagore. Trình biên dịch JIT và AOT tích hợp sẵn sẽ tối ưu hóa mã của bạn tới từng cycle phần cứng.
            </p>
            <div className="space-y-8 font-mono text-lg text-gray-300">
              {[
                "Cú pháp hoàn toàn tương thích Python.",
                "Type Hints để biên dịch AOT siêu việt.",
                "Zero GC Pauses với quản lý bộ nhớ ARC."
              ].map((text, idx) => (
                <div key={idx} className="code-text-anim flex items-center gap-6 opacity-0 group cursor-default">
                  <div className="w-14 h-14 shrink-0 rounded-none bg-[#0a0a0a] flex items-center justify-center text-rose-500 border border-gray-800 group-hover:border-rose-500 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all">
                    <span className="font-bold">0{idx + 1}</span>
                  </div>
                  <span className="group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <TerminalWindow />
        </div>
      </section>

      <section ref={benchRef} id="community" className="py-32 px-6 border-y border-gray-900 bg-black">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          <div className="flex flex-col justify-center">
            <div className="text-8xl md:text-[10rem] font-black text-rose-600 leading-none tracking-tighter">
              <span className="bench-number" data-val="100">0</span><span className="text-5xl md:text-6xl text-white">x</span>
            </div>
            <div className="bench-label text-xl font-mono text-gray-500 uppercase tracking-widest mt-6 opacity-0">Nhanh hơn CPython</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-8xl md:text-[10rem] font-black text-white leading-none tracking-tighter">
              <span className="bench-number" data-val="0">50</span><span className="text-5xl md:text-6xl text-rose-600">ms</span>
            </div>
            <div className="bench-label text-xl font-mono text-gray-500 uppercase tracking-widest mt-6 opacity-0">Độ trễ khởi động AOT</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-8xl md:text-[10rem] font-black text-gray-600 leading-none tracking-tighter">
              <span className="bench-number" data-val="100">0</span><span className="text-5xl md:text-6xl text-rose-600">%</span>
            </div>
            <div className="bench-label text-xl font-mono text-gray-500 uppercase tracking-widest mt-6 opacity-0">Tương thích thư viện C</div>
          </div>
        </div>
      </section>

      <section ref={featureRef} id="features" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-600/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-14">
            Kiến trúc cốt lõi của Thagore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24">
            <div className="feature-card opacity-0 group cursor-default" style={{ perspective: "1000px" }}>
              <div className="text-8xl md:text-[9rem] font-black text-transparent [-webkit-text-stroke:1px_#333] group-hover:[-webkit-text-stroke:2px_#e11d48] transition-all duration-500 mb-8 leading-none flex flex-col">
                <Layers className="w-16 h-16 text-rose-600 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                01
              </div>
              <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-rose-500 transition-colors">Mô hình<br />Lưỡng Tính</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Thagore hoạt động như một trình thông dịch (Interpreter) cho kịch bản nhanh, hoặc biên dịch (AOT) ra file thực thi độc lập không cần môi trường.
              </p>
            </div>

            <div className="feature-card opacity-0 group cursor-default" style={{ perspective: "1000px" }}>
              <div className="text-8xl md:text-[9rem] font-black text-transparent [-webkit-text-stroke:1px_#333] group-hover:[-webkit-text-stroke:2px_#e11d48] transition-all duration-500 mb-8 leading-none flex flex-col">
                <Zap className="w-16 h-16 text-rose-600 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                02
              </div>
              <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-rose-500 transition-colors">Hiệu Suất<br />Cực Đại</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Loại bỏ độ trễ của GIL (Global Interpreter Lock). Hỗ trợ đa luồng (multi-threading) thực sự, tối ưu hóa bộ nhớ tới mức phần cứng.
              </p>
            </div>

            <div className="feature-card opacity-0 group cursor-default" style={{ perspective: "1000px" }}>
              <div className="text-8xl md:text-[9rem] font-black text-transparent [-webkit-text-stroke:1px_#333] group-hover:[-webkit-text-stroke:2px_#e11d48] transition-all duration-500 mb-8 leading-none flex flex-col">
                <Cpu className="w-16 h-16 text-rose-600 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                03
              </div>
              <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-rose-500 transition-colors">Hệ Sinh Thái<br />Mở Rộng</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Dễ dàng gọi các thư viện C/C++ (FFI) mà không có overhead, đồng thời tái sử dụng trực tiếp các package từ hệ sinh thái Python.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white text-black py-12 rotate-3 -mx-10 scale-110 shadow-[0_0_80px_rgba(255,255,255,0.15)] relative z-20">
        <div className="flex whitespace-nowrap font-black text-5xl md:text-7xl uppercase tracking-tighter">
          <span className="animate-[marquee_15s_linear_infinite]">
            TỐC ĐỘ CỦA C &nbsp;-&nbsp; CÚ PHÁP PYTHON &nbsp;-&nbsp; BIÊN DỊCH AOT &nbsp;-&nbsp; THÔNG DỊCH JIT &nbsp;-&nbsp;
          </span>
          <span className="animate-[marquee_15s_linear_infinite]">
            TỐC ĐỘ CỦA C &nbsp;-&nbsp; CÚ PHÁP PYTHON &nbsp;-&nbsp; BIÊN DỊCH AOT &nbsp;-&nbsp; THÔNG DỊCH JIT &nbsp;-&nbsp;
          </span>
        </div>
      </section>

      <footer className="py-24 px-6 md:px-12 lg:px-24 bg-black mt-20 relative overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-5%] text-[15vw] font-black text-gray-900 opacity-20 pointer-events-none leading-none">
          THAGORE
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Thagore Logo" className="w-24 h-24 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_0_30px_rgba(225,29,72,0.8)] transition-all duration-500" />
            <div className="font-black text-5xl tracking-tighter text-white">THAGORE.</div>
          </div>
          <div className="text-gray-500 font-mono text-sm tracking-[0.2em] uppercase flex flex-col items-end gap-4">
            <a href="https://github.com/thagore-foundation/thagore" className="hover:text-rose-500 transition-colors">Github / Mã Nguồn</a>
            <a href="#" className="hover:text-rose-500 transition-colors">Twitter (X)</a>
            <a href="https://discord.gg/T6tfppnKWc" className="hover:text-rose-500 transition-colors">Cộng Đồng Discord</a>
            <span className="mt-8 opacity-40">© 2026 Thagore Programming Language.</span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        html { scroll-behavior: smooth; }
        body { background: #020202; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #222; }
        ::-webkit-scrollbar-thumb:hover { background: #e11d48; }
      `}</style>
    </div>
  );
}
