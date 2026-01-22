import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import heroImage from '../assets/foto/foto-23.webp'
import winterAccess from '../assets/foto/foto-25.webp'
import summerAccess from '../assets/foto/foto-2.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ComeRaggiungerci() {
  const heroRef = useRef(null)
  const locationRef = useRef(null)
  const accessRef = useRef(null)
  const transportRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(heroRef.current.querySelector('img'), {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      })

      // Hero title
      gsap.fromTo(heroRef.current.querySelector('h1'),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      )

      // Location cards
      const locationItems = locationRef.current.querySelectorAll('.location-item')
      locationItems.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
            delay: i * 0.1
          }
        )
      })

      // Access cards stagger
      const accessCards = accessRef.current.querySelectorAll('.access-card')
      accessCards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            }
          }
        )
      })

      // Transport items
      const transportItems = transportRef.current.querySelectorAll('.transport-item')
      transportItems.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
            delay: i * 0.15
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Panorama montano"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-dark)]/30 to-[var(--color-dark)]/50" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-[15vh] asymmetric-padding">
          <div>
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              Indicazioni
            </p>
            <h1 className="text-fluid-5xl font-serif italic text-white leading-[0.9]">
              Raggiungerci
            </h1>
          </div>
        </div>
      </section>

      {/* Location */}
      <section ref={locationRef} className="py-[var(--space-xl)] bg-[var(--color-cream)]">
        <div className="asymmetric-padding">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-4">
                Posizione
              </p>
              <h2 className="text-fluid-3xl font-serif italic text-[var(--color-dark)] leading-[1.1] mb-6">
                Nel cuore
                <br />delle Alpi
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="location-item p-8 border border-[var(--color-dark)]/10 hover:border-[var(--color-wood)] transition-colors">
                  <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Indirizzo</p>
                  <p className="text-fluid-lg text-[var(--color-dark)]">
                    Località Casola
                    <br />25050 Temù (BS)
                  </p>
                </div>
                <div className="location-item p-8 border border-[var(--color-dark)]/10 hover:border-[var(--color-wood)] transition-colors">
                  <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Comprensorio</p>
                  <p className="text-fluid-lg text-[var(--color-dark)]">
                    Pontedilegno-Tonale
                    <br />Val Camonica
                  </p>
                </div>
                <div className="location-item p-8 border border-[var(--color-dark)]/10 hover:border-[var(--color-wood)] transition-colors">
                  <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Altitudine</p>
                  <p className="text-fluid-lg text-[var(--color-dark)]">
                    <span className="text-fluid-2xl font-serif italic">1.800</span>
                    <br />metri s.l.m.
                  </p>
                </div>
                <div className="location-item p-8 border border-[var(--color-dark)]/10 hover:border-[var(--color-wood)] transition-colors">
                  <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Coordinate</p>
                  <p className="text-fluid-lg text-[var(--color-dark)] font-mono">
                    46.2468° N
                    <br />10.4656° E
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[50vh] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.8!2d10.4656!3d46.2468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47832b4f00000001%3A0x0!2sLa%20Maralsina!5e0!3m2!1sit!2sit!4v1704067200000!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Rifugio La Maralsina"
          className="w-full h-full"
        />
        <div className="absolute top-8 left-8 bg-[var(--color-dark)] text-white py-4 px-6">
          <p className="text-fluid-xs uppercase tracking-[0.2em]">Apri in Google Maps</p>
        </div>
      </section>

      {/* Access by Season */}
      <section ref={accessRef} className="py-[var(--space-2xl)] bg-[var(--color-snow)]">
        <div className="asymmetric-padding mb-[var(--space-lg)]">
          <h2 className="text-fluid-3xl font-serif italic text-[var(--color-dark)]">
            Come <span className="text-[var(--color-wood)]">arrivare</span>
          </h2>
        </div>

        {/* Winter */}
        <div className="grid lg:grid-cols-12 gap-0 mb-[var(--space-xl)]">
          <div className="access-card lg:col-span-6 relative">
            <img
              src={winterAccess}
              alt="Accesso invernale"
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm py-2 px-4">
              <span className="text-fluid-xs uppercase tracking-[0.2em] text-[var(--color-dark)]">
                Inverno
              </span>
            </div>
          </div>
          <div className="access-card lg:col-span-5 lg:col-start-8 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-fluid-massive font-serif italic text-[var(--color-dark)]/5 block leading-[0.8]">
              ❄
            </span>
            <h3 className="text-fluid-2xl font-serif italic text-[var(--color-dark)] -mt-12 relative z-10 mb-6">
              Con gli sci ai piedi
            </h3>
            <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed mb-8">
              Durante la stagione sciistica, il rifugio è raggiungibile
              <strong> direttamente dalle piste</strong> del comprensorio Pontedilegno-Tonale.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--color-wood)]" />
                <span className="text-fluid-sm text-[var(--color-dark)]/60">Ski in / Ski out</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--color-wood)]" />
                <span className="text-fluid-sm text-[var(--color-dark)]/60">Ciaspole sui sentieri</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--color-wood)]" />
                <span className="text-fluid-sm text-[var(--color-dark)]/60">No accesso in auto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summer */}
        <div className="grid lg:grid-cols-12 gap-0">
          <div className="access-card lg:col-span-5 p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-fluid-massive font-serif italic text-[var(--color-dark)]/5 block leading-[0.8]">
              ☀
            </span>
            <h3 className="text-fluid-2xl font-serif italic text-[var(--color-dark)] -mt-12 relative z-10 mb-6">
              A piedi o in bici
            </h3>
            <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed mb-8">
              Nella bella stagione, il rifugio è meta di escursionisti
              e mountain biker sui sentieri CAI.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--color-wood)]" />
                <span className="text-fluid-sm text-[var(--color-dark)]/60">Sentieri CAI da Temù</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--color-wood)]" />
                <span className="text-fluid-sm text-[var(--color-dark)]/60">Percorsi MTB bike-friendly</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--color-wood)]" />
                <span className="text-fluid-sm text-[var(--color-dark)]/60">Passeggiate a cavallo</span>
              </div>
            </div>
          </div>
          <div className="access-card lg:col-span-6 lg:col-start-7 relative order-1 lg:order-2">
            <img
              src={summerAccess}
              alt="Accesso estivo"
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm py-2 px-4">
              <span className="text-fluid-xs uppercase tracking-[0.2em] text-[var(--color-dark)]">
                Estate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section ref={transportRef} className="py-[var(--space-2xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding mb-[var(--space-lg)]">
          <h2 className="text-fluid-3xl text-white">
            Arrivare a <span className="italic text-[var(--color-accent)]">Temù</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-t border-white/10">
          {/* Auto */}
          <div className="transport-item p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
            <span className="text-fluid-xs text-white/30 block mb-4">01</span>
            <h3 className="text-fluid-xl font-serif italic text-[var(--color-accent)] mb-6">
              In Auto
            </h3>
            <div className="space-y-6 text-white/60">
              <div>
                <p className="text-fluid-sm text-white/80 mb-1">Da Milano / Brescia</p>
                <p className="text-fluid-xs">A4 → Brescia Est → SS42 → Edolo → Temù</p>
              </div>
              <div>
                <p className="text-fluid-sm text-white/80 mb-1">Da Bergamo</p>
                <p className="text-fluid-xs">SS42 Val Camonica → Edolo → Temù</p>
              </div>
              <div>
                <p className="text-fluid-sm text-white/80 mb-1">Dal Trentino</p>
                <p className="text-fluid-xs">SS42 → Passo Tonale → Ponte di Legno</p>
              </div>
            </div>
          </div>

          {/* Treno */}
          <div className="transport-item p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
            <span className="text-fluid-xs text-white/30 block mb-4">02</span>
            <h3 className="text-fluid-xl font-serif italic text-[var(--color-accent)] mb-6">
              In Treno
            </h3>
            <div className="space-y-6 text-white/60">
              <div>
                <p className="text-fluid-sm text-white/80 mb-1">Stazione più vicina</p>
                <p className="text-fluid-xs">Edolo (Ferrovia Brescia-Iseo-Edolo)</p>
              </div>
              <div>
                <p className="text-fluid-sm text-white/80 mb-1">Da Edolo</p>
                <p className="text-fluid-xs">Bus o taxi fino a Temù (~15 km)</p>
              </div>
              <div>
                <p className="text-fluid-sm text-white/80 mb-1">Servizio</p>
                <p className="text-fluid-xs">Trenord da Brescia a Edolo</p>
              </div>
            </div>
          </div>

          {/* Aereo */}
          <div className="transport-item p-8 md:p-12">
            <span className="text-fluid-xs text-white/30 block mb-4">03</span>
            <h3 className="text-fluid-xl font-serif italic text-[var(--color-accent)] mb-6">
              In Aereo
            </h3>
            <div className="space-y-4 text-white/60">
              <p className="text-fluid-sm text-white/80 mb-2">Aeroporti consigliati</p>
              <div className="space-y-2">
                <p className="text-fluid-xs flex justify-between">
                  <span>Bergamo (BGY)</span>
                  <span className="text-white/40">~120 km</span>
                </p>
                <p className="text-fluid-xs flex justify-between">
                  <span>Milano Linate</span>
                  <span className="text-white/40">~150 km</span>
                </p>
                <p className="text-fluid-xs flex justify-between">
                  <span>Verona (VRN)</span>
                  <span className="text-white/40">~150 km</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Notice */}
      <section className="py-[var(--space-lg)] bg-[var(--color-wood)]">
        <div className="asymmetric-padding">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="flex-shrink-0">
              <span className="text-fluid-3xl">⚠</span>
            </div>
            <div>
              <h3 className="text-fluid-lg text-white mb-2">Nota importante</h3>
              <p className="text-fluid-base text-white/70">
                Il Rifugio La Maralsina <strong className="text-white">non dispone di parcheggio diretto</strong>.
                Parcheggi disponibili presso gli impianti di risalita e nel centro di Temù.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-xl)] bg-[var(--color-cream)]">
        <div className="asymmetric-padding">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-fluid-2xl text-[var(--color-dark)] mb-4">
                Hai bisogno di <span className="italic">indicazioni</span>?
              </h2>
              <p className="text-fluid-base text-[var(--color-dark)]/60">
                Contattaci per qualsiasi informazione su come raggiungerci
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+390364173069"
                className="inline-block text-fluid-sm text-white bg-[var(--color-dark)] px-8 py-4 uppercase tracking-[0.2em] hover:bg-[var(--color-wood)] transition-colors text-center"
              >
                Chiamaci
              </a>
              <Link
                to="/contatti"
                className="inline-block text-fluid-sm text-[var(--color-dark)] border border-[var(--color-dark)] px-8 py-4 uppercase tracking-[0.2em] hover:bg-[var(--color-dark)] hover:text-white transition-colors text-center"
              >
                Scrivici
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
