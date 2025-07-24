import { MdArticle } from "react-icons/md";

export default function BlogSection() {
    const blogs = [
        {
            title: "Role-Based Access Control (RBAC) in Vue 3: A Complete Guide",
            desc: "A complete, practical guide to implementing robust RBAC (role-based access control) in Vue 3 using Vue Router, including code, patterns, and best practices.",
            image: "/images/blog/rbac-vue3.png",
            url: "https://blog.krishna.codeistari.com/role-based-access-control-rbac-in-vue-3-a-complete-guide",
        },
        {
            title: "Custom Fonts and Colors in Tailwind CSS v4",
            desc: "Learn how to add your own fonts and color palette in Tailwind CSS v4 with the new configuration and simplicity. Make your branding shine with custom styles!",
            image: "/images/blog/tailwind-fonts-colors.png",
            url: "https://blog.krishna.codeistari.com/custom-fonts-and-colors-in-tailwind-css-v4",
        },
    ];

    return (
        <>
            <div id="blog" className="scroll-mt-20 relative flex flex-col items-center justify-center min-h-[180px] md:mb-8 mb-2 md:mt-28 mt-8">
                <span className="absolute md:block hidden text-[90px] xl:text-[150px] font-heading font-extrabold text-white opacity-10 blur-[6px] select-none tracking-tight z-0">
                    BLOGS
                </span>

                <div className="z-10 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-main mb-2">
                        Blogs
                    </h2>
                    <div className="h-1 w-16 bg-accent rounded-full mb-4" />
                    <span className="text-secondary tracking-wide text-base sm:text-lg sm:px-0 px-5 text-center">
                        My Thoughts on Frontend Development
                    </span>
                </div>
            </div>
            <section className="w-full py-12 xl:px-0 px-8 bg-[#c5c9cd] dark:bg-primary flex flex-col items-center">
                <div className="w-full flex justify-center">
                    <div className="flex flex-wrap justify-center gap-8 transition-all duration-300">
                        {blogs.map((blog, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-card rounded-2xl shadow-xl max-w-md w-full flex flex-col overflow-hidden border border-[#ececec] hover:border-accent/20 dark:border-border"
                            >
                                <div className="w-full aspect-[3/1] bg-[#232A41]">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        style={{ display: 'block' }}
                                    />
                                </div>
                                <div className="flex flex-col p-6">
                                    <h3 className="font-heading text-xl font-bold text-text-main mb-3 leading-snug">
                                        {blog.title}
                                    </h3>
                                    <p className="text-base text-secondary mb-8">
                                        {blog.desc}
                                    </p>
                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent font-medium flex items-center gap-2 hover:underline mt-auto"
                                    >
                                        Read More
                                        <svg
                                            width="18"
                                            height="18"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="inline-block"
                                        >
                                            <path d="M5 9h8M13 9l-4-4m4 4l-4 4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
