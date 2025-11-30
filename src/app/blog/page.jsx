import FadeInSection from "@/components/FadeInSection"
import { Container } from "@/components/container"
import { getCategories, getPosts } from "@/data/blog"
import Link from "next/link"

export const metadata = {
  title: "Botanical Science Journal",
  description: "Ingredient science, dermatology guides, and research notes from the MimosaShea Radiance™ lab.",
}

export default async function BlogPage({ searchParams }) {
  const category = (await searchParams)?.category
  const { data: categories } = await getCategories()
  const { data: posts } = await getPosts(0, 20, category)

  return (
    <div className="space-y-14 pb-20 pt-12">
      <FadeInSection>
        <Container className="space-y-4">
          <p className="text-sm uppercase tracking-[0.14em] text-[#5E4630]">Botanical Science Journal™</p>
          <h1 className="text-4xl font-semibold">Research-driven skincare stories</h1>
          <p className="text-[#5E4630]">
            Ingredient Science · Dermatology Guides · Research & Development · Skin Health
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/blog"
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${!category ? 'border-[#D9B56C] bg-[#F7F4EC] text-[#2E4F3D]' : 'border-[#D9B56C]/40 text-[#2E4F3D]'}`}
            >
              All topics
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  category === cat.slug
                    ? 'border-[#D9B56C] bg-[#F7F4EC] text-[#2E4F3D]'
                    : 'border-[#D9B56C]/40 text-[#2E4F3D] hover:border-[#D9B56C]'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection>
        <Container className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-[#D9B56C]/30"
            >
              {post.mainImage && (
                <div className="overflow-hidden rounded-2xl">
                  <img src={post.mainImage} alt="" className="h-44 w-full object-cover" />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 pt-4">
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5E4630]">
                  {post.categories?.map((cat) => (
                    <span key={cat.slug} className="rounded-full bg-[#F7F4EC] px-3 py-1">{cat.title}</span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-[#2E4F3D]">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-[#5E4630]">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between text-xs text-[#5E4630]">
                  <span>{post.author?.name}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </FadeInSection>
    </div>
  )
}
