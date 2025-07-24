import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].to);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top < 120) {
            setActive(links[i].to);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 inset-x-0 w-full bg-[#181E2A]/80 backdrop-blur-md z-50 py-4 border-b border-[#232A41]">
      {/* Desktop Nav */}
      <div className="max-w-5xl mx-auto justify-center space-x-6 hidden md:flex">
        {links.map(link => (
          <a
            key={link.to}
            href={`#${link.to}`}
            className={`
              px-3 py-1 font-medium tracking-wide transition
              relative
              text-[#B4B7C7] hover:text-accent
              ${active === link.to ? "text-accent" : ""}
              group transition-all duration-200
            `}
          >
            {link.label}
            <span
              className={`
                absolute left-0 -bottom-0.5 h-[2px] w-full
                bg-accent transition-transform duration-300
                origin-left
                scale-x-0 group-hover:scale-x-100
                ${active === link.to ? "scale-x-100" : ""}
              `}
              style={{ borderRadius: "2px", pointerEvents: "none" }}
            />
          </a>
        ))}
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between px-4">
        <button
          className="text-3xl text-accent"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HiMenu />
        </button>
      </div>
      {/* Full-Screen Mobile Overlay */}
      {menuOpen && (
        <div
          className={`
            fixed inset-0 w-full h-full min-h-screen overflow-y-auto z-[9999] bg-[#181E2A] backdrop-blur-md
            flex flex-col items-center justify-center md:hidden
          `}
        >
          <button
            className="absolute top-6 right-6 text-4xl text-accent"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiX />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {links.map(link => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className={`
                  text-2xl font-medium tracking-wide transition
                  text-[#B4B7C7] hover:text-accent
                  ${active === link.to ? "text-accent scale-110" : ""}
                  group transition-all duration-200
                `}
                onClick={handleLinkClick}
              >
                {link.label}
                <span
                  className={`
                    block h-[2px] w-full bg-accent mt-1 rounded transition-transform duration-300
                    ${active === link.to ? "scale-x-100" : "scale-x-0"}
                  `}
                  style={{
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
