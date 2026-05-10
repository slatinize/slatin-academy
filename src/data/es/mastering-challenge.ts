import type { FaqItem, Feature } from '../types';

export const pageData = {
  meta: {
    title: "Mastering Challenge - SLATIN Academy",
    description: "7 días. 5 másters. 1 semana intensiva con Ruslan Slatin que cambia tu forma de masterizar.",
  },

  hero: {
    eyebrow: "Plazas abiertas · Edición Mayo 2026",
    headline: 'Mastering <span class="grad">Challenge</span>',
    subtitle: '',
    ctaText: "¡ACEPTO!",
    ctaHref: "#pricing",
    backgroundImage: "/images/hero-gear.jpg",
    countdownTarget: "2026-05-20T19:00:00",
    pills: [
      { number: "07", label: "días" },
      { number: "05", label: "géneros" },
      { number: "100%", label: "en directo" },
    ],
    alumni: [
      { src: "/images/mentoring/alumni-ignacio.jpg", alt: "Ignacio" },
      { src: "/images/mentoring/alumni-pablo.jpg", alt: "Pablo" },
      { src: "/images/mentoring/alumni-sergio-h.jpg", alt: "Sergio" },
      { src: "/images/mentoring/alumni-pere.jpg", alt: "Pere" },
      { src: "/images/mentoring/alumni-marco-b.jpg", alt: "Marco" },
    ],
    proofText: "+500 productores ya pasaron por programas de Rus",
  },

  marquee: {
    text: "<strong>Mastering Challenge</strong> · 7 días · 5 másters ·",
  },

  problems: {
    eyebrow: "El problema",
    headline: 'Llevas meses intentando que tus másters suenen <strong>competitivos</strong>...',
    items: [
      {
        icon: "&#x2715;",
        title: "Ves tutoriales sin parar:",
        description: "Horas y horas de YouTube, pero cuando comparas tu máster con una referencia, sigue sin estar a la altura.",
      },
      {
        icon: "&#x2715;",
        title: 'Pruebas <em>plugins</em> nuevos:',
        description: 'Cada semana uno distinto, esperando que alguno marque la diferencia, pero el problema nunca es el <em>plugin</em>.',
      },
      {
        icon: "&#x2715;",
        title: "Te falta criterio:",
        description: "Sientes que no tienes el oído y esa velocidad de decisión que separa lo amateur de lo profesional.",
      },
    ],
    closing: 'Lo que te falta no es información, es <strong>criterio</strong>. Y eso es lo que vas a entrenar durante una semana en el <strong><span class="gradient-text-red">Mastering Challenge</span></strong>.',
  },

  howItWorks: {
    sectionTitle: "Cómo funciona",
    steps: [
      {
        number: "01",
        title: "Clase en vivo con Ruslan",
        description: '1 hora sin cortes, explicando cada decisión en un máster real.',
        tag: "Directo",
      },
      {
        number: "02",
        title: 'Recibes un Mix',
        description: 'Del mismo género que lo trabajado en clase, con <em>stems</em> incluidos.',
        tag: "Material",
      },
      {
        number: "03",
        title: 'Masterizas el Mix ese mismo día',
        description: "Aplicas todo lo aprendido en caliente, mientras lo tienes fresco.",
        tag: "Práctica",
      },
      {
        number: "04",
        title: "Subes tu resultado",
        description: 'Comparas con Rus y con tus compañeros y recibes <em>feedback</em> real.',
        tag: "Comentarios",
      },
    ],
  },

  weekSchedule: {
    sectionTitle: "La Semana",
    days: [
      {
        day: 1,
        genre: "Electrónica / House",
        description: "",
      },
      {
        day: 2,
        genre: "Trap",
        description: "",
      },
      {
        day: 3,
        genre: "Reggaeton",
        description: "",
      },
      {
        day: 4,
        genre: "Rock",
        description: "",
      },
      {
        day: 5,
        genre: "Pop",
        description: "",
      },
    ],
    note: "Días 6 y 7: sesiones de <em>feedback</em> en vivo — revisión de másters en directo con Rus y cierre de la semana junto a la comunidad.",
  },

  learn: {
    sectionTitle: "Lo que vas a aprender",
    features: [
      {
        icon: "1",
        title: "Un sistema claro",
        description: "Para abordar cualquier mastering desde cero.",
      },
      {
        icon: "2",
        title: "Escuchar como un ingeniero",
        description: "Detectar los problemas antes de tocar un plugin.",
      },
      {
        icon: "3",
        title: "Decisiones rápidas y precisas",
        description: "Tomar decisiones con seguridad, sin dar vueltas.",
      },
      {
        icon: "4",
        title: "Proceso real en tiempo real",
        description: "Ver un master construirse de principio a fin.",
      },
      {
        icon: "5",
        title: "Técnicas concretas",
        description: "Que aplicas al día siguiente en tu propio trabajo.",
      },
      {
        icon: "6",
        title: "Criterio profesional",
        description: "Lo que separa un master amateur de uno comercialmente competitivo.",
      },
    ] as Feature[],
  },

  about: {
    tagline: "Tu instructor",
    name: "Ruslan",
    nameAccent: "SLATIN",
    bio: 'Soy Ruslan, un ingeniero galardonado con más de 15 años en la industria. He trabajado con sellos como Sony Music, Universal o Warner, más de 1.000 proyectos al año, y la misma pasión por la música que tenía desde el primer día.',
    stats: [
      { value: "Top 0,1%", label: "Ingenieros de Mastering", highlight: true },
      { value: "1.000+", label: "Canciones al Año" },
      { value: "Multi-Platino", label: "Certificado" },
    ],
  },

  pricing: {
    eyebrow: 'Mastering Challenge',
    headline: 'Elige tu <em><span class="grad">Challenge</span></em>',
    subtitle: 'Dos formas de entrar. Misma intensidad, distinto nivel de feedback directo de Slatin.Pro.',
    plans: [
      {
        tierLabel: "Tier 1",
        tierName: "Sigue el Challenge",
        price: "121",
        currency: "€",
        features: [
          "Acceso a las sesiones en directo con Ruslan, y grabaciones permanentes.",
          "Práctica real: recibe una canción para masterizar cada día.",
          "Comunidad, sorteos y sorpresas.",
        ],
        ctaText: "Reservar plaza",
        ctaHref: "https://l.slatin.pro/mc-onboard.html?tier=tier_1",
        variant: "dark" as const,
      },
      {
        tierLabel: "Tier 2",
        tierName: 'Revisado por <span class="accent">Slatin.pro</span>',
        price: "389",
        currency: "€",
        badge: "Recomendado",
        features: [
          "Acceso a las sesiones en directo con Ruslan, y grabaciones permanentes.",
          "Práctica real: recibe una canción para masterizar cada día.",
          "Comunidad, sorteos y sorpresas.",
        ],
        highlightFeatures: [
          "Review personalizada de tu máster por slatin.pro.",
          "Prioridad en la interacción dentro de la comunidad.",
          "Doble participación en los sorteos.",
        ],
        ctaText: "Reservar plaza",
        ctaHref: "https://l.slatin.pro/mc-onboard.html?tier=tier_2",
        variant: "light" as const,
      },
    ],
  },

  whyDifferent: {
    sectionTitle: 'Ni un curso, ni un webinar. Un <em>intensivo de oficio</em>.',
    features: [
      {
        icon: "1",
        title: "Practicas cada día",
        description: "5 másters terminados, no apuntes. Trabajo real.",
      },
      {
        icon: "2",
        title: "Ves el proceso real",
        description: "Sin editar, en directo. Las dudas, las iteraciones.",
      },
      {
        icon: "3",
        title: "Comparas tu trabajo",
        description: "Subes el mismo día y ves cómo suena vs Rus y tus compañeros.",
      },
      {
        icon: "4",
        title: "Comunidad activa",
        description: "Conectas con productores de tu mismo nivel.",
      },
      {
        icon: "5",
        title: "Feedback directo",
        description: "El Tier 2 incluye reviews en directo de tu trabajo.",
      },
    ] as Feature[],
  },

  sorteos: {
    sectionTitle: '<span class="gradient-text-red">Extra:</span> Llévate <span class="sr-underline">equipo profesional</span>',
    items: [
      {
        icon: "&#x1F3A7;",
        image: "/images/sorteos-headphones.jpg",
        title: "Beyerdynamic DT 1770 Pro MK II",
        badge: "SORTEO GENERAL",
        description: "Llévate unos auriculares de estudio de referencia.",
      },
      {
        icon: "&#x1F381;",
        image: "/images/sorteos-plugin.png",
        title: "Slatin.pro Bundle",
        badge: "SORTEO GENERAL",
        description: 'También estaremos sorteando un <em>bundle</em> que incluye camiseta y gorra + un <strong><em>mastering</em> tradicional GRATIS hecho por Slatin</strong>.',
      },
      {
        icon: "&#x2728;",
        image: "/images/analog-gear.jpg",
        title: 'Y más <span class="sr-underline">Sorpresas</span>...',
        description: "Se irán anunciando durante la semana. Premios exclusivos para los que estén.",
        showBadge: false,
      },
    ],
  },

  testimonials: {
    sectionTitle: "Lo que dicen los alumnos...",
    slides: [
      {
        quote: "Llevaba años con cursos sueltos. En una semana con Rus entendí más sobre criterio que en dos años de tutoriales.",
        name: "Ignacio Fernández",
        role: "Ingeniero de mezcla",
        avatar: "/images/mentoring/alumni-ignacio.jpg",
      },
      {
        quote: "Lo que marca la diferencia es ver el proceso real. Las dudas, las pruebas, los cambios. Ahí está el oro.",
        name: "Pablo Martínez",
        role: "Productor",
        avatar: "/images/mentoring/alumni-pablo.jpg",
      },
      {
        quote: "Salí con 5 másters propios y con un sistema que sigo usando cada día. Ningún curso me había dado eso.",
        name: "Pere Aznar",
        role: "Productor & ingeniero",
        avatar: "/images/mentoring/alumni-pere.jpg",
      },
    ],
  },

  faqItems: [
    {
      question: "¿Qué nivel necesito?",
      answer: "Nivel intermedio en adelante. Si ya masterizas tus propios temas, aunque sientas que todavía te queda camino, este Challenge es para ti. No está pensado para principiantes.",
    },
    {
      question: "¿Qué pasa si no puedo asistir a alguna sesión en directo?",
      answer: "No te preocupes, todas las sesiones quedan grabadas y son tuyas para siempre. Lo ideal es masterizar el mismo día para aprovecharlo al máximo, pero puedes hacerlo cuando mejor te venga.",
    },
    {
      question: "¿En qué idioma son las clases?",
      answer: "Todas las clases son en español.",
    },
    {
      question: "¿Cuánto tiempo necesito dedicar cada día?",
      answer: "Entre 2 y 3 horas: 1 hora de clase en directo y el resto para masterizar tu tema del día.",
    },
    {
      question: "¿Hay límite de plazas?",
      answer: 'Sí, sobre todo en el <em>Tier</em> 2, donde limitamos el número de plazas para poder ofrecer un <em>feedback</em> personalizado y de calidad.',
    },
    {
      question: '¿Puedo subir de <em>Tier</em> 1 a <em>Tier</em> 2 más tarde?',
      answer: 'Sí, siempre que queden plazas disponibles, aunque si quieres asegurarte el <em>feedback</em> directo de tu trabajo, te recomendamos entrar directamente en el <em>Tier</em> 2.',
    },
    {
      question: "¿Qué pasa después del Challenge?",
      answer: "Todas las grabaciones son tuyas para siempre. La comunidad se cierra al terminar la semana, pero te llevas tus apuntes, tus másters y un sistema que podrás seguir aplicando por tu cuenta.",
    },
  ] as FaqItem[],

  closing: {
    kicker: "Última llamada",
    headline: 'Una semana. Cinco másters. Un <strong>antes y un después</strong>.',
    ctaText: "🔥 Reservar mi plaza",
    ctaHref: "#pricing",
  },

};
