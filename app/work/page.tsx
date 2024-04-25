import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work experience',
};

export default function WorkPage() {
  return (
    <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
        <div className="prose prose-neutral dark:prose-invert">
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
            <h2 className="font-medium text-xl mb-1 tracking-tighter">Vercel</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            VP of Product
            </p>
            <p>
            I joined <a href="https://vercel.com/home">Vercel</a> early to grow{' '}
            <a href="https://nextjs.org">Next.js</a> and our developer community.
            I built our Developer Relations team to teach our community about our
            products.
            </p>
            <ul>
                <li>
                    In 2021, I was promoted to Director of DevRel. We{' '}
                    <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
                    translated customer pain
                    </a>{' '}
                    back into the product roadmap. We spoke at{' '}
                    <Link href="/blog/nextjs-conf-2022-recap">conferences</Link>, wrote
                    blog posts, and created videos. We built open-source examples and
                    contributed back to the product.
                </li>
                <li>
                    In 2022, I was promoted to VP of Developer Experience, now also
                    leading our product documentation team. My team created a{' '}
                    <a href="https://nextjs.org/learn">new free course</a> to teach
                    Next.js, which had 17 million page views that year.{' '}
                    <a href="https://twitter.com/leeerob/status/1608900031859527682">
                    I shipped.
                    </a>{' '}
                    I partnered with our open-source community, collaborating with
                    frameworks like{' '}
                    <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{' '}
                    <a href="https://astro.build/blog/vercel-official-hosting-partner/">
                    Astro
                    </a>{' '}
                    and sponsoring individuals and projects.
                </li>
                <li>
                    In 2023, I was promoted to VP of Product, now also leading Product
                    Management.
                </li>
            </ul>
            <p>
            Since I joined Vercel in 2020, Next.js active developers have grown
            1000%, now at ~900k. Next.js is now a top 10 software project on
            GitHub with. It&#39;s used by Walmart, ChatGPT, Starbucks, Okta,
            Datastax, Notion, and <a href="https://nextjs.org/showcase">more</a>.
            </p>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
    </section>
  );
}