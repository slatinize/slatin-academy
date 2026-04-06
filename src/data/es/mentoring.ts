import type { Testimonial, FaqItem, FeatureCard, OutcomeCard, PricingPlan, AlumniTestimonial } from '../types';

export const pageData = {
  meta: {
    title: "Mentoría - SLATIN Academy",
    description: "Construye una Carrera Musical Rentable en Tus Propios Términos. Mejora tus Habilidades de Mezcla y Mastering en Tiempo Récord con el Programa de Mentoría de SLATIN.",
  },

  hero: {
    tagline: "Programa de Mentoría",
    title: 'Construye una Carrera Musical Rentable en <span class="gradient-text-red">Tus Propios Términos</span>',
    subtitle: "Todo lo que necesitas para mezclar como un profesional y construir una carrera que pague.",
    ctaText: "EMPIEZA HOY",
    ctaHref: "#getaccess",
    subCtaText: "",
  },

  intro: {
    tagline: "Tu Mentor",
    name: "Ruslan",
    nameAccent: "SLATIN",
    bio: "He mezclado y masterizado más de 1.000 canciones para Sony, Warner, Def Jam, Netflix y más — obteniendo certificaciones multi-platino y un puesto en el top 1% de ingenieros de mezcla. Ahora, todo lo que he aprendido es tuyo.",
    stats: [
      { value: "Top 1%", label: "Ingenieros de Mezcla", highlight: true },
      { value: "1.000+", label: "Canciones Producidas" },
      { value: "Multi-Platino", label: "Certificado" },
    ],
  },

  backgroundQuote: 'Desbloquea tu <strong>máximo potencial</strong> y acelera tu crecimiento uniéndote a mi <strong>Programa de Mentoría.</strong>',

  whatsIncluded: '<em><strong><span class="squiggle-basic">¿Qué Incluye?</span></strong></em>',

  extras: {
    title: "+++",
    lines: [
      "Acceso exclusivo a información privilegiada.",
      "Invitados especiales de la industria musical.",
      "Networking y comunidad con personas con los mismos intereses.",
      "Una amplia selección de los mejores Samples, Presets y Libros.",
      "Plantillas de email para contactar Sellos, Managers y Promotores.",
      '<a href="https://www.slatin.pro/fusion" class="text-accent-red hover:underline">FUSION</a> &ndash; Valhalla Reverb Pack &ndash; gratis.',
      "Y mucho más&hellip;",
    ],
  },

  outcomes: {
    sectionTitle: 'A Dónde Te <em><span class="squiggle-basic">Lleva Esto</span></em>',
    phases: [
      {
        label: "Día 0",
        title: "Donde Estás Ahora",
        icon: "✕",
        color: "rgba(255,255,255,0.3)",
        items: [
          "Adivinando qué suena \"bien\"",
          "Mezclas que no traducen",
          "Sin feedback ni responsabilidad",
          "Cobrando poco o trabajando gratis",
        ],
      },
      {
        label: "Después de 90 Días",
        title: "Decisiones Seguras",
        icon: "→",
        color: "#ed8e00",
        items: [
          "Entender el porqué de tus decisiones",
          "Sonido potente que traduce en cualquier sistema",
          "Cobrar tu trabajo con confianza",
          "Feedback semanal + plan de crecimiento claro",
        ],
      },
      {
        label: "Después de +5 Meses",
        title: "Trabajo Profesional",
        icon: "★",
        color: "#DD3333",
        items: [
          "Confianza total y libertad al trabajar",
          "Crecimiento y expansión del negocio",
          "Dominar todas tus herramientas y conocimientos",
        ],
      },
    ],
  },

  marquee: {
    text: "Empieza Hoy",
    subtitle: "Inscripción Pública - ¡Abierta! 🧨",
  },

  alumniTitle: 'Opiniones de <em><span class="squiggle-basic">Alumni</span></em>',

  testimonials: [
    {
      quote: "Las clases con SLATIN han elevado el nivel de mis producciones, tanto en sonido como en creatividad. Aparte de conocimientos técnicos, tiene una gran capacidad para enseñar, haciendo que todo parezca fácil y que incluso los procesos más complicados sean accesibles para todos. Sin duda, he crecido como artista con él y mi motivación y confianza al producir música han aumentado.",
      name: "Auriga",
      role: "DJ & Productor",
      avatar: "/images/mentoring/avatar-auriga.jpg",
    },
    {
      quote: "SLATIN fue el cambio radical en mi vida. Hoy estoy alcanzando las metas que una vez soñé, gracias a los tres años que pasé aprendiendo con él. Es un profesor increíble y cercano, y su profesionalidad destaca. Siempre estaré agradecido a SLATIN porque fue una parte fundamental en convertirme en quien soy hoy.",
      name: "Krumel",
      role: "DJ & Productor",
      avatar: "/images/mentoring/avatar-krumel.jpg",
    },
    {
      quote: "Rus realmente me ha ayudado a llevar mis tracks al siguiente nivel. Ya sea mezcla, mastering, producción o negocio musical. Rus se esfuerza al máximo para responder cualquier pregunta que tengas y asegurarse de que salgas de la sesión realmente satisfecho. ¡Siempre hay algo nuevo que aprender de él!",
      name: "Nicolas K",
      role: "DJ & Productor",
      avatar: "/images/mentoring/avatar-nicolas.jpg",
    },
    {
      quote: "Slatin transformó mis habilidades y conocimientos de producción. Empezamos a trabajar juntos en 2020 y ha sido mi profesor, mentor e ingeniero desde entonces. No solo me enseñó cómo se hacen las cosas en el proceso de mezcla, sino también el razonamiento detrás. Trabajando con Slatin he recibido apoyo internacional de Tiesto, Gate21, DJs From Mars ¡y muchos más!",
      name: "RICO",
      role: "DJ & Productor",
      avatar: "/images/mentoring/avatar-rico.jpg",
    },
    {
      quote: "Las excepcionales cualidades humanas y la naturaleza empática de Ruslan hacen que sea muy fácil alcanzar cualquier meta que uno se proponga. Gracias a su guía y consejos, ahora trabajo como ingeniero y productor profesional a tiempo completo.",
      name: "Marco S.",
      role: "Productor & Ingeniero",
      avatar: "/images/mentoring/avatar-marco-s.jpg",
    },
  ] as Testimonial[],

  featureCards: [
    {
      iconSrc: "/images/mentoring/mentor-photo.jpg",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Mentor Top y Líder de la Industria</span>',
      description: "Aprende de primera mano de un Mentor Top con un Estudio Musical de Seis Cifras.",
    },
    {
      iconSrc: "/images/mentoring/group-calls.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Llamadas Grupales Semanales</span>',
      description: "Una llamada grupal semanal para orientarte y resolver cualquier reto.",
    },
    {
      iconSrc: "/images/mentoring/feedback.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Feedback Personalizado</span>',
      description: "Evaluaciones semanales de tus trabajos con feedback constructivo y tareas. (Hasta 2 revisiones en vídeo por semana)",
    },
    {
      iconSrc: "/images/mentoring/chat.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Chat Ilimitado y Q&A</span>',
      description: "Acceso directo a chat privado con respuesta en 24 horas + Comunidad Privada.",
    },
  ] as FeatureCard[],

  outcomeCards: [
    { title: "Acelera Tu Crecimiento", icon: "wrench", bgColor: "#444444", textColor: "#ffffff" },
    { title: "Desarrolla Tu Propio Sonido", icon: "volume", bgColor: "#DD3333", textColor: "#ffffff" },
    { title: "Que Te Noten los Sellos", icon: "crosshairs", bgColor: "#ffffff", textColor: "#020202" },
    { title: "Cobra Lo Que Vales", icon: "money", bgColor: "#DD5D32", textColor: "#ffffff" },
  ] as OutcomeCard[],

  pricingPlans: [
    {
      title: "Mentoría Grupal",
      subtitle: "Pagos Mensuales",
      features: [
        "Coaching y Mentoría Top",
        "Una Llamada Grupal Semanal (70 min)",
        "Chat Ilimitado y Preguntas",
        "Evaluaciones Personales y Feedback Semanal",
        "Tareas y Ejercicios",
        "Seguimiento de Responsabilidad",
        "Samples, Presets y Libros Seleccionados",
        "Precio fijo, sin costes ocultos",
        "Compromiso de Tres Meses",
      ],
      ctaText: "ÚNETE HOY",
      ctaHref: "https://subscribepage.io/accelerator",
      variant: "dark" as const,
    },
    {
      title: "Mentoría 1 a 1",
      subtitle: "Pagos Mensuales",
      features: [
        "Coaching y Mentoría Top",
        "Una Llamada Grupal Semanal (70 min)",
        "Chat Ilimitado y Q&A",
        "Evaluaciones Personales y Feedback Semanal",
        "Tareas y Ejercicios",
        "Seguimiento de Responsabilidad",
        "Samples, Presets y Libros Seleccionados",
        "Precio fijo, sin costes ocultos",
        "Compromiso de Tres Meses",
      ],
      highlightFeatures: [
        "Plan / Hoja de Ruta Personalizada",
        "+ Llamada Semanal 1 a 1",
        "Acceso Exclusivo (Privado) a SLATIN",
      ],
      ctaText: "ÚNETE HOY",
      ctaHref: "https://subscribepage.io/accelerator",
      variant: "light" as const,
    },
  ] as PricingPlan[],

  alumniTestimonials: [
    {
      name: "Pere Bacardit",
      avatar: "/images/mentoring/alumni-pere.jpg",
      review: `<p>Tener la oportunidad de asistir a las mentorías de Slatin fue un gran paso adelante para mejorar mis habilidades en producción, mezcla y mastering. Gracias a estas sesiones, he adquirido más herramientas para conseguir el sonido que quiero y comunicarme de forma más efectiva con las personas con las que colaboro y trabajo.</p>
<p>Además, estas mentorías me enseñaron mejor organización, conocimientos sobre la industria musical y cómo orientar mi carrera dentro de ella. A diferencia de otros formatos de aprendizaje, estas mentorías, al ser clases grupales en vivo, generaban constantemente aprendizaje a partir de las experiencias y consultas de todos, mejorando sustancialmente los resultados. Cada nuevo concepto tenía aplicabilidad inmediata.</p>
<p>Slatin nos abrió acceso a excelentes recursos y materiales. Cada pregunta no solo era respondida sino desglosada en información comprensible o abordada con vídeos específicos. Si buscas subir de nivel de verdad, esta experiencia es 100% recomendable.</p>`,
    },
    {
      name: "Pablo Iglesias",
      avatar: "/images/mentoring/alumni-pablo.jpg",
      review: `<p>Merece totalmente la pena, sin ninguna duda. El compromiso de Ruslan con nuestro grupo ha sido de primer nivel, adaptándose a las particularidades y necesidades individuales como si cada sesión fuera una clase particular. El crecimiento del grupo ha sido impresionante. El feedback diario y los chats grupales revelaron mucho, además de que todo el contenido quedaba documentado para referencia futura.</p>
<p>Personalmente, esta mentoría ha sido un punto de inflexión en mi crecimiento profesional. Estaba en un punto donde me sentía estancado, como si mi carrera no avanzara como yo quería. Pero estas clases me han ayudado no solo técnicamente, sino también en la relación y el trato con mis clientes.</p>
<p>La mentoría sirvió como un chequeo de realidad, ayudándonos a ver dónde estamos como profesionales, establecer metas claras y trazar un plan para alcanzarlas. Recomendaría este curso a cualquiera que esté considerando seriamente esta línea de trabajo y esté dispuesto a invertir tiempo para sacar el máximo de los recursos proporcionados.</p>`,
    },
    {
      name: "Sergio Hernae",
      avatar: "/images/mentoring/alumni-sergio-h.jpg",
      review: `<p>La mentoría con Ruslan ha sido increíble, un camino positivo, constructivo y profesional de principio a fin. He mejorado mis mezclas de sonido enormemente. Antes evitaba mezclar para otros artistas, pero ahora estoy preparado cualquier día.</p>
<p>El feedback de Ruslan sobre mi trabajo siempre ha sido acertado, práctico y muy útil. Y no es el típico feedback genérico de 'suena bien'. Son indicaciones detalladas como 'prueba a hacer compresión paralela con un 1176 para los transientes', que marcan una gran diferencia.</p>
<p>Las clases de Ruslan son muy prácticas e incluso profundizamos en la industria musical, más allá de la mezcla y el mastering. He hecho otros cursos supuestamente de expertos que, sinceramente, no tenían nada que ver con esto. Con Ruslan se trata de un compromiso real con tu trabajo y tu crecimiento profesional.</p>`,
    },
    {
      name: "Ignacio Fernandez",
      avatar: "/images/mentoring/alumni-ignacio.jpg",
      review: `<p>La mentoría de Slatin ha sido sin duda el curso más revelador que he tomado sobre Mezcla y Mastering, superando incluso cursos de un año completo a los que he asistido. Pero lo único es que, además de conocimientos técnicos, también profundizó en los matices de la industria musical y en cómo orientar mi carrera como mezclador.</p>
<p>Al estar completamente dedicado a la mezcla y el mastering, ver a Slatin trabajar en proyectos para artistas de primer nivel ha cambiado completamente mi enfoque y mentalidad. Aprendí a valorar y optimizar mi tiempo, lo que llevó a un aumento significativo de mis ingresos.</p>
<p>Sin embargo, lo que realmente marca la diferencia es el feedback continuo que ofrece Slatin. Tener el espacio para preguntar cualquier cosa y recibir feedback ilimitado sobre mis mezclas no tiene precio. En esencia, la cantidad y profundidad del aprendizaje están completamente en mis manos. En resumen, describiría la mentoría como un verdadero punto de inflexión.</p>`,
    },
    {
      name: "Sergio Perez",
      avatar: "/images/mentoring/alumni-sergio-p.jpg",
      review: `<p>¡200% recomendado! Además de ser un profesional absoluto como productor e ingeniero de mezcla/mastering, Slatin se preocupa mucho por la evolución de todos los alumnos y cubre todas las dudas que surgen día a día, haciendo un seguimiento muy personalizado de cada caso.</p>
<p>También merece la pena mencionar la suerte de poder conocer a tan buenos compañeros de clase, colegas muy interesantes con quienes compartir experiencias en cada clase e incluso la posibilidad de trabajar con algunos en el futuro.</p>
<p>Personalmente, y después de muchos años dedicados a la producción, puedo decir que siempre hay mucho que aprender y esta experiencia me lo ha demostrado. ¡Muchas gracias!</p>`,
    },
    {
      name: "Marco Bernal",
      avatar: "/images/mentoring/alumni-marco-b.jpg",
      review: `<p>Formar parte de este grupo de mentoría ha sido muy enriquecedor. Ruslan respondió muchas de mis preguntas, especialmente sobre esos pequeños detalles con matices que hacen que las mezclas de mis canciones suenen mejor. También me ha ayudado a establecer un workflow específico para mezclar sin perder el enfoque.</p>
<p>En cuanto a lo que diferencia estas mentorías, valoro la cercanía al explicar conceptos complejos de forma sencilla y comprensible. Transforma algo complejo en algo simple y aplicable.</p>
<p>En general, esta mentoría es muy recomendable, especialmente si ya tienes conocimientos básicos de producción musical y quieres llevarlo al siguiente nivel para conseguir un sonido profesional.</p>`,
    },
  ] as AlumniTestimonial[],

  faqItems: [
    {
      question: "¿Para quién es esta Mentoría, específicamente?",
      answer: `<strong>Este Programa está Diseñado para Productores e Ingenieros de Mezcla que:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Quieren acelerar su crecimiento y desbloquear su máximo potencial en tiempo récord.</li><li>Quieren cortar con el ruido del contenido engañoso infinito y aprender los "POR QUÉs" detrás de cada técnica.</li><li>Quieren mejorar sus habilidades técnicas y conocimientos de producción musical, mezcla y mastering.</li><li>Necesitan feedback personalizado sobre su trabajo y acceso directo a un mentor con experiencia.</li><li>Quieren aprender a promocionar su música de forma efectiva, construir su marca y hacer crecer su audiencia.</li><li>Están dispuestos a invertir en su educación y desarrollo.</li><li>Están motivados para mejorar y comprometidos con alcanzar sus metas.</li></ul>`,
      category: "Acerca de",
    },
    {
      question: "¿Quién NO debería inscribirse en esta Mentoría?",
      answer: `<strong>Este Programa NO es para:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Principiantes absolutos sin conocimientos previos de producción musical o ingeniería de sonido.</li><li>Personas que no estén dispuestas a invertir tiempo y esfuerzo en su propio crecimiento y desarrollo.</li><li>Personas que buscan una solución rápida o un atajo al éxito sin poner el esfuerzo necesario.</li><li>Aquellos que no estén abiertos a aprender nuevas técnicas o enfoques.</li><li>Personas que no estén dispuestas a invertir en su propia educación y crecimiento.</li></ul>`,
      category: "Acerca de",
    },
    {
      question: "¿Tienes experiencia enseñando y como mentor?",
      answer: "¡Por supuesto! Con más de 8 años de experiencia enseñando en diversas escuelas de música internacionales, incluyendo Anonymous Studios (Los Ángeles), SAE Institute (Madrid), Millenia (Valencia) y DJP Music School (Madrid). También he trabajado con numerosos estudiantes de forma individual, muchos de los cuales han logrado un gran éxito en la industria musical.",
      category: "Acerca de",
    },
    {
      question: "¿En qué se diferencia de una Escuela o Instituto de Producción Musical?",
      answer: `El Programa de Mentoría ofrece <strong>orientación personalizada</strong> y apoyo <strong>adaptado a las necesidades y metas de cada individuo</strong>. A diferencia de las escuelas tradicionales que siguen un plan de estudios predeterminado, el Programa de Mentoría se personaliza para un <strong>GRUPO REDUCIDO</strong>. Además, aprenderás de primera mano y tendrás acceso diario a un <strong>profesional</strong> con más de 15 años de experiencia en la industria.`,
      category: "Acerca de",
    },
    {
      question: "¿En qué se diferencia de comprar Cursos o Tutoriales online?",
      answer: `A diferencia del contenido pregrabado, nuestro programa se adapta a las necesidades y aspiraciones de cada individuo del grupo, y trabajaremos juntos para crear un <strong>plan personalizado</strong> que aborde tus fortalezas, debilidades y retos únicos. Además, el programa ofrece una comunidad de apoyo, feedback semanal y <strong>seguimiento regular de responsabilidad</strong>.`,
      category: "Acerca de",
    },
    {
      question: "¿Podrías darme un esquema del Programa de Mentoría?",
      answer: "Como las necesidades de cada uno son únicas, crearemos un plan personalizado. Los temas destacados incluyen: Entender y Aplicar EQ, Dominar la Compresión, Compresión Avanzada / Curvas Complejas, Procesamiento Mid/Side, Negocio 101, Crecimiento en Redes Sociales, Cómo Conseguir Clientes, Diseño de Sonido, Compresión Sidechain, Micro-Dinámica, Mezcla de Vocales, La Magia de las Cintas, Todos los Secretos del Mastering, Compresión Avanzada / Control Tonal, Automatización de tu Estudio, Uso de IA para Producción y Mezcla en Dolby Atmos.",
      category: "Programa",
    },
    {
      question: "¿En qué idioma se imparte el programa de mentoría?",
      answer: "La mentoría grupal se imparte en inglés, pero las llamadas individuales pueden ser en español y ruso.",
      category: "Programa",
    },
    {
      question: "¿Cuánto dura la Llamada Semanal 1 a 1?",
      answer: "La llamada semanal individual dura 60 minutos, durante los cuales haremos seguimiento de responsabilidad, te ayudaremos a ejecutar tu hoja de ruta/plan personalizado, revisaremos tus proyectos, terminaremos canciones, resolveremos cualquier duda que tengas y daremos orientación de negocio personalizada.",
      category: "Programa",
    },
    {
      question: "¿Qué tamaño tiene el grupo?",
      answer: "El número mínimo de participantes para la Mentoría Grupal es de cuatro y el máximo es de quince. Esto asegura que el grupo sea lo suficientemente grande para fomentar un entorno colaborativo y de apoyo, a la vez que permite atención individual y feedback.",
      category: "Programa",
    },
    {
      question: "¿A qué hora son las clases?",
      answer: `Las clases se programan generalmente los lunes a las 20:00 CEST (Hora Central Europea). Los días y horarios pueden ajustarse según la preferencia del grupo. Si no puedes asistir en persona, <strong>todas las sesiones se graban y se comparten</strong> con el grupo el mismo día.`,
      category: "Programa",
    },
    {
      question: "¿Qué Equipamiento (Hardware) necesito?",
      answer: "Para participar en el Programa de Mentoría, necesitarás un ordenador o portátil con conexión a internet fiable, y unos auriculares o monitores de estudio de tu elección.",
      category: "Configuración y Pago",
    },
    {
      question: "¿Qué DAW y Software necesito?",
      answer: "Usaremos Ableton Live 12 y Reaper para las lecciones y sesiones de feedback. Pero todas las técnicas y conceptos son 100% compatibles con cualquier otro DAW. Si no tienes un plugin específico, siempre te mostraré una alternativa gratuita o nativa.",
      category: "Configuración y Pago",
    },
    {
      question: "¿Cómo funciona el sistema de pago?",
      answer: `Este programa de mentoría es de <strong>suscripción</strong>, con un compromiso de <strong>Tres Meses</strong>.`,
      category: "Configuración y Pago",
    },
    {
      question: "¿Y si tengo más preguntas?",
      answer: `Para cualquier pregunta, puedes enviar un email a nuestro Studio Manager a: <a href="mailto:admin@slatin.pro" class="text-accent-red hover:underline">admin@slatin.pro</a>.`,
      category: "Configuración y Pago",
    },
  ] as FaqItem[],
};
