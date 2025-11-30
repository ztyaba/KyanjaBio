import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"

export const metadata = {
  title: "About",
  description: "Discover the MimosaShea Radiance™ story, mission, and values behind our botanical-science skincare.",
}

const values = [
  {
    title: "Derm-first gentleness",
    description: "Fragrance-free, pH-balanced formulations that respect even the most reactive skin types.",
  },
  {
    title: "Botanical integrity",
    description: "Thoughtful sourcing of Mimosa Pudica, Shea Butter, and bioavailable plant extracts with transparent origins.",
  },
  {
    title: "Clinical rigor",
    description: "Every active is stability-tested and dermatologist reviewed for visible results without compromise.",
  },
  {
    title: "Inclusive glow",
    description: "Developed for melanin-rich, sensitive, and hardworking skin with textures that layer effortlessly.",
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-4">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">About</p>
          <h1 className="text-4xl font-semibold">Where heritage botanicals meet modern dermatology</h1>
          <p className="text-[#5E4630]">
            MimosaShea Radiance™ was born from a desire to deliver luminous skin without sacrificing barrier health. We
            combine slow-crafted botanical oils with clinically validated actives to honor skin of every tone and
            sensitivity.
          </p>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-[#5E4630]">
              To craft luxury skincare that respects the skin barrier while delivering dermatologist-level results through
              thoughtful blends of Mimosa Pudica, Shea Butter, stabilized vitamins, and peptides.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-3 text-[#5E4630]">
              A world where luminous, healthy skin is accessible to every complexion—powered by research, transparency, and
              rituals that feel indulgent.
            </p>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container>
          <div className="rounded-3xl bg-white/70 p-10 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h2 className="text-2xl font-semibold">Values</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-[#F7F4EC] p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#2E4F3D]">{value.title}</h3>
                  <p className="mt-2 text-sm text-[#5E4630]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="rounded-3xl bg-white/70 p-10 shadow-sm ring-1 ring-[#D9B56C]/30">
          <h2 className="text-2xl font-semibold">Founder</h2>
          <p className="mt-3 text-[#5E4630]">
            Created by Leila Mensah, a formulation chemist raised among West African Shea cooperatives and trained alongside
            dermatologists in New York. MimosaShea Radiance™ is her ode to rituals that nurture, heal, and glow.
          </p>
        </Container>
      </FadeInSection>
    </div>
  )
}
