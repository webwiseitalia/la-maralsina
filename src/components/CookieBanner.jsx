import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const COOKIE_KEY = 'la-maralsina-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Pagine policy dove il banner non mostra blur
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Controlla se l'utente ha già dato/negato il consenso
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Piccolo delay per l'animazione d'ingresso
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay con blur - non visibile nelle pagine policy */}
          {!isPolicyPage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[var(--color-dark)]/60 backdrop-blur-md z-[9998]"
              aria-hidden="true"
            />
          )}

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-8"
          >
            <div className="max-w-5xl mx-auto">
              {/* Card principale */}
              <div className="bg-[var(--color-cream)] border border-[var(--color-dark)]/10 shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* Barra decorativa superiore */}
                <div className="h-1 bg-gradient-to-r from-[var(--color-wood)] via-[var(--color-accent)] to-[var(--color-wood-dark)]" />

                <div className="p-6 md:p-10">
                  <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                    {/* Contenuto */}
                    <div>
                      {/* Badge privacy-friendly */}
                      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 mb-4">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-fluid-xs text-green-700 font-medium uppercase tracking-wider">
                          Privacy-Friendly
                        </span>
                      </div>

                      <h3 className="text-fluid-xl font-serif italic text-[var(--color-dark)] mb-3">
                        La tua privacy è importante
                      </h3>

                      <p className="text-fluid-sm text-[var(--color-dark)]/70 leading-relaxed max-w-2xl">
                        Questo sito utilizza esclusivamente <strong className="text-[var(--color-dark)]">cookie tecnici</strong> per
                        garantire il corretto funzionamento. <span className="text-[var(--color-dark)]/50">Non utilizziamo
                        cookie di profilazione, tracciamento o pubblicità.</span>
                      </p>

                      {/* Link alle policy */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        <Link
                          to="/cookie-policy"
                          className="text-fluid-xs text-[var(--color-wood)] hover:text-[var(--color-wood-dark)] transition-colors uppercase tracking-wider border-b border-[var(--color-wood)]/30 hover:border-[var(--color-wood)] pb-0.5"
                        >
                          Cookie Policy
                        </Link>
                        <Link
                          to="/privacy-policy"
                          className="text-fluid-xs text-[var(--color-wood)] hover:text-[var(--color-wood-dark)] transition-colors uppercase tracking-wider border-b border-[var(--color-wood)]/30 hover:border-[var(--color-wood)] pb-0.5"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                    </div>

                    {/* Pulsanti */}
                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <button
                        onClick={handleAccept}
                        className="w-full py-4 px-8 bg-[var(--color-dark)] text-white text-fluid-sm font-medium uppercase tracking-[0.15em] hover:bg-[var(--color-wood-dark)] transition-all duration-300 hover:shadow-lg"
                      >
                        Accetta
                      </button>
                      <button
                        onClick={handleReject}
                        className="w-full py-4 px-8 border border-[var(--color-dark)]/20 text-[var(--color-dark)]/70 text-fluid-sm font-medium uppercase tracking-[0.15em] hover:border-[var(--color-dark)]/40 hover:text-[var(--color-dark)] transition-all duration-300"
                      >
                        Rifiuta
                      </button>
                    </div>
                  </div>

                  {/* Nota in basso */}
                  <div className="mt-6 pt-4 border-t border-[var(--color-dark)]/5">
                    <p className="text-fluid-xs text-[var(--color-dark)]/40 text-center italic">
                      I cookie tecnici non richiedono il tuo consenso ai sensi del GDPR, ma rispettiamo la tua scelta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
