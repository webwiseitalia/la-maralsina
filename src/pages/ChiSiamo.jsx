import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import heroImage from '../assets/foto/foto-2.webp'
import interiorImage from '../assets/foto/foto-16.webp'
import staffImage from '../assets/foto/foto-11.webp'
import salaImage from '../assets/foto/foto-20.webp'
import detailImage from '../assets/foto/foto-18.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      const heroTitle = heroRef.current.querySelector('h1')
      const split = new SplitType(heroTitle, { types: 'chars' })

      gsap.fromTo(split.chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: 'power4.out',
          delay: 0.3
        }
      )

      // Story section
      gsap.fromTo(storyRef.current.querySelector('.story-text'),
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
          }
        }
      )

      gsap.fromTo(storyRef.current.querySelector('.story-image'),
        { opacity: 0, scale: 0.9, x: 80 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 60%',
          }
        }
      )

      // Values stagger
      const valueItems = valuesRef.current.querySelectorAll('.value-item')
      valueItems.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
            delay: i * 0.1
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const values = [
    { word: 'Passione', desc: 'In ogni piatto, in ogni dettaglio' },
    { word: 'Famiglia', desc: 'Qui sei sempre a casa' },
    { word: 'Territorio', desc: 'I sapori della Val Camonica' },
    { word: 'Tradizione', desc: 'Ricette tramandate nel tempo' },
  ]

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rifugio La Maralsina - Chi Siamo"
            title="La nostra storia"
            loading="eager"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/70 via-[var(--color-dark)]/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-[12vh] asymmetric-padding">
          <div>
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              La nostra storia
            </p>
            <h1 className="text-fluid-5xl font-serif italic text-white leading-[0.9]">
              Chi Siamo
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-[var(--space-2xl)]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="lg:col-span-5 lg:col-start-1 asymmetric-padding story-text">
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-8">
              Dal 1985
            </p>
            <h2 className="text-fluid-3xl leading-[1.1] mb-8">
              Una passione
              <br />
              che attraversa
              <br />
              <span className="italic">generazioni</span>
            </h2>
            <div className="space-y-6 text-fluid-base text-[var(--color-dark)]/70 leading-relaxed max-w-lg">
              <p>
                La Maralsina nasce dalla passione per la montagna e per l'ospitalità.
                Nel cuore delle piste di Temù, siamo diventati un punto di riferimento
                per chi cerca autenticità.
              </p>
              <p>
                Qui la tradizione si respira in ogni angolo: dalle travi in legno
                ai piatti che portiamo in tavola, tutto parla di amore per questo territorio.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative story-image">
            <div className="relative">
              <img
                src={interiorImage}
                alt="Interno accogliente del rifugio"
                title="Sala interna La Maralsina"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-[60vh] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 md:-left-16 bg-[var(--color-wood-dark)] text-white p-6 md:p-10">
                <p className="text-fluid-3xl font-serif italic">40+</p>
                <p className="text-fluid-sm text-white/70 mt-1">anni di storia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Horizontal Scroll Feel */}
      <section ref={valuesRef} className="py-[var(--space-xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding mb-[var(--space-lg)]">
          <h2 className="text-fluid-2xl text-white">
            I nostri <span className="italic text-[var(--color-accent)]">valori</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {values.map((value, i) => (
            <div
              key={i}
              className="value-item flex-1 border-t md:border-t-0 md:border-l border-white/10 first:border-0 p-8 md:p-12"
            >
              <span className="text-fluid-xs text-white/30 block mb-4">0{i + 1}</span>
              <h3 className="text-fluid-xl font-serif italic text-white mb-4">
                {value.word}
              </h3>
              <p className="text-fluid-sm text-white/50">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh]">
        <img
          src={detailImage}
          alt="Dettaglio dell'arredamento interno"
          title="Dettagli in legno del rifugio"
          loading="lazy"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Team */}
      <section className="py-[var(--space-2xl)]">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="h-[60vh] lg:h-[80vh] overflow-hidden">
            <img
              src={staffImage}
              alt="Il team del Rifugio La Maralsina"
              title="La nostra squadra"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-16 lg:p-24">
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-6">
              Il team
            </p>
            <h2 className="text-fluid-3xl leading-[1.1] mb-8">
              Facce
              <br />
              <span className="italic">familiari</span>
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed max-w-md mb-8">
              Dietro ogni piatto, ogni sorriso e ogni momento speciale
              c'è una squadra appassionata. Dalla cucina alla sala,
              condividiamo lo stesso obiettivo: farvi sentire a casa.
            </p>
            <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed max-w-md">
              Venite a trovarci e scoprite perché tanti ospiti tornano
              anno dopo anno.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={salaImage}
            alt="Sala ristorante del rifugio"
            title="La sala per eventi"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-dark)]/70" />
        </div>

        <div className="relative z-10 h-full flex items-center asymmetric-padding">
          <div className="max-w-xl">
            <h2 className="text-fluid-3xl text-white leading-[1.1] mb-8">
              Un luogo
              <br />
              <span className="italic">speciale</span> per
              <br />
              ogni occasione
            </h2>
            <p className="text-fluid-base text-white/60 mb-10">
              Pranzi in famiglia, cene romantiche, eventi speciali.
              La Maralsina è pronta ad accogliervi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contatti"
                className="inline-block text-fluid-sm text-[var(--color-dark)] bg-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors"
              >
                Contattaci
              </Link>
              <Link
                to="/galleria"
                className="inline-block text-fluid-sm text-white border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--color-dark)] transition-colors"
              >
                Galleria
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
