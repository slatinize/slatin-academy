import type { Testimonial, Module, FaqItem, Feature, NumberedItem } from '../types';

export const pageData = {
  meta: {
    title: "Low End Mastery - Curso de Mezcla de Kick & Bass",
    description: "Domina las frecuencias graves, la relación kick y bass y consigue mezclas potentes y dinámicas que traduzcan en cualquier sistema. Por SLATIN.",
  },

  hero: {
    badgeText: "Curso",
    title: 'Low-End<br><span class="squiggle">Mastery</span>',
    subtitle: '<span style="font-size: 1.25rem; line-height: 1.6;"><strong>¿No consigues que tu <em>low end</em> suene bien? De la química entre <em>kick</em> y <em>bass</em> a la traducción perfecta en todos los sistemas...</strong></span><br><br><span style="font-size: 1.05rem; line-height: 1.6; opacity: 0.8;">Adquiere las técnicas, herramientas y el entrenamiento auditivo que necesitas para lograr mezclas de graves potentes y pulidas.</span>',
    ctaText: "Acceso Completo",
    ctaHref: "#pricing",
    secondaryCtaText: "Ver Contenido",
    secondaryCtaHref: "#modules",
  },

  splitSections: {
    getLoud: {
      heading: 'Consigue Volumen <span class="squiggle-basic">Real</span>',
      paragraphs: [
        "¿No llegas a tu objetivo de LUFS sin destruir la dinámica?",
        'En la mayoría de los casos, es un <strong class="text-white">problema de graves.</strong>',
        'En este curso te muestro exactamente qué hace falta para lograr mezclas potentes y con <em>punch</em> que sigan respirando.',
      ],
      accent: 'Y es mucho más que <em>clipping</em> y <em>limiting</em>... 😏',
    },
    kickBass: {
      heading: 'Clava Tu <span class="squiggle-basic"><em>Kick & Bass</em></span>',
      paragraphs: [
        'Seguramente ya usas <em>sidechain</em>.',
        "PERO, ¿y si te dijera que...",
      ],
      accent: 'El <em>sidechain</em> no es suficiente... 🫣',
      afterAccent: [
        'Cuando buscas esa relación <em>Kick & Bass</em> ajustada y potente que obsesiona a los profesionales?',
      ],
      bold: "Te guiaré paso a paso por el proceso exacto que uso en cada proyecto.",
    },
    translation: {
      heading: 'Traducción <span class="squiggle-basic">Perfecta</span>',
      paragraphs: [
        '¿Suena genial en el estudio, pero es un <strong class="text-white">desastre en el coche o en un club?</strong> 🙉',
        'Descubre las <strong class="text-accent-red">3 claves para una traducción de graves impecable.</strong>',
        'Haz que tus <em>tracks</em> peguen fuerte en cualquier sistema y que tus clientes quieran volver a trabajar contigo.',
        "+ Deja de perder horas en revisión tras revisión...",
      ],
    },
    monoWide: {
      heading: 'Mono y <span class="squiggle-basic"><em>Wide</em></span>',
      paragraphs: [
        '¿Crees que un bajo ancho y compatible en mono es imposible? <strong class="text-white">Piénsalo otra vez.</strong>',
        'Aprende las técnicas exactas que usan los mejores <em>sound designers</em> para crear <strong class="text-accent-red">líneas de bajo potentes, anchas y totalmente compatibles en mono</strong>.',
      ],
    },
    saveTime: {
      heading: 'Ahorra Tu <span class="squiggle-basic">Tiempo</span>',
      paragraphs: [
        'La Selección de Sonido es <strong class="text-white">CLAVE...</strong>',
      ],
      accent: "Y supone el 80% de tu sonido final.",
      afterAccent: [
        'Ya sea que uses Splice o tengas una librería de <em>samples</em> extensa, te enseñaré a elegir los <em>samples</em> correctos y a <strong class="text-white">dejar de dudar.</strong>',
      ],
    },
    genres: {
      heading: '<span class="squiggle-basic">Múltiples Géneros</span>',
      paragraphs: [
        "Cada género tiene su forma única de tratar las frecuencias graves.",
        'Este curso está diseñado para <strong class="text-white">creadores de música moderna y potente</strong>.',
        'Verás exactamente cómo manejar <em>kick</em> y <em>bass</em> en <strong class="text-white">EDM, Pop/Funk, Trap y Reguetón</strong>.',
      ],
    },
    community: {
      heading: 'Comunidad <span class="squiggle-basic">Privada</span>',
      paragraphs: [
        "Esto no es un curso de vídeo cualquiera...",
      ],
      accent: "Si te quedan dudas, ¡únete al chat!",
      afterAccent: [
        'Comparte tu trabajo, <strong class="text-white">recibe <em>feedback</em></strong> y respuestas a tus preguntas y encuentra personas con tus mismos intereses',
      ],
    },
  },

  painPoints: {
    badge: "+ 400 Alumnos Satisfechos",
    headline: 'Tu <em>low end</em> es la base, <span class="text-accent-red">todo lo demás viene después.</span>',
    items: [
      'Las mezclas suenan <strong>turbias o delgadas</strong> y los graves nunca encajan, hagas lo que hagas.',
      'Los <em>tracks</em> suenan genial en el estudio pero se <strong>desmoronan</strong> en otros sistemas: coche, discoteca o teléfono móvil.',
      'No consigues másters con <strong>suficiente volumen</strong> sin que los graves distorsionen o pierdan <em>punch</em>.',
    ],
  },

  featureGrid: {
    subtitle: "LO QUE DOMINARÁS",
    features: [
      {
        iconSrc: "/images/Ellipse-6-150x150.png",
        title: 'Química de <em>Kick & Bass</em>',
        description: 'Aprende la ciencia detrás de la relación perfecta entre <em>kick</em> y <em>bass</em>, incluyendo rotación de fase dinámica y técnicas avanzadas de <em>sidechain</em>.',
      },
      {
        iconSrc: "/images/low-end-translation.png",
        title: "Traducción de Graves Perfecta",
        description: 'Domina el arte de trasladar los graves a cualquier entorno con un método pensado para <strong>el mundo real</strong>.',
      },
      {
        iconSrc: "/images/loudness-icon.png",
        title: "Volumen Sin Compromiso",
        description: 'Lleva el volumen a niveles comerciales sin perder impacto ni dinámica, más allá de <em>presets</em>, más allá de limitadores, <strong>volumen de verdad</strong>.',
      },
      {
        iconSrc: "/images/sound-selection-icon.png",
        title: "Selección y Modelado de Sonido",
        description: 'Entrena el oído para elegir los sonidos correctos desde el principio y moldear <em>kicks</em> que ya encajan en la mezcla, <strong>la mitad del trabajo se gana antes del EQ</strong>.',
      },
    ] as Feature[],
  },

  idealFor: {
    title: "Este curso es ideal para ti si...",
    items: [
      {
        number: "01",
        text: "Tienes problemas con la <strong>traducción de graves</strong>: tus mezclas suenan diferente en cada sistema de reproducción.",
      },
      {
        number: "02",
        text: 'Quieres entender la <strong>base rítmica de la música actual</strong> a un nivel detallado y profesional.',
      },
      {
        number: "03",
        text: 'Sientes que tus <strong>másters tocan techo</strong> y que, cuando son suficientemente potentes, pierden limpieza y, cuando son limpios, pierden pegada.',
      },
    ] as NumberedItem[],
  },

  moduleCarousel: {
    subtitle: "7 módulos · 25+ lecciones · Todo lo que necesitas para dominar tu <em>low end</em>",
  },

  teacherBio: {
    bio: [
      'Ruslan Slatin es un <strong>galardonado</strong> productor e <strong>ingeniero de sonido</strong> con décadas de experiencia en la industria musical global.',
      'Reconocido por su sonido distintivo y producciones de alto nivel, ha colaborado con algunos de los <strong>sellos y artistas internacionales</strong> más prestigiosos.',
      'Además de dirigir un estudio de <em>mastering</em> de alto rendimiento, con más de 1.000 proyectos completados al año, <strong>Ruslan</strong> es un educador apasionado.',
      'A través de cursos especializados y mentorías privadas, ayuda a productores musicales a elevar su sonido utilizando técnicas probadas e innovadoras para moldear el sonido.',
    ],
  },

  pricing: {
    subtitle: "Consigue la <strong class='text-white'>claridad, <em>punch</em> y traducción</strong> de <em>kick</em> y <em>bass</em> que le falta a tus mezclas.",
    price: "159€",
    features: [
      "Acceso Ilimitado al Curso",
      "Acceso a Comunidad Privada",
      "<em>Presets</em> y Recursos",
      "Módulos y Vídeos Extra",
      "Actualizaciones Continuas",
      "Sesiones de <em>Q&A</em> con SLATIN",
    ],
    ctaText: "ACCESO COMPLETO 🔑",
    ctaHref: "https://learn.slatin.pro/purchase?product_id=5700498",
  },

  testimonials: [
    {
      quote: 'Es un experto en producción, mezcla y <em>mastering</em>. Con su ayuda, recibí reconocimiento internacional de Tiesto, Gate21, DJs From Mars y más. Recomiendo mucho a Slatin.',
      name: "RICO",
      role: "DJ & Productor",
      avatar: "https://uploads.teachablecdn.com/attachments/kG4eHuWTEirpaies5HfQ_rico.jpg",
    },
    {
      quote: 'Slatin realmente me ha ayudado a llevar mis <em>tracks</em> al siguiente nivel. Ya sea mezcla, <em>mastering</em>, producción o negocio musical, Slatin se esfuerza al máximo para responder cualquier pregunta y asegurarse de que salgas de la sesión realmente satisfecho.',
      name: "Nicolas K",
      role: "DJ & Productor",
      featured: true,
      avatar: "https://uploads.teachablecdn.com/attachments/ulbYLEsRoiYbHxF1zSTA_nioc.jpg",
    },
    {
      quote: 'Como cantante y productor, necesitaba claridad, dirección y una comprensión real de la mezcla. En pocas semanas, aprendí a escuchar con intención y a tomar decisiones con confianza. Ahora mis <em>tracks</em> suenan grandes, limpios y profesionales.',
      name: "Jaime Hernández",
      role: "Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/borja-283x300.jpg",
    },
    {
      quote: 'El curso con Slatin ha sido un punto de inflexión en mi criterio como ingeniero de mezcla y <em>mastering</em>. Aunque tenía un buen nivel, ha sido una gran mejora. Lo recomiendo de verdad a todos los productores e ingenieros de mezcla de cualquier nivel.',
      name: "The Wayne",
      role: "Productor & Ingeniero",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/marc-300x300.jpg",
    },
    {
      quote: "Las clases con SLATIN han elevado el nivel de mis producciones, tanto en sonido como en creatividad. Aparte de conocimientos técnicos, tiene una gran capacidad para enseñar, haciendo que todo parezca fácil.",
      name: "Auriga",
      role: "DJ & Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/03/289838124_556531009338664_1910523833993545341_n-300x300.jpg",
    },
    {
      quote: "SLATIN fue el cambio radical en mi vida. Hoy estoy alcanzando las metas que una vez soñé, gracias a los tres años que pasé aprendiendo con él. Es un profesor increíble y cercano, y su profesionalidad destaca.",
      name: "Krumel",
      role: "DJ & Productor",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/03/333790209_684358630111700_8875204025891176004_n-300x300.jpg",
    },
  ] as Testimonial[],

  modules: [
    {
      title: 'Teoría del <em>Low End</em> - Afinando los Cimientos',
      moduleNumber: "MÓDULO 01",
      topics: ['¿Por Qué el <em>Low End</em> Es Tan Importante?', "¿Por Qué Es Tan Difícil de Mezclar?", "Preguntas Frecuentes y Errores Comunes"],
      imageSrc: "/images/module-01-ozone-eq.png",
      imagePosition: "center top",
    },
    {
      title: "Herramientas y Retos en la Mezcla de Graves",
      moduleNumber: "MÓDULO 02",
      topics: ["Tus Oídos", "Monitores y Sala", "Auriculares", "Medición"],
      imageSrc: "/images/module2-low-end.png",
      imagePosition: "center top",
    },
    {
      title: 'Modelado de Sonido - Técnicas para el <em>Kick</em> Perfecto',
      moduleNumber: "MÓDULO 03",
      topics: ['¿Qué Hace un <em>Kick</em> Perfecto?', 'Ejemplos de Modelado de <em>Kick</em> (5 Demostraciones Prácticas)'],
      imageSrc: "/images/module-03-proq3.png",
      imagePosition: "center top",
    },
    {
      title: 'Todo Sobre el <em>Bass</em> - Alcanzando la Perfección',
      moduleNumber: "MÓDULO 04",
      topics: ["Saturación", "Compatibilidad Mono", 'Crear un <em>Bass</em> Ancho y Compatible en Mono', "Selección de Notas"],
      imageSrc: "/images/module-04-vectorscope.png",
      imagePosition: "center top",
    },
    {
      title: 'Química <em>Kick & Bass</em> - Decodificando la Relación',
      moduleNumber: "MÓDULO 05",
      topics: ['<em>Kick & Bass</em> - El <em>Low End</em> Ideal', "Rotación de Fase Dinámica - El Secreto Mejor Guardado", "Coherencia de Graves", 'Optimizar <em>Kick</em> y <em>Bass</em> en la Etapa de <em>Mastering</em>'],
      imageSrc: "/images/module-05-bassxxl.png",
      imagePosition: "center top",
    },
    {
      title: "Casos Prácticos - Ejemplos Reales",
      moduleNumber: "MÓDULO 06",
      topics: ["Ejemplo EDM", "Ejemplo Pop / Dance / Funk", "Trap / Hip Hop", "Reguetón"],
      imageSrc: "/images/module-06-standardclip.png",
      imagePosition: "center top",
    },
    {
      title: "Lecciones Extra",
      moduleNumber: "MÓDULO 07",
      topics: ["Usar Spectre en vez de RBass o BassXXL", "Trabajar Hacia el Volumen", "Workshop de Low End Mastery (Grabación en Vivo)", 'Modelado Avanzado de <em>Kick</em> y Control de Graves'],
      imageSrc: "/images/module-07-rx.png",
      imagePosition: "center top",
    },
  ] as Module[],

  faqItems: [
    {
      question: "¿Para quién es este Curso, específicamente?",
      answer: `<strong>Este Curso está Diseñado para Productores e Ingenieros de Mezcla que:</strong><br><br>
        <ul class="list-disc ml-5 space-y-2">
          <li>Tienen dificultades para que sus graves traduzcan en diferentes sistemas de reproducción.</li>
          <li>Quieren entender la ciencia y el arte detrás de la relación entre <em>kick</em> y <em>bass</em>.</li>
          <li>Buscan técnicas prácticas de graves específicas por género que puedan aplicar de inmediato.</li>
        </ul>`,
    },
    {
      question: "¿En qué idioma se imparte el curso?",
      answer: "El curso se imparte en inglés, con subtítulos disponibles en inglés y español para que puedas seguirlo cómodamente.",
    },
    {
      question: "¿Es compatible este curso con mis estudios actuales de música en una escuela o instituto?",
      answer: "¡100%! Mientras que la educación formal proporciona un plan de estudios estructurado y acceso a recursos, la mentoría puede ofrecer orientación personalizada y apoyo que complementan y mejoran la experiencia de aprendizaje.",
    },
    {
      question: "¿Tienes experiencia enseñando y como mentor?",
      answer: "¡Por supuesto! Con más de 8 años de experiencia enseñando en diversas escuelas de música internacionales, he formado con éxito a cientos de estudiantes. Estas escuelas incluyen: Anonymous Studios (Los Ángeles), SAE Institute (Madrid), Millenia (Valencia), DJP Music School (Madrid). También he trabajado con numerosos estudiantes de forma individual, muchos de los cuales han logrado un gran éxito en la industria musical.",
    },
    {
      question: "¿Qué Equipamiento (<em>Hardware</em>) necesito?",
      answer: "Necesitarás un ordenador o portátil más unos auriculares o monitores de estudio fiables (idealmente en un espacio tratado acústicamente). Cualquier <em>setup</em> con el que te sientas cómodo servirá.",
    },
    {
      question: "¿Qué <em>DAW</em> y <em>Software</em> necesito?",
      answer: "Usaremos Ableton Live 12 y Reaper durante las lecciones. Pero todas las técnicas y conceptos son 100% compatibles con cualquier otro <em>DAW</em>.",
    },
    {
      question: "¿Y si tengo más preguntas?",
      answer: `Para cualquier pregunta, puedes enviar un correo a nuestro <em>Studio Manager</em> a: <a href="mailto:admin@slatin.pro" class="text-accent-red hover:underline">admin@slatin.pro</a>.`,
    },
  ] as FaqItem[],
};
