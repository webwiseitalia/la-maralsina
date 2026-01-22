import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import heroImage from '../assets/foto/foto-31.webp'
import heroImage2 from '../assets/foto/foto-24.webp'
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

      // Eyebrow
      gsap.fromTo(
        heroTextRef.current.querySelector('.hero-eyebrow'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )

      // Title characters
      gsap.set(heroTitle.chars, { y: 100, opacity: 0, rotateX: -40 })
      gsap.to(heroTitle.chars, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: 'power4.out',
        delay: 0.4,
      })

      // Subtitle
      gsap.fromTo(
        heroTextRef.current.querySelector('.hero-subtitle'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 }
      )

      // CTA buttons
      gsap.fromTo(
        heroTextRef.current.querySelector('.hero-cta'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.3 }
      )

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
        x: '-60%',
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Panorama montano del Rifugio La Maralsina"
            title="Rifugio La Maralsina - Vista panoramica"
            loading="eager"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          {/* Overlay scuro uniforme */}
          <div className="absolute inset-0 bg-[var(--color-dark)]/60" />
        </div>

        {/* Content */}
        <div ref={heroTextRef} className="relative z-20 h-full flex flex-col justify-end pb-[12vh] asymmetric-padding">
          {/* Eyebrow */}
          <p className="hero-eyebrow text-fluid-xs uppercase tracking-[0.4em] text-[var(--color-accent)] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Rifugio • Ristorante • Ski Bar
          </p>

          {/* Title */}
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-serif italic text-white leading-[0.9] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.4)' }}>
            La Maralsina
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-fluid-base text-white max-w-lg leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Nel cuore delle piste di Temù, dove la tradizione alpina incontra l'ospitalità.
          </p>

          {/* CTA */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <Link
              to="/menu"
              className="inline-block text-fluid-sm text-[var(--color-dark)] bg-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors"
            >
              Scopri il menu
            </Link>
            <Link
              to="/contatti"
              className="inline-block text-fluid-sm text-white border border-white/50 px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--color-dark)] transition-colors"
            >
              Prenota
            </Link>
          </div>
        </div>

        {/* Info box in basso a destra */}
        <div className="absolute bottom-[12vh] right-8 md:right-16 z-20 hidden md:block">
          <div className="text-right drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            <p className="text-fluid-3xl font-serif italic text-white" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>1650m</p>
            <p className="text-fluid-xs text-white/70 uppercase tracking-widest mt-1">
              Val Camonica
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <p className="text-fluid-xs text-white/40 tracking-widest uppercase">
              Scroll
            </p>
            <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
              <div className="w-full h-1/2 bg-white/60 animate-bounce" />
            </div>
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
              <p className="intro-text text-fluid-base text-[var(--color-dark)]/70 leading-relaxed mb-6">
                Nel cuore della Val Camonica, dove le piste del comprensorio Pontedilegno-Tonale incontrano la tradizione culinaria lombarda. La Maralsina è più di un rifugio: è un punto di riferimento per sciatori, escursionisti e famiglie.
              </p>
              <p className="intro-text text-fluid-base text-[var(--color-dark)]/70 leading-relaxed">
                Qui ogni piatto racconta la storia delle nostre montagne, ogni panorama toglie il fiato. Un luogo dove il tempo rallenta e l'ospitalità è di casa da quasi quarant'anni.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-xl)] relative">
          <div className="w-[70vw] ml-[15vw] relative">
            <img
              src={exterior}
              alt="Esterno del Rifugio La Maralsina"
              title="Vista esterna del rifugio"
              loading="lazy"
              width={1200}
              height={800}
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
      <section ref={marqueeRef} className="py-[var(--space-md)] overflow-hidden border-y border-[var(--color-dark)]/10">
        <div className="marquee-track whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-block text-fluid-3xl font-serif italic text-[var(--color-dark)]/10 mx-6">
              Cucina • Tradizione • Montagna • Passione •
            </span>
          ))}
        </div>
      </section>

      {/* Seasons */}
      <section ref={seasonRef} className="py-[var(--space-2xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[var(--space-xl)]">
            <div>
              <h2 className="text-fluid-3xl text-white leading-[1.1]">
                Due anime,
                <br />
                <span className="italic text-[var(--color-accent)]">una passione</span>
              </h2>
            </div>
            <p className="text-fluid-base text-white/50 max-w-md mt-8 md:mt-0">
              D'inverno sulle piste del Pontedilegno-Tonale, d'estate tra i sentieri alpini.
              Il rifugio vi aspetta tutto l'anno con la stessa passione e lo stesso calore.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8">
          {/* Winter */}
          <div className="season-card group relative h-[70vh] overflow-hidden">
            <img
              src={winterImage}
              alt="La Maralsina in inverno sulle piste da sci"
              title="Stagione invernale al rifugio"
              loading="lazy"
              width={800}
              height={1000}
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
                Raggiungeteci sci ai piedi direttamente dalle piste. Fermatevi per una pausa pranzo con vin brulé caldo, piatti tipici valtellinesi e la vista mozzafiato sulle montagne innevate. Il posto perfetto per ricaricare le energie.
              </p>
              <Link
                to="/stagioni"
                className="inline-block mt-6 text-fluid-xs text-white uppercase tracking-[0.2em] border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Scopri l'inverno
              </Link>
            </div>
          </div>

          {/* Summer */}
          <div className="season-card group relative h-[70vh] overflow-hidden md:mt-24">
            <img
              src={summerImage}
              alt="La Maralsina in estate con terrazza panoramica"
              title="Stagione estiva al rifugio"
              loading="lazy"
              width={800}
              height={1000}
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
                Quando la neve si scioglie, i prati verdi vi aspettano. Meta ideale per escursionisti, mountain biker e famiglie. Godetevi un pranzo sulla nostra terrazza panoramica, circondati dal silenzio delle Alpi.
              </p>
              <Link
                to="/stagioni"
                className="inline-block mt-6 text-fluid-xs text-white uppercase tracking-[0.2em] border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Scopri l'estate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food */}
      <section ref={foodRef} className="py-[var(--space-2xl)] relative overflow-hidden">
        <div className="asymmetric-padding mb-[var(--space-lg)]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-6">
                La cucina
              </p>
              <h2 className="text-fluid-4xl leading-[0.95]">
                Sapori che
                <br />
                <span className="italic">raccontano</span>
                <br />
                la montagna
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed mb-4">
                La nostra cucina celebra la tradizione valtellinese e camuna. Utilizziamo ingredienti locali e ricette tramandate da generazioni, per offrirvi un'esperienza autentica.
              </p>
              <p className="text-fluid-base text-[var(--color-dark)]/70 leading-relaxed">
                Dai <strong>pizzoccheri</strong> fatti in casa alla <strong>polenta taragna</strong>, dai <strong>taglieri di salumi e formaggi</strong> delle nostre valli alla <strong>selvaggina</strong> cucinata secondo tradizione. Ogni piatto è preparato con cura e passione.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[120vh] md:h-[100vh]">
          <div className="food-img absolute top-0 left-[5%] w-[45%] md:w-[30%] h-[35vh] md:h-[45vh]">
            <img src={dish1} alt="Tagliere di salumi e formaggi" title="Tagliere della Maralsina" loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
          </div>
          <div className="food-img absolute top-[20%] right-[5%] w-[50%] md:w-[35%] h-[40vh] md:h-[55vh]">
            <img src={dish2} alt="Pizzoccheri della Valtellina" title="Pizzoccheri fatti in casa" loading="lazy" width={700} height={900} className="w-full h-full object-cover" />
          </div>
          <div className="food-img absolute bottom-[5%] left-[20%] w-[55%] md:w-[40%] h-[35vh] md:h-[50vh]">
            <img src={dish3} alt="Polenta taragna con formaggi" title="Polenta taragna tradizionale" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-[15%] right-[8%] max-w-sm text-right hidden md:block">
            <p className="text-fluid-lg font-serif italic text-[var(--color-dark)] mb-4">
              "Cucinare è un atto d'amore"
            </p>
            <p className="text-fluid-sm text-[var(--color-dark)]/60 mb-6">
              Ogni giorno prepariamo i nostri piatti con ingredienti freschi e la passione di sempre.
            </p>
            <Link
              to="/menu"
              className="inline-block text-fluid-sm uppercase tracking-[0.2em] border-b-2 border-[var(--color-dark)] pb-1 hover:border-[var(--color-wood)] transition-colors"
            >
              Scopri il Menu
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
              alt="Interno accogliente del Rifugio La Maralsina"
              title="Sala interna del rifugio"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[var(--color-wood-dark)] flex items-center p-8 md:p-16 lg:p-24">
            <div>
              <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/50 mb-6">
                L'ambiente
              </p>
              <h2 className="text-fluid-3xl text-white leading-[1.1] mb-8">
                Un'atmosfera
                <br />
                che <span className="italic">scalda</span>
                <br />
                l'anima
              </h2>
              <p className="text-fluid-base text-white/70 leading-relaxed max-w-md mb-6">
                Legno antico, travi a vista e il calore del camino. Entrando alla Maralsina vi sentirete subito a casa, accolti da un'atmosfera calda e genuina che solo un vero rifugio di montagna sa offrire.
              </p>
              <p className="text-fluid-base text-white/70 leading-relaxed max-w-md mb-10">
                Oltre 100 posti a sedere tra sala interna e terrazza panoramica. Perfetto per gruppi, famiglie e coppie in cerca di un angolo di pace.
              </p>
              <Link
                to="/galleria"
                className="inline-block text-fluid-sm text-white uppercase tracking-[0.2em] border-b border-white/50 pb-1 hover:border-white transition-colors"
              >
                Guarda la Galleria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-2xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left - Text */}
            <div>
              <p className="text-fluid-xs text-[var(--color-accent)] uppercase tracking-[0.3em] mb-6">
                Vi aspettiamo
              </p>
              <h2 className="text-fluid-4xl text-white leading-[1] mb-8">
                Un tavolo
                <br />
                <span className="italic text-[var(--color-accent)]">caldo</span> vi aspetta
                <br />
                in quota
              </h2>
              <p className="text-fluid-base text-white/50 max-w-md mb-10">
                Che sia per una pausa pranzo sulle piste o una cena speciale,
                siamo pronti ad accogliervi con i sapori della tradizione.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contatti"
                  className="inline-block text-fluid-sm text-[var(--color-dark)] bg-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors text-center"
                >
                  Prenota
                </Link>
                <Link
                  to="/come-raggiungerci"
                  className="inline-block text-fluid-sm text-white border border-white/30 px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--color-dark)] transition-colors text-center"
                >
                  Come raggiungerci
                </Link>
              </div>
            </div>

            {/* Right - Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 border border-white/10">
                <p className="text-fluid-3xl font-serif italic text-white mb-2">1650</p>
                <p className="text-fluid-xs text-white/50 uppercase tracking-widest">metri s.l.m.</p>
              </div>
              <div className="bg-white/5 p-8 border border-white/10">
                <p className="text-fluid-3xl font-serif italic text-white mb-2">40+</p>
                <p className="text-fluid-xs text-white/50 uppercase tracking-widest">anni di storia</p>
              </div>
              <div className="bg-white/5 p-8 border border-white/10">
                <p className="text-fluid-3xl font-serif italic text-white mb-2">100</p>
                <p className="text-fluid-xs text-white/50 uppercase tracking-widest">posti a sedere</p>
              </div>
              <div className="bg-[var(--color-wood)] p-8">
                <p className="text-fluid-sm text-white mb-2">Chiamaci</p>
                <a href="tel:+390364173069" className="text-fluid-base text-white/90 hover:text-white transition-colors">
                  +39 0364 1730695
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
