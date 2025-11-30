import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"

const keyBenefits = [
  "Instant radiance without residue",
  "Fades dark spots with MAP/SAP vitamin C",
  "Supports barrier repair with Shea Butter",
  "Peptides and niacinamide for firmness",
  "Deep hydration with hyaluronic acid",
  "Soothes visible redness",
]

const ingredients = [
  "Mimosa Pudica",
  "Shea Butter",
  "Niacinamide",
  "Vitamin C MAP/SAP",
  "Peptides",
  "Hibiscus Extract",
  "Hyaluronic Acid",
  "Aloe",
  "Glycerin",
  "Vitamin E",
]

const inciList = [
  "Aqua (Water)",
  "Butyrospermum Parkii (Shea) Butter",
  "Glycerin",
  "Niacinamide",
  "Sodium Ascorbyl Phosphate",
  "Magnesium Ascorbyl Phosphate",
  "Mimosa Pudica Leaf Extract",
  "Hibiscus Sabdariffa Flower Extract",
  "Acetyl Hexapeptide-8",
  "Palmitoyl Tripeptide-5",
  "Aloe Barbadensis Leaf Juice",
  "Sodium Hyaluronate",
  "Tocopherol (Vitamin E)",
  "Panthenol",
  "Allantoin",
  "Caprylic/Capric Triglyceride",
  "Cetearyl Alcohol",
  "Glyceryl Stearate",
  "Squalane",
  "Propanediol",
  "Caprylyl Glycol",
  "Ethylhexylglycerin",
]

const reviews = [
  {
    name: "Dr. L. Chen, Dermatologist",
    text: "A sophisticated base cream that pairs safely with retinoids and exfoliants. My clients love the glow without the sting.",
  },
  {
    name: "Amina, Product Tester",
    text: "Absorbs beautifully, leaves a satin finish, and visibly softened my smile lines in three weeks.",
  },
  {
    name: "Harper, Makeup Artist",
    text: "The best prep under foundation—no pilling, just calm, hydrated skin that photographs flawlessly.",
  },
]

export const metadata = {
  title: "MimosaShea Radiance Cream",
  description:
    "Brightening, barrier-repair cream featuring Mimosa Pudica, Shea Butter, niacinamide, and stabilized vitamin C.",
}

export default function ProductPage() {
  return (
    <div className="space-y-20 pb-24 pt-12">
      <FadeInSection>
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.16em] text-[#5E4630]">Radiance Cream</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Botanical radiance with clinical precision.</h1>
            <p className="text-lg text-[#5E4630]">
              A luxe moisturizer that brightens, soothes, and strengthens with Mimosa Pudica, Shea Butter, niacinamide,
              MAP/SAP vitamin C, and peptide technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#D9B56C] px-6 py-3 text-sm font-semibold text-[#2E4F3D] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                Add to Cart — $78
              </button>
              <Link href="#research" className="text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
                View research references
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#D9B56C]/40">
            <Image
              src="/images/mimosa-radiance-hero.jpeg"
              alt="MimosaShea Radiance Cream jar on botanical cloth"
              width={900}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container>
          <div className="rounded-3xl bg-white/70 p-10 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h2 className="text-3xl font-semibold">Key benefits</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {keyBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-[#D9B56C]/30 bg-[#F7F4EC] px-5 py-6 text-sm font-semibold text-[#2E4F3D] shadow-sm"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-[#2E4F3D] p-10 text-[#F7F4EC] shadow-xl">
            <h3 className="text-2xl font-semibold">Ingredient science</h3>
            <p className="mt-4 text-sm leading-7 text-[#F7F4EC]/90">
              Mimosa Pudica and Hibiscus extracts deliver polyphenols to calm the look of redness. Shea Butter, squalane,
              and glycerin restore lipids while niacinamide refines pores. Stabilized MAP/SAP vitamin C partners with
              peptides and hyaluronic acid for bright, firm, hydrated skin.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#F3C9A6] sm:grid-cols-3">
              {ingredients.map((ingredient) => (
                <span key={ingredient} className="rounded-full border border-[#F3C9A6]/50 px-4 py-2 text-center">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h4 className="text-xl font-semibold">INCI list</h4>
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-[#5E4630] sm:grid-cols-2">
              {inciList.map((item) => (
                <div key={item} className="rounded-xl bg-[#F7F4EC] px-4 py-3 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h4 className="text-xl font-semibold">How to use</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F7F4EC] p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-[#5E4630]">AM</p>
                <p className="mt-2 text-sm text-[#2E4F3D]">
                  Apply 1-2 pumps after serums. Follow with mineral SPF. Layers seamlessly under makeup.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F7F4EC] p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-[#5E4630]">PM</p>
                <p className="mt-2 text-sm text-[#2E4F3D]">
                  Smooth over face and neck as final step. Compatible with retinol and exfoliating acids.
                </p>
              </div>
            </div>
          </div>
          <div id="research" className="rounded-3xl bg-[#2E4F3D] p-8 text-[#F7F4EC] shadow-xl">
            <h4 className="text-xl font-semibold">Research references</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#F7F4EC]/90">
              <li>Journal of Cosmetic Dermatology: Niacinamide supports ceramide synthesis and barrier recovery.</li>
              <li>International Journal of Cosmetic Science: MAP/SAP vitamin C shows brightening with low irritation.</li>
              <li>Peer-reviewed peptide studies: Acetyl Hexapeptide-8 visibly softens dynamic lines.</li>
              <li>Botanical polysaccharides: Mimosa Pudica calms the appearance of redness and dehydration.</li>
            </ul>
            <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-[#F3C9A6] underline decoration-[#D9B56C]">
              Explore the Botanical Science Journal
            </Link>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container>
          <div className="rounded-3xl bg-white/70 p-10 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h4 className="text-xl font-semibold">Reviews</h4>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.name} className="flex h-full flex-col justify-between rounded-2xl bg-[#F7F4EC] p-5 shadow-sm">
                  <p className="text-sm leading-7 text-[#2E4F3D]">“{review.text}”</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#5E4630]">{review.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#D9B56C] px-6 py-3 text-sm font-semibold text-[#2E4F3D] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                Add to Cart — $78
              </button>
              <Link href="/faq" className="text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
                View FAQs
              </Link>
            </div>
          </div>
        </Container>
      </FadeInSection>
    </div>
  )
}
