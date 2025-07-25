"use client";

import Image from 'next/image';
import { Navigation } from "../components/nav";
import { ImageGrid } from "app/components/image-grid";
import Link from 'next/link';

function Badge(props: any) {
    return (
        <a
            {...props}
            target="_blank"
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-xs md:text-sm lg:text-lg leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        />
    );
}

export default function About() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="text-center px-6 pt-20 mx-auto space-y-8 max-w-4xl md:space-y-16 md:pt-24 lg:pt-32">
                <h1 className="w-full text-slate-200 text-3xl font-medium mb-5">
                    Ayoo, I&#39;m Christian Dezha-Bolteada ✌🏽
                </h1>
                <p className="text-lg text-zinc-300 w-full text-justify">
                    I&#39;m an aspiring software engineer based out of Charlotte, North Carolina,
                    with over a year and a half of experience specializing in full-stack development
                    and 6 years specializing in controls & automation as a systems/controls engineer.
                    I thrive in problem solving and crafting up robust solutions. My current tech
                    stack includes the following technologies:
                </p>
                <ul className='flex flex-col md:flex-row justify-center my-6 md:space-x-4'>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://www.postgresql.org/">
                            <Image
                                alt="PostgreSQL logomark"
                                src="/project_icons/postgres_logo.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            PostgreSQL
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://expressjs.com/">
                            <Image
                                alt="Express.js logomark"
                                src="/project_icons/express.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Express.js
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://react.dev/">
                            <Image
                                alt="React logomark"
                                src="/project_icons/reactjs_icon.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            React
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://nodejs.org/en/">
                            <Image
                                alt="Node.js logomark"
                                src="/project_icons/programming.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Node.js
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://www.python.org/">
                            <Image
                                alt="Python logomark"
                                src="/project_icons/python.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Python
                        </Badge>
                    </li>
                </ul>
                <p className="text-lg text-zinc-300 w-full text-justify">
                    What excites me the most about software
                    engineering is the never ending road of learning, solving complex
                    problems and innovating scalable solutions.
                    My collaborative and self-starter approach and strong communication skills enable me to work effectively in cross-functional teams.
                </p>
                <div >
                    <ImageGrid
                        columns={2}
                        images={[
                            { src: "/images/Acadia.jpeg", alt: "Pic at Acadia National Park" },
                            { src: "/images/Crescendo24.jpg", alt: "First Comp at Crash Crescendo" },
                            { src: "/images/Mtn_Runna.jpeg", alt: "Running my first Ultra through the mountains" },
                            { src: "/images/keep_smiling.jpeg", alt: "Keep Smiling" },
                        ]}
                    />
                </div>
                <div className="text-lg text-zinc-300 w-full text-justify">
                    <p>
                        Recently, I have enjoyed developing my web-app, <a className="underline text-blue-400" href="https://aigiftfairy.com" target='_blank'>GIFTFaiRY🧚🏻</a>, using the React and Django frameworks. The project has helped me to accelerate my learning for both Front-End and Back-End Development!
                    </p>
                    <p className='mt-4'>
                        Outside of coding 💻, I enjoy
                        trail running 🏃🏽‍♂️, pushing my body&#39;s limits doing functional fitness 🏋🏽‍♂️, exploring new eats and coffee shops, all which fuels my creativity and perspective
                        while keeping me sane. Looking ahead, I&#39;m eager to continue honing my skills and contributing to impactful projects that push the boundaries of technology.
                    </p>
                    <p className='mt-4'>
                        If you&#39;re interested in learning a little more about me outside of programming head over to the <Link key={'explore-link-in-line'}
                            href={"/extra"}
                            target={"_self"}
                            className='underline text-blue-400'>Extra</Link> page!
                    </p>
                </div>
            </div>
        </div>
    )
};