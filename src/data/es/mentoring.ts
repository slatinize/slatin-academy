import type { Testimonial, FaqItem, FeatureCard, OutcomeCard, PricingPlan, AlumniTestimonial } from '../types';

export const pageData = {
  meta: {
    title: "Mentoring - SLATIN Academy",
    description: "Build a Profitable Music Career on Your Own Terms. Revamp your Mixing and Mastering Skills in Record Time with SLATIN's Mentoring Program.",
  },

  hero: {
    tagline: "Programa de Mentoría",
    title: '<span class="hero-line">Una <strong>Carrera Musical Rentable</strong></span><span class="hero-line">bajo <span class="gradient-text-red">Tus Propios Términos</span></span>',
    subtitle: "Todo lo que necesitas saber para <strong>Mezclar y Masterizar</strong> como un profesional y construir una carrera próspera.",
    ctaText: "EMPIEZA HOY",
    ctaHref: "#getaccess",
    subCtaText: "",
  },

  intro: {
    tagline: "Tu Mentor",
    name: "Ruslan",
    nameAccent: "SLATIN",
    bio: "He mezclado y masterizado más de 1.000 canciones para Sony, Warner, Def Jam, Netflix y más, obteniendo certificaciones multi-platino y un puesto en el top 1% de ingenieros de mezcla. Ahora, todo lo que he aprendido es tuyo.",
    stats: [
      { value: "Top 0.1%", label: "Ingenieros de Mastering", highlight: true },
      { value: "1.000+", label: "Canciones al Año" },
      { value: "Multi-Platino", label: "Certificado" },
    ],
  },

  backgroundQuote: 'Desbloquea tu <strong>máximo potencial</strong> y acelera tu crecimiento uniéndote a mi <strong>Programa de Mentoría.</strong>',

  whatsIncluded: {
    sectionTitle: 'Cómo <em><span class="squiggle-basic">Cambiarás</span></em>',
    sectionSubtitle: "Transformaciones reales en cómo trabajas, suenas y creces, no solo una lista de herramientas.",
    cards: [
      {
        icon: "fix",
        image: "/images/mentoring/feedback.gif",
        beforeAfter: { before: "adivinar a solas", after: "saber exactamente qué arreglar" },
        title: "Dejarás de Dudar de Tus Mezclas",
        description: 'Cada semana recibirás reseñas detalladas en vídeo de tus <em>tracks</em>, no consejos genéricos, sino comentarios específicos y accionables para que finalmente entiendas el porqué detrás de cada decisión.',
        valueTag: "Ahorra +100 horas de prueba y error",
      },
      {
        icon: "guide",
        image: "/images/mentoring/group-calls.gif",
        beforeAfter: { before: "atascado y aislado", after: "guiado cada semana" },
        title: "Nunca Te Sentirás Perdido Otra Vez",
        description: "Llamadas grupales en directo de 70 minutos, guía en tiempo real de un ingeniero multi-platino y una comunidad privada de productores serios, siempre tendrás a quien preguntar cuando te encuentres con un muro.",
        valueTag: "Respuesta en 24h, soporte siempre activo",
      },
      {
        icon: "star",
        image: "/images/mentoring/mentor-photo.jpg",
        beforeAfter: { before: "sonido amateur", after: "mezclas profesionales listas para sello" },
        title: "Tu Sonido Traducirá en Cualquier Sistema",
        description: "Aprenderás las técnicas exactas usadas en discos de los principales sellos y las aplicarás a tu propio trabajo con guía directa semanal de alguien que ya lo ha hecho.",
        valueTag: 'Técnicas reales de <em>releases</em> reales',
      },
      {
        icon: "money",
        image: "/images/mentoring/chat.gif",
        beforeAfter: { before: "trabajar gratis", after: "cobrar con confianza" },
        title: "Construirás una Carrera Rentable",
        description: "Más allá de lo técnico: cobrarás tu trabajo, encontrarás clientes, negociarás con discográficas y construirás un negocio musical sostenible, respaldado por más de 15 años en la industria.",
        valueTag: "Negocio real, no dinero de hobby",
      },
    ],
    extrasTitle: "Todo Lo Demás Que Desbloqueas",
    extras: [
      { highlight: "Corta el ruido de la industria", text: "conocimiento interno de lo que realmente mueve la aguja, para que dejes de perder años descubriéndolo solo." },
      { highlight: "Entra en la sala con quienes deciden", text: "A&Rs, ejecutivos de discográficas e ingenieros top que pueden cambiar la trayectoria de tu carrera." },
      { highlight: "Construye relaciones que abren puertas", text: "una comunidad privada de productores serios que te empujan, apoyan y colaboran contigo durante años." },
      { highlight: "Sáltate la búsqueda interminable", text: 'los <em>samples</em>, <em>presets</em> y libros exactos que yo uso, para que construyas con herramientas probadas desde el día uno.' },
      { highlight: "Deja de ser ignorado por las discográficas", text: 'plantillas de <em>email</em> probadas que realmente reciben respuesta de discográficas, <em>mánagers</em> y promotores.' },
      { highlight: "Suena enorme desde el día uno", text: 'FUSION (pack Valhalla VintageVerb) gratis, para que tus <em>reverbs</em> suenen como las de un estudio profesional.' },
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
          'Adivinando qué suena "bien".',
          "Mezclas que no traducen.",
          'Sin <em>feedback</em> ni seguimiento.',
          "Cobrando poco o trabajando gratis.",
        ],
      },
      {
        label: "Después de 90 Días",
        title: "Decisiones Seguras",
        icon: "→",
        color: "#ed8e00",
        items: [
          "Entenderás el porqué de tus decisiones.",
          "Tu sonido traducirá en cualquier sistema.",
          "Cobrarás tu trabajo con confianza.",
          'Tendrás revisiones semanales y un plan de crecimiento claro.',
        ],
      },
      {
        label: "Después de +5 Meses",
        title: "Trabajo Profesional",
        icon: "★",
        color: "#DD3333",
        items: [
          "Trabajarás con confianza y libertad totales.",
          "Harás crecer y expandir tu negocio.",
          "Dominarás todas tus herramientas y conocimientos.",
        ],
      },
    ],
  },

  marquee: {
    text: "Empieza Hoy",
    subtitle: "¡Inscripción Pública Abierta! 🧨",
  },

  alumniTitle: 'Resultados <em><span class="squiggle-basic">Reales</span></em>',

  featuredTestimonials: [
    {
      quote: 'La mentoría de Slatin ha sido inequívocamente el curso más esclarecedor que he tomado sobre Mezcla y <em>Mastering</em>, incluso superando cursos de un año entero que he hecho. El <em>feedback</em> continuo no tiene precio. Un verdadero cambio de juego.',
      name: "Ignacio Fernandez",
      role: "Ingeniero de Mezcla",
      avatar: "/images/mentoring/alumni-ignacio.jpg",
    },
    {
      quote: "Vale totalmente la pena, sin dudas. El compromiso de Ruslan con nuestro grupo ha sido excepcional, adaptándose a nuestras particularidades como si cada sesión fuera 1-a-1. Un cambio radical para mi crecimiento profesional.",
      name: "Pablo Iglesias",
      role: "Productor",
      avatar: "/images/mentoring/alumni-pablo.jpg",
    },
    {
      quote: "La mentoría con Ruslan ha sido fantástica, positiva, constructiva y profesional. He mejorado muchísimo mi mezcla de sonido. Ahora estoy listo para cualquier proyecto.",
      name: "Sergio Hernae",
      role: "Productor",
      avatar: "/images/mentoring/alumni-sergio-h.jpg",
    },
    {
      quote: 'Tener la oportunidad de asistir a las mentorías de Slatin fue un gran paso adelante para mejorar mis habilidades en producción, mezcla y <em>mastering</em>. Si quieres subir de nivel en serio, 100% recomendado.',
      name: "Pere Bacardit",
      role: "Productor",
      avatar: "/images/mentoring/alumni-pere.jpg",
    },
    {
      quote: "200% recomendado. Slatin se preocupa mucho por la evolución de todos los alumnos y cubre todas las dudas que surgen día a día, haciendo un seguimiento muy personalizado de cada caso.",
      name: "Sergio Perez",
      role: "Productor",
      avatar: "/images/mentoring/alumni-sergio-p.jpg",
    },
    {
      quote: "Ser parte de este grupo de mentoría ha sido muy revelador. Ruslan respondió muchas de mis preguntas, especialmente las relativas a detalles pequeños y matizados que hacen que mis mezclas suenen mejor. Altamente recomendado.",
      name: "Marco Bernal",
      role: "Productor",
      avatar: "/images/mentoring/alumni-marco-b.jpg",
    },
  ],

  testimonials: [
    {
      quote: 'Las clases con SLATIN han elevado el nivel de mis producciones, tanto en sonido como en creatividad. Además del conocimiento técnico, tiene una gran capacidad para enseñar, haciendo que todo parezca fácil y que incluso los procesos más complicados sean accesibles para cualquiera. Sin duda, he crecido como artista con él y mi motivación y confianza produciendo música han aumentado.',
      name: "Auriga",
      role: "DJ y Productor",
      avatar: "/images/mentoring/avatar-auriga.jpg",
    },
    {
      quote: 'SLATIN fue un punto de inflexión en mi vida. Hoy estoy alcanzando las metas con las que antes solo soñaba, gracias a los tres años que pasé aprendiendo con él. Es un profesor increíble y cercano y su profesionalismo destaca. Siempre estaré agradecido a SLATIN porque tuvo un papel fundamental en hacerme quien soy hoy.',
      name: "Krumel",
      role: "DJ y Productor",
      avatar: "/images/mentoring/avatar-krumel.jpg",
    },
    {
      quote: 'Rus realmente me ha ayudado a llevar mis <em>tracks</em> al siguiente nivel. Ya sea en mezcla, <em>mastering</em>, producción o <em>music business</em>. Rus hará todo lo posible por responder cualquier pregunta que tengas y asegurarse de que salgas de la sesión genuinamente satisfecho. ¡Siempre habrá algo nuevo que aprender de él!',
      name: "Nicolas K",
      role: "DJ y Productor",
      avatar: "/images/mentoring/avatar-nicolas.jpg",
    },
    {
      quote: 'Slatin transformó mis habilidades y conocimientos de producción. Empezamos a trabajar juntos en 2020 y ha sido mi profesor, mentor e ingeniero desde entonces. No solo me enseñó cómo se hacen las cosas en el proceso de mezcla, sino también el porqué detrás de cada decisión. Mientras trabajaba con Slatin, he recibido apoyo internacional de Tiësto, Gate21, DJs From Mars ¡y muchos, muchos más!',
      name: "RICO",
      role: "DJ y Productor",
      avatar: "/images/mentoring/avatar-rico.jpg",
    },
    {
      quote: "Las cualidades humanas excepcionales de Ruslan y su naturaleza empática hacen que sea muy fácil alcanzar cualquier meta que te propongas. Gracias a su guía y consejo, ahora trabajo como ingeniero y productor profesional a tiempo completo.",
      name: "Marco S.",
      role: "Productor e Ingeniero",
      avatar: "/images/mentoring/avatar-marco-s.jpg",
    },
  ] as Testimonial[],

  featureCards: [
    {
      iconSrc: "/images/mentoring/mentor-photo.jpg",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Mentor Top-Rated y Referente en la Industria</span>',
      description: 'Aprende directamente de un mentor <em>top-rated</em> con un estudio musical que factura seis cifras.',
    },
    {
      iconSrc: "/images/mentoring/group-calls.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Llamadas Grupales Semanales</span>',
      description: "Una llamada grupal semanal para dar guía y resolver cualquier reto.",
    },
    {
      iconSrc: "/images/mentoring/feedback.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Revisiones Personalizadas</span>',
      description: 'Evaluaciones semanales de tus trabajos con comentarios constructivos y tareas. (Hasta 2 <em>reviews</em> en vídeo por semana)',
    },
    {
      iconSrc: "/images/mentoring/chat.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red"><em>Chat</em> y Q&A Ilimitados</span>',
      description: 'Acceso directo a <em>chat</em> privado con respuesta en menos de 24 horas + Comunidad Privada.',
    },
  ] as FeatureCard[],

  outcomeCards: [
    { title: "Acelera Tu Crecimiento", icon: "wrench", bgColor: "#444444", textColor: "#ffffff" },
    { title: "Desarrolla Tu Propio Sonido", icon: "volume", bgColor: "#DD3333", textColor: "#ffffff" },
    { title: "Llama la Atención de los Sellos", icon: "crosshairs", bgColor: "#ffffff", textColor: "#020202" },
    { title: "Cobra Lo Que Realmente Vales", icon: "money", bgColor: "#DD5D32", textColor: "#ffffff" },
  ] as OutcomeCard[],

  pricingPlans: [
    {
      title: "Mentoría Grupal",
      subtitle: "Pagos Mensuales",
      features: [
        "Mentoría y Coaching Top-Rated",
        'Una <em>Llamada Grupal</em> Semanal (70 min)',
        '<em>Chat</em> y Preguntas Ilimitadas',
        'Evaluaciones Personales y <em>Feedback</em> Semanal',
        "Tareas y Ejercicios",
        'Seguimientos de Compromiso',
        '<em>Samples</em>, <em>Presets</em> y Libros Seleccionados',
        "Tarifa fija, sin costes ocultos",
        "Compromiso de Tres Meses",
      ],
      ctaText: "APÚNTATE HOY",
      ctaHref: "https://subscribepage.io/accelerator",
      variant: "dark" as const,
    },
    {
      title: "Mentoría 1-a-1",
      subtitle: "Pagos Mensuales",
      features: [
        "Mentoría y Coaching Top-Rated",
        'Una <em>Llamada Grupal</em> Semanal (70 min)',
        '<em>Chat</em> y Q&A Ilimitados',
        'Evaluaciones Personales y <em>Feedback</em> Semanal',
        "Tareas y Ejercicios",
        'Seguimientos de Compromiso',
        '<em>Samples</em>, <em>Presets</em> y Libros Seleccionados',
        "Tarifa fija, sin costes ocultos",
        "Compromiso de Tres Meses",
      ],
      highlightFeatures: [
        'Plan / <em>Roadmap</em> Personalizado',
        '+ Llamada 1-a-1 Semanal',
        "Acceso Exclusivo (Privado) a SLATIN",
      ],
      ctaText: "APÚNTATE HOY",
      ctaHref: "https://subscribepage.io/accelerator",
      variant: "light" as const,
    },
  ] as PricingPlan[],

  alumniTestimonials: [
    {
      name: "Pere Bacardit",
      avatar: "/images/mentoring/alumni-pere.jpg",
      review: `<p>Tener la oportunidad de asistir a las mentorías de Slatin fue un gran paso adelante para mejorar mis habilidades en producción, mezcla y <em>mastering</em>. Gracias a estas sesiones, he ganado más herramientas para lograr el sonido que quiero y comunicarme más efectivamente con la gente con la que colaboro y trabajo.</p>
<p>Además, estas mentorías me enseñaron mejores habilidades de organización, visión sobre la industria musical y cómo moldear mi carrera dentro de ella. A diferencia de otros formatos de aprendizaje, estas mentorías, al ser clases grupales en directo, disparaban constantemente el aprendizaje desde las experiencias y dudas de cada uno, mejorando muchísimo los resultados. Cada concepto nuevo tenía aplicación inmediata.</p>
<p>Slatin abrió acceso a recursos y materiales excelentes. Cada pregunta no solo se respondía, sino que se desglosaba en información digerible o se abordaba con vídeos específicos. Si buscas subir de nivel en serio, esta experiencia es 100% recomendada.</p>`,
    },
    {
      name: "Pablo Iglesias",
      avatar: "/images/mentoring/alumni-pablo.jpg",
      review: `<p>Vale totalmente la pena, sin dudas. El compromiso de Ruslan con nuestro grupo ha sido excepcional, adaptándose a nuestras particularidades como si cada sesión fuera un 1-a-1. El crecimiento del grupo ha sido increíble. El <em>feedback</em> diario y los <em>chats</em> grupales aportaban muchísimo y además todo el contenido ha quedado bien documentado para futuras referencias.</p>
<p>Personalmente, esta mentoría ha sido un cambio radical para mi crecimiento profesional. Estaba en un punto en el que me sentía estancado, como si mi carrera no avanzara como quería. Pero estas clases me han ayudado no solo técnicamente, sino también en la relación y el trato con mis clientes.</p>
<p>La mentoría sirvió como una dosis de realidad, ayudándonos a ver dónde estamos como profesionales, fijar metas claras y trazar un plan para alcanzarlas. Recomendaría este curso a cualquiera que esté considerando seriamente esta profesión y esté dispuesto a invertir el tiempo necesario para sacar el máximo de los recursos ofrecidos.</p>`,
    },
    {
      name: "Sergio Hernae",
      avatar: "/images/mentoring/alumni-sergio-h.jpg",
      review: `<p>La mentoría con Ruslan ha sido fantástica, un recorrido positivo, constructivo y profesional de principio a fin. He mejorado muchísimo mi mezcla. Antes evitaba mezclar para otros artistas, pero ahora estoy listo para ello cualquier día.</p>
<p>El <em>feedback</em> de Ruslan sobre mi trabajo siempre ha sido certero, práctico y muy útil. Y no es el típico <em>feedback</em> genérico de "suena bien". Son indicaciones detalladas como "prueba compresión paralela con un 1176 para los transitorios", lo cual marca una gran diferencia.</p>
<p>Las clases de Ruslan son altamente prácticas e incluso entramos en la industria musical, más allá de la mezcla y el <em>mastering</em>. He hecho otros cursos supuestamente impartidos por expertos que, honestamente, no se parecían en nada. Con Ruslan hay un compromiso real con tu trabajo y con el crecimiento de tu carrera.</p>`,
    },
    {
      name: "Ignacio Fernandez",
      avatar: "/images/mentoring/alumni-ignacio.jpg",
      review: `<p>La mentoría de Slatin ha sido inequívocamente el curso más esclarecedor que he hecho sobre Mezcla y <em>Mastering</em>, incluso por encima de cursos de un año entero a los que he asistido. Pero lo único es que, además del conocimiento técnico, también entra en los detalles de la industria musical y en cómo moldear mi carrera como mezclador.</p>
<p>Estando completamente dedicado a la mezcla y el <em>mastering</em>, ver a Slatin trabajar en proyectos para artistas de primer nivel ha cambiado completamente mi enfoque y mentalidad. He aprendido a valorar y optimizar mi tiempo, lo cual ha disparado mis ingresos.</p>
<p>Sin embargo, lo que realmente cambia el juego es el <em>feedback</em> continuo que ofrece Slatin. Tener el espacio para preguntar cualquier cosa y recibir <em>feedback</em> ilimitado sobre mis mezclas es invaluable. En esencia, la cantidad y profundidad del aprendizaje están completamente en mis manos. En resumen, describiría la mentoría como un verdadero cambio de juego.</p>`,
    },
    {
      name: "Sergio Perez",
      avatar: "/images/mentoring/alumni-sergio-p.jpg",
      review: `<p>¡200% recomendado! Además de ser un profesional absoluto como productor e ingeniero de mezcla y <em>mastering</em>, Slatin se preocupa mucho por la evolución de todos los alumnos y cubre todas las dudas que surgen día a día, haciendo un seguimiento muy personalizado de cada caso.</p>
<p>También vale la pena mencionar la suerte de haber coincidido con compañeros tan buenos, gente muy interesante con la que compartir experiencias en cada clase e incluso la posibilidad de colaborar en el futuro.</p>
<p>Personalmente y tras muchos años dedicados a la producción, puedo decir que siempre hay mucho por aprender y esta experiencia me lo ha demostrado. ¡Muchísimas gracias!</p>`,
    },
    {
      name: "Marco Bernal",
      avatar: "/images/mentoring/alumni-marco-b.jpg",
      review: `<p>Ser parte de este grupo de mentoría ha sido muy revelador. Ruslan respondió muchas de mis preguntas, especialmente las relacionadas con detalles pequeños y matizados que hacen que mis mezclas suenen mejor. También me ha ayudado a establecer un <em>workflow</em> específico para mezclar sin perder el foco.</p>
<p>En cuanto a lo que diferencia estas mentorías, aprecio la cercanía al explicar conceptos complejos de forma simple y digerible. Traduce algo complejo en algo simple y aplicable.</p>
<p>En general, esta mentoría es muy recomendable, sobre todo si ya tienes conocimientos básicos de producción musical y quieres llevarlo al siguiente nivel para conseguir un sonido profesional.</p>`,
    },
  ] as AlumniTestimonial[],

  faqItems: [
    {
      question: "¿Para quién es esta Mentoría, específicamente?",
      answer: `<strong>Este Programa está Diseñado para Productores e Ingenieros de Mezcla que:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Quieren acelerar su crecimiento y desbloquear todo su potencial en tiempo récord.</li><li>Quieren cortar el ruido del contenido engañoso infinito y aprender los "PORQUÉS" detrás de cada técnica.</li><li>Quieren mejorar sus habilidades técnicas y conocimientos de producción, mezcla y <em>mastering</em>.</li><li>Necesitan revisiones personalizadas de su trabajo y acceso directo a un mentor experimentado.</li><li>Quieren aprender a promocionar su música eficazmente, construir su marca y hacer crecer su base de seguidores.</li><li>Están dispuestos a invertir en su educación y desarrollo.</li><li>Están motivados para mejorar y comprometidos con alcanzar sus metas.</li></ul>`,
      category: "Sobre el Programa",
    },
    {
      question: "¿Quién NO debería apuntarse a esta Mentoría?",
      answer: `<strong>Este Programa NO es para:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Principiantes absolutos sin conocimientos previos de producción o ingeniería musical.</li><li>Personas que no estén dispuestas a invertir tiempo y esfuerzo en su propio crecimiento y desarrollo.</li><li>Gente que busca una solución rápida o atajo al éxito sin poner el trabajo necesario.</li><li>Quienes no estén abiertos a aprender nuevas técnicas o enfoques.</li><li>Personas que no estén dispuestas a invertir en su propia educación y crecimiento.</li></ul>`,
      category: "Sobre el Programa",
    },
    {
      question: "¿Tienes experiencia enseñando y haciendo mentoría?",
      answer: "¡Por supuesto! Con más de 8 años de experiencia enseñando en diversos institutos internacionales de música, incluyendo Anonymous Studios (Los Ángeles), SAE Institute (Madrid), Millenia (Valencia) y DJP Music School (Madrid). También he trabajado con numerosos alumnos de forma 1-a-1, muchos de los cuales han alcanzado un gran éxito en la industria musical.",
      category: "Sobre el Programa",
    },
    {
      question: "¿En qué se diferencia de una Escuela o Instituto de Producción Musical?",
      answer: `El Programa de Mentoría ofrece <strong>guía personalizada</strong> y apoyo <strong>adaptado a las necesidades</strong> y metas de cada persona. A diferencia de las escuelas tradicionales que siguen un plan predeterminado, el Programa de Mentoría se personaliza para un <strong>GRUPO REDUCIDO</strong>. Además, aprenderás directamente y tendrás acceso diario a un <strong>profesional</strong> con más de 15 años de experiencia en la industria.`,
      category: "Sobre el Programa",
    },
    {
      question: "¿En qué se diferencia de comprar Cursos o Tutoriales online?",
      answer: `A diferencia del contenido pregrabado, nuestro programa se adapta a las necesidades y aspiraciones de cada persona del grupo y trabajaremos juntos para crear un <strong>plan personalizado</strong> que aborde tus fortalezas, debilidades y retos únicos. Además, el programa ofrece una comunidad de apoyo, revisiones semanales y <strong>seguimientos regulares de compromiso</strong>.`,
      category: "Sobre el Programa",
    },
    {
      question: "¿Puedes darme un resumen del Programa de Mentoría?",
      answer: 'Como las necesidades de cada persona son únicas, crearemos un plan personalizado. Los puntos destacados incluyen: Entender y Aplicar EQ, Dominar la Compresión, Compresión Avanzada / Curvas Complejas, Procesamiento Mid/Side, Negocio 101, Crecimiento en Redes Sociales, Cómo Conseguir Clientes, Diseño de Sonido, Compresión <em>Sidechain</em>, Microdinámica, Mezcla de Voces, La Magia de las Cintas, Todos los Secretos del <em>Mastering</em>, Compresión Avanzada / Control Tonal, Automatizar tu Estudio, Usar IA para Producción y Mezcla en Dolby Atmos.',
      category: "Programa",
    },
    {
      question: "¿En qué idioma se imparte el programa?",
      answer: "La mentoría grupal se imparte en inglés, pero las llamadas 1-a-1 pueden realizarse en español y ruso.",
      category: "Programa",
    },
    {
      question: "¿Cuánto dura la llamada 1-a-1 semanal?",
      answer: 'La llamada 1-a-1 semanal dura 60 minutos, durante los cuales haremos seguimientos de compromiso; te ayudaré a ejecutar tu <em>roadmap</em>/plan personalizado, revisaremos tus proyectos, terminaremos canciones, resolveremos cualquier duda y te daré guía de negocio personalizada.',
      category: "Programa",
    },
    {
      question: "¿Cómo de grande es el grupo?",
      answer: 'El número mínimo de participantes en el programa de Mentoría Grupal es cuatro y el máximo quince. Esto asegura que el grupo sea lo suficientemente grande para fomentar un entorno colaborativo y de apoyo, permitiendo atención individual y <em>feedback</em> personalizado.',
      category: "Programa",
    },
    {
      question: "¿A qué hora son las clases?",
      answer: `Las clases están programadas generalmente los lunes a las 20:00 CEST (hora central europea). Los días y horas se pueden ajustar según las preferencias del grupo. Si no puedes asistir en directo, <strong>todas las sesiones se graban y se comparten</strong> con el grupo el mismo día.`,
      category: "Programa",
    },
    {
      question: "¿Qué Equipamiento (<em>Hardware</em>) necesito?",
      answer: 'Para participar en el Programa de Mentoría necesitarás un ordenador o portátil con conexión fiable a internet y unos auriculares o monitores de estudio de tu elección.',
      category: "Configuración y Pago",
    },
    {
      question: "¿Qué <em>DAW</em> y <em>Software</em> necesito?",
      answer: 'Usaremos Ableton Live 12 y Reaper para las lecciones y las sesiones de revisión. Pero todas las técnicas y conceptos son 100% compatibles con cualquier otro <em>DAW</em>. Si no tienes un <em>plugin</em> específico, siempre te mostraré una alternativa gratuita o nativa.',
      category: "Configuración y Pago",
    },
    {
      question: "¿Cómo funciona el sistema de pago?",
      answer: `Este programa de mentoría funciona por <strong>suscripción</strong> y tiene un compromiso de <strong>Tres Meses</strong>.`,
      category: "Configuración y Pago",
    },
    {
      question: "¿Y si tengo más preguntas?",
      answer: `Para cualquier pregunta, puedes enviar un correo a nuestro <em>Studio Manager</em> a: <a href="mailto:admin@slatin.pro" class="text-accent-red hover:underline">admin@slatin.pro</a>.`,
      category: "Configuración y Pago",
    },
  ] as FaqItem[],
};
