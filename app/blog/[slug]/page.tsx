import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
    let posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

interface MetaDataProps {
    slug: string
}

export function generateMetadata({ params }: { params: MetaDataProps }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata
    let ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default function Blog({ params }: { params: MetaDataProps }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="relative pb-16" >
            <div className='pt-4 pl-4 lg:pt-16 lg:pl-16'>
                <Link
                    href="/blog"
                    className="duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </div>
            <div className='px-6 pt-20 mx-auto prose prose-neutral dark:prose-invert'>
                <section>
                    <script
                        type="application/ld+json"
                        suppressHydrationWarning
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'BlogPosting',
                                headline: post.metadata.title,
                                datePublished: post.metadata.publishedAt,
                                dateModified: post.metadata.publishedAt,
                                description: post.metadata.summary,
                                image: post.metadata.image
                                    ? `${baseUrl}${post.metadata.image}`
                                    : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                                url: `${baseUrl}/blog/${post.slug}`,
                                author: {
                                    '@type': 'Person',
                                    name: 'My Portfolio',
                                },
                            }),
                        }}
                    />
                    <h1 className="title font-semibold text-2xl tracking-tighter">
                        {post.metadata.title}
                    </h1>
                    <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {formatDate(post.metadata.publishedAt)}
                        </p>
                    </div>
                    <article className="text-neutral-300">
                        <CustomMDX source={post.content} />
                    </article>
                </section>
            </div>
        </div>
    )
}
