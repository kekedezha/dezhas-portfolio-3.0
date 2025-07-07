"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navigation = [
	{ name: "About", href: "/about", target: "_self" },
	{ name: "Projects", href: "/projects", target: "_self" },
	{ name: "Work", href: "/work", target: "_self" },
	{ name: "Blog", href: "/blog", target: "_self" },
	{ name: "Contact", href: "/contact", target: "_self" },
	{ name: "Extra", href: "/extra", target: "_self" },
	{ name: "Resume", href: "https://docsend.com/view/cuuiw3fmjnb7rf5u", target: "_blank" },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200  ${isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500  border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-4 md:gap-8">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								target={item.target}
								className="duration-200 text-xs md:text-base text-zinc-400 hover:text-zinc-100"
							>
								{item.name}
							</Link>
						))}
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
