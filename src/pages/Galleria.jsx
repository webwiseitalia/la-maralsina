import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto18 from '../assets/foto/foto-18.webp'
import foto19 from '../assets/foto/foto-19.webp'
import foto20 from '../assets/foto/foto-20.webp'
import foto21 from '../assets/foto/foto-21.webp'
import foto22 from '../assets/foto/foto-22.webp'
import foto23 from '../assets/foto/foto-23.webp'
import foto24 from '../assets/foto/foto-24.webp'
import foto25 from '../assets/foto/foto-25.webp'
import foto27 from '../assets/foto/foto-27.webp'
import foto28 from '../assets/foto/foto-28.webp'
import foto29 from '../assets/foto/foto-29.webp'
import foto30 from '../assets/foto/foto-30.webp'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  { src: foto28, alt: 'Rifugio illuminato', cat: 'rifugio' },
  { src: foto9, alt: 'Inverno sulle piste', cat: 'inverno' },
  { src: foto4, alt: 'Panorama estivo', cat: 'panorama' },
  { src: foto10, alt: 'Bar in legno', cat: 'interni' },
  { src: foto7, alt: 'Tagliere', cat: 'cucina' },
  { src: foto21, alt: 'Terrazza estiva', cat: 'estate' },
  { src: foto16, alt: 'Sala ristorante', cat: 'interni' },
  { src: foto3, alt: 'Pizzoccheri', cat: 'cucina' },
  { src: foto27, alt: 'Vista notturna', cat: 'panorama' },
  { src: foto2, alt: 'Esterno estate', cat: 'rifugio' },
  { src: foto17, alt: 'Sala eventi', cat: 'interni' },
  { src: foto22, alt: 'Polenta e carne', cat: 'cucina' },
  { src: foto19, alt: 'Cavalli', cat: 'estate' },
  { src: foto24, alt: 'Notte', cat: 'rifugio' },
  { src: foto1, alt: 'Tagliatelle', cat: 'cucina' },
  { src: foto18, alt: 'Interno', cat: 'interni' },
  { src: foto25, alt: 'Piste', cat: 'inverno' },
  { src: foto6, alt: 'Secondo piatto', cat: 'cucina' },
  { src: foto11, alt: 'Team', cat: 'rifugio' },
  { src: foto29, alt: 'Dolce', cat: 'cucina' },
  { src: foto23, alt: 'Nebbia', cat: 'panorama' },
  { src: foto8, alt: 'Polenta', cat: 'cucina' },
  { src: foto15, alt: 'Spezzatino', cat: 'cucina' },
  { src: foto20, alt: 'Banchetti', cat: 'interni' },
]

const categories = ['all', 'rifugio', 'interni', 'cucina', 'panorama', 'inverno', 'estate']

export default function Galleria() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const galleryRef = useRef(null)

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.cat === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = galleryRef.current?.querySelectorAll('.gallery-item')
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
              },
              delay: (i % 4) * 0.1
            }
          )
        })
      }
    }, galleryRef)

    return () => ctx.revert()
  }, [activeCategory])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const navigate = (dir) => {
    setCurrentIndex(prev =>
      dir === 'next'
        ? (prev + 1) % filtered.length
        : prev === 0 ? filtered.length - 1 : prev - 1
    )
  }

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={foto28}
            alt="Galleria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-dark)]/50" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-[10vh] asymmetric-padding">
          <div>
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              Immagini
            </p>
            <h1 className="text-fluid-5xl font-serif italic text-white leading-[0.9]">
              Galleria
            </h1>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-[var(--color-dark)]/10 sticky top-0 z-40 bg-[var(--color-cream)]">
        <div className="flex items-center gap-8 overflow-x-auto px-8 md:px-16 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-fluid-sm whitespace-nowrap uppercase tracking-[0.15em] pb-2 transition-all ${
                activeCategory === cat
                  ? 'text-[var(--color-dark)] border-b-2 border-[var(--color-dark)]'
                  : 'text-[var(--color-dark)]/40 hover:text-[var(--color-dark)]'
              }`}
            >
              {cat === 'all' ? 'Tutte' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery - Masonry-like */}
      <section ref={galleryRef} className="py-[var(--space-lg)] px-4 md:px-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {filtered.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              onClick={() => openLightbox(index)}
              className="gallery-item mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-dark)]/0 group-hover:bg-[var(--color-dark)]/30 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-fluid-xs text-white uppercase tracking-[0.2em]">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-fluid-base text-[var(--color-dark)]/50 text-center py-20">
            Nessuna foto in questa categoria.
          </p>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[var(--color-dark)] flex items-center justify-center cursor-auto"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-10"
            >
              <span className="text-fluid-sm uppercase tracking-[0.2em]">Chiudi</span>
            </button>

            {/* Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate('prev') }}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-fluid-2xl">←</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate('next') }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-fluid-2xl">→</span>
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[currentIndex]?.src}
                alt={filtered[currentIndex]?.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-fluid-sm">
              {currentIndex + 1} — {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social CTA */}
      <section className="py-[var(--space-xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-fluid-2xl text-white mb-4">
                Seguici sui <span className="italic text-[var(--color-accent)]">social</span>
              </h2>
              <p className="text-fluid-base text-white/50">
                Per vedere altre foto e restare aggiornato
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/la_maralsina_skibar_ristorante/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fluid-sm text-white uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/groups/1436110466603012/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fluid-sm text-white uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
