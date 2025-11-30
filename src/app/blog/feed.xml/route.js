export function GET(req) {
  let siteUrl = new URL(req.url).origin
  let feed = `<?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0">
    <channel>
      <title>The Radiant Blog</title>
      <link>${siteUrl}</link>
      <description>Radiant blog updates are now managed directly by the team.</description>
    </channel>
  </rss>`

  return new Response(feed, {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=86400',
    },
  })
}
