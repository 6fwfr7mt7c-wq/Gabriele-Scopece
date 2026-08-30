import { Review, Course, DaySchedule, ScheduleItem } from '../types';

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
    comment: 'Dalla prima lezione di prova mi sono sentito accolto come in una seconda famiglia. Tecnica sopraffina, ampie sale accoglienti e attrezzate e grandissima professionalità.',
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

export const SCHEDULE_DAYS_DATA: DaySchedule[] = [
  {
    day: 'Lunedì',
    shortDay: 'LUN',
    tagline: 'Energia, Fitness e Ritmi Latini',
    slots: [
      {
        id: 'lun-0900',
        day: 'Lunedì',
        time: '09:00',
        courseName: 'Somblera Fitness',
        category: 'fitness',
        categoryLabel: 'Fitness & Cardio',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Allenamento aerobico energico che combina movimenti di danza e potenziamento.'
      },
      {
        id: 'lun-1000',
        day: 'Lunedì',
        time: '10:00',
        courseName: 'Total Body',
        category: 'fitness',
        categoryLabel: 'Tonificazione',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Circuito completo per tonificare e rafforzare tutti i distretti muscolari.'
      },
      {
        id: 'lun-1700',
        day: 'Lunedì',
        time: '17:00',
        courseName: 'Baby Dance',
        category: 'baby',
        categoryLabel: 'Junior & Baby',
        duration: '50 min',
        instructor: 'Maestra Marika',
        level: '4 - 10 anni',
        description: 'Propedeutica alla danza e sviluppo motorio a ritmo di musica per i più piccoli.'
      },
      {
        id: 'lun-1800',
        day: 'Lunedì',
        time: '18:00',
        courseName: 'Total Body',
        category: 'fitness',
        categoryLabel: 'Tonificazione',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Allenamento pomeridiano ad alta intensità e condizionamento muscolare.'
      },
      {
        id: 'lun-1900',
        day: 'Lunedì',
        time: '19:00',
        courseName: 'Somblera Fitness',
        category: 'fitness',
        categoryLabel: 'Fitness & Cardio',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Sessione serale bruciagrassi e scarico stress con ritmi coinvolgenti.'
      },
      {
        id: 'lun-2000',
        day: 'Lunedì',
        time: '20:00',
        courseName: 'Latin American Style',
        category: 'latin',
        categoryLabel: 'Danze Latine',
        duration: '60 min',
        instructor: 'Marika & Michele',
        level: 'Open Level',
        description: 'Tecnica, passione, postura e figure delle danze latino americane di coppia.'
      }
    ]
  },
  {
    day: 'Martedì',
    shortDay: 'MAR',
    tagline: 'Equilibrio, Propedeutica e Solo Latin',
    slots: [
      {
        id: 'mar-1000',
        day: 'Martedì',
        time: '10:00',
        courseName: 'Yoga',
        category: 'yoga',
        categoryLabel: 'Benessere & Relax',
        duration: '50 min',
        instructor: 'Maestra Marika',
        level: 'Tutti i livelli',
        description: 'Armonia del respiro, allungamento posturale profondo e flessibilità.'
      },
      {
        id: 'mar-1730',
        day: 'Martedì',
        time: '17:30',
        courseName: 'Baby Latin',
        category: 'baby',
        categoryLabel: 'Junior & Baby',
        duration: '50 min',
        instructor: 'Maestra Marika',
        level: 'Bambini & Ragazzi',
        description: 'Primi passi latini per bambini: musicalità, coordinazione ed entusiasmo.'
      },
      {
        id: 'mar-1830',
        day: 'Martedì',
        time: '18:30',
        courseName: 'Solo Latin',
        category: 'latin',
        categoryLabel: 'Danze Latine',
        duration: '60 min',
        instructor: 'Marika & Michele',
        level: 'Tutti i livelli',
        description: 'Coreografie e tecnica latina individuale senza necessità di partner.'
      }
    ]
  },
  {
    day: 'Mercoledì',
    shortDay: 'MER',
    tagline: 'Fitness, Gioco Danza e Stile Latino',
    slots: [
      {
        id: 'mer-1000',
        day: 'Mercoledì',
        time: '10:00',
        courseName: 'Total Body',
        category: 'fitness',
        categoryLabel: 'Tonificazione',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Tonificazione mattutina completa per risvegliare energia e metabolismo.'
      },
      {
        id: 'mer-1700',
        day: 'Mercoledì',
        time: '17:00',
        courseName: 'Baby Dance',
        category: 'baby',
        categoryLabel: 'Junior & Baby',
        duration: '50 min',
        instructor: 'Maestra Marika',
        level: '4 - 10 anni',
        description: 'Gioco danza, ritmo e divertimento in gruppo per i giovani allievi.'
      },
      {
        id: 'mer-1800',
        day: 'Mercoledì',
        time: '18:00',
        courseName: 'Latin American Style',
        category: 'latin',
        categoryLabel: 'Danze Latine',
        duration: '60 min',
        instructor: 'Marika & Michele',
        level: 'Open Level',
        description: 'Studio dei ritmi samba, cha cha, rumba e jive in un clima stimolante.'
      },
      {
        id: 'mer-1900',
        day: 'Mercoledì',
        time: '19:00',
        courseName: 'Somblera Fitness',
        category: 'fitness',
        categoryLabel: 'Fitness & Cardio',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Allenamento dinamico serale per bruciare calorie e divertirsi.'
      }
    ]
  },
  {
    day: 'Giovedì',
    shortDay: 'GIO',
    tagline: 'Fitness, Yoga e Formazione Latina',
    slots: [
      {
        id: 'gio-0900',
        day: 'Giovedì',
        time: '09:00',
        courseName: 'Somblera Fitness',
        category: 'fitness',
        categoryLabel: 'Fitness & Cardio',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Inizio giornata a ritmo di musica con circuito fitness ad alto impatto.'
      },
      {
        id: 'gio-1000',
        day: 'Giovedì',
        time: '10:00',
        courseName: 'Yoga',
        category: 'yoga',
        categoryLabel: 'Benessere & Relax',
        duration: '50 min',
        instructor: 'Maestra Marika',
        level: 'Tutti i livelli',
        description: 'Pratica rigenerante per distendere i muscoli e ritrovare la concentrazione.'
      },
      {
        id: 'gio-1730',
        day: 'Giovedì',
        time: '17:30',
        courseName: 'Baby Latin',
        category: 'baby',
        categoryLabel: 'Junior & Baby',
        duration: '50 min',
        instructor: 'Maestra Marika',
        level: 'Bambini & Ragazzi',
        description: 'Coreografie e tecnica junior per sviluppare portamento ed espressività.'
      },
      {
        id: 'gio-1830',
        day: 'Giovedì',
        time: '18:30',
        courseName: 'Solo Latin',
        category: 'latin',
        categoryLabel: 'Danze Latine',
        duration: '60 min',
        instructor: 'Marika & Michele',
        level: 'Tutti i livelli',
        description: 'Passi, giri e stile per ballare da soli con grazia e precisione.'
      }
    ]
  },
  {
    day: 'Venerdì',
    shortDay: 'VEN',
    tagline: 'Tonificazione e Latin Night Prep',
    slots: [
      {
        id: 'ven-1800',
        day: 'Venerdì',
        time: '18:00',
        courseName: 'Total Body',
        category: 'fitness',
        categoryLabel: 'Tonificazione',
        duration: '50 min',
        instructor: 'Team Fitness',
        level: 'Tutti i livelli',
        description: 'Workout serale per chiudere la settimana con forza e motivazione.'
      },
      {
        id: 'ven-1900',
        day: 'Venerdì',
        time: '19:00',
        courseName: 'Solo Latin',
        category: 'latin',
        categoryLabel: 'Danze Latine',
        duration: '60 min',
        instructor: 'Marika & Michele',
        level: 'Tutti i livelli',
        description: 'Musica latina travolgente, routine coreografiche ed energia pura.'
      }
    ]
  },
  {
    day: 'Sabato',
    shortDay: 'SAB',
    tagline: 'Lezioni Private & Percorsi Su Misura',
    slots: [
      {
        id: 'sab-private',
        day: 'Sabato',
        time: 'Ore Private',
        courseName: 'Ore Private & Personal Coaching',
        category: 'private',
        categoryLabel: 'Lezioni Private',
        duration: 'Su prenotazione',
        instructor: 'Marika & Michele',
        level: 'Personalizzato (Singolo o Coppia)',
        description: 'Sessioni one-to-one esclusive, preparazione gare FIDS, ballo sposi e lezioni personalizzate su appuntamento.'
      }
    ]
  }
];

export const SCHEDULE_CATEGORIES = [
  { id: 'all', label: 'Tutti i Corsi', color: 'indigo' },
  { id: 'fitness', label: 'Somblera & Total Body', color: 'cyan' },
  { id: 'latin', label: 'Danze Latine & Solo Latin', color: 'violet' },
  { id: 'baby', label: 'Baby Dance & Baby Latin', color: 'amber' },
  { id: 'yoga', label: 'Yoga & Benessere', color: 'emerald' },
  { id: 'private', label: 'Ore Private', color: 'rose' },
] as const;

export const SCHOOL_INFO = {
  name: 'La Vida Loca Crew',
  tagline: 'Passione, professionalità e divertimento a due passi da casa tua. Entra a far parte della nostra famiglia!',
  address: 'Via Lucera, 121',
  capCity: '71121 Foggia (FG)',
  fullAddress: 'Via Lucera, 121, 71121 Foggia (FG)',
  hours: 'Lunedì - Sabato dalle 17:00',
  phone: '+39 380 685 9310',
  email: 'Michelecagnazzo1985.mc@gmail.com',
  googleRating: 4.6,
  googleReviewsCount: 22,
  founders: 'Marika e Michele',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Lucera+121+71121+Foggia+FG',
  instagramUrl: 'https://www.instagram.com/la_vida_loca_latin_crew?igsi=dTd1enh5eGtjcXR0',
  facebookUrl: 'https://www.facebook.com/share/19GnetLF1L/?mibextid=wwXIfr',
  // Numero WhatsApp ufficiale del titolare: +39 380 685 9310
  whatsappNumber: '393806859310',
  whatsappMessage: 'Ciao! Vorrei informazioni sui corsi di ballo',
  get whatsappUrl() {
    return `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(this.whatsappMessage)}`;
  }
};
