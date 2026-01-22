import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="grid md:grid-cols-12 border-t border-white/10">
        {/* Brand */}
        <div className="md:col-span-5 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/10">
          <Link to="/" className="inline-block">
            <h3 className="text-fluid-3xl font-serif italic text-white mb-8">
              La Maralsina
            </h3>
          </Link>
          <p className="text-fluid-sm text-white/50 max-w-sm leading-relaxed">
            Rifugio alpino nel cuore delle piste di Temù.
            Dove la tradizione incontra la montagna.
          </p>
          <div className="flex gap-6 mt-10">
            <a
              href="https://www.instagram.com/la_maralsina_skibar_ristorante/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fluid-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/groups/1436110466603012/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fluid-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/10">
          <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/30 mb-8">
            Esplora
          </p>
          <nav className="flex flex-col gap-4">
            {[
              { name: 'Chi Siamo', path: '/chi-siamo' },
              { name: 'Menu', path: '/menu' },
              { name: 'Stagioni', path: '/stagioni' },
              { name: 'Galleria', path: '/galleria' },
              { name: 'Contatti', path: '/contatti' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-fluid-base text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="md:col-span-4 p-8 md:p-12 lg:p-16">
          <p className="text-fluid-xs uppercase tracking-[0.3em] text-white/30 mb-8">
            Contatti
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-fluid-sm text-white/50 mb-1">Indirizzo</p>
              <p className="text-fluid-base text-white">
                Località Casola<br />
                25050 Temù (BS)
              </p>
            </div>
            <div>
              <p className="text-fluid-sm text-white/50 mb-1">Telefono</p>
              <a
                href="tel:+390364173069"
                className="text-fluid-base text-white hover:text-[var(--color-accent)] transition-colors"
              >
                +39 0364 1730695
              </a>
            </div>
            <div>
              <p className="text-fluid-sm text-white/50 mb-1">Email</p>
              <a
                href="mailto:lamaralsina@libero.it"
                className="text-fluid-base text-white hover:text-[var(--color-accent)] transition-colors"
              >
                lamaralsina@libero.it
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-8 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-fluid-xs text-white/30">
            © {new Date().getFullYear()} Rifugio La Maralsina
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-fluid-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/cookie-policy"
              className="text-fluid-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
