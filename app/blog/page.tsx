import { BlogPosts } from 'app/components/posts'
import { Navigation } from '../components/nav'

export const metadata = {
    title: 'Blog',
    description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="relative pb-16" >
            <Navigation />
            <div className='px-6 pt-20 mx-auto prose prose-neutral dark:prose-invert'>
                <section>
                    <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
                    <BlogPosts />
                </section>
            </div>
        </div>
    )
}
