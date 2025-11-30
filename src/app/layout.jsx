import "@/styles/tailwind.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: {
    template: "%s | MimosaShea Radiance™",
    default: "MimosaShea Radiance™",
  },
  description:
    "Luxury botanical-science skincare powered by Mimosa Pudica, Shea Butter, and dermatology-grade actives for luminous, resilient skin.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Botanical Science Journal"
          href="/blog/feed.xml"
        />
      </head>
      <body className="bg-[#F7F4EC] text-[#2E4F3D] antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
