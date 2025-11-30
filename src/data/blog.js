import dayjs from 'dayjs'

const posts = [
  {
    slug: 'mimosa-pudica-brightening-protocol',
    title: 'Mimosa Pudica: The Brightening Botanical for Sensitive Skin',
    excerpt:
      'How Mimosa Pudica polysaccharides calm redness while supporting even tone when paired with stabilized vitamin C.',
    publishedAt: '2024-11-05',
    author: { name: 'Leila Mensah' },
    categories: [
      { slug: 'ingredient-science', title: 'Ingredient Science' },
      { slug: 'skin-health', title: 'Skin Health' },
    ],
    mainImage: '/images/mimosa-radiance-hero.jpeg',
    ingredients: ['Mimosa Pudica', 'Vitamin C MAP/SAP', 'Shea Butter'],
    body: [
      {
        type: 'paragraph',
        text: 'Mimosa Pudica is rich in calming polysaccharides that visibly reduce the look of redness and support barrier repair. When combined with Shea Butter and stabilized vitamin C derivatives, it creates a brightening system that stays gentle enough for twice-daily use.',
      },
      {
        type: 'heading2',
        text: 'Formulation considerations',
      },
      {
        type: 'paragraph',
        text: 'Mimosa extracts perform best in pH-balanced emulsions that include barrier-supportive lipids. Pair with MAP/SAP vitamin C to minimize stinging while still delivering radiance and antioxidant support.',
      },
      {
        type: 'list',
        items: [
          'Use 2-5% Mimosa Pudica extract for soothing efficacy.',
          'Blend with Shea Butter and squalane to cushion the skin barrier.',
          'Layer under mineral SPF to maintain brightness gains.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'niacinamide-dermatology-guidelines',
    title: 'Niacinamide, MAP/SAP, and Peptides: Dermatology-Grade Brightening',
    excerpt:
      'A dermatologist-backed routine that pairs niacinamide with stabilized vitamin C and peptides for resilient luminosity.',
    publishedAt: '2024-10-22',
    author: { name: 'Dr. L. Chen' },
    categories: [
      { slug: 'dermatology-guides', title: 'Dermatology Guides' },
      { slug: 'research-and-development', title: 'Research & Development' },
    ],
    mainImage: '/images/mimosa-radiance-hero.jpeg',
    ingredients: ['Niacinamide', 'Vitamin C MAP/SAP', 'Peptide Complex'],
    body: [
      {
        type: 'paragraph',
        text: 'Niacinamide remains one of the most versatile derm-approved actives. At 5%, it balances oil, supports ceramide synthesis, and pairs well with MAP/SAP vitamin C for even tone. Peptide complexes round out the routine by signaling firmness.',
      },
      {
        type: 'heading3',
        text: 'AM/PM pairing tips',
      },
      {
        type: 'paragraph',
        text: 'Use niacinamide and MAP/SAP in the morning under SPF for brightening. At night, pair with peptides and Shea Butter to reinforce elasticity and overnight recovery.',
      },
      {
        type: 'list',
        items: [
          'Avoid mixing with low-pH L-ascorbic acid to keep sensitivity low.',
          'Layer a peptide moisturizer after retinoids to cushion the barrier.',
          'Spot treat discoloration with additional niacinamide serums if needed.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'barrier-repair-for-retinol-users',
    title: 'Barrier Repair Rituals for Retinol Users',
    excerpt:
      'How Shea Butter, hyaluronic acid, and Mimosa Pudica restore comfort when using retinoids or exfoliants.',
    publishedAt: '2024-09-14',
    author: { name: 'Priya Desai' },
    categories: [
      { slug: 'skin-health', title: 'Skin Health' },
      { slug: 'ingredient-science', title: 'Ingredient Science' },
    ],
    mainImage: '/images/mimosa-radiance-hero.jpeg',
    ingredients: ['Shea Butter', 'Hyaluronic Acid', 'Mimosa Pudica', 'Niacinamide'],
    body: [
      {
        type: 'paragraph',
        text: 'Retinoids deliver transformative results but can disrupt the barrier. Cushion your routine with Shea Butter, hyaluronic acid, and Mimosa Pudica to maintain hydration and calm.',
      },
      {
        type: 'heading2',
        text: 'Nightly protocol',
      },
      {
        type: 'list',
        items: [
          'Apply retinoid on dry skin, then layer Radiance Cream to buffer.',
          'Add an occlusive step only if extremely dry or during winter.',
          'Use niacinamide in the morning to reinforce lipid synthesis.',
        ],
      },
      {
        type: 'paragraph',
        text: 'This pairing keeps results on track while keeping sensitivity at bay.',
      },
    ],
  },
]

function sortedPosts() {
  return [...posts].sort((a, b) => dayjs(b.publishedAt).diff(dayjs(a.publishedAt)))
}

export function getPosts(offset = 0, limit = posts.length, category) {
  let list = sortedPosts()
  if (category) {
    list = list.filter((post) => post.categories?.some((cat) => cat.slug === category))
  }
  return {
    data: list.slice(offset, limit),
  }
}

export function getPostsCount(category) {
  let list = category
    ? posts.filter((post) => post.categories?.some((cat) => cat.slug === category))
    : posts
  return {
    data: list.length,
  }
}

export function getFeaturedPosts(count = 3) {
  return {
    data: sortedPosts()
      .filter((post) => post.featured)
      .slice(0, count),
  }
}

export function getCategories() {
  let seen = new Map()
  posts.forEach((post) => {
    post.categories?.forEach((category) => {
      if (!seen.has(category.slug)) {
        seen.set(category.slug, category)
      }
    })
  })
  return { data: Array.from(seen.values()) }
}

export function getPost(slug) {
  return {
    data: posts.find((post) => post.slug === slug) ?? null,
  }
}

export function getPostsForFeed() {
  return { data: sortedPosts() }
}
