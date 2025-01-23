"use client";

import { FaLinkedin, FaGithub, FaStrava } from "react-icons/fa"
import { Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <FaGithub size={20} />,
		href: "https://github.com/kekedezha",
		label: "Github",
		handle: "kekedezha",
	},
	{
		icon: <FaLinkedin size={20} />,
		href: "https://www.linkedin.com/in/christian-dezha-bolteada-1386a2135/",
		label: "Linkedin",
		handle: "Christian Dezha",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dezhac6@gmail.com",
		label: "Email",
		handle: "dezhac6@gmail.com",
	},
	{
		icon: <FaStrava size={20} />,
		href: "https://www.strava.com/athletes/kekedezha",
		label: "Strava",
		handle: "kekedezha",
	},
];

export default function Contact() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-2 gap-6 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>

								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									{s.handle == "Christian Dezha" || s.handle == "dezhac6@gmail.com" ?
										(<span className="lg:text-lg font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display text-nowrap text-align:center">
											{s.handle}
										</span>)
										:
										(<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
											{s.handle}
										</span>)}
									<span className="mt-4 text-xl text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
