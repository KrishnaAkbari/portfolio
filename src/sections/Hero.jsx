import { useMemo } from "react";
import { HiOutlineArrowNarrowRight, HiOutlineDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    const dots = useMemo(
        () => Array.from({ length: 20 }).map(() => ({
            top: Math.random() * 90 + 2,   
            left: Math.random() * 94 + 3, 
            size: Math.random() * 18 + 13, 
            delay: Math.random() * 5,     
        })),
        []
    );

  return (
    <section id="home" className="relative flex flex-col justify-center items-center min-h-[100vh] bg-primary overflow-hidden">
        {dots.map((p, i) => (
            <span
                key={i}
                className="plus-anim absolute select-none"
                style={{
                    top: `${p.top}%`,
                    left: `${p.left}%`,
                    fontSize: `${Math.floor(Math.random() * 10 + 14)}px`,
                    color: "#48A9FA",
                    opacity: 0.09,
                    fontWeight: 700,
                    animationDelay: `${p.delay}s`,
                    lineHeight: 1,
                    pointerEvents: "none",
                    zIndex: 1,    
                }}
            >    
                .
            </span>
        ))}
        <div className="relative z-10 flex flex-col items-center lg:mt-14 mt-20 xl:px-0 px-8">
            <div className="flex items-center text-5xl md:text-6xl font-heading font-semibold mb-2 text-text-main">
                <span>Hello</span>
                <span className="ml-2 text-5xl">👋</span>
            </div>
            <h1 className="text-center text-4xl md:text-5xl font-heading font-bold text-text-main mb-2 mt-2">
                I’m <span className="text-accent">Krishna,</span> a 
                <Typewriter
                    words={[' Frontend Developer']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}
                />
            </h1>
            <p className="text-center text-xl md:text-2xl text-secondary font-sans mt-3 max-w-2xl">
                I design and build modern, responsive web interfaces that feel as good as they look.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                <a
                    href="/Krishna-Akbari.pdf"
                    download
                    className="flex items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#256ba7] to-accent text-text-main shadow-lg hover:opacity-90 transition"
                >
                    <HiOutlineDownload className="mr-2 text-xl" />
                    Download Resume
                </a>
                <a
                    href="#experience"
                    className="flex items-center px-6 py-3 rounded-xl font-semibold bg-card text-secondary border border-border hover:border-accent hover:text-accent shadow-lg transition"
                >
                    Experience <HiOutlineArrowNarrowRight className="ml-2 text-lg" />
                </a>
            </div>
        </div>
        <div className="relative sm:flex hidden flex-col items-center mt-24">
            <div className="w-8 h-14 rounded-full border-2 border-accent/80 flex justify-center items-start">
                <span className="absolute left-[62%] top-3 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/80 animate-scroll-dot" />
            </div>
        </div>
    </section>
  );
}
