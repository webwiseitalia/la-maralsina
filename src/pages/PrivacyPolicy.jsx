import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-fluid-base text-white/60 mt-4">
            Informativa sul trattamento dei dati personali
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <p className="text-fluid-sm text-[var(--color-dark)]/50 mb-8">
            Ultimo aggiornamento: {siteData.legal.lastUpdate}
          </p>

          {/* 1. Titolare */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              1. Titolare del Trattamento
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Il Titolare del trattamento dei dati personali è:
            </p>
            <div className="bg-[var(--color-cream)] p-6 rounded">
              <p className="text-fluid-base font-medium text-[var(--color-dark)]">
                {siteData.name}
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70 mt-2">
                {siteData.contact.address.full}
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Tel: {siteData.contact.phone}
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Email: {siteData.contact.email}
              </p>
            </div>
          </section>

          {/* 2. Dati Raccolti */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              2. Dati Raccolti e Finalità del Trattamento
            </h2>

            <h3 className="text-fluid-lg font-medium text-[var(--color-dark)] mb-3 mt-6">
              2.1 Dati forniti volontariamente dall'utente
            </h3>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside text-fluid-base text-[var(--color-dark)]/70 space-y-2 mb-4">
              <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
              <li><strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
            </ul>

            <div className="bg-[var(--color-wood)]/10 border-l-4 border-[var(--color-wood)] p-4 my-6">
              <p className="text-fluid-sm font-medium text-[var(--color-dark)] mb-2">
                Finalità: I dati vengono raccolti esclusivamente per:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[var(--color-dark)]/70 space-y-1">
                <li>Rispondere alle richieste di prenotazione</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Gestire la relazione commerciale</li>
              </ul>
            </div>

            <h3 className="text-fluid-lg font-medium text-[var(--color-dark)] mb-3 mt-6">
              2.2 Base giuridica del trattamento
            </h3>
            <p className="text-fluid-base text-[var(--color-dark)]/70">
              Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
              l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          {/* 3. Modalità */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              3. Modalità di Trattamento
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
              finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="text-fluid-base text-[var(--color-dark)]/70">
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
              autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          {/* 4. Conservazione */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              4. Conservazione dei Dati
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
              relazioni commerciali conseguenti:
            </p>
            <ul className="list-disc list-inside text-fluid-base text-[var(--color-dark)]/70 space-y-2">
              <li><strong>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto
                contrattuale</li>
              <li><strong>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* 5. Comunicazione */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              5. Comunicazione e Diffusione dei Dati
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc list-inside text-fluid-base text-[var(--color-dark)]/70 space-y-2 mb-6">
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>

            <div className="bg-red-50 border border-red-200 p-4 rounded">
              <p className="text-fluid-sm font-medium text-red-800 mb-2">
                I tuoi dati NON verranno MAI:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-red-700 space-y-1">
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* 6. Diritti */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              6. Diritti dell'Interessato
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="list-disc list-inside text-fluid-base text-[var(--color-dark)]/70 space-y-2">
              <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>

            <div className="bg-[var(--color-wood)]/10 border-l-4 border-[var(--color-wood)] p-4 my-6">
              <p className="text-fluid-sm font-medium text-[var(--color-dark)] mb-2">
                Come esercitare i tuoi diritti:
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.contact.email}`} className="text-[var(--color-wood)] hover:underline">{siteData.contact.email}</a> o
                tramite raccomandata A/R all'indirizzo: {siteData.contact.address.full}.
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70 mt-2">
                Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          {/* 7. Reclamo */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              7. Diritto di Reclamo
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
              trattamento dei tuoi dati violi il GDPR.
            </p>
            <div className="bg-[var(--color-cream)] p-4 rounded">
              <p className="text-fluid-sm font-medium text-[var(--color-dark)]">
                Garante per la protezione dei dati personali:
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[var(--color-wood)] hover:underline">www.garanteprivacy.it</a>
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                Email: garante@gpdp.it
              </p>
              <p className="text-fluid-sm text-[var(--color-dark)]/70">
                PEC: protocollo@pec.gpdp.it
              </p>
            </div>
          </section>

          {/* 8. Cookie */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              8. Cookie e Tecnologie di Tracciamento
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70">
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
              consulta la nostra <Link to="/cookie-policy" className="text-[var(--color-wood)] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* 9. Modifiche */}
          <section className="mb-12">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              9. Modifiche alla Privacy Policy
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
              saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
              consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          {/* 10. Contatti */}
          <section className="mb-8">
            <h2 className="text-fluid-xl font-serif text-[var(--color-dark)] mb-4">
              10. Contatti
            </h2>
            <p className="text-fluid-base text-[var(--color-dark)]/70 mb-4">
              Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
            </p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${siteData.contact.email}`} className="inline-flex items-center gap-2 text-fluid-base text-[var(--color-wood)] hover:underline">
                <span>✉</span> {siteData.contact.email}
              </a>
              <a href={`tel:${siteData.contact.phoneClean}`} className="inline-flex items-center gap-2 text-fluid-base text-[var(--color-wood)] hover:underline">
                <span>☎</span> {siteData.contact.phone}
              </a>
            </div>
          </section>

          {/* Footer note */}
          <div className="border-t border-[var(--color-dark)]/10 pt-8 mt-12">
            <p className="text-fluid-xs text-[var(--color-dark)]/50 text-center">
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs.
              101/2018
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
            to="/cookie-policy"
            className="flex-1 text-center py-4 border border-[var(--color-dark)]/20 text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition-colors text-fluid-sm uppercase tracking-widest"
          >
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
