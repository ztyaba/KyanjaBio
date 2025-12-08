'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { AnimatedNumber } from '@/components/animated-number'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
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
                <div
                  className="rounded-2xl bg-white/50 p-4 shadow-xs ring-1 ring-black/5 ring-inset animate-fade-in-right"
                  style={{ animationDelay: '0s' }}
                >
                  <dt className="text-sm/6 text-gray-600">Dermatologist tested</dt>
                  <dd className="mt-1 text-lg">Clinically gentle</dd>
                </div>
                <div
                  className="rounded-2xl bg-white/50 p-4 shadow-xs ring-1 ring-black/5 ring-inset animate-fade-in-right"
                  style={{ animationDelay: '0.15s' }}
                >
                  <dt className="text-sm/6 text-gray-600">Finish</dt>
                  <dd className="mt-1 text-lg">Radiant, non-greasy</dd>
                </div>
                <div
                  className="rounded-2xl bg-white/50 p-4 shadow-xs ring-1 ring-black/5 ring-inset animate-fade-in-right"
                  style={{ animationDelay: '0.3s' }}
                >
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

const benefits = [
  {
    name: 'Hydration',
    description: 'Deeply moisturizes the skin',
    icon: function HydrationIcon(props) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="1.5" className="h-8 w-8" {...props}>
          <path d="M12 3.5C9 7 6 10.1 6 13.4c0 3.7 2.9 6.6 6 6.6s6-2.9 6-6.6C18 10.1 15 7 12 3.5z" />
        </svg>
      )
    },
  },
  {
    name: 'Natural Ingredients',
    description: 'Made with high‑quality plant‑based ingredients',
    icon: function NaturalIcon(props) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="1.5" className="h-8 w-8" {...props}>
          <path d="M12 21s-6-4.5-6-10A6 6 0 0112 5a6 6 0 016 6c0 5.5-6 10-6 10z" />
        </svg>
      )
    },
  },
  {
    name: 'Antioxidants',
    description: 'Protects the skin from free radicals',
    icon: function AntioxidantIcon(props) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="1.5" className="h-8 w-8" {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.7-5.7l-1.4 1.4M8.7 17.3l-1.4 1.4m0-12.4 1.4 1.4m9.6 9.6-1.4-1.4" />
        </svg>
      )
    },
  },
  {
    name: 'Nourishing Formula',
    description: 'Provides essential nutrients',
    icon: function NourishingIcon(props) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="1.5" className="h-8 w-8" {...props}>
          <path d="M4 12c4 0 4-6 8-6s4 6 8 6-4 6-8 6-4-6-8-6z" />
          <path d="M8 10c1.5.5 3 .5 4.5 0" />
        </svg>
      )
    },
  },
  {
    name: 'Natural Glow',
    description: "Enhances the skin's radiance",
    icon: function GlowIcon(props) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="1.5" className="h-8 w-8" {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.7-5.7l-1.4 1.4m0 9.6l1.4 1.4m-9.6-1.4l1.4-1.4m0-9.6l-1.4 1.4" />
        </svg>
      )
    },
  },
  {
    name: 'Sensitive Skin',
    description: 'Suitable for delicate skin',
    icon: function SensitiveIcon(props) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1f3a2e" strokeWidth="1.5" className="h-8 w-8" {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 14c2-1 3-3 3-5" />
          <path d="M9 10c1 1 2 2 3 2" />
        </svg>
      )
    },
  },
]

function FadeInSection({ children, className }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
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

function IngredientDetailSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const touchStartX = useRef(null)

  const goToSlide = (index) => {
    setActiveSlide((index + 2) % 2)
  }

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % 2)
  }

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + 2) % 2)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const diffX = event.changedTouches[0].clientX - touchStartX.current

    if (diffX < -50) {
      goNext()
    } else if (diffX > 50) {
      goPrev()
    }

    touchStartX.current = null
  }

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-28 sm:py-32">
      <Container className="max-w-6xl lg:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center lg:max-w-5xl">
          <p className="text-base/7 font-semibold text-indigo-600">Our Ingredients</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
            A science-backed botanical formula for deeply nourished, radiant skin
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            MimosaShea blends traditional African shea butter craftsmanship with modern skincare science. Our formula pairs
            nutrient-rich botanicals, vitamins, peptides, and advanced hydrators to brighten, soothe, and strengthen the skin
            barrier — naturally and effectively.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 lg:mt-14">
          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to ${index === 0 ? 'Benefits' : 'Why our formula works'} block`}
              className={`size-3 rounded-full transition ${
                activeSlide === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <section className="relative mt-12 lg:mt-16" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="overflow-hidden rounded-4xl bg-white/70 shadow-xl shadow-indigo-100 ring-1 ring-black/5">
            <div
              className="flex w-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              <div className="w-full flex-shrink-0 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
                  <div className="space-y-4 text-base/7 text-gray-600">
                    <p className="text-base/7 font-semibold uppercase tracking-[0.2em] text-indigo-600">Benefits</p>
                    <h3 className="text-3xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-4xl">
                      What you feel on your skin
                    </h3>
                    <p>
                      Designed for daily wear, MimosaShea floods the skin with cushiony moisture, antioxidants, and calming
                      botanicals. Swipe to see the full list of benefits you can expect from the blend.
                    </p>
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-5 ring-1 ring-black/5">
                      <p className="text-sm/6 font-semibold text-indigo-700">Texture &amp; finish</p>
                      <p className="mt-2 text-lg/8 font-semibold text-gray-950">
                        Silky, fast-absorbing moisture with a soft-focus glow.
                      </p>
                      <p className="mt-2 text-sm/6 text-gray-600">
                        Clinically gentle on sensitive skin with non-comedogenic oils and barrier-supporting humectants.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.name}
                        className="group flex items-start gap-3 rounded-3xl bg-white/80 p-4 shadow-md shadow-indigo-50 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
                      >
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                          <benefit.icon className="text-emerald-900" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-gray-950">{benefit.name}</p>
                          <p className="text-sm/6 text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full flex-shrink-0 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-16">
                  <div className="order-2 space-y-6 text-base/7 text-gray-600 lg:order-1 lg:max-w-xl">
                    <h3 className="text-2xl font-semibold tracking-tight text-pretty text-gray-950">Why Our Formula Works</h3>
                    <p>
                      At the core of our blend is <span className="font-semibold text-gray-950">Mimosa Pudica Extract</span>, a
                      botanical known for its calming, anti-inflammatory properties that help reduce dark marks and support skin
                      repair. It is complemented by <span className="font-semibold text-gray-950">unrefined Shea Butter</span>,
                      naturally rich in vitamins A &amp; E and essential fatty acids that restore softness, elasticity, and
                      long-lasting moisture.
                    </p>
                    <p>
                      To brighten and refine the complexion, we use a synergistic trio of
                      <span className="font-semibold text-gray-950"> Niacinamide</span>,
                      <span className="font-semibold text-gray-950"> Vitamin C (MAP/SAP)</span>, and
                      <span className="font-semibold text-gray-950"> Hibiscus Extract</span>, supporting collagen production, even
                      tone, and gentle renewal. Deep hydration is delivered through
                      <span className="font-semibold text-gray-950"> Hyaluronic Acid</span>,
                      <span className="font-semibold text-gray-950"> Aloe Vera</span>,
                      <span className="font-semibold text-gray-950"> Glycerin</span>,
                      <span className="font-semibold text-gray-950"> Sodium PCA</span>, and
                      <span className="font-semibold text-gray-950"> Panthenol</span> — a powerful moisture-locking system. A peptide
                      complex enhances firmness, while Vitamin E defends against free radicals for healthy, resilient skin.
                    </p>
                  </div>

                  <div className="order-1 lg:order-2 lg:row-span-2">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:gap-6">
                      {[1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          className="group aspect-square overflow-hidden rounded-3xl bg-white shadow-lg shadow-indigo-100 ring-1 ring-black/5"
                        >
                          <img
                            src={`/images/image${index}.jpeg`}
                            alt={`Ingredient visual ${index}`}
                            className="size-full object-cover transition duration-300 group-hover:scale-[1.03]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="order-3">
                    <p className="text-base/7 font-semibold text-gray-600">Ingredient Performance</p>
                    <hr className="mt-4 border-t border-dashed border-gray-200" />

                    <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-y-2 rounded-2xl bg-white/70 p-4 shadow-sm shadow-indigo-50 ring-1 ring-black/5">
                        <dt className="text-sm/6 text-gray-500">Hydration Power</dt>
                        <dd className="order-first text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
                          <AnimatedNumber start={1} end={1000} />×
                        </dd>
                        <dt className="text-sm/6 text-gray-500">Moisture-binding capacity of Hyaluronic Acid</dt>
                      </div>

                      <div className="flex flex-col gap-y-2 rounded-2xl bg-white/70 p-4 shadow-sm shadow-indigo-50 ring-1 ring-black/5">
                        <dt className="text-sm/6 text-gray-500">Skin Brightening</dt>
                        <dd className="order-first text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
                          <AnimatedNumber start={0} end={20} />%
                        </dd>
                        <dt className="text-sm/6 text-gray-500">Niacinamide + Vitamin C clarity improvement</dt>
                      </div>

                      <div className="flex flex-col gap-y-2 rounded-2xl bg-white/70 p-4 shadow-sm shadow-indigo-50 ring-1 ring-black/5">
                        <dt className="text-sm/6 text-gray-500">Barrier Support</dt>
                        <dd className="order-first text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
                          <AnimatedNumber start={0} end={67} />%
                        </dd>
                        <dt className="text-sm/6 text-gray-500">Increase in natural ceramides (Niacinamide)</dt>
                      </div>

                      <div className="flex flex-col gap-y-2 rounded-2xl bg-white/70 p-4 shadow-sm shadow-indigo-50 ring-1 ring-black/5">
                        <dt className="text-sm/6 text-gray-500">Elasticity Boost</dt>
                        <dd className="order-first text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
                          <AnimatedNumber start={0} end={12} />%
                        </dd>
                        <dt className="text-sm/6 text-gray-500">Peptide complex support for firmness</dt>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center sm:right-4 lg:right-6">
            <button
              type="button"
              aria-label="See product benefits"
              onClick={goNext}
              className={[
                'pointer-events-auto flex size-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-200 ring-2 ring-white/60 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
                activeSlide === 0 ? 'motion-safe:animate-[pulse_2s_ease-in-out_infinite]' : 'opacity-90',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </div>
        </section>
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
          <IngredientSection />
        </FadeInSection>
        <FadeInSection>
          <IngredientDetailSection />
        </FadeInSection>
      </main>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  )
}
