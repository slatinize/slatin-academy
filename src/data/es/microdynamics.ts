import type { Testimonial, Module, FaqItem, Feature, NumberedItem } from '../types';

export const pageData = {
  meta: {
    title: "Advanced Microdynamics - Curso de Mezcla y Mastering",
    description: "Aprende técnicas avanzadas de procesamiento microdinámico para mezcla y mastering. +4 horas de lecciones prácticas en vídeo por SLATIN.",
  },

  hero: {
    badgeText: "Curso",
    title: 'Advanced<br><span class="squiggle">Microdynamics</span>',
    subtitle: `<strong>Como productor o ingeniero de mezcla con experiencia, probablemente ya dominas EQ, compresión y efectos espaciales...</strong><br><br><span style='font-size: 0.85em; opacity: 0.75;'>Sin embargo, hay un aspecto crucial que muchos profesionales talentosos pasan por alto: las Microdinámicas.</span>`,
    ctaText: "Acceso Completo",
    ctaHref: "#pricing",
    secondaryCtaText: "Ver Contenido",
    secondaryCtaHref: "#modules",
  },

  video: {
    title: "La Magia de las Microdinámicas ✨",
  },

  introSections: [
    {
      paragraphs: [
        '¿Te has fijado? <strong>¡El 90% de los <em>hits</em> actuales</strong> tienen arreglos sorprendentemente simples!',
        "No dependen de capas infinitas para sonar impresionantes.",
        'Entonces, ¿qué separa esas <strong>mezclas de alto nivel</strong> de las producciones <em>amateur</em>? 🤔',
        '→ <strong>Las Microdinámicas</strong> 🏆',
      ],
    },
    {
      paragraphs: [
        'El control microdinámico es la gestión precisa de <strong>transientes y cuerpos</strong> a lo largo de todo el rango de frecuencias.',
        '+ Las <strong>variaciones dinámicas</strong> sutiles en cada elemento ☝️',
        'Y esta es la clave (menos discutida) para lograr <strong>claridad, profundidad y una definición sonora incomparable</strong> en mezclas profesionales 💡',
      ],
    },
  ],

  centeredHeadline: {
    preTitle: "LA CLAVE DE LA EXCELENCIA SÓNICA",
    content: '<span style="font-weight: 600;">La <span class="text-accent-red">Microdinámica</span> es lo que permite que arreglos simples <span class="text-accent-red">suenen pulidos</span>, cautiven al oyente y se traduzcan a la perfección en cualquier sistema.</span>',
  },

  painPoints: {
    sectionTitle: "¿Te suena familiar?",
    subtitle: "Estas son señales comunes de una atención insuficiente a las microdinámicas:",
    features: [
      {
        title: "",
        description: 'Tus temas suenan "bien", pero no <strong>"terminados"</strong>. Sientes que te falta <strong>algo</strong>.',
      },
      {
        title: "",
        description: 'Añades una <strong>gran cantidad de capas</strong> para que tu música suene dinámica y mantenga el interés.',
      },
      {
        title: "",
        description: 'Tus mezclas tienen un buen equilibrio, pero te cuesta lograr <strong>másters potentes y con buen <em>groove</em></strong>.',
      },
    ],
  },

  featureGrid: {
    subtitle: "LO QUE DOMINARÁS",
    features: [
      {
        iconSrc: "/images/eq-microdynamics.png",
        iconStyle: "object-position: calc(50% - 2px) center;",
        title: "Procesamiento Microdinámico Avanzado",
        description: 'Alcanza precisión sónica mediante modelado de transientes, compresión transparente por bandas de "cuerpos resonantes", dinámica paralela y procesamiento <em>mid-side</em> avanzado.',
      },
      {
        iconSrc: "/images/Ellipse-5-150x150.png",
        title: 'Logra Ese Sonido "Analógico" totalmente ITB',
        description: 'La gran mayoría de los ingenieros top trabajan completamente <em>"in the box"</em>, sin <em>hardware</em> externo. Entonces, ¿cómo logran ese carácter analógico? Entendiendo al detalle las variaciones microdinámicas que aporta el equipo analógico y sabiendo cómo recrearlas.',
      },
      {
        iconSrc: "/images/mastering-detail.png",
        iconStyle: "object-position: center calc(50% + 0.25px);",
        title: "Microdinámica aplicada al <em>Mastering</em>",
        description: 'Entrega canciones pulidas y ALTAS (de LUFS) mediante técnicas avanzadas de <em>mastering</em>, preservando y realzando la integridad dinámica.',
      },
      {
        iconSrc: "/images/Ellipse-3-150x150.png",
        title: "Escucha Crítica y Análisis",
        description: "Agudiza tu capacidad para identificar y corregir problemas microdinámicos sutiles, asegurándote resultados profesionales en cada ocasión.",
      },
    ] as Feature[],
  },

  idealFor: {
    title: "El curso es ideal para ti si...",
    items: [
      {
        number: "01",
        text: "Ya dominas los fundamentos de la mezcla y buscas ese <strong>refinamiento superior</strong> que distingue a las mezclas profesionales.",
      },
      {
        number: "02",
        text: "Tienes dificultades con mezclas que suenan técnicamente correctas, pero no logran <strong>traducirse a nivel emocional</strong> y dinámico.",
      },
      {
        number: "03",
        text: "Quieres <strong>técnicas avanzadas</strong>, explicadas con claridad, sin relleno ni rodeos.",
      },
    ] as NumberedItem[],
  },

  moduleCarousel: {
    subtitle: "6 módulos · 15+ lecciones · Todo lo que necesitas para dominar las microdinámicas",
  },

  teacherBio: {
    bio: [
      'Ruslan Slatin es un <strong>galardonado</strong> productor e <strong>ingeniero de sonido</strong> con décadas de experiencia en la industria musical global.',
      'Reconocido por su sonido distintivo y producciones de alto nivel, ha colaborado con algunos de los <strong>sellos y artistas internacionales</strong> más prestigiosos.',
      'Además de dirigir un estudio de <em>mastering</em> de alto rendimiento, con más de 1.000 proyectos completados al año, <strong>Ruslan</strong> es un educador apasionado.',
      'A través de cursos especializados y mentorías privadas, ayuda a productores musicales a elevar su sonido utilizando técnicas probadas e innovadoras para "moldear" el sonido.',
    ],
  },

  splitSections: {
    hours: {
      heading: '<span class="squiggle">+4 Horas</span>, Todo Valor, Cero Relleno',
      paragraphs: [
        '<strong class="text-white">Lecciones prácticas</strong> divididas en vídeos cortos (2-15 min) que puedes aplicar en tus sesiones.',
        'Ya sea que estés repasando fundamentos o puliendo tu flujo de trabajo es información sólida a la que recurrirás <strong class="text-white">más de una vez</strong>.',
      ],
    },
    community: {
      heading: '<span class="squiggle-basic">Mucho Más</span> que un Curso',
      paragraphs: [
        '¿Qué hace diferentes nuestros programas? Nuestra <strong class="text-white">comunidad</strong> 🤝',
        'Con acceso exclusivo a nuestro <strong class="text-white">canal privado de Discord</strong>, no solo estás aprendiendo, también estás conectando con otros ingenieros, recibiendo <em>feedback</em> y creciendo junto a ellos a tu propio ritmo.',
      ],
    },
    genres: {
      heading: '<span class="squiggle-basic">Múltiples Géneros</span>',
      paragraphs: [
        'Desde Pop y Rock hasta House, Tecno y Urbano, todo lo que enseñamos se aplica a <strong class="text-white">proyectos reales</strong> 🎵',
        'Solo las técnicas y <em>plugins</em> más actuales, siempre basados en ejemplos prácticos.',
      ],
    },
  },

  pricing: {
    subtitle: "Eleva tus habilidades de <strong class='text-white'>producción, mezcla y <em>mastering</em></strong> a través de una comprensión profunda de las microdinámicas.",
    price: "149€",
    features: [
      "Acceso al Curso (+4h)",
      "Acceso a nuestra Comunidad Privada",
      "Presets y Recursos",
      "Módulos y Videos Extra",
      "Actualizaciones Frecuentes",
      "Sesiones de <em>Q&A</em> con SLATIN",
    ],
    ctaText: "ÚNETE AHORA 🔑",
    ctaHref: "https://learn.slatin.pro/purchase?product_id=6205122",
  },

  testimonials: [
    {
      quote: "Como cantante y productor, necesitaba claridad, dirección y una comprensión real de la mezcla. En pocas semanas, aprendí a escuchar con propósito y a tomar decisiones con confianza. Ahora mis pistas suenan grandes, limpias y profesionales. Mi sonido tiene fuerza y carácter. Esto no es solo un curso, es la mejora que necesitas para sonar como un profesional 🔥",
      name: "Jaime Hernández",
      role: "Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/borja-283x300.jpg",
    },
    {
      quote: "He aprendido más en tres meses que en toda mi vida y he recuperado el entusiasmo por la música, mi nivel ha aumentado tanto que todavía me sigue sorprendiendo. Parad de ver videos en internet porque solo os confundirán. Si realmente te gusta esta profesión, no dudes, estudia con SLATIN y su equipo.",
      name: "PowTow",
      role: "Productor e Ingeniero",
      featured: true,
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/powtow-300x295.jpg",
    },
    {
      quote: "Imagina poner tu canción a través de una radiografía, y al otro lado hay un médico de élite analizándola y dándote no solo el diagnóstico, sino también la solución real a tu problema. Eso es lo que hace Slatin con su experiencia. ¡Siempre es bueno tener un par de oídos adicionales!",
      name: "Rafael C.",
      role: "Ghost producer & Engineer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/rafael-300x300.jpg",
    },
    {
      quote: "El curso con Slatin ha sido un punto de inflexión para mí en mi criterio como ingeniero de mezcla y máster. Aunque tenía un buen nivel, ha sido una gran mejora. Lo recomiendo a todos los productores e ingenieros de mezcla de cualquier nivel, Slatin domina cualquier estilo y nivel musical.",
      name: "The Wayne",
      role: "Productor e Ingeniero",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/marc-300x300.jpg",
    },
    {
      quote: "Slatin transformó mis habilidades y conocimientos de producción. Mientras trabajaba con Slatin, recibí apoyo internacional de Tiësto, Gate21, DJs From Mars y muchos, muchos más.",
      name: "RICO",
      role: "DJ y Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/02/274551021_495935155469334_8694730205219369974_n-300x300.jpg",
    },
    {
      quote: "Las clases con SLATIN han elevado el nivel de mis producciones, tanto en sonido como en creatividad. Además del conocimiento técnico, tiene una gran habilidad para enseñar, haciendo que todo parezca fácil.",
      name: "Auriga",
      role: "DJ y Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/03/289838124_556531009338664_1910523833993545341_n-300x300.jpg",
    },
    {
      quote: "SLATIN fue un punto de inflexión en mi vida. Hoy estoy alcanzando las metas con las que antes solo soñaba, gracias a los tres años que pasé aprendiendo con él. Es un profesor increíble y cercano, y su profesionalismo destaca por encima del resto.",
      name: "Krumel",
      role: "DJ y Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/03/333790209_684358630111700_8875204025891176004_n-300x300.jpg",
    },
    {
      quote: 'Rus realmente me ha ayudado a llevar mis temas al siguiente nivel. Ya sea en mezcla, <em>mastering</em>, producción o <em>music business</em>.',
      name: "Nicolas K",
      role: "DJ y Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/02/315355245_3301396186845452_2314762611349232539_n-300x300.jpg",
    },
  ] as Testimonial[],

  modules: [
    {
      title: "Fundamentos de las Microdinámicas",
      moduleNumber: "MÓDULO 01",
      topics: ["Importancia de las Microdinámicas", "Microdinámicas vs. Macrodinámicas", "Análisis y visualización de las microdinámicas y su impacto en nuestra canción"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.11.23-scaled.jpg",
    },
    {
      title: "Procesamiento Avanzado",
      moduleNumber: "MÓDULO 02",
      topics: ["Multiplicity - Ajustes multibanda avanzados", "MAutoDynamicEQ - Sidechain, Expansión, Compresión", "Herramientas - Spiff, Ozone 11"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.11.05-scaled.jpg",
    },
    {
      title: "Aplicaciones de la Microdinámica en la Producción",
      moduleNumber: "MÓDULO 03",
      topics: ['Microdinámicas para lograr <em>groove</em> y movimiento durante la producción', "Micromodulación en elementos individuales con ShaperBox 3"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.12.13-scaled.jpg",
    },
    {
      title: "Aplicaciones de la Microdinámica en la Mezcla",
      moduleNumber: "MÓDULO 04",
      topics: ['Coherencia en el <em>Low End</em>', "Microdinámicas aplicadas a la mezcla de voces", "Ajustes microdinámicos en baterías"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.11.40-scaled.jpg",
    },
    {
      title: 'Control Microdinámico en el <em>Mastering</em>',
      moduleNumber: "MÓDULO 05",
      topics: ['Aprovechando al máximo los <em>sides</em> para lograr volumen', 'Conseguir más volumen y controlar el <em>groove</em> durante el <em>Mastering</em>', '<em>Mastering</em> con herramientas multibanda y limitación microdinámica'],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/04/promo-1.jpg",
    },
    {
      title: "Extras",
      moduleNumber: "MÓDULO 06",
      topics: ["Siempre actualizado con nuevos videos", '<em>Presets</em> y recursos'],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/punctuate.jpg",
    },
  ] as Module[],

  faqItems: [
    {
      question: "¿Para quién, específicamente, es este curso?",
      answer: `<strong>La mentoría está diseñada para Productores e Ingenieros que:</strong><br><br>
        <ul class="list-disc ml-5 space-y-2">
          <li>Desean erradicar "la desinformación de contenido inacabable" y aprender los "Porqués" detrás de cada técnica.</li>
          <li>Quieren mejorar sus habilidades y conocimiento de producción, mezcla y <em>mastering</em>.</li>
          <li>Están dispuestos a invertir en su educación y desarrollo.</li>
        </ul>`,
    },
    {
      question: "¿En qué idioma se imparte el curso?",
      answer: "El curso se imparte en inglés, con subtítulos disponibles tanto en inglés como en español para que puedas seguirlo cómodamente.",
    },
    {
      question: "¿Es este curso compatible con mis estudios actuales de música en una escuela o instituto?",
      answer: "¡100%! Si bien la educación formal proporciona un plan de estudios estructurado y muy generalizado, la mentoría puede ofrecer orientación y apoyo personalizados que pueden mejorar y complementar la experiencia de aprendizaje de forma muy positiva.",
    },
    {
      question: "¿Tienes experiencia enseñando?",
      answer: "¡Absolutamente! Tengo más de 8 años de experiencia con cientos de alumnos enseñando en diversos centros internacionales. Entre los que se encuentran: Anonymous Studios (Los Angeles), SAE Institute (Madrid), Millenia (Valencia), DJP Music School (Madrid). También he trabajado con estudiantes 1 a 1, muchos de los cuales ya tienen éxito en la industria musical.",
    },
    {
      question: "¿Qué Equipamiento (<em>Hardware</em>) necesito?",
      answer: "Necesitarás un ordenador o portátil más unos auriculares o monitores de estudio fiables (idealmente en un espacio tratado acústicamente). Cualquier <em>setup</em> con el que te sientas cómodo servirá.",
    },
    {
      question: "¿Qué <em>DAW</em> y <em>Software</em> necesito?",
      answer: "Utilizaremos Ableton 12 y Reaper durante las lecciones. Pero todas las técnicas y conceptos son 100% compatibles con cualquier otro <em>DAW</em>.",
    },
    {
      question: "¿Y si tengo más preguntas?",
      answer: `Para cualquier pregunta, puedes enviar un correo a nuestro <em>Studio Manager</em> a: <a href="mailto:admin@slatin.pro" class="text-accent-red hover:underline">admin@slatin.pro</a>.`,
    },
  ] as FaqItem[],
};
