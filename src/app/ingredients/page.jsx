import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"
import Link from "next/link"

const ingredients = [
  {
    id: "mimosa",
    name: "Mimosa Pudica",
    inci: "Mimosa Pudica Leaf Extract",
    summary: "Calming polysaccharides and antioxidants that visibly reduce redness and support barrier recovery.",
  },
  {
    id: "shea",
    name: "Shea Butter",
    inci: "Butyrospermum Parkii (Shea) Butter",
    summary: "Rich in omega fatty acids to cushion the skin barrier and lock in hydration without heaviness.",
  },
  {
    id: "niacinamide",
    name: "Niacinamide",
    inci: "Niacinamide",
    summary: "Balances oil, improves tone, and supports ceramide production for resilient skin.",
  },
  {
    id: "vitaminc",
    name: "Vitamin C MAP/SAP",
    inci: "Magnesium Ascorbyl Phosphate & Sodium Ascorbyl Phosphate",
    summary: "Stable vitamin C derivatives that brighten and boost collagen with minimal irritation.",
  },
  {
    id: "peptides",
    name: "Peptide Complex",
    inci: "Acetyl Hexapeptide-8, Palmitoyl Tripeptide-5",
    summary: "Signals skin to support firmness and soften the appearance of fine lines.",
  },
  {
    id: "hibiscus",
    name: "Hibiscus Extract",
    inci: "Hibiscus Sabdariffa Flower Extract",
    summary: "Naturally occurring AHAs and antioxidants for smooth, radiant texture.",
  },
  {
    id: "hyaluronic",
    name: "Hyaluronic Acid",
    inci: "Sodium Hyaluronate",
    summary: "Multiple molecular weights for surface dewiness and deep hydration.",
  },
  { id: "aloe", name: "Aloe", inci: "Aloe Barbadensis Leaf Juice", summary: "Soothes and replenishes with phytonutrients and hydration." },
  { id: "glycerin", name: "Glycerin", inci: "Glycerin", summary: "Humectant that attracts water to keep skin supple." },
  { id: "vitamine", name: "Vitamin E", inci: "Tocopherol", summary: "Lipid-soluble antioxidant that protects against environmental stressors." },
]

export const metadata = {
  title: "Ingredient Glossary",
  description: "Explore the MimosaShea Radiance™ ingredient glossary with INCI names, science summaries, and journal links.",
}

export default function IngredientsPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-3">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">Ingredient Glossary</p>
          <h1 className="text-4xl font-semibold">Botanical-science index</h1>
          <p className="text-[#5E4630]">Explore the actives behind MimosaShea Radiance™. Each ingredient links to journal insights.</p>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-6 lg:grid-cols-2">
          {ingredients.map((ingredient) => (
            <div
              id={ingredient.id}
              key={ingredient.name}
              className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-[#D9B56C]/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-[#2E4F3D]">{ingredient.name}</h2>
                  <p className="text-xs uppercase tracking-[0.08em] text-[#5E4630]">{ingredient.inci}</p>
                </div>
                <Link href={`/blog?category=ingredient-science#${ingredient.id}`} className="text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
                  Journal</Link>
              </div>
              <p className="mt-3 text-sm text-[#5E4630]">{ingredient.summary}</p>
            </div>
          ))}
        </Container>
      </FadeInSection>
    </div>
  )
}
