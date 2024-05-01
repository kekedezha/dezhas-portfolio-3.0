import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis"; //Import HTTP/REST based Redis database client

//Import icons to be used
import { Eye } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact, FaTerminal, FaNpm, FaNode, FaGithub, FaJava, FaPython, FaBootstrap, FaSwift } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaGit } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss, SiRedux, SiExpress, SiOpenai, SiNextdotjs } from "react-icons/si";
import { DiDjango, DiPostgresql } from "react-icons/di";

// Create Redis instance using your environment variables that should be your REST_URL and REST_TOKEN for the db you created on upstash 
const redis = Redis.fromEnv();

// Style to be passed in as prop for react-icons library
const style = { color: "white", fontSize: "2.5em" }

export const revalidate = 60;
export default async function ProjectsPage() {

  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")), // Use mget to get an array of 'views' page for each key in the db
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>); // Reduce the array of views into an object as {allProjects[i].slug: string, views: number}


  // Featured projects - giftfAIry
  const featured = allProjects.find((project) => project.slug === "giftfairy")!;

  // Sort the rest of the projects, not including the featured. 
  const sorted = allProjects
    .filter((p) => p.published) // Show projects that have published key = true
    .filter(
      (project) =>
        project.slug !== featured.slug //Filter out featured project.
    ) 
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mt-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects & Skills
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 mb-6 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                    {/* Inside card display article component
                        with projects and views passed down as props
                        views - get the views for the correct project, if no project found then display zero */}
                  <Article project={project}  views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                    {/* Inside card display article component
                        with projects and views passed down as props
                        views - get the views for the correct project, if no project found then display zero */}
                  <Article project={project}  views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                    {/* Inside card display article component
                        with projects and views passed down as props
                        views - get the views for the correct project, if no project found then display zero */}
                  <Article project={project}  views={views[project.slug] ?? 0} /> 
                </Card>
              ))}
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="flex flex-col justify-center !mx-1">
          <div className="flex items-center justify-evenly mb-8">
            <FaHtml5 style={style} title="HTML" />
            <FaCss3Alt style={style} title="CSS" />
            <IoLogoJavascript style={style} title="JavaScript" />
            <SiTypescript style={style}title="TypeScript" />
            <FaReact style={style} title="React" />
            <FaGit style={style} title="Git" />
          </div>
          <div className="flex items-center justify-evenly mb-8">
            <SiNextdotjs style={style} title="Next.js" />
            <FaTerminal style={style} title="Terminal" />
            <FaNpm style={style} title="NPM" />
            <FaNode style={style} title="Node.js" />
            <FaGithub style={style} title="Github" />
            <FaJava style={style} title="Java" />
            <FaPython style={style} title="Python" />
            <IoLogoFirebase style={style} title="Firebase" />
            <SiOpenai style={style} title="OpenAI" />
          </div>
          <div className="flex items-center justify-evenly">
            <FaBootstrap style={style} title="Bootstrap" />
            <DiDjango style={style} title="Django" />
            <DiPostgresql style={style} title="PostgreSQL" />
            <SiRedux style={style} title="Redux" />
            <SiTailwindcss style={style} title="Tailwind CSS" />
            <SiExpress style={style} title="Express.js" />
            <FaSwift style={style} title="Swift" />
          </div>
        </div>
      </div>
    </div>
  );
}
