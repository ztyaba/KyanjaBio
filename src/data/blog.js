import dayjs from 'dayjs'

const posts = [
  {
    slug: 'launching-kyanja-bio',
    title: 'Launching Kyanja Bio',
    excerpt:
      'Learn why we started Kyanja Bio and how we are building a platform to accelerate biological discoveries.',
    publishedAt: '2024-05-01',
    author: {
      name: 'Michael Foster',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    categories: [
      { slug: 'company-news', title: 'Company news' },
      { slug: 'product-updates', title: 'Product updates' },
    ],
    mainImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    body: [
      {
        type: 'paragraph',
        text: 'Kyanja Bio was founded to give researchers clearer insight into their data and faster ways to act on it. We are combining intuitive software with practical workflows so labs can move from raw signal to confident decisions without getting stuck in tooling.',
      },
      {
        type: 'heading2',
        text: 'What to expect',
      },
      {
        type: 'paragraph',
        text: 'Over the coming months we will roll out guided analyses, richer visualizations, and collaboration tools tailored for wet lab teams. Our goal is to help you close the loop between experiments and outcomes.',
      },
    ],
    featured: true,
  },
  {
    slug: 'workflow-efficiency-checklist',
    title: 'A simple checklist for workflow efficiency',
    excerpt:
      'Five small changes that make a big difference when you need reliable results under time pressure.',
    publishedAt: '2024-04-12',
    author: {
      name: 'Amina Patel',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    },
    categories: [
      { slug: 'best-practices', title: 'Best practices' },
    ],
    mainImage:
      'https://images.unsplash.com/photo-1519304754480-2b1f61a3ab63?auto=format&fit=crop&w=1200&q=80',
    body: [
      {
        type: 'paragraph',
        text: 'Small optimizations add up. In our work with partner labs we repeatedly see that time spent on naming conventions, sample tracking, and handoffs saves hours of confusion later.',
      },
      {
        type: 'list',
        items: [
          'Write down expected outcomes before you start an experiment to align the team.',
          'Keep sample metadata in one shared place; avoid sending edits across multiple files.',
          'Automate notifications for critical steps so nothing waits in an inbox.',
        ],
      },
      {
        type: 'paragraph',
        text: 'You do not need a complex system to benefit from structure—start with a simple checklist and iterate.',
      },
    ],
    featured: true,
  },
  {
    slug: 'customer-story-lumina',
    title: 'How Lumina Labs shortened their analysis cycle',
    excerpt:
      'The Lumina Labs team used Kyanja Bio to cut their reporting time in half while keeping data quality high.',
    publishedAt: '2024-03-20',
    author: {
      name: 'Michael Foster',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    categories: [
      { slug: 'customer-stories', title: 'Customer stories' },
      { slug: 'best-practices', title: 'Best practices' },
    ],
    mainImage:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=1200&q=80',
    body: [
      {
        type: 'paragraph',
        text: 'Lumina Labs needed to move faster without sacrificing the quality standards their customers expect. We worked together to map their data flow and highlight where automation would help.',
      },
      {
        type: 'heading3',
        text: 'Results after four weeks',
      },
      {
        type: 'list',
        items: [
          '50% reduction in manual spreadsheet work.',
          'Automatic alerts when runs finish processing.',
          'Shared dashboards for stakeholders who need status without asking.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The team plans to expand their use of Kyanja Bio to additional programs later this year.',
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
