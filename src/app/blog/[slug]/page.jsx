import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  let { slug } = await params

  return {
    title: `${slug} - Radiant Blog`,
    description: 'Blog posts are now published separately by the team.',
  }
}

export default async function BlogPost({ params }) {
  let { slug } = await params
  if (!slug) {
    notFound()
  }

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">{slug}</Heading>
        <Lead className="mt-6 max-w-3xl">
          Blog posts are now being published directly by the team outside of
          this site. Please check official channels for the latest articles.
        </Lead>
        <div className="mt-10 flex gap-3">
          <Button href="/blog">Back to blog</Button>
          <Button variant="outline" href="/">
            Back to homepage
          </Button>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
