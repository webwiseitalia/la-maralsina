import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import winterHero from '../assets/foto/foto-9.webp'
import summerHero from '../assets/foto/foto-4.webp'
import skiImage from '../assets/foto/foto-25.webp'
import nightImage from '../assets/foto/foto-28.webp'
import terrazaImage from '../assets/foto/foto-21.webp'
import horseImage from '../assets/foto/foto-19.webp'
import panoramaImage from '../assets/foto/foto-23.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Stagioni() {
  const heroRef = useRef(null)
  const winterRef = useRef(null)
  const summerRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero split animation
      gsap.fromTo(heroRef.current.querySelector('.hero-winter'),
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.5,
          ease: 'power4.inOut',
          delay: 0.3
        }
      )

      gsap.fromTo(heroRef.current.querySelector('.hero-summer'),
        { clipPath: 'inset(0 0 0 100%)' },
        {
          clipPath: 'inset(0 0 0 0%)',
          duration: 1.5,
          ease: 'power4.inOut',
          delay: 0.5
        }
      )

      // Hero title
      gsap.fromTo(heroRef.current.querySelector('h1'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1 }
      )

      // Winter section
      const winterImages = winterRef.current.querySelectorAll('.winter-image')
      winterImages.forEach((img, i) => {
        gsap.fromTo(img,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
            },
            delay: i * 0.2
          }
        )
      })

      // Summer section parallax
      gsap.to(summerRef.current.querySelector('.parallax-image'), {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: summerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      })

      // CTA reveal
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="noise-overlay">
      {/* Hero - Split Screen */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="hero-winter absolute inset-0 w-1/2">
            <img
              src={winterHero}
              alt="Inverno"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/60 to-transparent" />
          </div>
          <div className="hero-summer absolute inset-0 left-1/2 w-1/2">
            <img
              src={summerHero}
              alt="Estate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-dark)]/60 to-transparent" />
          </div>
        </div>

        {/* Central divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 z-20" />

        {/* Labels */}
        <div className="absolute left-8 bottom-1/4 z-20 writing-vertical">
          <span className="text-fluid-xs text-white/60 uppercase tracking-[0.3em]">
            Dicembre — Aprile
          </span>
        </div>
        <div className="absolute right-8 bottom-1/4 z-20 writing-vertical">
          <span className="text-fluid-xs text-white/60 uppercase tracking-[0.3em]">
            Giugno — Settembre
          </span>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-fluid-massive font-serif italic text-white leading-[0.85]">
              Le Stagioni
            </h1>
            <p className="text-fluid-base text-white/60 mt-6 tracking-wide">
              Due anime, un solo rifugio
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* Winter Section */}
      <section ref={winterRef} className="py-[var(--space-2xl)] bg-[var(--color-snow)]">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Text - offset left */}
          <div className="lg:col-span-5 lg:col-start-1 p-8 md:p-16 lg:p-24">
            <div className="mb-12">
              <span className="text-fluid-massive font-serif italic text-[var(--color-dark)]/5 block leading-[0.8]">
                01
              </span>
              <h2 className="text-fluid-4xl font-serif italic text-[var(--color-dark)] -mt-16 relative z-10">
                Inverno
              </h2>
            </div>

            <p className="text-fluid-lg text-[var(--color-dark)]/70 leading-relaxed mb-8">
              Quando la neve avvolge le piste, La Maralsina diventa il cuore pulsante
              del comprensorio. Raggiungeteci sci ai piedi.
            </p>

            <div className="space-y-6 text-[var(--color-dark)]/60">
              <div className="flex items-baseline gap-4">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Orari</span>
                <span className="h-px flex-1 bg-[var(--color-dark)]/10" />
                <span className="text-fluid-base font-serif italic">09:00 — 17:00</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Accesso</span>
                <span className="h-px flex-1 bg-[var(--color-dark)]/10" />
                <span className="text-fluid-base font-serif italic">Ski in / Ski out</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Esperienza</span>
                <span className="h-px flex-1 bg-[var(--color-dark)]/10" />
                <span className="text-fluid-base font-serif italic">Vin brulé sulla neve</span>
              </div>
            </div>
          </div>

          {/* Images - stacked offset */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            <div className="winter-image relative">
              <img
                src={skiImage}
                alt="Piste da sci"
                className="w-full h-[50vh] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 md:-left-12 bg-[var(--color-dark)] text-white py-3 px-6">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Pontedilegno-Tonale</span>
              </div>
            </div>

            <div className="winter-image grid grid-cols-2 gap-4 mt-4 px-4 lg:px-0">
              <img
                src={nightImage}
                alt="Rifugio di notte"
                className="w-full h-[30vh] object-cover"
              />
              <div className="bg-[var(--color-wood)] p-8 flex flex-col justify-center">
                <p className="text-fluid-3xl font-serif italic text-white">100+</p>
                <p className="text-fluid-sm text-white/60 mt-2">km di piste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Element */}
      <section className="h-[30vh] bg-gradient-to-b from-[var(--color-snow)] via-[var(--color-cream)] to-[var(--color-cream)]" />

      {/* Summer Section */}
      <section ref={summerRef} className="bg-[var(--color-cream)] overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Large parallax image */}
          <div className="lg:col-span-7 relative h-[80vh] overflow-hidden">
            <img
              src={terrazaImage}
              alt="Terrazza estiva"
              className="parallax-image w-full h-[120%] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-cream)] to-transparent" />
          </div>

          {/* Text - offset right */}
          <div className="lg:col-span-4 lg:col-start-9 p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-fluid-massive font-serif italic text-[var(--color-dark)]/5 block leading-[0.8]">
                02
              </span>
              <h2 className="text-fluid-4xl font-serif italic text-[var(--color-dark)] -mt-16 relative z-10">
                Estate
              </h2>
            </div>

            <p className="text-fluid-lg text-[var(--color-dark)]/70 leading-relaxed mb-8">
              I prati verdi sostituiscono la neve. Meta perfetta per escursionisti,
              biker e famiglie in cerca di pace.
            </p>

            <div className="space-y-6 text-[var(--color-dark)]/60">
              <div className="flex items-baseline gap-4">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Orari</span>
                <span className="h-px flex-1 bg-[var(--color-dark)]/10" />
                <span className="text-fluid-base font-serif italic">Variabili</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Attività</span>
                <span className="h-px flex-1 bg-[var(--color-dark)]/10" />
                <span className="text-fluid-base font-serif italic">Trekking, MTB</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-fluid-xs uppercase tracking-[0.2em]">Esperienza</span>
                <span className="h-px flex-1 bg-[var(--color-dark)]/10" />
                <span className="text-fluid-base font-serif italic">Pranzo panoramico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horse image strip */}
        <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-[var(--space-lg)]">
          <div className="col-span-8 col-start-3 relative">
            <img
              src={horseImage}
              alt="Passeggiate a cavallo"
              className="w-full h-[40vh] object-cover"
            />
            <div className="absolute -top-4 -right-4 md:-right-12 bg-[var(--color-wood-dark)] text-white py-3 px-6">
              <span className="text-fluid-xs uppercase tracking-[0.2em]">A cavallo nella natura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Panorama CTA */}
      <section ref={ctaRef} className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={panoramaImage}
            alt="Panorama"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-dark)]/60" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="asymmetric-padding max-w-3xl">
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/50 mb-6">
              Sempre aperti per te
            </p>
            <h2 className="text-fluid-4xl text-white leading-[1.1] mb-8">
              Ogni stagione ha
              <br />
              <span className="italic">la sua magia</span>
            </h2>
            <p className="text-fluid-base text-white/60 mb-12 max-w-lg">
              Che sia il bianco della neve o il verde dei prati,
              La Maralsina vi aspetta con la stessa passione e lo stesso calore.
            </p>
            <Link
              to="/contatti"
              className="inline-block text-fluid-sm text-[var(--color-dark)] bg-white px-10 py-5 uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors"
            >
              Pianifica la visita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
