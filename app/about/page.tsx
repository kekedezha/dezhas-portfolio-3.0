"use client";

import Image from 'next/image';
import { BlogLink } from '../components/bloglink';
import { Navigation } from "../components/nav";


export default function About() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-800/0 via-zinc-800 to-zinc-800/0">
            <Navigation />
            <div className="container flex-column items-center justify-center min-h-screen px-4 mx-auto pt-20">
                <h1 className="prose prose-neutral dark:prose-invert text-2xl font-medium tracking-tighter">
                Ayoo, I&#39;m Christian Dezha 👋
                </h1>
                <div className="my-8 columns-2 gap-4 sm:columns-3">
                    <div className="relative mb-4 h-40">
                        <Image
                        alt="Me speaking on stage at React Summit about the future of Next.js"
                        src={''}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative mb-4 h-80 sm:mb-0">
                        <Image
                        alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                        src={''}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-[-16px] sm:object-center"
                        />
                    </div>
                    <div className="relative h-40 sm:mb-4 sm:h-80">
                        <Image
                        alt="Me standing on stage at Reactathon delivering the keynote"
                        src={''}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-top sm:object-center"
                        />
                    </div>
                    <div className="relative mb-4 h-40 sm:mb-0">
                        <Image
                        alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                        src={''}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative mb-4 h-40">
                        <Image
                        alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                        src={''}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative h-80">
                        <Image
                        alt="My badge on top of a pile of badges from a Vercel meetup we held"
                        src={''}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                        />
                    </div>
                </div>
                <div className="prose prose-neutral dark:prose-invert">
                    <p>
                        I create educational content for developers, teaching them about web
                        development, JavaScript and TypeScript, React and Next.js, and more.
                        This comes in all forms: blog posts, videos, tweets, conference talks,
                        and workshops. You can watch some of my favorites below.
                    </p>
                </div>
                <div className="prose prose-neutral dark:prose-invert">
                    <p>
                        Over the past decade, I&#39;ve written content on my blog and newsletter.
                        I try to keep things simple. You&#39;ll find writing about technologies
                        I&#39;m interested in at the time, or how I&#39;m learning and growing in my
                        career, sharing knowledge along the way.
                    </p>
                </div>
                <div className="my-8 flex w-full flex-col space-y-4">
                    <BlogLink name="What Makes A Great Developer Experience?" slug="developer-experience"/>
                    <BlogLink name="What is Developer Relations?" slug="devrel" />
                    <BlogLink name="The Story of Heroku" slug="heroku" />
                </div>
                <div className="prose prose-neutral dark:prose-invert">
                    <p>
                        I invest small angel checks into early stage startups building tools
                        for developers.
                    </p>
                </div>
                <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://linear.app">
                        <svg width="78" height="20" role="img" aria-label="Linear logo">
                            <use href="/sprite.svg#linear" />
                        </svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://supabase.com">
                        <svg width="100" height="19" role="img" aria-label="Supabase logo">
                            <use href="/sprite.svg#supabase" />
                        </svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
                        <svg width="96" height="19" role="img" aria-label="Makeswift logo">
                            <use href="/sprite.svg#makeswift" />
                        </svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://resend.com">
                        <svg width="70" height="17" role="img" aria-label="Resend logo">
                            <use href="/sprite.svg#resend" />
                        </svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://bun.sh">
                        <svg width="35" height="27" role="img" aria-label="Bun logo">
                            <use href="/sprite.svg#bun" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div className="prose prose-neutral dark:prose-invert">
                    <p>
                        I&#39;ve worked with and advised companies on{' '},{' '}, building
                        open-source communities, product-led growth, and more.
                    </p>
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