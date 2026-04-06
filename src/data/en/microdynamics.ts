import type { Testimonial, Module, FaqItem, Feature, NumberedItem } from '../types';

export const pageData = {
  meta: {
    title: "Advanced Microdynamics - Mixing & Mastering Course",
    description: "Learn advanced microdynamic processing techniques for mixing and mastering. 4+ hours of practical video lessons by SLATIN.",
  },

  hero: {
    badgeText: "Course",
    title: 'Advanced <span class="squiggle">Microdynamics</span>',
    subtitle: `<strong>As an experienced Producer or Mixing Engineer, you've likely mastered EQ, compression and spatial effects...</strong><br><br><span style='font-size: 0.85em; opacity: 0.75;'>Yet, there's a critical aspect many talented professionals overlook: Microdynamics.</span>`,
    ctaText: "Get Full Access",
    ctaHref: "#pricing",
    secondaryCtaText: "See Curriculum",
    secondaryCtaHref: "#modules",
  },

  video: {
    title: "The Magic of Microdynamics ✨",
  },

  introSections: [
    {
      paragraphs: [
        'Consider this: <strong>90% of today\'s hit records</strong> are surprisingly simple arrangements!',
        "They don't rely on countless layers to sound impressive.",
        'So, what separates these <strong>top-tier mixes</strong> from amateur productions? 🤔',
        '→ <strong>Microdynamics</strong> 🏆',
      ],
    },
    {
      paragraphs: [
        'Microdynamic control is the precise management of <strong>transients and bodies</strong> across the entire frequency range.',
        '+ Subtle <strong>dynamic variations</strong> within individual sounds ☝️',
        'And THIS is the least-discussed secret to achieving <strong>clarity, depth, and precise sonic definition</strong> in professional mixes 💡',
      ],
    },
  ],

  centeredHeadline: {
    preTitle: "THE HIDDEN KEY TO SONIC EXCELLENCE",
    content: '<span style="font-weight: 600;"><span class="text-accent-red">Microdynamics</span> is what makes simple arrangements <span class="text-accent-red">sound polished</span>, captivating and flawless on every system.</span>',
  },

  painPoints: {
    sectionTitle: "Does this sound familiar?",
    subtitle: "These are common signs of insufficient microdynamic attention:",
    features: [
      {
        title: "",
        description: 'Your tracks sound "good", but not quite <strong>"finished"</strong> or world-class. Something is <strong>missing</strong>.',
      },
      {
        title: "",
        description: 'You layer <strong>a ton of elements</strong> to ensure your music is dynamic and engaging.',
      },
      {
        title: "",
        description: 'Your mixes have great balance, but you struggle to achieve <strong>loud and dynamic</strong> masters.',
      },
    ],
  },

  featureGrid: {
    subtitle: "WHAT YOU WILL MASTER",
    features: [
      {
        iconSrc: "/images/eq-microdynamics.png",
        iconStyle: "object-position: calc(50% - 2px) center;",
        title: "Advanced Microdynamic Processing",
        description: 'Achieve sonic precision through transient shaping, transparent "resonant body" band-focused compression, parallel dynamics and mid-side processing.',
      },
      {
        iconSrc: "/images/Ellipse-5-150x150.png",
        title: 'Get That "Analog" Sound fully ITB',
        description: 'Most top engineers work fully in the box, no outboard gear. So how do they get that "analog" feel? By understanding the microdynamic variations that analog gear adds and knowing how to recreate them.',
      },
      {
        iconSrc: "/images/mastering-detail.png",
        iconStyle: "object-position: center calc(50% + 0.25px);",
        title: "Mastering-Level Detail",
        description: "Deliver polished and LOUD songs through advanced mastering techniques, preserving and enhancing dynamic integrity.",
      },
      {
        iconSrc: "/images/Ellipse-3-150x150.png",
        title: "Critical Listening and Analysis",
        description: "Sharpen your ability to identify and rectify subtle microdynamic issues, ensuring professional results every time.",
      },
    ] as Feature[],
  },

  idealFor: {
    title: "This course is ideal if you",
    items: [
      {
        number: "01",
        text: "Are comfortable with mixing fundamentals and want the <strong>next-level refinement</strong> that sets professional mixes apart.",
      },
      {
        number: "02",
        text: "Struggle with mixes that sound technically correct yet fail to <strong>fully translate emotionally</strong> and dynamically.",
      },
      {
        number: "03",
        text: "Want <strong>advanced techniques</strong> demonstrated clearly without fluff or filler.",
      },
    ] as NumberedItem[],
  },

  moduleCarousel: {
    subtitle: "6 modules · 15+ lessons · Everything you need to master microdynamics",
  },

  teacherBio: {
    bio: [
      'Ruslan Slatin is an <strong>award-winning</strong> producer and <strong>sound engineer</strong> with decades of experience in the global music industry.',
      'Celebrated for his distinctive sound and top-tier productions, he has collaborated with some of the most prestigious <strong>international labels</strong> and artists.',
      'In addition to running a high-performing commercial mastering studio, completing over 1,000 projects annually, <strong>Ruslan</strong> is a passionate educator.',
      'Through specialized courses and private mentoring, he empowers music producers to elevate their sound using proven and novel sound sculpting techniques.',
    ],
  },

  splitSections: {
    hours: {
      heading: '<span class="squiggle">+4 Hours</span>, All Value',
      paragraphs: [
        '<strong class="text-white">Practical lessons</strong> divided into short (2-15 min) videos you can actually use in your sessions.',
        'Whether you\'re brushing up on fundamentals or tightening your workflow, it\'s solid info you\'ll go back to <strong class="text-white">more than once</strong>.',
      ],
    },
    community: {
      heading: '<span class="squiggle-basic">Much More</span> than a Simple Course',
      paragraphs: [
        'What sets our programs apart? The <strong class="text-white">built-in community</strong> 🤝',
        'With exclusive access to our <strong class="text-white">private Discord</strong>, you\'re not just learning, you\'re connecting with other engineers, getting feedback and growing together at your own pace.',
      ],
    },
    genres: {
      heading: '<span class="squiggle-basic">Multiple Genres</span>',
      paragraphs: [
        'From Pop & Rock to House, Techno and Latin, everything we teach applies to <strong class="text-white">Real-World projects</strong> 🎵',
        'Only the latest techniques and <strong class="text-white">up-to-date</strong> plugins, always grounded in practical examples.',
      ],
    },
  },

  pricing: {
    subtitle: "Elevate your <strong class='text-white'>production, mixing and mastering</strong> skills through deep understanding of microdynamics.",
    price: "149€",
    features: [
      "Access to The Course (+4h)",
      "Access to Private Community",
      "Presets and Resources",
      "Bonus Modules and Videos",
      "Frequent Updates",
      "Live Q&A Sessions with SLATIN",
    ],
    ctaText: "JOIN NOW 🔑",
    ctaHref: "https://learn.slatin.pro/purchase?product_id=6205122",
  },

  testimonials: [
    {
      quote: "As a singer and producer, I needed clarity, direction and a real understanding of mixing. Within weeks, I learned to listen with purpose and make decisions with confidence. Now my tracks sound big, clean and professional. My sound has power, identity and intention. This isn't just a course, it's the upgrade you need to sound like a pro 🔥",
      name: "Jaime Hernández",
      role: "Producer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/borja-283x300.jpg",
    },
    {
      quote: "I've learned more in three months than I have in my entire life and regained more enthusiasm than ever for music, my level has increased so much that I'm still surprised. Stop watching videos on the internet because they will only confuse you. If you really like this profession, don't hesitate, study with SLATIN and his team.",
      name: "PowTow",
      role: "Producer & Engineer",
      featured: true,
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/powtow-300x295.jpg",
    },
    {
      quote: "Imagine putting your song through an X-ray, and on the other side there's an elite doctor analyzing it and giving you not just the diagnosis, but also the actual solution to your problem. That's what Slatin does with expertise. It's always good having a second pair of ears!",
      name: "Rafael C.",
      role: "Ghost producer & Engineer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/rafael-300x300.jpg",
    },
    {
      quote: "The course with Slatin has been a turning point for me in my criteria as a mixing and mastering engineer. Although I had a good level, it has been a great improvement for the better. I truly recommend it to all producers and mixing engineers of any level.",
      name: "The Wayne",
      role: "Producer & Engineer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/marc-300x300.jpg",
    },
    {
      quote: "Slatin transformed my production skills and knowledge. While working with Slatin, I have received international support from Tiesto, Gate21, DJs From Mars and many many others!",
      name: "RICO",
      role: "DJ & Producer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/02/274551021_495935155469334_8694730205219369974_n-300x300.jpg",
    },
    {
      quote: "The classes with SLATIN have raised the level of my productions, both in sound and creativity. Apart from technical knowledge, he has a great ability to teach, making everything seem easy.",
      name: "Auriga",
      role: "DJ & Producer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/03/289838124_556531009338664_1910523833993545341_n-300x300.jpg",
    },
    {
      quote: "SLATIN was the game changer in my life. Today, I am achieving the goals I once dreamed of, thanks to the three years I spent learning from him. He is an incredible and approachable teacher and his professionalism stands out.",
      name: "Krumel",
      role: "DJ & Producer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/03/333790209_684358630111700_8875204025891176004_n-300x300.jpg",
    },
    {
      quote: "Rus has truly helped me take my tracks to the next level, whether it's mixing, mastering, production or music business.",
      name: "Nicolas K",
      role: "DJ & Producer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2023/02/315355245_3301396186845452_2314762611349232539_n-300x300.jpg",
    },
  ] as Testimonial[],

  modules: [
    {
      title: "Foundations of Microdynamics",
      moduleNumber: "MODULE 01",
      topics: ["Importance of Microdynamics", "Microdynamics vs. Macrodynamics", "Analyzing and visualizing microdynamics & its impact on our song"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.11.23-scaled.jpg",
    },
    {
      title: "Advanced Processing Tools",
      moduleNumber: "MODULE 02",
      topics: ["Multiplicity - Advanced multiband settings", "MAutoDynamicEQ - Sidechaining, Expansion, Compression", "Tools - Spiff, Ozone 11"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.11.05-scaled.jpg",
    },
    {
      title: "Microdynamic Applications for Production",
      moduleNumber: "MODULE 03",
      topics: ["Microdynamics for groove and excitement during Production", "Micromodulation on individual elements with Shaperbox 3"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.12.13-scaled.jpg",
    },
    {
      title: "Microdynamic Applications for Mixing",
      moduleNumber: "MODULE 04",
      topics: ["Low End Coherence", "Microdynamics applied on Vocal Mixing", "Microdynamic adjustments on Drums"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/Screenshot-2025-05-05-at-13.11.40-scaled.jpg",
    },
    {
      title: "Mastering-Level Microdynamic Control",
      moduleNumber: "MODULE 05",
      topics: ["Utilizing Your Side Channel Full Potential", "Squeezing extra loudness during Mastering", "Multiband Tools & Microdynamic Limiting"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/04/promo-1.jpg",
    },
    {
      title: "Bonus Section",
      moduleNumber: "MODULE 06",
      topics: ["Always updated with new Videos", "Presets and Resources"],
      imageSrc: "https://www.slatin.pro/wp-content/uploads/2025/05/punctuate.jpg",
    },
  ] as Module[],

  faqItems: [
    {
      question: "Who, specifically, is this Course for?",
      answer: `<strong>This Program is Tailored for Producers and Mixing Engineers that:</strong><br><br>
        <ul class="list-disc ml-5 space-y-2">
          <li>Want to cut through the noise of infinite misleading content & learn the "WHYs" behind each technique.</li>
          <li>Want to improve their technical skills and knowledge of music production, mixing and mastering.</li>
          <li>Are willing to invest in their education and development.</li>
        </ul>`,
    },
    {
      question: "What language is the course taught in?",
      answer: "The course is taught in English, with subtitles available in both English and Spanish to help you follow along comfortably.",
    },
    {
      question: "Is this course compatible with my current studies in music at a school or institute?",
      answer: "100%! While formal education provides a structured curriculum and access to resources, mentoring can offer personalized guidance and support that can enhance and supplement the learning experience.",
    },
    {
      question: "Do you have experience in teaching and mentoring?",
      answer: "Absolutely! With over 8 years of experience teaching at various international music institutes, I have successfully trained hundreds of students. These institutes include: Anonymous Studios (Los Angeles), SAE Institute (Madrid), Millenia (Valencia), DJP Music School (Madrid). I have also worked with numerous students one-on-one, many of whom have gone on to achieve great success in the music industry.",
    },
    {
      question: "What Equipment (Hardware) do I need?",
      answer: "You'll need a computer or laptop, plus a reliable pair of headphones or studio monitors (ideally in an acoustically treated space). Any setup you're comfortable working with will do the job.",
    },
    {
      question: "What DAW & Software do I need?",
      answer: "We will be using Ableton Live 12 and Reaper during the lessons. But all the techniques and concepts are 100% compatible with any other DAW.",
    },
    {
      question: "What if I have more questions?",
      answer: `For any questions, you can email our Studio Manager at: <a href="mailto:admin@slatin.pro" class="text-accent-red hover:underline">admin@slatin.pro</a>.`,
    },
  ] as FaqItem[],
};
