import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false

export const GET: APIRoute = async ({params, request}) => {

    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');

    const posts = (await getCollection('blog'))

    if (!slug) {
        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    const post = posts.filter((post: {slug: string} ) => post.slug === slug);
    
    return ( post.length > 0 ? new Response(JSON.stringify(post), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    }): new Response(JSON.stringify({message: 'Post not found'}), { status: 404 }));
}