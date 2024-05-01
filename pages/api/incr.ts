import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// Create Redis instance using your environment variables that should be your REST_URL and REST_TOKEN for the db you created on upstash 
const redis = Redis.fromEnv();

export const config = {
  runtime: "edge",
};

// Export incr function used to increment page 'view' by one
export default async function incr(req: NextRequest): Promise<NextResponse> {
  // If the req method does not equal POST then return 405 status error
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }
  // If the req.header is not 'application/json then return 400 status error
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }
  // get request body and store in body variable 
  const body = await req.json();
  // assign undefined to slug which can either be a string or undefined. 
  let slug: string | undefined = undefined;
  
  // If there is a slug property in body then assign it to the slug variable
  if ("slug" in body) {
    slug = body.slug;
  }
  // If there is not a slug property in body then send a 400 status error
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }
  
  // Store the reqest ip in the ip variable
  const ip = req.ip;
  
  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip),
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // deduplicate the ip for each slug
    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
    if (!isNew) {
      new NextResponse(null, { status: 202 });
    }
  }
  // await the call to redis db instance to increment the page view count on the selected project
  await redis.incr(["pageviews", "projects", slug].join(":"));
  // Return a successful 202 status response to an increment in page count for the selected project
  return new NextResponse(null, { status: 202 });
}