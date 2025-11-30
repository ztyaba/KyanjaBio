import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"
import { getPost } from "@/data/blog"
import Link from "next/link"
import { notFound } from "next/navigation"

const ingredientAnchors = {
  "Mimosa Pudica": "mimosa",
  "Shea Butter": "shea",
  Niacinamide: "niacinamide",
  "Vitamin C MAP/SAP": "vitaminc",
  "Peptide Complex": "peptides",
  "Hibiscus Extract": "hibiscus",
  "Hyaluronic Acid": "hyaluronic",
  Aloe: "aloe",
  Glycerin: "glycerin",
  "Vitamin E": "vitamine",
}

function ArticleBody({ body }) {
  if (!Array.isArray(body) || body.length === 0) return null

  return body.map((block, index) => {
    switch (block.type) {
      case 'heading2':
        return (
          <h2 key={index} className="mt-10 text-2xl font-semibold text-[#2E4F3D]">
            {block.text}
          </h2>
        )
      case 'heading3':
        return (
          <h3 key={index} className="mt-8 text-xl font-semibold text-[#2E4F3D]">
            {block.text}
          </h3>
        )
      case 'list':
        return (
          <ul key={index} className="my-6 list-disc space-y-2 pl-5 text-sm text-[#2E4F3D] marker:text-[#D9B56C]">
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        )
      case 'paragraph':
      default:
        return (
          <p key={index} className="mt-6 text-base leading-8 text-[#5E4630]">
            {block.text}
          </p>
        )
    }
  })
}

export async function generateMetadata({ params }) {
  const { data: post } = await getPost((await params).slug)
  return post
    ? {
        title: post.title,
        description: post.excerpt,
      }
    : {}
}

export default async function BlogPost({ params }) {
  const { data: post } = await getPost((await params).slug)
  if (!post) notFound()

  return (
    <div className="space-y-14 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-3">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">Botanical Science Journal™</p>
          <h1 className="text-4xl font-semibold leading-tight text-[#2E4F3D]">{post.title}</h1>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#5E4630]">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            {post.categories?.map((cat) => (
              <span key={cat.slug} className="rounded-full bg-[#F7F4EC] px-3 py-1">
                {cat.title}
              </span>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.35fr]">
          <article className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
            {post.mainImage && (
              <div className="overflow-hidden rounded-2xl">
                <img src={post.mainImage} alt="" className="mb-8 h-72 w-full object-cover" />
              </div>
            )}
            <div className="prose prose-invert:prose-h2:text-[#2E4F3D] max-w-none">
              <ArticleBody body={post.body} />
            </div>
          </article>

          <aside className="space-y-6 rounded-3xl bg-[#2E4F3D] p-8 text-[#F7F4EC] shadow-xl">
            <h3 className="text-xl font-semibold">Ingredient reference</h3>
            <p className="text-sm text-[#F7F4EC]/85">
              Explore the glossary entries for every active mentioned in this article.
            </p>
            <ul className="space-y-2 text-sm text-[#F3C9A6]">
              {post.ingredients?.map((ingredient) => (
                <li key={ingredient}>
                  <Link
                    href={`/ingredients#${ingredientAnchors[ingredient] ?? ingredient.toLowerCase().replace(/[^a-z]/g, '')}`}
                    className="underline decoration-[#D9B56C]"
                  >
                    {ingredient}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#F7F4EC] p-4 text-[#2E4F3D] shadow-sm">
              <h4 className="text-lg font-semibold">Related reads</h4>
              <p className="mt-2 text-sm text-[#5E4630]">View more research in the journal.</p>
              <Link href="/blog" className="mt-3 inline-block text-sm font-semibold text-[#2E4F3D] underline decoration-[#D9B56C]">
                Back to Journal
              </Link>
            </div>
          </aside>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-[#D9B56C]/30">
          <h2 className="text-2xl font-semibold text-[#2E4F3D]">Related ingredients</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {post.ingredients?.map((ingredient) => (
              <span
                key={ingredient}
                className="rounded-full border border-[#D9B56C]/50 bg-[#F7F4EC] px-4 py-2 text-sm font-semibold text-[#2E4F3D]"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </Container>
      </FadeInSection>
    </div>
  )
}
