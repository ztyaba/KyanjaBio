import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Blog',
  description:
    'Stay informed with product updates, company news, and insights on how to sell smarter at your company.',
}

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          What’s happening at Radiant.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Our blog is now managed separately so we can publish updates in the
          way that works best for the team.
        </Lead>
      </Container>
      <Container className="mt-16 pb-24">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-base/7 text-gray-700">
            Blog posts will be published directly by the team. If you&apos;re
            looking for the latest news or product updates, please check the
            official Radiant channels or reach out to the team for links to new
            articles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/">Back to homepage</Button>
            <Button variant="outline" href="mailto:hello@radiant.com">
              Contact the team
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
