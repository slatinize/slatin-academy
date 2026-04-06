import type { Testimonial, FaqItem, FeatureCard, OutcomeCard, PricingPlan, AlumniTestimonial } from '../types';

export const pageData = {
  meta: {
    title: "Mentoring - SLATIN Academy",
    description: "Build a Profitable Music Career on Your Own Terms. Revamp your Mixing and Mastering Skills in Record Time with SLATIN's Mentoring Program.",
  },

  hero: {
    title: "Build a Profitable Music Career on Your Own Terms",
    subtitle: "Revamp your Mixing and Mastering Skills in Record Time 🧨",
    ctaText: "START TODAY",
    ctaHref: "#getaccess",
    subCtaText: "Weekly Calls + Daily Feedback + Pro Community",
  },

  intro: {
    heading: "My name is Ruslan, and I am an Award-Winning Music Producer and Engineer.",
    paragraph: "Music has been my passion since I was young, and I've worked hard to turn it into a thriving career. With +15 years of experience, I'm excited to share my knowledge and guide you on your own path to success.",
  },

  backgroundQuote: 'Unlock your <strong>full potential</strong> and accelerate your growth by joining my <strong>Mentoring Program.</strong>',

  whatsIncluded: '<em><strong><span class="squiggle-basic">What\'s Included?</span></strong></em>',

  extras: {
    title: "+++",
    lines: [
      "Exclusive access to insider information.",
      "Special Music Industry Guests.",
      "Networking and building community with like-minded individuals.",
      "An extensive selection of the best Samples, Presets, and Books.",
      "Email Templates for reaching out to Labels, Managers, and Promoters.",
      '<a href="/fusion" class="text-accent-red hover:underline">FUSION</a> &ndash; Valhalla VintageVerb Reverb Pack &ndash; for free.',
      "And much more&hellip;",
    ],
  },

  outcomes: {
    sectionTitle: 'Key <em><span class="squiggle-basic">Outcomes</span></em>',
  },

  marquee: {
    text: "Start Today",
    subtitle: "Public Registration - Open Now! 🧨",
  },

  alumniTitle: 'Alumni <em><span class="squiggle-basic">Feedback</span></em>',

  testimonials: [
    {
      quote: "The classes with SLATIN have raised the level of my productions, both in sound and creativity. Apart from technical knowledge, he has a great ability to teach, making everything seem easy and making even the most complicated processes accessible to everyone. Without a doubt, I have grown as an artist with him and my motivation and confidence in producing music have increased.",
      name: "Auriga",
      role: "DJ & Producer",
      avatar: "/images/mentoring/avatar-auriga.jpg",
    },
    {
      quote: "SLATIN was the game changer in my life. Today, I am achieving the goals I once dreamed of, thanks to the three years I spent learning from him. He is an incredible and approachable teacher, and his professionalism stands out. I will always be grateful to SLATIN because he played a major part in making me who I am today.",
      name: "Krumel",
      role: "DJ & Producer",
      avatar: "/images/mentoring/avatar-krumel.jpg",
    },
    {
      quote: "Rus has truly helped me take my tracks to the next level. Whether it's mixing, mastering, production, or music business. Rus will go out of his way to answer whatever questions you may have and make sure you leave a session genuinely content. There will always be something new to learn from him!",
      name: "Nicolas K",
      role: "DJ & Producer",
      avatar: "/images/mentoring/avatar-nicolas.jpg",
    },
    {
      quote: "Slatin transformed my production skills and knowledge. We started working together in 2020, and he has been my teacher, mentor, and engineer ever since. He not only taught me how things are done in the mixing process but also the reasoning behind it. While working with Slatin, I have received international support from Tiesto, Gate21, DJs From Mars and many many others!",
      name: "RICO",
      role: "DJ & Producer",
      avatar: "/images/mentoring/avatar-rico.jpg",
    },
    {
      quote: "Ruslan's exceptional human qualities and empathetic nature make it effortless to achieve any goal that one chooses. Thanks to his guidance and advice, I am now working as a professional paid engineer and producer full time.",
      name: "Marco S.",
      role: "Producer & Engineer",
      avatar: "/images/mentoring/avatar-marco-s.jpg",
    },
  ] as Testimonial[],

  featureCards: [
    {
      iconSrc: "/images/mentoring/mentor-photo.jpg",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Top-Rated Mentor & Industry Leader</span>',
      description: "Learn firsthand from a Top-Rated Mentor with a Six-Figure Music Studio.",
    },
    {
      iconSrc: "/images/mentoring/group-calls.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Weekly Group Calls</span>',
      description: "A weekly group call to provide guidance and address any challenges.",
    },
    {
      iconSrc: "/images/mentoring/feedback.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Tailored Feedback</span>',
      description: "Weekly evaluations of your works with constructive feedback and tasks. (Up to 2 video reviews per week)",
    },
    {
      iconSrc: "/images/mentoring/chat.gif",
      iconClass: "w-full h-48 md:h-56",
      iconStyle: "border-radius: 12px",
      title: '<span class="gradient-text-red">Unlimited Chat & QA</span>',
      description: "Direct access to private chat with response within 24 hours + Private Community.",
    },
  ] as FeatureCard[],

  outcomeCards: [
    { title: "Accelerate Your Growth", icon: "wrench", bgColor: "#444444", textColor: "#ffffff" },
    { title: "Develop Your Own Sound", icon: "volume", bgColor: "#DD3333", textColor: "#ffffff" },
    { title: "Get Noticed by Record Labels", icon: "crosshairs", bgColor: "#ffffff", textColor: "#020202" },
    { title: "Get Paid What You're Worth", icon: "money", bgColor: "#DD5D32", textColor: "#ffffff" },
  ] as OutcomeCard[],

  pricingPlans: [
    {
      title: "Group Mentoring",
      subtitle: "Monthly Payments",
      features: [
        "Top Rated Coaching and Mentorship",
        "One Weekly Group Call (70 min)",
        "Unlimited Chat & Questions",
        "Personal Evaluations and Weekly Feedback",
        "Tasks & Exercises",
        "Accountability Check-ins",
        "Curated Samples, Presets and Books",
        "Flat fee, no hidden costs",
        "Three Month Commitment",
      ],
      ctaText: "JOIN TODAY",
      ctaHref: "https://subscribepage.io/accelerator",
      variant: "dark" as const,
    },
    {
      title: "1-On-1 Mentoring",
      subtitle: "Monthly Payments",
      features: [
        "Top Rated Coaching and Mentorship",
        "One Weekly Group Call (70 min)",
        "Unlimited Chat & QA",
        "Personal Evaluations and Weekly Feedback",
        "Tasks & Exercises",
        "Accountability Check-ins",
        "Curated Samples, Presets and Books",
        "Flat fee, no hidden costs",
        "Three Month Commitment",
      ],
      highlightFeatures: [
        "Custom Roadmap / Plan",
        "+ 1-on-1 Weekly Call",
        "Exclusive (Private) Access to SLATIN",
      ],
      ctaText: "JOIN TODAY",
      ctaHref: "https://subscribepage.io/accelerator",
      variant: "light" as const,
    },
  ] as PricingPlan[],

  alumniTestimonials: [
    {
      name: "Pere Bacardit",
      avatar: "/images/mentoring/alumni-pere.jpg",
      review: `<p>Having the opportunity to attend Slatin's mentorships was a big step forward in enhancing my skills in production, mixing, and mastering. Thanks to these sessions, I've gained more tools to achieve the sound I want and communicate more effectively with the people with whom I collaborate and work.</p>
<p>Additionally, these mentorships taught me better organization skills, insights about the music industry, and how to shape my career within it. Unlike other learning formats, these mentorships, being live group classes, constantly triggered learning from everyone's experiences and queries, substantially enhancing learning outcomes. Every new concept had immediate applicability.</p>
<p>Slatin opened up access to excellent resources and materials. Every question was not just answered but broken down to digestible information or addressed with specific videos. If you're looking to seriously level up, this experience is 100% recommended.</p>`,
    },
    {
      name: "Pablo Iglesias",
      avatar: "/images/mentoring/alumni-pablo.jpg",
      review: `<p>It's totally worth it, no doubts there. Ruslan's commitment to our group has been top-notch - adapting to our individual quirks and needs as if each session was a one-on-one. The growth of the group has been nothing short of remarkable. Daily feedback and group chats revealed so much plus all the content has been well documented for future reference.</p>
<p>Personally, this mentorship has been a game-changer for my professional growth. I was at a point where I felt stuck, like my career wasn't moving as I wanted it to. But these classes have helped me not only technically but also in terms of the relationship and dealing with my clients.</p>
<p>The mentorship served as a reality-check, helping us see where we stand as professionals, set clear goals, and map out a plan to achieve them. I'd recommend this course to anyone who is seriously considering this line of work and is willing to put in the time to get the max out of the resources provided.</p>`,
    },
    {
      name: "Sergio Hernae",
      avatar: "/images/mentoring/alumni-sergio-h.jpg",
      review: `<p>The mentorship with Ruslan has been nothing short of fantastic - it's been a positive, constructive, and professional journey all the way. I've improved my sound mixing big time. I used to shy away from mixing for other artists but now, I'm up for it any day.</p>
<p>Ruslan's feedback on my work has always been spot-on, practical, and super helpful. And it's not the generic 'sounds good' kind of feedback. It's detailed pointers like 'try doing parallel compression with a 1176 for the transients' - makes a world of difference.</p>
<p>Ruslan's classes are highly practical and we even dive into the music industry, beyond just mixing and mastering. Now, I've taken other supposedly expert-led courses in the past which, honestly, were nothing like this. With Ruslan, it's about real engagement with your work and growth in your career.</p>`,
    },
    {
      name: "Ignacio Fernandez",
      avatar: "/images/mentoring/alumni-ignacio.jpg",
      review: `<p>Slatin's mentorship has unequivocally been the most enlightening course I've taken on Mixing and Mastering, even outshining year-long courses I've attended. But what's unique is, in addition to technical insights, it also delved into the music industry's nuances and how to shape my career as a mixer.</p>
<p>Being completely devoted to mixing and mastering, watching Slatin work on projects for top-tier artists has completely changed my overall approach and mindset. I've learned to value and optimize my time, leading to a significant uptick in my earnings.</p>
<p>However, the real game-changer is the continuous feedback Slatin offers. Having the space to ask anything and get limitless feedback on my mixes is invaluable. In essence, the amount and depth of learning are completely in my hands. In summary, I'd describe the mentorship as a real game-changer.</p>`,
    },
    {
      name: "Sergio Perez",
      avatar: "/images/mentoring/alumni-sergio-p.jpg",
      review: `<p>200% recommended! In addition to being an absolute professional as a producer and mixing/mastering engineer, Slatin cares a lot about the evolution of all students and covers all the doubts that are raised day by day, making a very personalized follow-up of each case.</p>
<p>It is also worth mentioning the luck of being able to meet such good tutorial colleagues, very interesting colleagues with whom to share experiences in each class and even the possibility of working with some in the future.</p>
<p>Personally and after many years dedicated to production, I can say that there is always a lot to learn and this experience has shown me that. Thank you very much!</p>`,
    },
    {
      name: "Marco Bernal",
      avatar: "/images/mentoring/alumni-marco-b.jpg",
      review: `<p>Being a part of this mentorship group has been quite insightful. Ruslan answered many of my questions, especially those about small, nuanced details that make my song mixes sound better. It's also helped me establish a specific workflow for mixing without losing focus.</p>
<p>In terms of what sets these mentorships apart, I appreciate the approachability in explaining complex concepts in a simple, digestible way. It translates something complex into something simple and applicable.</p>
<p>Overall, this mentorship is highly recommended, especially if you already have basic music production knowledge and you want to take it to the next level to achieve a professional sound.</p>`,
    },
  ] as AlumniTestimonial[],

  faqItems: [
    {
      question: "Who, specifically, is this Mentoring for?",
      answer: `<strong>This Program is Tailored for Producers and Mixing Engineers that:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Want to accelerate their growth, and unlock their full potential in record time.</li><li>Want to cut through the noise of infinite misleading content & learn the "WHYs" behind each technique.</li><li>Want to improve their technical skills and knowledge of music production, mixing, and mastering.</li><li>Need tailored feedback on their work and direct access to an experienced mentor for guidance.</li><li>Want to learn how to promote their music effectively, build their brand, and grow their fanbase.</li><li>Are willing to invest in their education and development.</li><li>Are motivated to improve themselves and committed to achieving their goals.</li></ul>`,
    },
    {
      question: "Who should NOT enroll in this Mentoring?",
      answer: `<strong>This Program is NOT for:</strong><ul class="list-disc pl-5 mt-2 space-y-1"><li>Complete beginners who have no prior knowledge of music production or engineering.</li><li>Individuals who are not willing to invest time and effort in their own growth and development.</li><li>People who are looking for a quick fix or shortcut to success without putting in the necessary work.</li><li>Those who are not open to learning new techniques or approaches.</li><li>Individuals who are not willing to invest in their own education and growth.</li></ul>`,
    },
    {
      question: "Do you have experience in teaching and mentoring?",
      answer: "Absolutely! With over 8 years of experience teaching at various international music institutes, including Anonymous Studios (Los Angeles), SAE Institute (Madrid), Millenia (Valencia), and DJP Music School (Madrid). I have also worked with numerous students one-on-one, many of whom have gone on to achieve great success in the music industry.",
    },
    {
      question: "How is this different from a Music Production School or Institute?",
      answer: `The Mentoring Program provides <strong>personalized guidance</strong> and support <strong>tailored to each individual's needs</strong> and goals. Unlike traditional schools that follow a predetermined curriculum, the Mentoring Program will be customized to a <strong>SMALL GROUP</strong>. Additionally, you will learn firsthand and have daily access to a <strong>professional</strong> with over 15 years of experience in the industry.`,
    },
    {
      question: "How is this different from buying Courses or Tutorials online?",
      answer: `Unlike pre-recorded content, our program is tailored to the needs and aspirations of each individual in the group, and we'll work together to create a <strong>customized plan</strong> that addresses your strengths, weaknesses, and unique challenges. Additionally, the program offers a supportive community, weekly feedback, and <strong>regular accountability check-ins</strong>.`,
    },
    {
      question: "Could you provide me with an outline of the Mentoring Program?",
      answer: "As everyone's needs are unique, we will create a customized plan. Highlights include: Understanding and Applying EQ, Mastering Compression, Advanced Compression / Complex Curves, Mid/Side Processing, Business 101, Social Media Growth, How To Get Clients, Sound Design, Sidechain Compression, Micro-Dynamics, Vocal Mixing, The Magic of Tapes, All Mastering Secrets, Advanced Compression / Tonal Control, Automating your Studio, Using AI for Production, and Dolby Atmos Mixing.",
    },
    {
      question: "What language will the mentoring program be conducted in?",
      answer: "Group mentoring is conducted in English, but one-on-one calls can be held in Spanish and Russian.",
    },
    {
      question: "How long is the 1-on-1 Weekly Call?",
      answer: "The weekly one-on-one call will last for 60 minutes, during which we will provide accountability check-ins, help you execute your custom roadmap/plan, review your projects, finish songs, address any doubts you may have and provide personalized business guidance.",
    },
    {
      question: "How big is the group?",
      answer: "The minimum number of participants for the Group Mentoring program is four, and the maximum is fifteen. This ensures the group is large enough to foster a collaborative and supportive environment while allowing individual attention and feedback.",
    },
    {
      question: "At what time do the classes take place?",
      answer: `The classes are generally scheduled for Mondays at 20:00 CEST (Central European Time). The days and times can be adjusted based on the group's preference. If you cannot assist in person, <strong>all sessions are recorded and shared</strong> with the group on the same day.`,
    },
    {
      question: "What Equipment (Hardware) do I need?",
      answer: "To participate in the Mentoring Program, you will need a computer or laptop with a reliable internet connection, and a pair of headphones or studio monitors of your choice.",
    },
    {
      question: "What DAW & Software do I need?",
      answer: "We will be using Ableton Live 12 and Reaper for the lessons and feedback sessions. But all the techniques and concepts are 100% compatible with any other DAW. If you don't own a specific plugin, I will always show you a Free or Native alternative.",
    },
    {
      question: "How does the payment system work?",
      answer: `This mentoring program is <strong>Subscription based</strong>, and it has a commitment of <strong>Three Months</strong>.`,
    },
    {
      question: "What If I have more questions?",
      answer: `For any questions, you can email our Studio Manager at: <a href="mailto:admin@slatin.pro" class="text-accent-red hover:underline">admin@slatin.pro</a>.`,
    },
  ] as FaqItem[],
};
