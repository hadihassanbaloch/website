import React, { useRef, useEffect, useState } from "react";

// Example stats data (replace icons with your own SVGs or icon components)
const stats = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
    value: "500+",
    label: "Projects Completed",
    desc: "Successfully delivered projects across various industries with exceptional quality",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20v-6M12 14c-2.5 0-4.5-2-4.5-4.5S9.5 5 12 5s4.5 2 4.5 4.5S14.5 14 12 14z" />
      </svg>
    ),
    value: "98",
    label: "Client Satisfaction",
    desc: "Consistently exceeding client expectations with our innovative solutions",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    value: "50+",
    label: "Team Members",
    desc: "Talented professionals working together to bring your vision to life",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    value: "99.9",
    label: "Uptime Guarantee",
    desc: "Reliable infrastructure ensuring your business is always online",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    value: "15+",
    label: "Awards Won",
    desc: "Recognized for excellence and innovation in digital solutions",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M16 8h2M8 8h2M8 16h8" />
      </svg>
    ),
    value: "20+",
    label: "Industries Served",
    desc: "Diverse experience across multiple sectors and business domains",
  },
];

// Intersection Observer hook for fade-in animation
function useSectionInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function Stats() {
  const [sectionRef, inView] = useSectionInView(0.18);

  return (
    <section
      id="stats"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Starfield effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
          opacity: 0.18,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="h-1 w-24 bg-red-400 rounded-full mb-2" />
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-2" style={{ color: "#fbfbfbff" }}>
            <span className="text-white font-bold">Our <span className="text-red-500">Impact</span> in Numbers</span>
          </h2>
        </div>
        <p className="text-xl text-gray-300 text-center mb-16">
          Transforming businesses through innovative solutions and exceptional service delivery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center text-center relative transition-all duration-700
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                hover:shadow-2xl hover:-translate-y-2 hover:scale-105`}
              style={{
                background:
                  "linear-gradient(135deg,rgba(255,255,255,0.97) 80%,rgba(245,245,245,0.85) 100%)",
                minHeight: 340,
                transitionDelay: inView ? `${idx * 80}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-400 rounded-xl p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
              </div>
              <div className="text-5xl md:text-5xl font-bold text-gray-900 mb-2 flex items-end justify-center">
                {stat.value}
                {stat.highlight && (
                  <span className="text-red-400 text-4xl md:text-3xl ml-1 font-bold">%</span>
                )}
              </div>
              {stat.highlight && (
                <div className="w-24 h-2 bg-red-300 rounded-full mx-auto mb-2 mt-2" />
              )}
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-500 text-base">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Animation styles */}
      <style>
        {`
        @keyframes slide-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-x {
          display: flex;
          width: max-content;
          animation: slide-x 28s linear infinite;
        }
        `}
      </style>
    </section>
  );
}