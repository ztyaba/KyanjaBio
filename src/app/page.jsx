import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  "Brightens", "Fades dark spots", "Deep hydration", "Barrier repair", "Anti-aging", "Smooths fine lines",
]

const ingredientHighlights = [
  { title: "Mimosa Pudica", description: "Botanical antioxidant to calm and brighten the complexion.", href: "/ingredients#mimosa" },
  { title: "Niacinamide", description: "Balances oil, refines pores, and fades discoloration.", href: "/ingredients#niacinamide" },
  { title: "Vitamin C MAP/SAP", description: "Stable forms of vitamin C for luminosity without irritation.", href: "/ingredients#vitaminc" },
  { title: "Peptide Complex", description: "Supports firmness and a resilient moisture barrier.", href: "/ingredients#peptides" },
]

const testimonials = [
  {
    name: "Elena, Dermatology RN",
    quote:
      "The Radiance Cream layers beautifully with prescription actives and keeps my patients’ skin calm and luminous.",
  },
  {
    name: "Priya, Product Tester",
    quote: "I saw softer texture within a week and my post-breakout marks faded faster than with my previous routine.",
  },
  {
    name: "Jordan, Beauty Editor",
    quote: "An elegant botanical-science formula—sheer enough for day, reparative enough for night.",
  },
]

export const metadata = {
  description:
    "MimosaShea Radiance™ blends Mimosa Pudica, Shea Butter, Niacinamide, and dermatology-grade actives for luminous, resilient skin.",
}

export default function Home() {
  return (
    <div className="space-y-24 pb-24 pt-10">
      <FadeInSection>
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#5E4630]">MimosaShea Radiance™</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Botanical Radiance. Modern Dermatology.
            </h1>
            <p className="text-lg text-[#5E4630]">
              A luminous cream powered by Mimosa Pudica, Shea Butter, and stabilized vitamin C derivatives to brighten,
              fortify, and hydrate even the most sensitive skin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/product/mimosashea-radiance-cream"
                className="rounded-full bg-[#D9B56C] px-6 py-3 text-sm font-semibold text-[#2E4F3D] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Shop Radiance Cream
              </Link>
              <Link
                href="/ingredients"
                className="rounded-full border border-[#D9B56C] px-6 py-3 text-sm font-semibold text-[#2E4F3D] transition hover:-translate-y-0.5 hover:bg-[#F7F4EC]"
              >
                Explore the science
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#D9B56C]/40">
            <Image
              src="/images/mimosa-radiance-hero.jpeg"
              alt="MimosaShea Radiance cream on botanical background"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container>
          <div className="rounded-3xl bg-white/70 p-10 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h2 className="text-3xl font-semibold">Benefits you can feel</h2>
            <p className="mt-3 text-[#5E4630]">Clinically informed botanicals and derm-grade actives, balanced for daily use.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-[#D9B56C]/30 bg-[#F7F4EC] px-5 py-6 text-lg font-semibold text-[#2E4F3D] shadow-sm"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[#2E4F3D] p-8 text-[#F7F4EC] shadow-xl">
            <h3 className="text-2xl font-semibold">Ingredient science</h3>
            <p className="mt-3 text-[#F3C9A6]">Dermatology-grade actives meet gentle botanicals.</p>
            <p className="mt-4 text-sm leading-7 text-[#F7F4EC]/90">
              Every active is chosen for stability, tolerance, and synergy. Explore the glossary for sourcing standards and
              concentration ranges, then dive into the Botanical Science Journal for deeper research.
            </p>
            <Link
              href="/ingredients"
              className="mt-6 inline-flex items-center rounded-full bg-[#D9B56C] px-5 py-3 text-sm font-semibold text-[#2E4F3D] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              View Ingredient Glossary
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ingredientHighlights.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#D9B56C]/30 bg-white/70 p-6 shadow-sm"
              >
                <div>
                  <h4 className="text-xl font-semibold text-[#2E4F3D]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[#5E4630]">{item.description}</p>
                </div>
                <Link href={item.href} className="mt-4 text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
                  Glossary + Journal
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">Our story</p>
            <h3 className="text-3xl font-semibold">Crafted for sensitive, melanin-rich, and hardworking skin.</h3>
            <p className="text-[#5E4630]">
              MimosaShea Radiance™ was born from derm-led testing and heritage botanicals. We formulate with barrier-safe pH,
              zero added fragrance, and clinically dosed actives that deliver glow without compromising resilience.
            </p>
            <Link href="/about" className="text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
              Discover the brand philosophy
            </Link>
          </div>
          <div className="rounded-3xl bg-white/70 p-10 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h4 className="text-xl font-semibold">Testimonials</h4>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-2xl bg-[#F7F4EC] p-5 shadow-sm">
                  <p className="text-sm leading-7 text-[#2E4F3D]">“{testimonial.quote}”</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#5E4630]">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container>
          <div className="rounded-3xl bg-[#F3C9A6] p-10 text-[#2E4F3D] shadow-sm ring-1 ring-[#D9B56C]/40">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.12em] text-[#5E4630]">Newsletter</p>
                <h4 className="text-3xl font-semibold">Receive rituals, research, and early access.</h4>
                <p className="text-[#5E4630]">
                  Monthly dispatches on ingredient science, dermatologist tips, and limited-batch releases.
                </p>
                <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full flex-1 rounded-full border border-[#D9B56C]/60 bg-white/70 px-4 py-3 text-sm text-[#2E4F3D] shadow-sm focus:border-[#2E4F3D] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#2E4F3D] px-6 py-3 text-sm font-semibold text-[#F7F4EC] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Join
                  </button>
                </form>
              </div>
              <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-[#D9B56C]/30">
                <h5 className="text-lg font-semibold">Featured studies</h5>
                <ul className="mt-4 space-y-3 text-sm text-[#5E4630]">
                  <li>Mimosa Pudica polysaccharides shown to calm visible redness</li>
                  <li>Niacinamide proven to support barrier lipids at 5% concentration</li>
                  <li>MAP/SAP vitamin C delivers brightness with minimal stinging</li>
                </ul>
                <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
                  Read the Botanical Science Journal
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </FadeInSection>
    </div>
  )
}
