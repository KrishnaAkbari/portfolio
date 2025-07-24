const skills = [
	{
		name: "Vue.js",
		icon: "/icons/vuejs.svg",
		cardBg: "#2d3141",     // muted blue/green
	},
	{
		name: "JavaScript",
		icon: "/icons/javascript.svg",
		cardBg: "#504a32",     // muted yellow/brown
	},
	{
		name: "Tailwind CSS",
		icon: "/icons/tailwindcss.svg",
		cardBg: "#27424c",     // dark teal (muted tailwind blue)
	},
	{
		name: "HTML5",
		icon: "/icons/html5.svg",
		cardBg: "#51363a",     // muted red
	},
	{
		name: "CSS3",
		icon: "/icons/css.svg",
		cardBg: "#283652",     // muted blue
	},
	{
		name: "React",
		icon: "/icons/react.svg",
		cardBg: "#28414b",     // dark blue/teal
	},
	{
		name: "Node.js",
		icon: "/icons/nodejs.svg",
		cardBg: "#364537",     // muted green
	},
	{
		name: "Bootstrap",
		icon: "/icons/bootstrap.svg",
		cardBg: "#41385a",     // muted purple
	},
	{
		name: "Express.js",
		icon: "/icons/express.svg",
		cardBg: "#483645",     // dark gray
	},
	{
		name: "MongoDB",
		icon: "/icons/mongodb.svg",
		cardBg: "#314236",     // muted green
	},
];

export default function Skills() {
	return (
		<>
			<div id="skills" className="scroll-mt-20 relative flex flex-col items-center justify-center min-h-[180px] md:mb-8 mb-2 md:mt-20 mt-17">
                <span className="absolute md:block hidden text-[90px] xl:text-[150px] font-heading font-extrabold text-white opacity-10 blur-[6px] select-none tracking-tight z-0">
                    SKILLS
                </span>

                <div className="z-10 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mb-2">
                        SKILLS
                    </h2>
                    <div className="h-1 w-16 bg-accent rounded-full mb-4" />
                    <span className="text-secondary tracking-wide text-base sm:text-lg">
                        I Constantly Try to Improve
                    </span>
                </div>
            </div>
			<section
				className="w-full min-h-[60vh] flex justify-center items-center py-12 xl:px-0 px-8"
			>
				<div className="w-full max-w-5xl bg-card rounded-3xl shadow-xl border border-border px-6 sm:px-10 py-10">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 md:gap-x-8 gap-y-10">
						{skills.map((skill) => (
							<div
								key={skill.name}
								className="flex flex-col items-center group hover:scale-[1.1] transition-all duration-300"
							>
								<div
									className="rounded-2xl border border-white/10 group-hover:border-accent/20 flex items-center justify-center w-16 h-16 "
									style={{
										background: skill.cardBg,
									}}
								>
									<img
										src={skill.icon}
										alt={skill.name}
										className="w-8 h-8"
										draggable={false}
										loading="lazy"
									/>
								</div>
								<span className="text-secondary font-semibold text-sm mt-4 text-center select-none">
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
