import React from 'react'

const testimonials = [
  {
    quote:
      "Creative Energy transformed our digital presence completely. Their strategic approach to our rebrand and website redesign resulted in unprecedented growth. The team's attention to detail and innovative solutions exceeded all our expectations.",
    name: "Touseef Abbas",
    title: "CEO",
    company: "Bestway Logistics",
    avatar: "/src/assets/testimonials/sarah.jpg",
  },
  {
    quote:
      "Their expertise in fintech UX design helped us create an intuitive platform that our users absolutely love. The conversion rates speak for themselves and we couldn't be happier.",
    name: "Muntazir Mehdi",
    title: "CEO & Founder",
    company: "Admire Logistics",
    avatar: "/src/assets/testimonials/emily.jpg",
  },
  {
    quote:
      "Their educational platform design made learning engaging for thousands of students. The innovative approach to UX in education is revolutionary and inspiring.",
    name: "Alex Kumar",
    title: "Product Manager",
    company: "EduTech Pro",
    avatar: "/src/assets/testimonials/alex.jpg",
  },
  {
    quote:
      "Their fashion e-commerce solution captured our brand essence perfectly. The sophisticated design and smooth shopping experience elevated our entire business to new heights.",
    name: "Sophie Anderson",
    title: "Founder",
    company: "StyleNest",
    avatar: "/src/assets/testimonials/sophie.jpg",
  },
  {
    quote:
      "Working with Creative Energy was a game changer for our SaaS launch. The team delivered a seamless user experience and a beautiful interface that our customers love.",
    name: "Michael Lee",
    title: "Co-Founder",
    company: "CloudSync",
    avatar: "/src/assets/testimonials/michael.jpg",
  },
  {
    quote:
      "The branding and website Creative Energy built for us helped us stand out in a crowded market. Their creativity and professionalism are unmatched.",
    name: "Priya Patel",
    title: "Head of Marketing",
    company: "GreenLeaf",
    avatar: "/src/assets/testimonials/priya.jpg",
  },
  {
    quote:
      "From concept to launch, Creative Energy was with us every step of the way. Their technical expertise and dedication ensured our project was a huge success.",
    name: "David Kim",
    title: "CTO",
    company: "MedixAI",
    avatar: "/src/assets/testimonials/david.jpg",
  },
  {
    quote:
      "We saw a significant increase in engagement after our app redesign. Creative Energy's insights and execution were exactly what we needed.",
    name: "Laura Gomez",
    title: "Product Lead",
    company: "Travelio",
    avatar: "/src/assets/testimonials/laura.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden">
      <div className="flex flex-col items-center mb-6">
        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 text-red-500 font-medium text-lg shadow-sm mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Client Success Stories
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-2">
          <span className="text-neutral-900">Real Results from</span>
          <span className="block text-red-500">Real Partnerships</span>
        </h2>
        <p className="text-xl text-gray-500 text-center max-w-3xl mb-12">
          Discover how Creative Energy has helped businesses across industries achieve extraordinary growth through innovative digital solutions and strategic partnerships.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between border border-red-100 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <svg className="w-8 h-8 text-red-300 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h.01M15 17h.01M7 7h10v6a5 5 0 01-5 5H7V7z" />
              </svg>
              <p className="text-gray-800 text-lg leading-relaxed mb-8">{t.quote}</p>
            </div>
            <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover mr-4 border-2 border-red-100"
              />
              <div>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title} <span className="text-red-500 font-medium">{t.company}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}