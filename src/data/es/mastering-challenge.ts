import type { Testimonial, FaqItem, Feature, PricingPlan } from '../types';

export const pageData = {
  meta: {
    title: "Mastering Challenge - SLATIN Academy",
    description: "7 días. 5 masters. 1 semana intensiva con Ruslan Slatin que cambia tu forma de masterizar.",
  },

  hero: {
    eyebrow: "Plazas abiertas · Edición Mayo 2026",
    headline: 'Mastering <span class="grad">challenge</span>',
    subtitle: '<strong>5 sesiones en directo</strong>, 5 géneros, compara tu trabajo con la comunidad.',
    ctaText: "Reservar mi plaza",
    ctaHref: "#pricing",
    backgroundImage: "/images/hero-gear.jpg",
    countdownTarget: "2026-05-20T19:00:00",
    pills: [
      { number: "07", label: "días" },
      { number: "05", label: "géneros" },
      { number: "01", label: "semana" },
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
    text: "Mastering Challenge · 7 días · 5 masters",
  },

  problems: {
    eyebrow: "El problema",
    headline: 'Llevas meses intentando que tus masters suenen <strong>competitivos</strong>.',
    items: [
      {
        icon: "&#x2715;",
        title: "Ves tutoriales sin parar",
        description: "Horas de YouTube, pero cuando comparas tu master con una referencia, sigue sin estar a la altura.",
      },
      {
        icon: "&#x2715;",
        title: "Pruebas plugins nuevos",
        description: "Cada semana uno distinto. Pero el problema nunca era el plugin.",
      },
      {
        icon: "&#x2715;",
        title: "Te falta criterio",
        description: "No tienes el oído de un ingeniero ni la velocidad de decisión que separa lo amateur de lo profesional.",
      },
    ],
    closing: 'Lo que te falta no es información, es <strong>criterio</strong>. Y eso es exactamente lo que entrena esta semana.',
  },

  howItWorks: {
    sectionTitle: "Cómo funciona",
    steps: [
      {
        number: "01",
        title: "Clase en directo con Ruslan",
        description: "1 hora sin cortes. Explica cada decisión en un master real.",
        tag: "Directo",
      },
      {
        number: "02",
        title: "Recibes un mix",
        description: "Del mismo género que la clase, con stems incluidos.",
        tag: "Material",
      },
      {
        number: "03",
        title: "Masterizas ese mismo día",
        description: "Aplicas todo en caliente, mientras lo tienes fresco.",
        tag: "Práctica",
      },
      {
        number: "04",
        title: "Subes tu resultado",
        description: "Comparas con Rus y con tus compañeros. Feedback real.",
        tag: "Feedback",
      },
    ],
  },

  weekSchedule: {
    sectionTitle: "La semana",
    days: [
      {
        day: 1,
        genre: "Techno Melódico",
        description: "Espacio, profundidad y movimiento en la cadena.",
      },
      {
        day: 2,
        genre: "EDM",
        description: "Impacto, brillo y loudness sin destruir dinámica.",
      },
      {
        day: 3,
        genre: "Urbano",
        description: "Graves que se sienten, voces que pegan adelante.",
      },
      {
        day: 4,
        genre: "Rock",
        description: "Mantener el punch real de la batería y las guitarras.",
      },
      {
        day: 5,
        genre: "Pop",
        description: "Traducción perfecta en cualquier sistema de escucha.",
      },
    ],
    note: "Días 6 y 7: sesiones de feedback en vivo — revisión de masters y cierre de la semana.",
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
    bio: '1.000+ canciones al año para Sony, Warner, Def Jam, Netflix. No vas a necesitar <s>otro tutorial</s> ni <s>otro plugin</s>.',
    stats: [
      { value: "Top 0,1%", label: "Ingenieros de Mastering", highlight: true },
      { value: "1.000+", label: "Canciones al Año" },
      { value: "Multi-Platino", label: "Certificado" },
    ],
  },

  pricing: {
    headline: 'Dos formas de hacer el <strong>challenge</strong>.',
    subtitle: "Las dos te dan acceso a todo. La diferencia está en cuánto feedback personal recibes.",
    plans: [
      {
        title: "Sigue el challenge",
        subtitle: "121 €",
        features: [
          "Acceso completo a los 7 días del challenge",
          "5 sesiones en directo con Ruslan (grabadas, para siempre)",
          "2 sesiones de feedback en vivo",
          "Comunidad privada durante toda la semana",
          "Subida diaria de masters y comparación con alumnos",
          "Dinámicas y ejercicios diarios",
          "Participación en el sorteo de cascos profesionales",
        ],
        ctaText: "Reservar — 121 €",
        ctaHref: "#reserve",
        variant: "dark" as const,
      },
      {
        title: 'Revisado por <span class="gradient-text-red">slatin.pro</span>',
        subtitle: "484 €",
        features: [
          "Acceso completo a los 7 días del challenge",
          "5 sesiones en directo con Ruslan (grabadas, para siempre)",
          "2 sesiones de feedback en vivo",
          "Comunidad privada durante toda la semana",
          "Subida diaria de masters y comparación con alumnos",
          "Dinámicas y ejercicios diarios",
          "Participación en el sorteo de cascos profesionales",
        ],
        highlightFeatures: [
          "Review personalizada de tus temas en las llamadas",
          "Correcciones específicas sobre tu propio master",
          "Indicaciones claras de qué mejorar y cómo",
          "Prioridad en la interacción dentro de la comunidad",
          "Doble posibilidad en el sorteo de plugins y equipo",
        ],
        ctaText: "Reservar — 484 €",
        ctaHref: "#reserve",
        variant: "light" as const,
      },
    ] as PricingPlan[],
  },

  whyDifferent: {
    sectionTitle: 'Ni un curso, ni un webinar. Un <em>intensivo de oficio</em>.',
    features: [
      {
        icon: "1",
        title: "Practicas cada día",
        description: "5 masters terminados, no apuntes. Trabajo real.",
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
    sectionTitle: 'Durante la semana, <strong>regalamos equipo</strong>.',
    items: [
      {
        icon: "&#x1F3A7;",
        title: "Cascos profesionales",
        description: "Sorteo entre todos los participantes del challenge.",
      },
      {
        icon: "&#x1F50C;",
        title: "Plugins de mastering",
        description: "Bundles profesionales. Tier 2 tiene doble entrada.",
      },
      {
        icon: "&#x1F381;",
        title: "Más sorpresas",
        description: "Se anuncian durante la semana. Perks exclusivos.",
      },
    ],
  },

  testimonials: {
    sectionTitle: "Lo que dicen los alumnos",
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
        quote: "Salí con 5 masters propios y con un sistema que sigo usando cada día. Ningún curso me había dado eso.",
        name: "Pere Aznar",
        role: "Productor & ingeniero",
        avatar: "/images/mentoring/alumni-pere.jpg",
      },
    ],
  },

  faqItems: [
    {
      question: "¿Qué nivel necesito?",
      answer: "Nivel intermedio en adelante. Si ya masterizas tus propios temas (aunque no estés satisfecho con el resultado), estás dentro. No es para principiantes absolutos.",
    },
    {
      question: "¿Qué pasa si no puedo asistir a alguna sesión en directo?",
      answer: "Todas las sesiones quedan grabadas y son tuyas para siempre. Aunque lo ideal es masterizar el mismo día, puedes hacerlo a tu ritmo.",
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
      answer: "Sí. Especialmente en el Tier 2, donde limitamos el número para garantizar feedback personalizado de calidad.",
    },
    {
      question: "¿Puedo subir de Tier 1 a Tier 2 más tarde?",
      answer: "Solo si quedan plazas disponibles. Te recomendamos empezar directamente en Tier 2 si quieres feedback directo.",
    },
    {
      question: "¿Qué pasa después del challenge?",
      answer: "Las grabaciones son tuyas para siempre. La comunidad se cierra al terminar la semana. Te quedas con tus apuntes, tus masters y el sistema.",
    },
  ] as FaqItem[],

  closing: {
    kicker: "Última llamada",
    headline: 'Una semana. Cinco masters. Un <strong>antes y un después</strong>.',
    ctaText: "Reservar mi plaza",
    ctaHref: "#reserve",
  },

  modal: {
    tiers: [
      { label: "Tier 1 — Sigue el challenge", price: "121 €" },
      { label: "Tier 2 — Revisado por slatin.pro", price: "484 €" },
    ],
    fields: {
      name: "Nombre",
      email: "Email",
      experience: "¿Dónde estás ahora mismo?",
      experienceOptions: [
        "Masterizo mis temas de forma amateur",
        "Masterizo temas para otros, busco subir nivel",
        "Trabajo como ingeniero/a, quiero pulir criterio",
      ],
    },
    submitText: "Reservar plaza",
    successMessage: "Te hemos enviado los detalles de pago y acceso. Nos vemos el 20 de mayo.",
  },
};
