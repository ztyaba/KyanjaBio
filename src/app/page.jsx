'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Limited release</p>
              <h1 className="mt-6 font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                Mimosa Radiance.
              </h1>
              <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                A luminous blend of vitamin-packed botanicals and adaptive peptides that wraps your skin in a soft-focus glow.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="#">Shop the ritual</Button>
                <Button variant="secondary" href="#">
                  Discover ingredients
                </Button>
              </div>
              <dl className="mt-12 grid grid-cols-1 gap-6 text-sm font-semibold text-gray-950 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/50 p-4 shadow-xs ring-1 ring-black/5 ring-inset">
                  <dt className="text-sm/6 text-gray-600">Dermatologist tested</dt>
                  <dd className="mt-1 text-lg">Clinically gentle</dd>
                </div>
                <div className="rounded-2xl bg-white/50 p-4 shadow-xs ring-1 ring-black/5 ring-inset">
                  <dt className="text-sm/6 text-gray-600">Finish</dt>
                  <dd className="mt-1 text-lg">Radiant, non-greasy</dd>
                </div>
                <div className="rounded-2xl bg-white/50 p-4 shadow-xs ring-1 ring-black/5 ring-inset">
                  <dt className="text-sm/6 text-gray-600">Fragrance</dt>
                  <dd className="mt-1 text-lg">Mimosa + neroli</dd>
                </div>
              </dl>
            </div>
            <div className="relative lg:col-span-6">
              <div className="absolute inset-0 -z-10 rounded-4xl bg-gradient-to-br from-fuchsia-100 via-white to-amber-50" />
              <div className="overflow-hidden rounded-4xl shadow-xl shadow-fuchsia-100 ring-1 ring-black/5 ring-inset">
                <img
                  src="/images/mimosa-radiance-hero.jpeg"
                  alt="Mimosa Radiance serum bottle with soft glow"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const ingredientFeatures = [
  {
    name: 'Shea Butter (Unrefined)',
    description:
      'Deeply moisturizes and repairs the skin barrier using natural fatty acids and vitamins A & E.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Mimosa Flower Extract',
    description: 'Brightens, soothes irritation, and reduces dullness for a natural glow.',
    icon: LockClosedIcon,
  },
  {
    name: 'Vitamin C (Ascorbyl Glucoside)',
    description: 'Boosts luminosity, fades uneven tone, and provides antioxidant protection.',
    icon: ServerIcon,
  },
]

function FadeInSection({ children, className }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={[
        'transition duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

function IngredientSection() {
  return (
    <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
      <Container>
        <div className="mx-auto max-w-6xl rounded-4xl bg-white/70 p-6 shadow-xl shadow-indigo-100 ring-1 ring-black/5 sm:p-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="flex items-stretch justify-start lg:order-first">
              <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg shadow-indigo-100 ring-1 ring-black/5">
                <img
                  alt="MimosaShea Radiance ingredients showcase"
                  src="/images/ingredients-showcase.png"
                  width={2432}
                  height={1442}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:ml-auto lg:max-w-xl lg:pt-6 lg:pl-4">
              <p className="text-base font-semibold text-indigo-600">Ingredients that matter</p>
              <Heading as="h2" className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
                MimosaShea Radiance: Nature’s Most Potent Blend
              </Heading>
              <p className="mt-6 text-lg/8 text-gray-600">
                Our formula blends clinically-backed botanical extracts with nutrient-dense natural oils to deliver visible radiance. Each ingredient plays a targeted role—hydration, firmness, brightness, and barrier repair—working together to create a luxurious daily ritual.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {ingredientFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-950">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <main>
        <FadeInSection>
          <Container className="mt-10">
            <LogoCloud />
          </Container>
        </FadeInSection>
        <FadeInSection>
          <IngredientSection />
        </FadeInSection>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
      </main>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  )
}
