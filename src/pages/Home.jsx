import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import heroImage from '../assets/foto/foto-28.webp'
import winterImage from '../assets/foto/foto-9.webp'
import summerImage from '../assets/foto/foto-21.webp'
import interiorImage from '../assets/foto/foto-10.webp'
import dish1 from '../assets/foto/foto-7.webp'
import dish2 from '../assets/foto/foto-3.webp'
import dish3 from '../assets/foto/foto-22.webp'
import panorama from '../assets/foto/foto-4.webp'
import nightView from '../assets/foto/foto-27.webp'
import exterior from '../assets/foto/foto-2.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const heroTextRef = useRef(null)
  const introRef = useRef(null)
  const seasonRef = useRef(null)
  const foodRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTitle = new SplitType(heroTextRef.current.querySelector('h1'), {
        types: 'chars',
        tagName: 'span',
      })

      gsap.set(heroTitle.chars, { y: 120, opacity: 0 })
      gsap.to(heroTitle.chars, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.04,
        ease: 'power4.out',
        delay: 0.3,
      })

      gsap.fromTo(
        heroTextRef.current.querySelector('.hero-subtitle'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 1.2 }
      )

      gsap.fromTo(
        heroTextRef.current.querySelector('.hero-cta'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.6 }
      )

      // Parallax hero image
      gsap.to(heroRef.current.querySelector('img'), {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Intro section
      const introTitle = introRef.current.querySelector('h2')
      const introSplit = new SplitType(introTitle, { types: 'lines, words' })

      gsap.fromTo(
        introSplit.words,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.2,
          stagger: 0.05,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        introRef.current.querySelector('.intro-text'),
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 60%',
          },
        }
      )

      // Season cards staggered reveal
      const seasonCards = seasonRef.current.querySelectorAll('.season-card')
      seasonCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: i * 0.15,
          }
        )
      })

      // Food section parallax images
      const foodImages = foodRef.current.querySelectorAll('.food-img')
      foodImages.forEach((img, i) => {
        gsap.to(img, {
          yPercent: -20 + i * 10,
          ease: 'none',
          scrollTrigger: {
            trigger: foodRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1 + i * 0.3,
          },
        })
      })

      // Marquee speed on scroll
      gsap.to(marqueeRef.current.querySelector('.marquee-track'), {
        x: '-50%',
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="La Maralsina di notte"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--color-cream)]" />
        </div>

        <div
          ref={heroTextRef}
          className="relative z-10 h-full flex flex-col justify-end pb-[15vh] asymmetric-padding"
        >
          <h1 className="text-fluid-5xl font-serif text-white leading-[0.9] tracking-tight max-w-[90vw]">
            La Maralsina
          </h1>
          <p className="hero-subtitle text-fluid-xl text-white/80 mt-6 max-w-xl font-light">
            Rifugio alpino nel cuore
            <br />
            delle piste di Temù
          </p>
          <div className="hero-cta mt-12">
            <Link
              to="/menu"
              className="inline-block text-fluid-sm uppercase tracking-[0.3em] text-white border-b-2 border-white pb-2 hover:tracking-[0.4em] transition-all duration-500"
            >
              Scopri
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-16">
          <p className="text-fluid-xs text-white/60 tracking-widest uppercase">
            Scroll
          </p>
          <div className="w-[1px] h-16 bg-white/40 mt-2 mx-auto overflow-hidden">
            <div className="w-full h-1/2 bg-white animate-pulse" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-[var(--space-2xl)] relative">
        <div className="asymmetric-padding-reverse">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
            <div className="lg:col-span-5 lg:col-start-2">
              <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-8">
                Dal 1985
              </p>
              <h2 className="text-fluid-3xl leading-[1.1] text-[var(--color-dark)]">
                Un angolo di
                <br />
                <span className="italic">autenticità</span>
                <br />
                sulle Alpi
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 lg:pt-24">
              <p className="intro-text text-fluid-base text-[var(--color-dark)]/70 leading-relaxed">
                Nel cuore della Val Camonica, dove le piste incontrano la tradizione.
                Qui ogni piatto racconta una storia, ogni panorama toglie il fiato.
                Non un semplice rifugio, ma un luogo dove il tempo rallenta.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-xl)] relative">
          <div className="w-[70vw] ml-[15vw] relative">
            <img
              src={exterior}
              alt="Esterno rifugio"
              className="w-full h-[50vh] object-cover img-grain"
            />
            <div className="absolute -bottom-12 -left-12 md:-left-24 bg-[var(--color-dark)] text-white p-8 md:p-12 max-w-xs">
              <p className="text-fluid-4xl font-serif italic">1650</p>
              <p className="text-fluid-sm mt-2 text-white/70">metri di quota</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section ref={marqueeRef} className="py-[var(--space-lg)] overflow-hidden border-y border-[var(--color-dark)]/10">
        <div className="marquee-track whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-block text-fluid-massive font-serif italic text-[var(--color-dark)]/5 mx-8">
              Cucina • Tradizione • Montagna • Passione •
            </span>
          ))}
        </div>
      </section>

      {/* Seasons */}
      <section ref={seasonRef} className="py-[var(--space-2xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[var(--space-xl)]">
            <h2 className="text-fluid-3xl text-white leading-[1.1]">
              Due anime,
              <br />
              <span className="italic text-[var(--color-accent)]">una passione</span>
            </h2>
            <p className="text-fluid-sm text-white/50 max-w-sm mt-8 md:mt-0">
              D'inverno sulle piste, d'estate tra i sentieri.
              Il rifugio vi aspetta tutto l'anno.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8">
          {/* Winter */}
          <div className="season-card group relative h-[70vh] overflow-hidden">
            <img
              src={winterImage}
              alt="Inverno"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="text-fluid-xs text-white/60 uppercase tracking-[0.3em] mb-4">
                Dicembre — Aprile
              </p>
              <h3 className="text-fluid-2xl text-white font-serif italic">
                Inverno
              </h3>
              <p className="text-fluid-sm text-white/70 mt-4 max-w-sm">
                Sci ai piedi, fermati per un pranzo caldo
                con vista sulle montagne innevate.
              </p>
              <Link
                to="/stagioni"
                className="inline-block mt-6 text-fluid-xs text-white uppercase tracking-[0.2em] border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Scopri
              </Link>
            </div>
          </div>

          {/* Summer */}
          <div className="season-card group relative h-[70vh] overflow-hidden md:mt-24">
            <img
              src={summerImage}
              alt="Estate"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="text-fluid-xs text-white/60 uppercase tracking-[0.3em] mb-4">
                Giugno — Settembre
              </p>
              <h3 className="text-fluid-2xl text-white font-serif italic">
                Estate
              </h3>
              <p className="text-fluid-sm text-white/70 mt-4 max-w-sm">
                Meta perfetta per escursionisti e biker.
                Relax e buon cibo immersi nella natura.
              </p>
              <Link
                to="/stagioni"
                className="inline-block mt-6 text-fluid-xs text-white uppercase tracking-[0.2em] border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Scopri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food */}
      <section ref={foodRef} className="py-[var(--space-2xl)] relative overflow-hidden">
        <div className="asymmetric-padding mb-[var(--space-lg)]">
          <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-6">
            La cucina
          </p>
          <h2 className="text-fluid-4xl leading-[0.95] max-w-3xl">
            Sapori che
            <br />
            <span className="italic">raccontano</span>
            <br />
            la montagna
          </h2>
        </div>

        <div className="relative h-[120vh] md:h-[100vh]">
          <div className="food-img absolute top-0 left-[5%] w-[45%] md:w-[30%] h-[35vh] md:h-[45vh]">
            <img src={dish1} alt="Tagliere" className="w-full h-full object-cover" />
          </div>
          <div className="food-img absolute top-[20%] right-[5%] w-[50%] md:w-[35%] h-[40vh] md:h-[55vh]">
            <img src={dish2} alt="Pizzoccheri" className="w-full h-full object-cover" />
          </div>
          <div className="food-img absolute bottom-[5%] left-[20%] w-[55%] md:w-[40%] h-[35vh] md:h-[50vh]">
            <img src={dish3} alt="Polenta" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-[15%] right-[8%] max-w-xs text-right hidden md:block">
            <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed">
              Pizzoccheri fatti in casa, taglieri di salumi locali,
              selvaggina e la polenta che si scioglie in bocca.
            </p>
            <Link
              to="/menu"
              className="inline-block mt-6 text-fluid-sm uppercase tracking-[0.2em] border-b-2 border-[var(--color-dark)] pb-1"
            >
              Il Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Interior */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="h-[60vh] md:h-screen relative overflow-hidden">
            <img
              src={interiorImage}
              alt="Interno rifugio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[var(--color-wood-dark)] flex items-center p-8 md:p-16 lg:p-24">
            <div>
              <h2 className="text-fluid-3xl text-white leading-[1.1] mb-8">
                Un'atmosfera
                <br />
                che <span className="italic">scalda</span>
                <br />
                l'anima
              </h2>
              <p className="text-fluid-base text-white/70 leading-relaxed max-w-md">
                Legno antico, travi a vista e il crepitio del camino.
                Un luogo dove il tempo rallenta, dove ogni dettaglio
                parla di tradizione e accoglienza.
              </p>
              <Link
                to="/galleria"
                className="inline-block mt-10 text-fluid-sm text-white uppercase tracking-[0.2em] border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Galleria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={nightView}
            alt="Vista notturna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-dark)]/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center asymmetric-padding">
          <p className="text-fluid-xs text-white/60 uppercase tracking-[0.3em] mb-6">
            Vi aspettiamo
          </p>
          <h2 className="text-fluid-4xl text-white leading-[1] max-w-2xl">
            Un tavolo
            <br />
            <span className="italic">caldo</span> vi aspetta
            <br />
            in quota
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link
              to="/contatti"
              className="inline-block text-fluid-sm text-[var(--color-dark)] bg-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors"
            >
              Prenota
            </Link>
            <Link
              to="/come-raggiungerci"
              className="inline-block text-fluid-sm text-white border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--color-dark)] transition-colors"
            >
              Come raggiungerci
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
