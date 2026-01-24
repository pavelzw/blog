import type { APIRoute } from 'astro';

const url = 'https://github.com/pavelzw/cv/releases/latest/download/cv.pdf';

export const prerender = false;

export const GET: APIRoute = async ({ redirect }) => {
  try {
    const response = await fetch(url);
    const data = await response.arrayBuffer();

    return new Response(data, {
      headers: {
        'content-type': 'application/pdf',
        'content-disposition': 'inline; filename=cv.pdf',
      },
    });
  } catch (error) {
    console.error('Failed to fetch CV:', error);
    return redirect(url, 302);
  }
};
