import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'

const experienceTypes = [
  { id: 'all', label: 'Excursions' },
  { id: 'one-day', label: 'One Day Excursions' },
  { id: 'two-day', label: 'Two Day Excursions' },
]

const trips = [
  {
    id: 'yala-safari-day-trip',
    title: 'Yala Safari Day Trip',
    type: 'one-day',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Yala Safari Day Trip is organized by Bentota Travel Mart (BTM) for the tourists who are in Bentota ...',
  },
  {
    id: 'rafting-kithulgala-day-trip',
    title: 'White Water Rafting – Kithulgala Day Trip',
    type: 'one-day',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    description:
      'Kithulgala Day Trip for White Water Rafting is organized by Bentota Travel Mart (BTM) for the tourists who ...',
  },
  {
    id: 'udawalawa-safari-day-trip',
    title: 'Udawalawa Safari Day Trip',
    type: 'one-day',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
    description:
      'Udawalawa Safari Day Trip is organized by Bentota Travel Mart (BTM) for the tourists who are in Bentota ...',
  },
  {
    id: 'sinharaja-udawalawa',
    title: 'Sinharaja Rainforest & Udawalawa Safari',
    type: 'two-day',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70b5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Two days Trip of Sinharaja Rainforest & Udawalawa Safari is organized by Bentota Travel Mart (BTM) for the tourists who ...',
  },
  {
    id: 'yala-udawalawa',
    title: 'Yala Safari & Udawalawa Safari',
    type: 'two-day',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    description:
      'Two days Trip of Yala Safari & Udawalawa Safari is organized by Bentota Travel Mart (BTM) for the ...',
  },
  {
    id: 'yala-galle-fort',
    title: 'Yala Safari & Galle Dutch Fort',
    type: 'two-day',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description:
      'Two days Trip of Yala Safari & Galle Dutch Fort is organized by Bentota Travel Mart (BTM) for ...',
  },
]

function TripCard({ trip, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <img
          src={trip.image}
          alt={trip.title}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-2xl text-white drop-shadow-md leading-tight">
            {trip.title}
          </h3>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#f5d967]">
            {trip.type === 'one-day' ? 'ONE DAY EXCURSIONS' : 'TWO DAY EXCURSIONS'}
          </p>
        </div>
      </div>

      <p className="mt-5 text-base leading-relaxed text-gray-700 text-justify">
        {trip.description}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="rounded-md bg-[#2d2d2b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#171715] transition-colors"
        >
          Book Now
        </button>
        <Link
          to="/contact"
          className="rounded-md border border-[#2d2d2b] px-5 py-2.5 text-sm font-semibold text-[#2d2d2b] hover:bg-[#2d2d2b] hover:text-white transition-colors"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  )
}

export default function ExcursionsPage() {
  const [activeType, setActiveType] = useState('one-day')

  const filteredTrips = useMemo(() => {
    if (activeType === 'all') return trips
    return trips.filter((trip) => trip.type === activeType)
  }, [activeType])

  const scrollToSection = (id) => {
    setActiveType(id)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-[#f3f3f1] text-[#1d1a18]">
      <section className="relative h-[620px] overflow-hidden bg-[#121110]">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1800&q=80"
          alt="Travelers"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/45" />

        <header className="relative z-10 border-b border-white/15 bg-black/10 backdrop-blur-[1px]">
          <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-5 md:px-8 lg:px-10">
            <div className="flex items-center gap-4 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a6b42] text-sm font-bold text-white shadow-inner shadow-white/20">
                BTM
              </span>
              <span className="text-4xl font-semibold tracking-[-0.05em]">Bentota Travel Mart</span>
            </div>

            <nav className="hidden items-center gap-10 md:flex">
              <Link to="/" className="text-2xl font-medium uppercase tracking-[0.08em] text-white/80 hover:text-white">Home</Link>
              <Link to="/about" className="text-2xl font-medium uppercase tracking-[0.08em] text-white/80 hover:text-white">About us</Link>
              <button
                type="button"
                onClick={() => scrollToSection('one-day')}
                className={`text-2xl font-medium uppercase tracking-[0.08em] ${
                  activeType === 'one-day' ? 'text-[#f5d967]' : 'text-white/80 hover:text-white'
                }`}
              >
                Excursions
              </button>
              <Link to="/activities" className="text-2xl font-medium uppercase tracking-[0.08em] text-white/80 hover:text-white">Activities</Link>
              <Link to="/contact" className="text-2xl font-medium uppercase tracking-[0.08em] text-white/80 hover:text-white">Contact us</Link>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex h-[540px] max-w-[1200px] items-center justify-center px-6">
          <div className="text-center text-white">
            <div className="mb-10 flex items-center justify-center gap-5 text-2xl uppercase tracking-[0.28em] text-white/85">
              <span>Home</span>
              <ArrowRight className="h-5 w-5" />
              <span className="text-[#f5d967]">Excursions</span>
            </div>
            <h1 className="font-display text-[7rem] md:text-[12rem] leading-[0.72] tracking-[-0.08em] text-white">
              One Day
            </h1>
            <h2 className="font-display text-[6rem] md:text-[11rem] leading-[0.75] tracking-[-0.08em] text-white/90">
              Excursions
            </h2>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1460px] px-6 py-20">
        <div className="mb-12 flex flex-wrap justify-center gap-5">
          {experienceTypes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all ${
                activeType === item.id
                  ? 'border-[#f5d967] bg-[#f5d967] text-[#1b1b1a]'
                  : 'border-[#d9d2c9] bg-white text-[#1d1a18] hover:border-[#1d1a18]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <section id="one-day" className="mb-20 scroll-mt-32">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h3 className="font-display text-5xl md:text-7xl leading-none tracking-[-0.06em] text-[#1d1a18]">
              One Day Excursions
            </h3>
            <span className="hidden rounded-full border border-[#d9d2c9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4f4a46] md:inline-flex">
              {trips.filter((trip) => trip.type === 'one-day').length} Packages
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {filteredTrips.filter((trip) => trip.type === 'one-day').map((trip, index) => (
              <TripCard key={trip.id} trip={trip} index={index} />
            ))}
          </div>
        </section>

        <section id="two-day" className="scroll-mt-32">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h3 className="font-display text-5xl md:text-7xl leading-none tracking-[-0.06em] text-[#1d1a18]">
              Two Day Excursions
            </h3>
            <span className="hidden rounded-full border border-[#d9d2c9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4f4a46] md:inline-flex">
              {trips.filter((trip) => trip.type === 'two-day').length} Packages
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {filteredTrips.filter((trip) => trip.type === 'two-day').map((trip, index) => (
              <TripCard key={trip.id} trip={trip} index={index} />
            ))}
          </div>
        </section>

        {filteredTrips.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-[#d9d2c9] bg-white p-10 text-center text-lg text-gray-600">
            No excursions available in this category yet.
          </div>
        )}
      </main>

      <div className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-[#2a6b42] text-white shadow-lg">
        <ArrowDown className="h-5 w-5" />
      </div>
    </div>
  )
}
