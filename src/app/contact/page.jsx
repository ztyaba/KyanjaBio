import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"

export const metadata = {
  title: "Contact",
  description: "Reach the MimosaShea Radiance™ concierge team for skincare guidance, partnership inquiries, and press.",
}

export default function ContactPage() {
  return (
    <div className="space-y-14 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-3">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">Contact</p>
          <h1 className="text-4xl font-semibold">Concierge skincare support</h1>
          <p className="text-[#5E4630]">
            We’re here to pair you with the right ritual. Expect a response within 1 business day.
          </p>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
            <h2 className="text-2xl font-semibold">Send us a note</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#2E4F3D]">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-[#D9B56C]/60 bg-white/80 px-4 py-3 text-sm text-[#2E4F3D] shadow-sm focus:border-[#2E4F3D] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2E4F3D]">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-[#D9B56C]/60 bg-white/80 px-4 py-3 text-sm text-[#2E4F3D] shadow-sm focus:border-[#2E4F3D] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2E4F3D]">Message</label>
                <textarea
                  className="mt-2 min-h-32 w-full rounded-2xl border border-[#D9B56C]/60 bg-white/80 px-4 py-3 text-sm text-[#2E4F3D] shadow-sm focus:border-[#2E4F3D] focus:outline-none"
                  placeholder="Share your skin goals, sensitivities, or partnership details"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#2E4F3D] px-6 py-3 text-sm font-semibold text-[#F7F4EC] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl bg-[#2E4F3D] p-8 text-[#F7F4EC] shadow-xl">
            <h3 className="text-xl font-semibold">Visit or call</h3>
            <p className="text-sm text-[#F7F4EC]/90">
              Email: care@mimosashea.com
              <br />
              Phone: +1 (800) 555-1234
              <br />
              Studio: 88 Grove Street, Suite 5A, New York
            </p>
            <h4 className="text-lg font-semibold">Press & Partnerships</h4>
            <p className="text-sm text-[#F3C9A6]">
              For editorial requests or collaborations, reach press@mimosashea.com.
            </p>
          </div>
        </Container>
      </FadeInSection>
    </div>
  )
}
