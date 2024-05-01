"use client";

import Image from 'next/image';
import { BlogLink } from '../components/bloglink';
import { Navigation } from "../components/nav";

// Import pictures 
import MtnRunna from '../../public/Mtn_Runna.jpeg';
import PitStop from '../../public/Pit_Stop.jpeg';
import Acadia from '../../public/Acadia.jpeg';
import Dead from '../../public/Dead.jpeg';
import Workout241 from '../../public/24-1.jpeg';
import Coffee_Pastries from '../../public/Coffee&Pastries.jpeg';

function Badge(props:any) {
    return (
      <a
        {...props}
        target="_blank"
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-lg leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      />
    );
  }

export default function About() {
    return (
        <div className="bg-gradient-to-tl from-zinc-800/0 via-zinc-800 to-zinc-800/0 px-80 pb-40 pt-20 flex flex-col md:flex-row mx-0 lg:mx-0">
            <Navigation />
            <div className="text-center min-w-0 mt-6 flex flex-auto flex-col justify-center md:px-0">
                <h1 className="w-full text-slate-200 text-3xl font-medium mb-5">
                    Ayoo, I&#39;m Christian Dezha-Bolteada ✌🏽
                </h1>
                <p className="text-lg text-neutral-400 w-full">
                    I am aspiring software engineer based out of Charlotte, North Carolina, 
                    with a year of experience specializing in full-stack development
                    and 4 years specializing in controls & automation as a systems engineer. 
                    I thrive in problem solving and crafting up robust solutions. My current tech 
                    stack includes the following technologies:  
                </p>
                <ul className='flex justify-center my-6 md:space-x-4'>
                    <li>
                        <Badge href="https://ecma-international.org/publications-and-standards/standards/ecma-262/">
                            <Image
                                alt="JavaScript logomark"
                                src="/js.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            JavaScript
                        </Badge>
                    </li>
                    <li>
                        <Badge href="https://www.typescriptlang.org/">
                            <Image
                                alt="TypeScript logomark"
                                src="/typescript.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            TypeScript
                        </Badge>
                    </li>
                    <li>
                        <Badge href="https://nextjs.org">
                            <Image
                                alt="Next.js logomark"
                                src="/next-logo.svg"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Next.js
                        </Badge>
                    </li>
                    <li>
                        <Badge href="https://nodejs.org/en/">
                            <Image
                                alt="Node.js logomark"
                                src="/programing.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Node.js
                        </Badge>
                    </li>
                    <li>
                        <Badge href="https://expressjs.com/">
                            <Image
                                alt="Express.js logomark"
                                src="/express.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Express.js
                        </Badge>
                    </li>
                </ul>
                <p className="text-lg text-neutral-400 w-full">
                    What excites me the most about software 
                    engineering is the never ending road of learning, solving complex 
                    problems and innovating scalable solutions.
                    My collaborative approach and strong communication skills enable me to work effectively in cross-functional teams.
                </p>
                <div className="my-8 columns-2 gap-4 sm:columns-3">
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
                    <div className="relative h-40 sm:mb-4 sm:h-80">
                        <Image
                        alt="Me sitting in front of a sign for Acadia National Park"
                        src={Acadia}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover sm:object-center"
                        />
                    </div>
                    <div className="relative mb-4 h-40 sm:mb-0">
                        <Image
                        alt="The way to my heart. Coffee and pastries."
                        src={Coffee_Pastries}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-bottom"
                        />
                    </div>
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
                        alt="Me waiting for the countdown timer to hit zero to start my workout"
                        src={Workout241}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                        />
                    </div>
                </div>
                <div className="text-lg text-neutral-400 w-full mb-4">
                    <p>
                     Recently, I have enjoyed developing my web-app, <a className="underline text-blue-400"href="https://aigiftfairy.com" target='_blank'>GIFTFaiRY🧚🏻</a>, using the React and Django frameworks. The project has helped me to 
                     accelerate my learning for both Front-End and Back-End Development!  
                    </p>
                </div>
                <div className="text-lg text-neutral-400 w-full mb-2">
                    <p>
                     Outside of coding 💻, I enjoy 
                     trail running 🏃🏽‍♂️, pushing my body&#39;s limits doing functional fitness 🏋🏽‍♂️, exploring new eats and coffee shops, all which fuels my creativity and perspective
                     while keeping me sane. Looking ahead, I&#39;m eager to continue honing my skills and contributing to impactful projects that push the boundaries of technology.
                    </p>
                </div>
                <div className="my-8 flex w-full flex-col space-y-4">
                    <p className='text-left text-neutral-400 text-xl'>✨FUN FACTS: </p>
                    <BlogLink name="I started off in CS in college, eventually switching to Applied Physics to pursue a more hands-on degree once
                    I got to grad school. Fast forward a couple years later and what do you know... I&#39;m back in CS." 
                    slug="https://physics.appstate.edu/academics/graduate-programs" timer={false}/>
                    <BlogLink name="I got to visit Easter Island in 2020 🗿, a week or two before everything in the world shutdown 🦠." 
                    slug="https://www.chile.travel/en/where-to-go/macrozone/rapa-nui/" timer={false}/>
                    <BlogLink name={`After only running one 5K and three 10Ks, I signed up to run my first Ultra Marathon in 2023 (oh and I only 
                        had less than two months to train for it).`} slug="https://www.runbumtours.com/graysonhighlands" timer={true}/>
                </div>
        </div>
    </div>
    )
};