import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

import heroImage from '../assets/foto/foto-24.webp'
import interiorImage from '../assets/foto/foto-16.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    data: '',
    persone: '',
    messaggio: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const formRef = useRef(null)

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
        }
      })

      // Hero title
      gsap.fromTo(heroRef.current.querySelector('h1'),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      )

      // Contact items stagger
      const contactItems = contactRef.current.querySelectorAll('.contact-item')
      contactItems.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
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

      // Form reveal
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        data: '',
        persone: '',
        messaggio: '',
      })
    }, 4000)
  }

  return (
    <div className="noise-overlay">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rifugio di notte"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-dark)]/40 to-[var(--color-dark)]/60" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-[12vh] asymmetric-padding">
          <div>
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              Parliamo
            </p>
            <h1 className="text-fluid-5xl font-serif italic text-white leading-[0.9]">
              Contatti
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-[var(--space-2xl)] bg-[var(--color-cream)]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Contact Info */}
          <div ref={contactRef} className="lg:col-span-5 asymmetric-padding">
            <p className="text-fluid-xs uppercase tracking-[0.3em] text-[var(--color-wood)] mb-8">
              Informazioni
            </p>

            <div className="space-y-12">
              {/* Address */}
              <div className="contact-item group">
                <div className="flex items-start gap-6">
                  <span className="text-fluid-2xl font-serif italic text-[var(--color-dark)]/10 group-hover:text-[var(--color-wood)]/30 transition-colors">
                    01
                  </span>
                  <div>
                    <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Indirizzo</p>
                    <p className="text-fluid-lg text-[var(--color-dark)]">
                      Località Casola
                      <br />25050 Temù (BS)
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item group">
                <div className="flex items-start gap-6">
                  <span className="text-fluid-2xl font-serif italic text-[var(--color-dark)]/10 group-hover:text-[var(--color-wood)]/30 transition-colors">
                    02
                  </span>
                  <div>
                    <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Telefono</p>
                    <a
                      href="tel:+390364173069"
                      className="text-fluid-lg text-[var(--color-dark)] hover:text-[var(--color-wood)] transition-colors block"
                    >
                      +39 0364 1730695
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item group">
                <div className="flex items-start gap-6">
                  <span className="text-fluid-2xl font-serif italic text-[var(--color-dark)]/10 group-hover:text-[var(--color-wood)]/30 transition-colors">
                    03
                  </span>
                  <div>
                    <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Email</p>
                    <a
                      href="mailto:lamaralsina@libero.it"
                      className="text-fluid-lg text-[var(--color-dark)] hover:text-[var(--color-wood)] transition-colors block"
                    >
                      lamaralsina@libero.it
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item group">
                <div className="flex items-start gap-6">
                  <span className="text-fluid-2xl font-serif italic text-[var(--color-dark)]/10 group-hover:text-[var(--color-wood)]/30 transition-colors">
                    04
                  </span>
                  <div>
                    <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-2">Orari</p>
                    <p className="text-fluid-base text-[var(--color-dark)]">
                      <span className="font-medium">Inverno</span> — 09:00 / 17:00
                      <br />
                      <span className="font-medium">Estate</span> — orari variabili
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="contact-item pt-8 border-t border-[var(--color-dark)]/10">
                <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-4">Seguici</p>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/la_maralsina_skibar_ristorante/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fluid-sm text-[var(--color-dark)] uppercase tracking-[0.2em] border-b border-[var(--color-dark)]/30 pb-1 hover:border-[var(--color-wood)] hover:text-[var(--color-wood)] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/groups/1436110466603012/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fluid-sm text-[var(--color-dark)] uppercase tracking-[0.2em] border-b border-[var(--color-dark)]/30 pb-1 hover:border-[var(--color-wood)] hover:text-[var(--color-wood)] transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="lg:col-span-6 lg:col-start-7 px-8 md:px-16 lg:px-0 lg:pr-16">
            <div className="bg-[var(--color-snow)] p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-wood)]/5" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[var(--color-dark)]/5" />

              <h2 className="text-fluid-2xl font-serif italic text-[var(--color-dark)] mb-8 relative z-10">
                Prenota o scrivici
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center"
                  >
                    <span className="text-fluid-massive block mb-4">✓</span>
                    <h3 className="text-fluid-xl font-serif italic text-[var(--color-dark)] mb-4">
                      Messaggio inviato
                    </h3>
                    <p className="text-fluid-base text-[var(--color-dark)]/60">
                      Ti risponderemo il prima possibile
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          onFocus={() => setFocused('nome')}
                          onBlur={() => setFocused(null)}
                          required
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-[var(--color-dark)]/10 focus:border-[var(--color-wood)] outline-none transition-colors text-fluid-base text-[var(--color-dark)]"
                          placeholder="Nome *"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-wood)]"
                          initial={{ width: 0 }}
                          animate={{ width: focused === 'nome' ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-[var(--color-dark)]/10 focus:border-[var(--color-wood)] outline-none transition-colors text-fluid-base text-[var(--color-dark)]"
                          placeholder="Email *"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-wood)]"
                          initial={{ width: 0 }}
                          animate={{ width: focused === 'email' ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          onFocus={() => setFocused('telefono')}
                          onBlur={() => setFocused(null)}
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-[var(--color-dark)]/10 focus:border-[var(--color-wood)] outline-none transition-colors text-fluid-base text-[var(--color-dark)]"
                          placeholder="Telefono"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-wood)]"
                          initial={{ width: 0 }}
                          animate={{ width: focused === 'telefono' ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="date"
                          id="data"
                          name="data"
                          value={formData.data}
                          onChange={handleChange}
                          onFocus={() => setFocused('data')}
                          onBlur={() => setFocused(null)}
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-[var(--color-dark)]/10 focus:border-[var(--color-wood)] outline-none transition-colors text-fluid-base text-[var(--color-dark)]"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-wood)]"
                          initial={{ width: 0 }}
                          animate={{ width: focused === 'data' ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        id="persone"
                        name="persone"
                        value={formData.persone}
                        onChange={handleChange}
                        onFocus={() => setFocused('persone')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-[var(--color-dark)]/10 focus:border-[var(--color-wood)] outline-none transition-colors text-fluid-base text-[var(--color-dark)] cursor-pointer"
                      >
                        <option value="">Numero di persone</option>
                        <option value="1-2">1-2 persone</option>
                        <option value="3-4">3-4 persone</option>
                        <option value="5-6">5-6 persone</option>
                        <option value="7-10">7-10 persone</option>
                        <option value="10+">Più di 10</option>
                      </select>
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-wood)]"
                        initial={{ width: 0 }}
                        animate={{ width: focused === 'persone' ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        onFocus={() => setFocused('messaggio')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={4}
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-[var(--color-dark)]/10 focus:border-[var(--color-wood)] outline-none transition-colors text-fluid-base text-[var(--color-dark)] resize-none"
                        placeholder="Il tuo messaggio *"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-wood)]"
                        initial={{ width: 0 }}
                        animate={{ width: focused === 'messaggio' ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full text-fluid-sm text-white bg-[var(--color-dark)] px-8 py-5 uppercase tracking-[0.2em] hover:bg-[var(--color-wood)] transition-colors"
                      >
                        Invia messaggio
                      </button>
                    </div>

                    <p className="text-fluid-xs text-[var(--color-dark)]/40 text-center">
                      Per prenotazioni urgenti, consigliamo di chiamare
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[50vh]">
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
      </section>

      {/* Quick Call CTA */}
      <section className="py-[var(--space-xl)] bg-[var(--color-dark)]">
        <div className="asymmetric-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-fluid-3xl text-white leading-[1.1] mb-6">
                Preferisci
                <br />
                <span className="italic text-[var(--color-accent)]">chiamare</span>?
              </h2>
              <p className="text-fluid-base text-white/50">
                Per prenotazioni o informazioni, siamo a disposizione
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
              <a
                href="tel:+390364173069"
                className="inline-flex items-center justify-center gap-4 text-fluid-lg text-white border border-white/30 px-10 py-6 hover:bg-white hover:text-[var(--color-dark)] transition-colors"
              >
                <span className="text-fluid-xl">☎</span>
                <span>+39 0364 1730695</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image Strip */}
      <section className="h-[40vh] relative overflow-hidden">
        <img
          src={interiorImage}
          alt="Interno rifugio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 to-transparent" />
        <div className="absolute bottom-8 left-8 md:left-16">
          <p className="text-fluid-sm text-white/60 italic">
            Vi aspettiamo a braccia aperte
          </p>
        </div>
      </section>
    </div>
  )
}
