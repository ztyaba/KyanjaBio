import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"

const faqs = [
  {
    question: "Is Radiance Cream safe for sensitive skin?",
    answer:
      "Yes. The formula is fragrance-free, pH-balanced, and uses barrier-supportive lipids with gentle brighteners like MAP/SAP vitamin C and niacinamide.",
  },
  {
    question: "When will I see dark-spot improvement?",
    answer:
      "Most users notice brighter, more even tone within 4-6 weeks of consistent twice-daily use alongside SPF.",
  },
  {
    question: "Why use MAP/SAP vitamin C instead of L-Ascorbic Acid?",
    answer:
      "MAP and SAP are more stable, less irritating, and deliver sustained luminosity while remaining compatible with sensitive skin routines.",
  },
  {
    question: "Can I pair Radiance Cream with retinol?",
    answer:
      "Absolutely. The Shea Butter, panthenol, and peptides cushion skin when used with retinoids. Apply Radiance Cream after retinol to lock in hydration.",
  },
  {
    question: "What makes Mimosa Pudica special?",
    answer:
      "Mimosa Pudica polysaccharides help calm visible redness and support the skin barrier, making the formula ideal for reactive complexions.",
  },
]

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about MimosaShea Radiance™ skincare and the Radiance Cream routine.",
}

export default function FAQPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-3">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">FAQ</p>
          <h1 className="text-4xl font-semibold">Your skincare questions, answered</h1>
          <p className="text-[#5E4630]">If you don’t see your question here, reach out to care@mimosashea.com.</p>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-[#F7F4EC] p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#2E4F3D]">{faq.question}</h2>
                <p className="mt-2 text-sm text-[#5E4630]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </FadeInSection>
    </div>
  )
}
