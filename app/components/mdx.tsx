// @ts-nocheck
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

function clsx(...args: any) {
	return args.filter(Boolean).join(" ");
}

function Table({ data }) {
	let headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	))
	let rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

function CustomLink(props) {
	let href = props.href

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
	return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
	let codeHTML = highlight(children)
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
	const Heading = ({ children }) => {
		let slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor',
				}),
			],
			children
		)
	}

	Heading.displayName = `Heading${level}`

	return Heading
}

const components = {
	h1: ({ className, ...props }) => (
		<h1
			className={clsx(
				"mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }) => (
		<h2
			className={clsx(
				"mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }) => (
		<h3
			className={clsx(
				"mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }) => (
		<h4
			className={clsx(
				"mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }) => (
		<h5
			className={clsx(
				"mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }) => (
		<h6
			className={clsx(
				"mt-8 scroll-m-20 text-base font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }) => (
		<Link
			className={clsx(
				"font-medium text-zinc-900 underline underline-offset-4",
				className,
			)}
			{...props}
		/>
	),
	p: ({ className, ...props }) => (
		<p
			className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }) => (
		<ul className={clsx("my-6 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }) => (
		<ol className={clsx("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }) => (
		<li className={clsx("mt-2", className)} {...props} />
	),
	blockquote: ({ className, ...props }) => (
		<blockquote
			className={clsx(
				"mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
				className,
			)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={clsx("rounded-md mx-auto border border-zinc-200", className)}
			alt={alt}
			{...props}
		/>
	),
	hr: ({ ...props }) => (
		<hr className="my-4 border-zinc-200 md:my-8" {...props} />
	),
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="w-full my-6 overflow-y-auto">
			<table className={clsx("w-full", className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={clsx(
				"m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
				className,
			)}
			{...props}
		/>
	),
	th: ({ className, ...props }) => (
		<th
			className={clsx(
				"border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }) => (
		<td
			className={clsx(
				"border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	pre: ({ className, ...props }) => (
		<pre
			className={clsx(
				"mt-6 mb-4 overflow-x-auto rounded-lg bg-zinc-900 py-4",
				className,
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }) => (
		<code
			className={clsx(
				"relative rounded border bg-zinc-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-zinc-600",
				className,
			)}
			{...props}
		/>
	),
	Image,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}