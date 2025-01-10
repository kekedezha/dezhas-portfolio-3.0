import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about", target: "_self" },
  { name: "Projects", href: "/projects", target: "_self" },
  { name: "Work", href: "/work", target: "_self" },
  { name: "Contact", href: "/contact", target: "_self" },
  { name: "Extra", href: "/extra", target: "_self" },
  { name: "Resume", href: "https://docsend.com/view/cuuiw3fmjnb7rf5u", target: "_blank" },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-5 md:gap-16">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.target}
              className="max-[320px]:text-[0.5rem] sm:text-xs md:text-lg duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-fade-out font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        bienvenidos
      </h1>
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text ">
        christian dezha
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="max-[320px]:text-[0.5rem] sm:text-xs md:text-sm text-zinc-500 ">
          Coding and 🏃🏽‍♂️ trails from Charlotte, NC! ✌🏽
        </h2>
      </div>
    </div>
  );
}
