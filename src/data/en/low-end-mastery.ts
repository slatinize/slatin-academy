import type { Testimonial, Module, FaqItem, Feature, NumberedItem } from '../types';

export const pageData = {
  meta: {
    title: "Low-End Mastery: The Complete Low-End Mixing Course | SLATIN Academy",
    description: "Master sub-bass, kick, bass and low-mids. A practical online course for punchy, loud, club-ready mixes that translate on every system — by Ruslan Slatin.",
    keywords: "low end mixing, low end mastery, sub bass mixing, bass mixing, kick and bass mixing, low mids mixing, mixing course online, mix translation, club ready mix, Ruslan Slatin, audio engineering course",
    ogImageAlt: "Low-End Mastery — the complete low-end mixing course by SLATIN Academy",
  },

  hero: {
    badgeText: "Course",
    title: 'Low-End<br><span class="squiggle">Mastery</span>',
    subtitle: '<span style="font-size: 1.25rem; line-height: 1.6;"><strong>Struggling to get your low end right? From kick and bass chemistry to perfect translation across all systems...</strong></span><br><br><span style="font-size: 1.05rem; line-height: 1.6; opacity: 0.8;">Acquire the techniques, tools and ear training you need to achieve punchy, polished low-end mixes.</span>',
    ctaText: "Get Full Access",
    ctaHref: "#pricing",
    secondaryCtaText: "See Curriculum",
    secondaryCtaHref: "#modules",
  },

  splitSections: {
    getLoud: {
      heading: 'Get Real <span class="squiggle-basic">Loud</span>',
      paragraphs: [
        "Can't hit your target LUFS without destroying your dynamics?",
        'In most cases, it is a <strong class="text-white">low-end issue.</strong>',
        "In this course, I'll show you exactly what it takes to achieve loud, punchy mixes that still breathe.",
      ],
      accent: "And it is much more than clipping and limiting... 😏",
    },
    kickBass: {
      heading: 'Nail Your <span class="squiggle-basic">Kick & Bass</span>',
      paragraphs: [
        "You probably already use sidechain.",
        "BUT, what if I told you that...",
      ],
      accent: "Sidechain is not enough... 🫣",
      afterAccent: [
        "When you're chasing that tight, punchy Kick & Bass relationship that pros obsess over?",
      ],
      bold: "I'll walk you through the exact process I use on every project.",
    },
    translation: {
      heading: 'Perfect <span class="squiggle-basic">Translation</span>',
      paragraphs: [
        'Sounds great in the studio but a <strong class="text-white">disaster in the car or club?</strong> 🙉',
        'Discover the <strong class="text-accent-red">3 keys to flawless low-end translation.</strong>',
        "Make your tracks hit hard on every system and keep your clients coming back.",
        "+ Stop wasting hours on revision after revision...",
      ],
    },
    monoWide: {
      heading: 'Mono and <span class="squiggle-basic">Wide</span>',
      paragraphs: [
        'Think mono-compatible wide bass is impossible? <strong class="text-white">Think again.</strong>',
        'Learn the exact techniques top sound designers use to craft <strong class="text-accent-red">powerful, wide and fully mono-compatible</strong> basslines.',
      ],
    },
    saveTime: {
      heading: 'Save Your <span class="squiggle-basic">Time</span>',
      paragraphs: [
        'Sound Selection is <strong class="text-white">KEY...</strong>',
      ],
      accent: "And it is 80% of your final sound.",
      afterAccent: [
        'Whether you use Splice or have an extensive sample library, I\'ll show you how to pick the right samples and <strong class="text-white">stop second-guessing.</strong>',
      ],
    },
    genres: {
      heading: '<span class="squiggle-basic">Multiple Genres</span>',
      paragraphs: [
        "Each genre has its unique way of addressing low-end frequencies.",
        'This course is tailored for <strong class="text-white">creators of modern and loud music</strong>.',
        'You\'ll see exactly how to handle kick and bass in <strong class="text-white">EDM, Pop/Funk, Trap and Reggaeton</strong>.',
      ],
    },
    community: {
      heading: 'Private <span class="squiggle-basic">Community</span>',
      paragraphs: [
        "This is not your average video course...",
      ],
      accent: "If you have any questions left, join the chat!",
      afterAccent: [
        'Share your work, <strong class="text-white">get feedback</strong> and answers to your questions and find like-minded people.',
      ],
    },
  },

  painPoints: {
    badge: "+ 400 Happy Students",
    headline: 'Your low end is the foundation, <span class="text-accent-red">everything else follows.</span>',
    items: [
      'Mixes sound <strong>muddy or thin</strong> and the low end never sits right, no matter what you try.',
      'Tracks sound great in the studio but <strong>fall apart</strong> on other systems: car, club or phone.',
      "Can't get masters <strong>loud enough</strong> without the low end distorting or losing punch.",
    ],
  },

  featureGrid: {
    subtitle: "WHAT YOU WILL MASTER",
    features: [
      {
        iconSrc: "/images/Ellipse-6-150x150.png",
        title: "Kick & Bass Chemistry",
        description: "Learn the science behind the perfect kick and bass relationship, including dynamic phase rotation and advanced sidechain techniques.",
      },
      {
        iconSrc: "/images/low-end-translation.png",
        title: "Perfect Low-End Translation",
        description: "Master the craft of translating low-end anywhere, with a framework built for <strong>the real world</strong>.",
      },
      {
        iconSrc: "/images/loudness-icon.png",
        title: "Loudness Without Compromise",
        description: "Push loudness to commercial levels without losing impact or dynamics, beyond presets, beyond limiters, <strong>real loudness</strong>.",
      },
      {
        iconSrc: "/images/sound-selection-icon.png",
        title: "Sound Selection & Shaping",
        description: "Train your ear to pick the right sounds from the start and shape kicks that already sit in the mix, <strong>half the battle is won before EQ</strong>.",
      },
    ] as Feature[],
  },

  idealFor: {
    title: "This course is ideal if you...",
    items: [
      {
        number: "01",
        text: "Struggle with <strong>low-end translation</strong>: your mixes sound different on every playback system.",
      },
      {
        number: "02",
        text: "Want to understand the <strong>rhythmic foundation of modern music</strong> at a detailed, professional level.",
      },
      {
        number: "03",
        text: "Feel your <strong>masters hit a ceiling</strong>: when they're loud enough they lose clarity, and when they're clean they lose punch.",
      },
    ] as NumberedItem[],
  },

  moduleCarousel: {
    subtitle: "7 modules · 25+ lessons · Everything you need to nail your low end",
  },

  teacherBio: {
    bio: [
      'Ruslan Slatin is an <strong>award-winning</strong> producer and <strong>sound engineer</strong> with decades of experience in the global music industry.',
      'Celebrated for his distinctive sound and top-tier productions, he has collaborated with some of the most prestigious <strong>international labels</strong> and artists.',
      'In addition to running a high-performing commercial mastering studio, completing over 1,000 projects annually, <strong>Ruslan</strong> is a passionate educator.',
      'Through specialized courses and private mentoring, he empowers music producers to elevate their sound using proven and novel sound sculpting techniques.',
    ],
  },

  pricing: {
    subtitle: "Get the kick and bass <strong class='text-white'>clarity, punch and translation</strong> that your mixes have been missing.",
    price: "159€",
    features: [
      "Unlimited Access to The Course",
      "Access to Private Community",
      "Presets and Resources",
      "Bonus Modules and Videos",
      "Ongoing Updates",
      "Live Q&A Sessions with SLATIN",
    ],
    ctaText: "GET FULL ACCESS 🔑",
    ctaHref: "https://learn.slatin.pro/purchase?product_id=5700498",
  },

  testimonials: [
    {
      quote: "He's an expert in producing, mixing and mastering. With his help, I received international recognition from Tiesto, Gate21, DJs From Mars and more. I highly recommend Slatin.",
      name: "RICO",
      role: "DJ & Producer",
      avatar: "https://uploads.teachablecdn.com/attachments/kG4eHuWTEirpaies5HfQ_rico.jpg",
    },
    {
      quote: "Slatin has truly helped me take my tracks to the next level. Whether it's mixing, mastering, production or music business, Slatin will go out of his way to answer whatever questions you may have and make sure you leave a session genuinely content.",
      name: "Nicolas K",
      role: "DJ & Producer",
      featured: true,
      avatar: "https://uploads.teachablecdn.com/attachments/ulbYLEsRoiYbHxF1zSTA_nioc.jpg",
    },
    {
      quote: "As a singer and producer, I needed clarity, direction and a real understanding of mixing. Within weeks, I learned to listen with purpose and make decisions with confidence. Now my tracks sound big, clean and professional.",
      name: "Jaime Hernández",
      role: "Producer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/borja-283x300.jpg",
    },
    {
      quote: "The course with Slatin has been a turning point for me in my criteria as a mixing and mastering engineer. Although I had a good level, it has been a great improvement for the better. I truly recommend it to all producers and mixing engineers of any level.",
      name: "The Wayne",
      role: "Producer & Engineer",
      avatar: "https://www.slatin.pro/wp-content/uploads/2025/05/marc-300x300.jpg",
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
  ] as Testimonial[],

  modules: [
    {
      title: "Low End Theory - Fine\u2011Tuning the Foundation",
      moduleNumber: "MODULE 01",
      topics: ["Why Low End Is So Important?", "Why Is It So Hard to Mix?", "Frequently Asked Questions & Common Mistakes"],
      imageSrc: "/images/module-01-ozone-eq.png",
      imagePosition: "center top",
    },
    {
      title: "Navigating Tools and Challenges in Low-End Mixing",
      moduleNumber: "MODULE 02",
      topics: ["Your Ears", "Speakers & Room", "Headphones", "Metering"],
      imageSrc: "/images/module2-low-end.png",
      imagePosition: "center top",
    },
    {
      title: "Sound Sculpting - Techniques for Mastering the Perfect Kick",
      moduleNumber: "MODULE 03",
      topics: ["What Makes a Perfect Kick?", "Kick Shaping Examples (5 Practical Demonstrations)"],
      imageSrc: "/images/module-03-proq3.png",
      imagePosition: "center top",
    },
    {
      title: "All About The Bass - Achieving Bass Perfection",
      moduleNumber: "MODULE 04",
      topics: ["Saturation", "Mono-Compatibility", "Creating a Mono-Compatible Wide Bassline", "Note Selection"],
      imageSrc: "/images/module-04-vectorscope.png",
      imagePosition: "center top",
    },
    {
      title: "Kick Bass Chemistry - Decoding the Relationship",
      moduleNumber: "MODULE 05",
      topics: ["Kick & Bass - The Ideal Low End", "Dynamic Phase Rotation - Best Kept Secret", "Low-End Coherence", "Optimizing Kick and Bass in the Mastering Stage"],
      imageSrc: "/images/module-05-bassxxl.png",
      imagePosition: "center top",
    },
    {
      title: "Case Studies - Real-Life Examples",
      moduleNumber: "MODULE 06",
      topics: ["EDM Example", "Pop / Dance / Funk Example", "Trap / Hip Hop", "Reggaeton"],
      imageSrc: "/images/module-06-standardclip.png",
      imagePosition: "center top",
    },
    {
      title: "Bonus Lessons",
      moduleNumber: "MODULE 07",
      topics: ["Using Spectre instead of RBass or BassXXL", "Working Towards Loudness", "Low End Mastery Workshop (Live Recording)", "Advanced Kick Shaping & Low End Control"],
      imageSrc: "/images/module-07-rx.png",
      imagePosition: "center top",
    },
  ] as Module[],

  faqItems: [
    {
      question: "Who, specifically, is this Course for?",
      answer: `<strong>This Course is Tailored for Producers and Mixing Engineers that:</strong><br><br>
        <ul class="list-disc ml-5 space-y-2">
          <li>Struggle with getting their low end to translate across different playback systems.</li>
          <li>Want to understand the science and art behind kick and bass relationships.</li>
          <li>Are looking for practical, genre-specific low-end techniques they can apply immediately.</li>
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
