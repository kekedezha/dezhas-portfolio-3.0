"use client";

import Image from 'next/image';
import { Navigation } from "../components/nav";

// Import pictures 
import MtnRunna from '../../public/images/Mtn_Runna.jpeg';
import PitStop from '../../public/images/Pit_Stop.jpeg';
import Acadia from '../../public/images/Acadia.jpeg';
import Dead from '../../public/images/Dead.jpeg';
import Crescendo from '../../public/images/Crescendo24.jpg';
import NYC_Sandwich from '../../public/images/nyc_sandwich.jpg';
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
            <div className="text-center px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                {/* <div className="text-center min-w-0 px-6 pt-20 mx-auto flex flex-auto flex-col justify-center md:px-0"> */}
                <h1 className="w-full text-slate-200 text-3xl font-medium mb-5">
                    Ayoo, I&#39;m Christian Dezha-Bolteada ✌🏽
                </h1>
                <p className="text-lg text-zinc-300 w-full">
                    I&#39;m an aspiring software engineer based out of Charlotte, North Carolina,
                    with over a year and a half of experience specializing in full-stack development
                    and 5 years specializing in controls & automation as a systems/controls engineer.
                    I thrive in problem solving and crafting up robust solutions. My current tech
                    stack includes the following technologies:
                </p>
                <ul className='flex flex-col md:flex-row justify-center my-6 md:space-x-4'>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://ecma-international.org/publications-and-standards/standards/ecma-262/">
                            <Image
                                alt="JavaScript logomark"
                                src="/project_icons/js.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            JavaScript
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://www.typescriptlang.org/">
                            <Image
                                alt="TypeScript logomark"
                                src="/project_icons/typescript.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            TypeScript
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://nextjs.org">
                            <Image
                                alt="Next.js logomark"
                                src="/project_icons/next-logo.svg"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Next.js
                        </Badge>
                    </li>
                    <li className='my-2 md:my-auto'>
                        <Badge href="https://nodejs.org/en/">
                            <Image
                                alt="Node.js logomark"
                                src="/project_icons/programing.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Node.js
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
                </ul>
                <p className="text-lg text-zinc-300 w-full">
                    What excites me the most about software
                    engineering is the never ending road of learning, solving complex
                    problems and innovating scalable solutions.
                    My collaborative approach and strong communication skills enable me to work effectively in cross-functional teams.
                </p>
                <div className="my-6 columns-2 gap-4 sm:columns-3">
                    <div className="relative mb-4 h-40">
                        <Image
                            alt="Laying down on the floor after a brutal workout known as 24.1"
                            src={Dead}
                            fill
                            sizes="(max-width: 768px) 213px, 33vw"
                            priority
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative mb-4 h-80 sm:mb-0">
                        <Image
                            alt="Arriving at aid-station #3 at my first ultra marathon"
                            src={PitStop}
                            fill
                            sizes="(max-width: 768px) 213px, 33vw"
                            priority
                            className="rounded-lg object-cover object-[-16px] sm:object-center"
                        />
                    </div>
                    <div className="relative h-160 sm:mb-4 sm:h-80">
                        <Image
                            alt="Me sitting in front of a sign for Acadia National Park"
                            src={Acadia}
                            fill
                            sizes="(max-width: 768px) 213px, 33vw"
                            priority
                            className="rounded-lg object-cover sm:object-center"
                        />
                    </div>
                    {/* <div className="relative mb-4 h-40 sm:mb-0">
                        <Image
                            alt="One of the best sandwiches I've ever had from All'Antico Vinaio NYC"
                            src={NYC_Sandwich}
                            fill
                            sizes="(max-width: 768px) 213px, 33vw"
                            priority
                            className="rounded-lg object-none object-center"
                        />
                    </div> */}
                    <div className="relative mb-4 h-40">
                        <Image
                            alt="Me running through the Canadian mountains"
                            src={MtnRunna}
                            fill
                            sizes="(max-width: 768px) 213px, 33vw"
                            priority
                            className="rounded-lg object-cover object-bottom"
                        />
                    </div>
                    <div className="relative h-80">
                        <Image
                            alt="Mid workout during my first crossfit competition at Crash Crescendo"
                            src={Crescendo}
                            fill
                            sizes="(max-width: 768px) 213px, 33vw"
                            priority
                            className="rounded-lg object-cover object-right md:object-top"
                        />
                    </div>
                </div>
                <div className="text-lg text-zinc-300 w-full">
                    <p>
                        Recently, I have enjoyed developing my web-app, <a className="underline text-blue-400" href="https://aigiftfairy.com" target='_blank'>GIFTFaiRY🧚🏻</a>, using the React and Django frameworks. The project has helped me to
                        accelerate my learning for both Front-End and Back-End Development!
                    </p>
                </div>
                <div className="text-lg text-zinc-300 w-full">
                    <p>
                        Outside of coding 💻, I enjoy
                        trail running 🏃🏽‍♂️, pushing my body&#39;s limits doing functional fitness 🏋🏽‍♂️, exploring new eats and coffee shops, all which fuels my creativity and perspective
                        while keeping me sane. Looking ahead, I&#39;m eager to continue honing my skills and contributing to impactful projects that push the boundaries of technology.
                    </p>
                    <p>
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