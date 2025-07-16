import { useState, useEffect } from "react";

const links = [
	{ label: "Home", to: "hero" },
	{ label: "Skills", to: "skills" },
	{ label: "Experience", to: "experience" },
	{ label: "Blog", to: "blog" },
	{ label: "Contact", to: "contact" },
];

export default function Navbar() {
	const [active, setActive] = useState("hero");

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

	return (
		<nav className="fixed top-0 w-full bg-[#181E2A]/80 backdrop-blur-md z-50 py-4 border-b border-[#232A41]">
		<div className="max-w-5xl mx-auto flex justify-center space-x-6">
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
		</nav>
	);
}
