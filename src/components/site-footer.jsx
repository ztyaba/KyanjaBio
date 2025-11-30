import Link from "next/link"
import { Container } from "./container"

const footerLinks = [
  {
    title: "Collections",
    links: [
      { label: "Ingredient Glossary", href: "/ingredients" },
      { label: "Botanical Science Journal", href: "/blog" },
      { label: "Research References", href: "/product/mimosashea-radiance-cream#research" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Policies", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#D9B56C]/30 bg-white/50">
      <Container className="grid gap-12 py-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4 text-[#2E4F3D]">
          <h3 className="font-serif text-2xl font-semibold">MimosaShea Radiance™</h3>
          <p className="text-sm text-[#5E4630]">
            Luxury botanical-science skincare crafted with Mimosa Pudica, Shea Butter, and dermatology-grade actives for
            radiant, resilient skin.
          </p>
          <div className="flex gap-4 text-sm text-[#2E4F3D]">
            <Link href="mailto:care@mimosashea.com" className="hover:text-[#D9B56C]">
              care@mimosashea.com
            </Link>
            <span className="text-[#5E4630]">|</span>
            <Link href="tel:+18005551234" className="hover:text-[#D9B56C]">
              +1 (800) 555-1234
            </Link>
          </div>
          <p className="text-xs text-[#5E4630]">© {new Date().getFullYear()} MimosaShea Radiance™. All rights reserved.</p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-4 text-[#2E4F3D]">
            <h4 className="font-semibold uppercase tracking-[0.08em] text-xs text-[#5E4630]">{section.title}</h4>
            <ul className="space-y-3 text-sm">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#D9B56C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4">
          <h4 className="font-semibold uppercase tracking-[0.08em] text-xs text-[#5E4630]">Newsletter Signup</h4>
          <p className="text-sm text-[#5E4630]">
            Receive ritual guides, dermatology insights, and early access to limited batches.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full border border-[#D9B56C]/60 bg-white/80 px-4 py-3 text-sm text-[#2E4F3D] shadow-sm focus:border-[#2E4F3D] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2E4F3D] px-5 py-3 text-sm font-semibold text-[#F7F4EC] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </footer>
  )
}
