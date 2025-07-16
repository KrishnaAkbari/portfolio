import { MdEmail, MdLocationOn, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		setSent(false);
		setError("");

		emailjs.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
  			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			formRef.current,
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY
		).then(() => {
			setLoading(false);
			setSent(true);
			formRef.current.reset();
		},() => {
			setLoading(false);
			setError("Something went wrong. Please try again!");
		});
	};
	
	return (
		<section id="contact" className="scroll-mt-20 w-full min-h-screen flex flex-col items-center py-12 px-2 mt-24">
			<h2 className="text-5xl font-heading font-bold text-accent mb-8 text-center">
				Get In Touch
			</h2>
			<div className="text-main/80 text-base mb-10 text-center max-w-2xl leading-8">
				Ready to bring your ideas to life? I'm here to help you create something
				extraordinary.
				<br />
				Let's discuss your project and make it happen.
			</div>

			<div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 mb-6">
				<div className="flex flex-col gap-6">
					<div className="rounded-2xl border border-[#1b2738] bg-[#16202c]/80 shadow-[0_0_40px_0_rgba(72,169,250,0.09)] p-8 backdrop-blur-lg">
						<h3 className="text-accent text-2xl font-bold mb-1 font-heading">
							Let's Connect
						</h3>
						<p className="text-secondary mb-6">
							I&apos;m passionate about creating digital experiences that make a
							difference.
						</p>
						<div className="flex items-center gap-3 mb-2">
							<MdEmail className="text-accent text-xl" />
							<a
								href="mailto:akbarikrishna1998@gmail.com"
								className="text-accent hover:underline"
							>
								akbarikrishna1998@gmail.com
							</a>
						</div>
						<div className="flex items-center gap-3 mb-2">
							<MdLocationOn className="text-mint text-xl" />
							<span className="text-mint">Bangalore, India</span>
						</div>
					</div>
					<div className="rounded-2xl border border-[#1b2738] bg-[#16202c]/80 shadow-[0_0_40px_0_rgba(72,169,250,0.09)] p-8 flex flex-col">
						<h4 className="text-accent text-lg font-bold mb-4 font-heading">
							Follow My Journey
						</h4>
						<div className="flex gap-4">
							<a
								href="https://github.com/KrishnaAkbari"
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 bg-[#232A41] hover:bg-[#2d3141] p-3 rounded-lg flex justify-center transition"
							>
								<FaGithub className="text-2xl text-white/80" />
							</a>
							<a
								href="https://www.linkedin.com/in/krishna159/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 bg-[#193f4f] hover:bg-[#136492] p-3 rounded-lg flex justify-center transition"
							>
								<FaLinkedin className="text-2xl text-accent" />
							</a>
							<a
								href="https://blog.krishna.codeistari.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 bg-blue-500/30 hover:bg-blue-500/20 p-3 rounded-lg flex justify-center transition"
								aria-label="Visit my Hashnode blog"
							>
								<svg
									fill="none"
									viewBox="0 0 56 56"
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.39 18.71c-5.133 5.131-5.133 13.449 0 18.58l14.868 14.862c5.133 5.13 13.454 5.13 18.586 0L52.713 37.29c5.132-5.13 5.132-13.448 0-18.579L37.844 3.848c-5.132-5.13-13.453-5.13-18.586 0L4.39 18.71Zm30.666 15.793a9.193 9.193 0 0 0 0-13.006 9.2 9.2 0 0 0-13.01 0 9.193 9.193 0 0 0 0 13.006 9.202 9.202 0 0 0 13.01 0Z"
									fill="#2962FF"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<form 
					ref={formRef}
      				onSubmit={sendEmail} 
					className="rounded-2xl border border-[#1b2738] bg-[#16202c]/80 shadow-[0_0_40px_0_rgba(72,169,250,0.09)] p-8 backdrop-blur-lg flex flex-col gap-4"
				>
					<h3 className="text-accent text-2xl font-bold mb-1 font-heading">
						Start a Conversation
					</h3>
					<p className="text-secondary mb-4">
						Fill out the form below and I&apos;ll get back to you soon
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-1">
							<label className="block text-secondary mb-1 font-semibold">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="Your name..."
								className="w-full bg-[#181E2A] text-main rounded-lg p-3 border border-[#232A41] outline-none focus:border-accent"
								required
							/>
						</div>
						<div className="flex-1">
							<label className="block text-secondary mb-1 font-semibold">
								Email
							</label>
							<input
								type="email"
								name="email"
								placeholder="Your Email..."
								className="w-full bg-[#181E2A] text-main rounded-lg p-3 border border-[#232A41] outline-none focus:border-accent"
								required
							/>
						</div>
					</div>
					<div>
						<label className="block text-secondary mb-1 font-semibold">
							Subject
						</label>
						<input
							type="text"
							name="title"
							placeholder="Subject..."
							className="w-full bg-[#181E2A] text-main rounded-lg p-3 border border-[#232A41] outline-none focus:border-accent"
							required
						/>
					</div>
					<div>
						<label className="block text-secondary mb-1 font-semibold">
							Message
						</label>
						<textarea
							name="message"
							placeholder="Your message..."
							className="w-full bg-[#181E2A] text-main rounded-lg p-3 border border-[#232A41] outline-none focus:border-accent resize-none"
							rows={5}
							required
						/>
					</div>
					<button
						disabled={loading}
						type="submit"
						className="w-full flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:pointer-events-none bg-gradient-to-r from-accent to-mint text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 disabled:opacity-50 transition"
					>
						<MdSend className="text-xl" />
						{loading ? "Sending..." : "Send Message"}
					</button>
					{sent && (
						<p className="text-green-400 font-semibold mt-2">
						Thank you! Your message has been sent. 🙌
						</p>
					)}
					{error && (
						<p className="text-red-400 font-semibold mt-2">{error}</p>
					)}
				</form>
			</div>
		</section>
	);
}
