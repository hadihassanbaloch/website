import React from 'react'

export default function Hero() {
  return (
    <section className="px-[10px] py-16 flex justify-center">
      <div className="relative w-full rounded-3xl bg-neutral-100 shadow-md">
        {/* Top bars */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-48 w-[2px] bg-gradient-to-b from-transparent via-gray-400 to-transparent"
            />
          ))}
        </div>

        {/* Content (cleared by padding) */}
        <div className="pt-60 pb-60 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-7xl text-center">
            Creative Energy
          </h1>
          <h2 className="mt-4 text-center text-xl text-red-500 md:text-2xl lg:text-3xl">
            Igniting Digital Innovation, One Vision at a Time
          </h2>
          <p className="mt-6 text-center text-gray-700 leading-relaxed md:text-lg max-w-3xl mx-auto">
            Transform your boldest ideas into breakthrough digital experiences.
            We combine cutting-edge technology with creative brilliance to deliver
            solutions that don’t just meet the future—they create it.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              Explore Our Solutions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button className="rounded-full border-2 border-red-500 px-6 py-3 text-red-500 transition hover:bg-red-500 hover:text-white">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Bottom bars */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-48 w-[2px] bg-gradient-to-b from-transparent via-gray-400 to-transparent"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
