import Link from "next/link"
import { Container } from "./container"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/ingredients", label: "Ingredient Glossary" },
  { href: "/blog", label: "Botanical Science Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D9B56C]/40 bg-[#F7F4EC]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-tight text-[#2E4F3D]">
          <span className="text-base font-semibold tracking-wide sm:text-lg">
            MimosaShea Radiance™
          </span>
          <span className="text-xs text-[#5E4630]">Botanical-science skincare</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#2E4F3D] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#D9B56C]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-[#D9B56C] px-4 py-2 text-sm font-semibold text-[#2E4F3D] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Shop Now
        </Link>
      </Container>
      <Container className="pb-4 md:hidden">
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#2E4F3D]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#D9B56C]">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  )
}
