import React from "react";

const partners = [
  { name: "Figma", logo: "/src/assets/partners/figma.png" },
  { name: "OpenAI", logo: "/src/assets/partners/openai.svg" },
  { name: "AWS", logo: "/src/assets/partners/Amazon.svg" },
  { name: "Google Cloud", logo: "/src/assets/partners/Google-Cloud-logo.png" },
  { name: "Azure", logo: "/src/assets/partners/Azure.png" },
];

const clients = [
  { name: "StartupHub", logo: "/src/assets/clients/startuphub.svg" },
  { name: "ManufacturingCo", logo: "/src/assets/clients/manufacturingco.svg" },
  { name: "MediaStream", logo: "/src/assets/clients/mediastream.svg" },
  { name: "FoodieChain", logo: "/src/assets/clients/foodiechain.svg" },
  { name: "TravelWise", logo: "/src/assets/clients/travelwise.svg" },
];

function SlidingRow({ items, altPrefix = "" }) {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-10 animate-slide-x">
        {items.concat(items).map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-lg px-10 py-6 flex items-center min-w-[220px] mx-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.7) 70%, rgba(240,240,240,0.5) 100%)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <img
              src={item.logo}
              alt={`${altPrefix}${item.name} logo`}
              className="h-10 w-auto mx-auto"
              style={{ maxWidth: 120 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-24 relative overflow-hidden"
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
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
          Partners &amp; Clients
        </h2>
        <p className="text-xl text-white/80 text-center mb-16">
          Trusted by leading companies worldwide
        </p>

        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-white text-center mb-8">
            Strategic Partners
          </h3>
          <SlidingRow items={partners} altPrefix="" />
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-white text-center mb-8">
            Our Clients
          </h3>
          <SlidingRow items={clients} altPrefix="" />
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