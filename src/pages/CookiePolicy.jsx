import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-dark)] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-fluid-xs text-white/60 hover:text-white transition-colors mb-8"
          >
            <span>←</span>
            <span>Torna alla Home</span>
          </Link>
          <h1 className="text-fluid-4xl font-serif italic text-white">
            Cookie Policy
          </h1>
          <p className="text-fluid-base text-white/60 mt-4">
            Informativa sull'utilizzo dei cookie
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-8">
            Ultimo aggiornamento: {siteData.legal.lastUpdate}
          </p>

          {/* Privacy Friendly Notice */}
          <div className="bg-green-50 border border-green-200 p-6 rounded mb-12">
            <div className="flex items-start gap-4">
              <span className="text-green-600 text-2xl">✓</span>
              <div>
                <p className="text-fluid-base font-medium text-green-800 mb-2">
                  Sito Privacy-Friendly
                </p>
                <p className="text-fluid-sm text-green-700">
                  Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie
                  di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per
                  la navigazione.
                </p>
              </div>
            </div>
          </div>

          {/* 1. Cosa sono i Cookie */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              1. Cosa sono i Cookie
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
              quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
              informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          {/* 2. Tipologie di Cookie */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              2. Tipologie di Cookie
            </h2>

            <h3 className="text-fluid-lg font-medium text-[var(--color-dark)] mb-3 mt-6">
              2.1 Cookie Tecnici
            </h3>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
              questi cookie, il sito potrebbe non funzionare correttamente.
            </p>
            <div className="bg-[var(--color-wood)]/10 border-l-4 border-[var(--color-wood)] p-4 mb-6">
              <p className="text-fluid-sm font-medium text-[var(--color-dark)] mb-2">
                Cookie tecnici utilizzati su questo sito:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[var(--color-dark)]/70 space-y-1">
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
              </ul>
              <p className="text-fluid-xs text-[var(--color-dark)]/50 mt-3">
                Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
              </p>
            </div>

            <h3 className="text-fluid-lg font-medium text-[var(--color-dark)] mb-3 mt-6">
              2.2 Cookie Analitici
            </h3>
            <div className="bg-red-50 border border-red-200 p-4 rounded mb-4">
              <p className="text-fluid-sm font-medium text-red-800 flex items-center gap-2">
                <span>⊘</span> NON UTILIZZATI
              </p>
              <p className="text-fluid-sm text-red-700 mt-1">
                Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
              </p>
            </div>

            <h3 className="text-fluid-lg font-medium text-[var(--color-dark)] mb-3 mt-6">
              2.3 Cookie di Profilazione
            </h3>
            <div className="bg-red-50 border border-red-200 p-4 rounded mb-4">
              <p className="text-fluid-sm font-medium text-red-800 flex items-center gap-2">
                <span>⊘</span> NON UTILIZZATI
              </p>
              <p className="text-fluid-sm text-red-700 mt-1">
                Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
              </p>
            </div>

            <h3 className="text-fluid-lg font-medium text-[var(--color-dark)] mb-3 mt-6">
              2.4 Cookie di Terze Parti
            </h3>
            <div className="bg-red-50 border border-red-200 p-4 rounded">
              <p className="text-fluid-sm font-medium text-red-800 flex items-center gap-2">
                <span>⊘</span> NON UTILIZZATI
              </p>
              <p className="text-fluid-sm text-red-700 mt-1">
                Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
              </p>
            </div>
          </section>

          {/* 3. Cookie Utilizzati */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              3. Cookie Utilizzati su Questo Sito
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-6">
              Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-fluid-sm">
                <thead>
                  <tr className="border-b border-[var(--color-dark)]/20">
                    <th className="text-left py-3 px-4 font-medium text-[var(--color-dark)]">Nome Cookie</th>
                    <th className="text-left py-3 px-4 font-medium text-[var(--color-dark)]">Tipologia</th>
                    <th className="text-left py-3 px-4 font-medium text-[var(--color-dark)]">Finalità</th>
                    <th className="text-left py-3 px-4 font-medium text-[var(--color-dark)]">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-dark)]/10">
                    <td className="py-3 px-4 text-[var(--color-dark)]/70">la-maralsina-cookie-consent</td>
                    <td className="py-3 px-4">
                      <span className="bg-[var(--color-wood)]/20 text-[var(--color-wood-dark)] text-xs px-2 py-1 rounded">Tecnico</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-dark)]/70">Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                    <td className="py-3 px-4 text-[var(--color-dark)]/70">7 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[var(--color-cream)] p-4 rounded mt-6">
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                <strong>Nota importante:</strong> I cookie tecnici come "la-maralsina-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il
                consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
              </p>
            </div>
          </section>

          {/* 4. Come Gestire i Cookie */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              4. Come Gestire i Cookie
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
              del tuo browser:
            </p>
            <ul className="list-disc list-inside text-fluid-base text-[var(--color-dark)]/70 space-y-2 mb-6">
              <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
              <p className="text-fluid-sm text-yellow-800">
                <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                qualità dell'esperienza di navigazione.
              </p>
            </div>
          </section>

          {/* 5. Link a Siti Esterni */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              5. Link a Siti Esterni
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70">
              Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
              il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
            </p>
          </section>

          {/* 6. Aggiornamenti */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              6. Aggiornamenti della Cookie Policy
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
              attraverso un avviso pubblicato su questa pagina.
            </p>
            <p className="text-fluid-base text-[var(--color-dark)]/70">
              Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro
              sito.
            </p>
          </section>

          {/* 7. Base Normativa */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              7. Base Normativa
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Questa Cookie Policy è redatta in conformità a:
            </p>
            <ul className="list-disc list-inside text-fluid-base text-[var(--color-dark)]/70 space-y-2">
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* 8. Contatti */}
          <section className="mb-8">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              8. Contatti
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
            </p>
            <div className="bg-[var(--color-cream)] p-6 rounded">
              <p className="text-fluid-base font-medium text-[var(--color-dark)]">
                {siteData.name}
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70 mt-2">
                {siteData.contact.address.full}
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Email: <a href={`mailto:${siteData.contact.email}`} className="text-[var(--color-wood)] hover:underline">{siteData.contact.email}</a>
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Tel: <a href={`tel:${siteData.contact.phoneClean}`} className="text-[var(--color-wood)] hover:underline">{siteData.contact.phone}</a>
              </p>
            </div>
          </section>

          {/* Zero Tracking Badge */}
          <div className="bg-green-50 border border-green-200 p-8 rounded text-center mt-12">
            <span className="text-4xl text-green-600 block mb-4">✓</span>
            <p className="text-fluid-lg font-medium text-green-800">
              Zero Tracciamento
            </p>
            <p className="text-fluid-sm text-green-700 mt-2">
              Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            to="/"
            className="flex-1 text-center py-4 border border-[var(--color-dark)]/20 text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition-colors text-fluid-sm uppercase tracking-widest"
          >
            Torna alla Home
          </Link>
          <Link
            to="/privacy-policy"
            className="flex-1 text-center py-4 border border-[var(--color-dark)]/20 text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition-colors text-fluid-sm uppercase tracking-widest"
          >
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
