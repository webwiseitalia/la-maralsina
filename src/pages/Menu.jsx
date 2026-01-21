import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import heroImage from '../assets/foto/foto-8.webp'
import antipastiImage from '../assets/foto/foto-7.webp'
import primiImage from '../assets/foto/foto-3.webp'
import secondiImage from '../assets/foto/foto-6.webp'
import dolciImage from '../assets/foto/foto-29.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const heroRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(heroRef.current.querySelector('img'), {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Menu items reveal
      const menuSections = menuRef.current.querySelectorAll('.menu-section')
      menuSections.forEach((section) => {
        const items = section.querySelectorAll('.menu-item')
        gsap.fromTo(items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const menuData = [
    {
      category: 'Antipasti',
      image: antipastiImage,
      items: [
        { name: 'Tagliere della Maralsina', desc: 'Salumi e formaggi locali, miele, confetture', price: '16' },
        { name: 'Bresaola della Valtellina IGP', desc: 'Rucola, grana, olio evo', price: '12' },
        { name: 'Sciatt', desc: 'Frittelle di grano saraceno, formaggio', price: '10' },
        { name: 'Crostini all\'alpina', desc: 'Pane di segale, lardo, speck', price: '9' },
      ]
    },
    {
      category: 'Primi',
      image: primiImage,
      items: [
        { name: 'Pizzoccheri della Valtellina', desc: 'Grano saraceno, verze, patate, Casera', price: '14' },
        { name: 'Casoncelli alla bergamasca', desc: 'Burro fuso, salvia, pancetta', price: '13' },
        { name: 'Strangolapreti', desc: 'Gnocchi agli spinaci, burro e salvia', price: '12' },
        { name: 'Zuppa d\'orzo e speck', desc: 'Tradizione alpina', price: '10' },
        { name: 'Tagliatelle ai porcini', desc: 'Pasta fresca, funghi trifolati', price: '15' },
      ]
    },
    {
      category: 'Secondi',
      image: secondiImage,
      items: [
        { name: 'Cervo in salmì', desc: 'Con polenta fumante', price: '22' },
        { name: 'Costine di maiale', desc: 'Cottura lenta, patate al forno', price: '18' },
        { name: 'Tagliata di manzo', desc: 'Rucola, grana, aceto balsamico', price: '24' },
        { name: 'Polenta taragna', desc: 'Formaggio fuso, funghi', price: '14' },
        { name: 'Salsiccia alla griglia', desc: 'Crauti e polenta', price: '16' },
      ]
    },
    {
      category: 'Dolci',
      image: dolciImage,
      items: [
        { name: 'Torta di grano saraceno', desc: 'Confettura di mirtilli rossi', price: '7' },
        { name: 'Semifreddo alla grappa', desc: 'Frutti di bosco', price: '8' },
        { name: 'Strudel di mele', desc: 'Servito tiepido, gelato vaniglia', price: '8' },
        { name: 'Mousse al cioccolato', desc: 'Salsa caramello', price: '7' },
      ]
    },
  ]

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="I nostri piatti"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-[var(--color-dark)]/30" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-[10vh] asymmetric-padding">
          <div>
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/70 mb-4">
              La cucina
            </p>
            <h1 className="text-fluid-5xl font-serif italic text-white leading-[0.9]">
              Menu
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-[var(--space-lg)]">
        <div className="asymmetric-padding max-w-3xl">
          <p className="text-fluid-lg text-[var(--color-dark)]/70 leading-relaxed">
            La nostra cucina celebra le ricette della tradizione valtellinese e camuna.
            Ogni piatto è preparato con ingredienti freschi, seguendo ricette tramandate
            di generazione in generazione.
          </p>
          <p className="text-fluid-sm text-[var(--color-dark)]/40 mt-6 italic">
            Menu soggetto a variazioni stagionali
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <div ref={menuRef}>
        {menuData.map((section, sectionIndex) => (
          <section
            key={section.category}
            className={`menu-section py-[var(--space-xl)] ${
              sectionIndex % 2 === 0 ? 'bg-[var(--color-cream)]' : 'bg-[var(--color-snow)]'
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
              {/* Image - alternating sides */}
              <div className={`lg:col-span-5 ${
                sectionIndex % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 lg:order-2'
              }`}>
                <div className={`relative h-[50vh] lg:h-[70vh] ${
                  sectionIndex % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                }`}>
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute ${
                    sectionIndex % 2 === 0 ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'
                  } top-8 bg-[var(--color-dark)] text-white py-4 px-8 writing-vertical`}>
                    <span className="text-fluid-xs uppercase tracking-[0.3em]">
                      {String(sectionIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu items */}
              <div className={`lg:col-span-6 ${
                sectionIndex % 2 === 0 ? 'lg:col-start-7 lg:pl-16' : 'lg:col-start-1 lg:pr-16 lg:order-1'
              } flex flex-col justify-center px-8 lg:px-0`}>
                <h2 className="text-fluid-3xl font-serif italic mb-12">
                  {section.category}
                </h2>

                <div className="space-y-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="menu-item group">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-fluid-base font-medium text-[var(--color-dark)] group-hover:text-[var(--color-wood)] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-fluid-lg font-serif italic text-[var(--color-wood)] ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-fluid-sm text-[var(--color-dark)]/50">
                        {item.desc}
                      </p>
                      <div className="h-[1px] bg-[var(--color-dark)]/10 mt-4 group-hover:bg-[var(--color-wood)]/30 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Drinks */}
      <section className="py-[var(--space-xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding mb-[var(--space-lg)]">
          <h2 className="text-fluid-3xl text-white">
            Carta dei <span className="italic text-[var(--color-accent)]">vini</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {[
            { title: 'Rossi', items: ['Valtellina Superiore DOCG', 'Sforzato di Valtellina', 'Grumello'] },
            { title: 'Bianchi', items: ['Müller Thurgau', 'Lugana DOC', 'Pinot Grigio'] },
            { title: 'Birre', items: ['Artigianale locale', 'Forst', 'Moretti'] },
            { title: 'Calde', items: ['Vin Brulé', 'Bombardino', 'Cioccolata calda'] },
          ].map((cat, i) => (
            <div key={i} className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
              <h3 className="text-fluid-xl font-serif italic text-[var(--color-accent)] mb-6">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-fluid-sm text-white/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-xl)] bg-[var(--color-wood)]">
        <div className="asymmetric-padding">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-fluid-2xl text-white mb-4">
                Vuoi assicurarti un tavolo?
              </h2>
              <p className="text-fluid-base text-white/60">
                Nei weekend ti consigliamo di prenotare
              </p>
            </div>
            <Link
              to="/contatti"
              className="inline-block text-fluid-sm text-[var(--color-wood)] bg-white px-10 py-5 uppercase tracking-[0.2em] hover:bg-[var(--color-cream)] transition-colors"
            >
              Prenota
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
