import { MdWorkOutline } from "react-icons/md";

const experiences = [
    {
        title: "Senior Frontend Developer",
        company: "ServerAvatar Cloud Technologies Pvt Ltd.",
        date: "Aug 2020 – Present",
        iconBg: "bg-accent/20",
        iconColor: "text-accent",
        description: "Led frontend development for ServerAvatar's server management panel using Vue.js.",
        responsibilities: [
            "Led frontend development for ServerAvatar's server management panel using Vue.js.",
            "Implemented responsive design principles and ensured cross-browser compatibility for all projects.",
            "Collaborated closely with backend developers and UI/UX designers to come up with cohesive solutions.",
            "Mentored junior developers and interns, guiding best practices in frontend development and Vue.js.",
        ],
    },
    {
        title: "Junior Frontend Developer (Internship)",
        company: "ServerAvatar Cloud Technologies Pvt Ltd.",
        date: "Jan 2020 – Aug 2020",
        iconBg: "bg-accent/20",
        iconColor: "text-accent",
        description: "Developed frontend components and features for various projects using Vue.js, gaining proficiency in frontend development techniques.",
        responsibilities: [
            "Developed frontend components and features for various projects using Vue.js, gaining proficiency in frontend development techniques.",
            "Worked on school management, restaurant management, and task management systems, contributing to project planning and execution.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-20">
            <div className="relative flex flex-col items-center justify-center min-h-[180px] md:mb-8 mb-2 md:mt-28 mt-8">
                <span className="absolute md:block hidden text-[90px] xl:text-[150px] font-heading font-extrabold text-white opacity-10 blur-[6px] select-none tracking-tight z-0">
                    EXPERIENCE
                </span>

                <div className="z-10 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mb-2">
                        Experience
                    </h2>
                    <div className="h-1 w-16 bg-accent rounded-full mb-4" />
                    <span className="text-secondary tracking-wide text-base sm:text-lg">
                        My Journey So Far
                    </span>
                </div>
            </div>
            <div
                className="w-full flex flex-col items-center gap-8 py-12 bg-primary transition-all duration-300 xl:px-0 px-8"
            >
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="relative w-full max-w-5xl bg-card rounded-2xl border border-border hover:border-accent/20 px-8 py-7 shadow flex flex-col"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                            <div className="flex sm:flex-row flex-col items-start gap-4">
                                <div className={`md:w-10 w-8 md:h-10 h-8 flex items-center justify-center rounded-full ${exp.iconBg}`}>
                                    <MdWorkOutline className={`text-xl md:text-2xl ${exp.iconColor}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl text-text-main font-bold">{exp.title}</h3>
                                    <div className="text-secondary font-sans text-lg leading-8">{exp.company}</div>
                                </div>
                            </div>
                            <span className="text-secondary text-sm select-none sm:mt-0 mt-2">
                                {exp.date}
                            </span>
                        </div>

                        {exp.description && (
                            <p className="text-secondary font-sans mt-2 mb-4 text-base">
                                {exp.description}
                            </p>
                        )}
                        {exp.responsibilities && (
                            <div>
                                <div className="font-semibold text-text-main mb-2 text-base">
                                    Key Responsibilities:
                                </div>
                                <ul className="space-y-2 pl-0">
                                    {exp.responsibilities.map((item, i) => (
                                        <li className="flex items-start gap-2" key={i}>
                                            <span className="mt-1">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                >
                                                    <circle
                                                        cx="9"
                                                        cy="9"
                                                        r="8.5"
                                                        stroke="#48A9FA"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        d="M6.5 9.5L8 11L11.5 7.5"
                                                        stroke="#48A9FA"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
