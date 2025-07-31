// src/components/Pricing.jsx
import React from 'react'
import { Shield, Phone, User } from 'lucide-react'


export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-10 px-[10px]">
        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 text-red-500 font-medium text-sm shadow-sm mb-4">
          Pricing Plans
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="text-neutral-900">Choose Your Creative </span>
          <span className="text-red-500">Partnership</span>
        </h2>
        <p className="text-xl text-gray-500 text-center max-w-3xl">
          Transparent pricing designed to scale with your business needs. No hidden
          fees, no surprises—just exceptional design at a predictable cost.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-stretch">
        {/* Standard Plan */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-gray-300 p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Standard</h3>
            <p className="text-gray-500 mb-6">
              Perfect for growing businesses with focused project needs
            </p>
            <div className="flex items-end mb-8">
              <span className="text-5xl font-extrabold text-gray-900">
                $2,000
              </span>
              <span className="text-lg text-gray-500 ml-2 mb-1">
                per month
              </span>
            </div>
            <ul className="space-y-3 text-base mb-8">
              {[
                '1 active project',
                '2 revisions per month',
                '48-hour response time',
                'Email support',
                'Basic analytics',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="text-red-50 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Button with hover pop */}
          <button className="
            mt-4 w-full py-3 bg-black text-xl text-white rounded-xl font-semibold shadow
            transform transition-transform duration-200 ease-out hover:scale-105
          ">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-red-50 rounded-2xl shadow-lg border-2 border-red-300 p-10 flex flex-col justify-between ring-2 ring-red-200 min-h-[600px]">
          {/* Most Popular Badge */}
          <span className="absolute top-0 right-0 bg-red-400 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm z-10">
            <svg
              className="inline-block w-4 h-4 mr-1 -mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            Most Popular
          </span>

          <div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-gray-700 mb-6">
              Ideal for established businesses requiring comprehensive design
              solutions
            </p>
            <div className="flex items-end mb-8">
              <span className="text-5xl font-extrabold text-gray-900">
                $4,000
              </span>
              <span className="text-lg text-gray-700 ml-2 mb-1">
                per month
              </span>
            </div>
            <ul className="space-y-3 text-base mb-8">
              {[
                'Unlimited projects',
                'Unlimited revisions',
                '24-hour response time',
                'Priority phone & email support',
                'Advanced analytics & reporting',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="text-red-400 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Button with hover pop */}
          <button className="
            mt-4 w-full py-3 bg-red-400 text-xl text-white rounded-xl font-semibold shadow
            transform transition-transform duration-200 ease-out hover:scale-105
          ">
            Start Premium
          </button>
        </div>
      </div>
      {/* Custom Solution CTA */}
      <div className="mt-4 px-[120px]">
        <div className="mx-w-4xl mx-auto bg-neutral-900 text-white rounded-xl p-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 space-y-6 mb-10">
              <h3 className="text-2xl font-semibold">Need a Custom Solution?</h3>
              <p className="text-base text-gray-200">
                Every business is unique. Let’s discuss a tailored plan that fits
                your specific needs and budget.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-red-500" />
                  <span>30-day satisfaction guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-red-500" />
                  <span>Free consultation call</span>
                </li>
                <li className="flex items-center gap-3">
                  <User className="w-6 h-6 text-red-500" />
                  <span>Dedicated project manager</span>
                </li>
              </ul>
            </div>

            {/* Schedule Button */}
            <div>
              <button className="
                bg-white text-neutral-900 font-semibold
                px-6 py-3 rounded-full shadow-lg
                transform transition-transform duration-200 ease-out
                hover:scale-105
              ">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>      
    
  )
}
