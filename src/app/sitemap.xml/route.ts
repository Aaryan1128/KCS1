import type { NextRequest } from "next/server";

const routes = ["/", "/about", "/services", "/contact", "/faq", "/blog"];

export const dynamic = "force-static";

export async function GET(_req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const today = new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        (path) =>
          `  <url><loc>${siteUrl}${path}</loc><lastmod>${today}</lastmod></url>\n`
      )
      .join("") +
    `</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}


