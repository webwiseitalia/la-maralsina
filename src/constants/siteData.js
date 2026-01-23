// Dati centralizzati del sito - La Maralsina
export const siteData = {
  // Info Azienda
  name: 'Rifugio La Maralsina',
  shortName: 'La Maralsina',
  tagline: 'Ski Bar & Ristorante',
  description: 'Rifugio alpino nel cuore delle piste di Temù, dove la tradizione alpina incontra l\'ospitalità.',
  foundedYear: 1985,

  // Contatti
  contact: {
    phone: '+39 0364 1730695',
    phoneClean: '+390364173069',
    email: 'lamaralsina@libero.it',
    address: {
      street: 'Località Casola',
      city: 'Temù',
      province: 'BS',
      cap: '25050',
      region: 'Lombardia',
      country: 'Italia',
      full: 'Località Casola, 25050 Temù (BS), Italia'
    },
    coordinates: {
      latitude: 46.2468,
      longitude: 10.4656
    }
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/la_maralsina_skibar_ristorante/',
    facebook: 'https://www.facebook.com/groups/1436110466603012/'
  },

  // Info Location
  location: {
    altitude: 1650,
    altitudeUnit: 'm',
    area: 'Val Camonica',
    skiResort: 'Pontedilegno-Tonale',
    skiPistes: '100+ km'
  },

  // Orari
  hours: {
    winter: {
      period: 'Dicembre - Aprile',
      open: '09:00',
      close: '17:00'
    },
    summer: {
      period: 'Giugno - Settembre',
      note: 'Orari variabili'
    }
  },

  // Capacità
  capacity: {
    seats: 100,
    indoor: true,
    terrace: true
  },

  // SEO
  seo: {
    title: 'Rifugio La Maralsina | Ski Bar & Ristorante - Temù',
    description: 'Rifugio La Maralsina - Ski Bar e Ristorante sulle piste di Temù. Cucina tipica valtellinese, pizzoccheri e vista panoramica sulle Alpi.',
    keywords: 'Rifugio La Maralsina, rifugio Temù, ski bar Temù, ristorante piste da sci, Ponte di Legno, Val Camonica, pizzoccheri, polenta, cucina montana',
    image: '/og-image.jpg',
    url: 'https://lamaralsina.it'
  },

  // Legal
  legal: {
    vatNumber: '', // Da compilare
    fiscalCode: '', // Da compilare
    lastUpdate: '2026-01-22'
  }
}

export default siteData
