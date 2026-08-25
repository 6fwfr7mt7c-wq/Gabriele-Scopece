import { Review, Course } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Carmela Capuano',
    initial: 'C',
    rating: 5,
    date: 'Recentemente su Google',
    comment: 'Una scuola di ballo davvero di alto livello. La professionalità degli insegnanti è evidente fin dalla prima lezione. L\'ambiente è curato ed elegante, ma allo stesso tempo ti fa sentire a casa.',
    source: 'Google',
  },
  {
    id: 'rev-2',
    name: 'Anna',
    initial: 'A',
    rating: 5,
    date: 'Recentemente su Google',
    comment: 'Marika e Michele sono eccezionali. Hanno la capacità di trasmettere la loro passione con grande pazienza e preparazione tecnica. Consigliatissima a chi cerca serietà e divertimento!',
    source: 'Google',
  },
  {
    id: 'rev-3',
    name: 'Giuseppe R.',
    initial: 'G',
    rating: 5,
    date: 'Un mese fa su Google',
    comment: 'Dalla prima lezione di prova mi sono sentito accolto come in una seconda famiglia. Tecnica sopraffina, sala spaziosa con parquet eccezionale e grandissima professionalità.',
    source: 'Google',
  },
  {
    id: 'rev-4',
    name: 'Federica S.',
    initial: 'F',
    rating: 5,
    date: 'Due mesi fa su Google',
    comment: 'I maestri Marika e Michele sanno tirare fuori il meglio da ogni allievo, dai bambini fino ai corsi per adulti e competitori. Un punto di riferimento a Foggia!',
    source: 'Google',
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'standard',
    title: 'Danze Standard & Ballroom',
    subtitle: 'Valzer Inglese, Tango, Valzer Viennese, Slow Fox, Quickstep',
    description: 'Postura regale, eleganza di coppia e studio approfondito della tecnica per ballo sociale e percorsi agonistici FIDS.',
    level: 'Tutti i livelli (Base, Intermedio, Competizione)',
    schedule: 'Lunedì e Mercoledì ore 19:30',
    instructor: 'Marika & Michele',
    tags: ['Eleganza', 'Coppia', 'Tecnica']
  },
  {
    id: 'latini',
    title: 'Danze Latino Americane',
    subtitle: 'Samba, Cha Cha Cha, Rumba, Paso Doble, Jive',
    description: 'Ritmo incalzante, energia esplosiva, dinamica corporale ed espressione artistica con maestri pluripremiati.',
    level: 'Principianti, Intermedi, Agonisti',
    schedule: 'Martedì e Giovedì ore 20:30',
    instructor: 'Marika & Michele',
    tags: ['Energia', 'Ritmo', 'Passione']
  },
  {
    id: 'caraibici',
    title: 'Danze Caraibiche & Social',
    subtitle: 'Salsa Cubana, Salsa Portoricana, Bachata Sensual, Merengue',
    description: 'Divertimento assicurato, musicalità e socializzazione in un clima informale e stimolante.',
    level: 'Open Level (Dai primi passi al perfezionamento)',
    schedule: 'Venerdì ore 20:00 e Sabato ore 18:00',
    instructor: 'Team La Vida Loca',
    tags: ['Divertimento', 'Social', 'Musica']
  },
  {
    id: 'kids',
    title: 'Baby Dance & Gioco Danza',
    subtitle: 'Propedeutica e avviamento alla danza sportiva per bambini (4-10 anni)',
    description: 'Sviluppo della coordinazione, del senso del ritmo e della socializzazione attraverso il gioco e il movimento creativo.',
    level: 'Junior / Baby',
    schedule: 'Lunedì e Giovedì ore 17:00',
    instructor: 'Marika',
    tags: ['Bambini', 'Coordinazione', 'Divertimento']
  },
  {
    id: 'synchro',
    title: 'Balli di Gruppo & Coreografico',
    subtitle: 'Sincronizzato, Latin Style e coreografie per spettacoli',
    description: 'Ideale per chi desidera allenarsi a ritmo di musica senza la necessità di un partner fisso.',
    level: 'Tutti i livelli',
    schedule: 'Mercoledì e Sabato ore 17:30',
    instructor: 'Team La Vida Loca',
    tags: ['Gruppo', 'No Partner', 'Fitness']
  }
];

export const SCHOOL_INFO = {
  name: 'La Vida Loca Crew',
  tagline: 'Passione, professionalità e divertimento a due passi da casa tua. Entra a far parte della nostra famiglia!',
  address: 'Via Lucera, 121',
  capCity: '71121 Foggia (FG)',
  fullAddress: 'Via Lucera, 121, 71121 Foggia (FG)',
  hours: 'Lunedì - Sabato dalle 17:00',
  phone: '+39 380 685 9310',
  email: 'info@lavidalocacrew.it',
  googleRating: 4.6,
  googleReviewsCount: 22,
  founders: 'Marika e Michele',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Lucera+121+71121+Foggia+FG',
  // Numero WhatsApp ufficiale del titolare: +39 380 685 9310
  whatsappNumber: '393806859310',
  whatsappMessage: 'Ciao! Vorrei informazioni sui corsi di ballo',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }
};
