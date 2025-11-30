import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "MimosaShea Radiance Cream",
    description: "Brightening, barrier-repair moisturizer with Mimosa Pudica, Shea Butter, niacinamide, and MAP/SAP vitamin C.",
    price: "$78",
    image: "/images/mimosa-radiance-hero.jpeg",
    href: "/product/mimosashea-radiance-cream",
  },
]

export const metadata = {
  title: "Shop",
  description: "Shop MimosaShea Radiance™ skincare, crafted with Mimosa Pudica and Shea Butter for luminous, resilient skin.",
}

export default function ShopPage() {
  return (
    <div className="space-y-14 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">Shop</p>
          <h1 className="text-4xl font-semibold">Luxury botanical-science skincare</h1>
          <p className="text-[#5E4630]">Curated rituals for bright, resilient skin—designed to be gentle enough for daily use.</p>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col rounded-3xl bg-white/70 p-4 shadow-sm ring-1 ring-[#D9B56C]/30">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-[#5E4630]">{product.description}</p>
                <p className="text-lg font-semibold text-[#2E4F3D]">{product.price}</p>
                <Link
                  href={product.href}
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-[#D9B56C] px-5 py-3 text-sm font-semibold text-[#2E4F3D] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  View product
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </FadeInSection>
    </div>
  )
}
