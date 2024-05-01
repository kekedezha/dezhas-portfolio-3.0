import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

// Set revalidation time
export const revalidate = 60;

// Declare type alias for Props - of params object containing slug property
type Props = {
  params: {
    slug: string;
  };
};

// Create Redis instance using your environment variables that should be your REST_URL and REST_TOKEN for the db you created on upstash 
const redis = Redis.fromEnv();

//export generateStaticParams function that will return a promise containing an array of slugs all projects that have been published and 
export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}


export default async function PostPage({ params }: Props) {
  // Set slug to params property slug...though may or may not have one
  const slug = params?.slug;
  // Set project to be displayed. 
  const project = allProjects.find((project) => project.slug === slug);

  // If no project then display 404 not found. 
  if (!project) {
    notFound();
  }

//Get amount of views for project to be passed down as prop to header  
const views = (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}