import React from "react";

const team = [
  {
    name: "Sarah Chen",
    title: "CEO & Founder",
    avatar: "/src/assets/team/sarah.jpg",
    linkedin: "#",
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO",
    avatar: "/src/assets/team/marcus.jpg",
    linkedin: "#",
  },
  {
    name: "Elena Kowalski",
    title: "Lead Designer",
    avatar: "/src/assets/team/elena.jpg",
    linkedin: "#",
  },
  {
    name: "David Thompson",
    title: "Senior Developer",
    avatar: "/src/assets/team/david.jpg",
    linkedin: "#",
  },
  {
    name: "Priya Patel",
    title: "Marketing Lead",
    avatar: "/src/assets/team/priya.jpg",
    linkedin: "#",
  },
  {
    name: "Michael Lee",
    title: "Product Manager",
    avatar: "/src/assets/team/michael.jpg",
    linkedin: "#",
  },
  {
    name: "Alex Kumar",
    title: "UX Specialist",
    avatar: "/src/assets/team/alex.jpg",
    linkedin: "#",
  },
  {
    name: "Sophie Anderson",
    title: "Business Analyst",
    avatar: "/src/assets/team/sophie.jpg",
    linkedin: "#",
  },
];

export default function Teams() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden">
      <div className="flex flex-col items-center mb-8">
        <div className="h-1 w-24 bg-red-300 rounded-full mb-4" />
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-2">
          <span className="text-neutral-900">Meet Our <span className="text-red-500">Team</span></span>
        </h2>
        <p className="text-xl text-gray-500 text-center max-w-3xl">
          The creative minds and technical experts behind our innovative digital solutions
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center py-10 px-4 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-6"
            />
            <div className="text-xl font-semibold text-gray-900 mb-1">{member.name}</div>
            <div className="text-gray-500 mb-4">{member.title}</div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 hover:bg-red-100 transition-colors group mt-2"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.25-1.22 1.66 0 3 1.34 3 3v6z"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}