import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const logoRef = useRef(null)

  // Pages with dark hero backgrounds where navbar should be light
  const darkHeroPages = ['/', '/chi-siamo', '/menu', '/stagioni', '/come-raggiungerci', '/galleria', '/contatti']
  const hasDarkHero = darkHeroPages.includes(location.pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)

    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    )

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Menu', path: '/menu' },
    { name: 'Stagioni', path: '/stagioni' },
    { name: 'Galleria', path: '/galleria' },
    { name: 'Raggiungerci', path: '/come-raggiungerci' },
    { name: 'Contatti', path: '/contatti' },
  ]

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    }),
  }

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isOpen) return 'text-white'
    if (scrolled) return 'text-white mix-blend-difference'
    if (hasDarkHero) return 'text-white'
    return 'text-[var(--color-dark)]'
  }

  const textColorClass = getTextColor()

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled && !isOpen ? 'mix-blend-difference' : ''
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <Link ref={logoRef} to="/" className="relative z-[101]">
            <span
              className={`font-serif text-fluid-lg tracking-tight transition-colors duration-500 ${textColorClass}`}
              style={{ fontStyle: 'italic' }}
            >
              La Maralsina
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-fluid-sm tracking-wide transition-colors duration-300 group ${textColorClass}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-current transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[101] w-12 h-12 flex flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-[2px] transition-colors ${
                isOpen ? 'bg-white' : hasDarkHero && !scrolled ? 'bg-white' : scrolled ? 'bg-white' : 'bg-[var(--color-dark)]'
              }`}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-6 h-[2px] transition-colors ${
                isOpen ? 'bg-white' : hasDarkHero && !scrolled ? 'bg-white' : scrolled ? 'bg-white' : 'bg-[var(--color-dark)]'
              }`}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-[2px] transition-colors ${
                isOpen ? 'bg-white' : hasDarkHero && !scrolled ? 'bg-white' : scrolled ? 'bg-white' : 'bg-[var(--color-dark)]'
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[99] bg-[var(--color-dark)] flex items-center lg:hidden"
          >
            <div className="w-full px-8 py-20">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={link.path}
                      className="block text-fluid-3xl font-serif text-white hover:text-[var(--color-accent)] transition-colors duration-300"
                      style={{ fontStyle: 'italic' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                className="mt-16 pt-8 border-t border-white/20"
              >
                <p className="text-white/60 text-fluid-sm">Temù, Val Camonica</p>
                <a
                  href="tel:+390364173069"
                  className="block text-white text-fluid-base mt-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  +39 0364 1730695
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
