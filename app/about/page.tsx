"use client";

import Image from 'next/image';
import { BlogLink } from '../components/bloglink';
import { Navigation } from "../components/nav";
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
                <p className="text-lg text-slate-300 w-full">
                    I am aspiring software engineer based out of Charlotte, North Carolina, 
                    with about a year of experience specializing in full-stack development
                    and 4 years specializing in controls & automation as a systems engineer. 
                    I thrive in problem solving, crafting up robust solutions using 
                    technologies like:  
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
                    <li>
                        <Badge href="https://www.python.org/">
                            <Image
                                alt="Python logomark"
                                src="/python.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Python
                        </Badge>
                    </li>
                    <li>
                        <Badge href="https://www.djangoproject.com/">
                            <Image
                                alt="Django logomark"
                                src="/django.png"
                                className="!mr-1"
                                width="16"
                                height="16"
                            />
                            Django
                        </Badge>
                    </li>
                </ul>
                <p className="text-lg text-slate-300 w-full">
                    What excites me the most about software 
                    engineering is the never endless road of learning, solving complex 
                    problems and innovating scalable solutions.
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
                <div className="text-lg text-slate-300 w-full">
                    <p>
                     Recently, I have enjoyed developing my web-app, GIFTFaiRY🧚🏻, using the React and Django frameworks. The project has helped me to 
                     accelerate my learning for both Front-End and Back-End Development! 
                     My collaborative approach and strong communication skills enable me to work effectively in cross-functional teams. 
                    </p>
                </div>
                <div className="text-lg text-slate-300 w-full">
                    <p>
                     Outside of coding, I enjoy 
                     trail running, pushing my bodies limits doing functional fitness, exploring new eats and coffee shops, all which fuels my creativity and perspective
                     while keeping me sane. Looking ahead, I'm eager to continue honing my skills and contributing to impactful projects that push the boundaries of technology.
                    </p>
                </div>
                <div className="my-8 flex w-full flex-col space-y-4">
                    <p>✨FUN FACTS: </p>
                    <BlogLink name="What Makes A Great Developer Experience?" slug="developer-experience"/>
                    <BlogLink name="What is Developer Relations?" slug="devrel" />
                    <BlogLink name="The Story of Heroku" slug="heroku" />
                </div>
                <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/leeerob"
                        >
                        <p className="ml-2 h-7">follow me</p>
                        </a>
                    </li>
                    <li>
                        <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://leerob.substack.com"
                        >
                        <p className="ml-2 h-7">get email updates</p>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
    )
};