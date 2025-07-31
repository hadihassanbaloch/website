// src/pages/Contact.jsx
import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden">
      {/* Header */}
      <div className="text-center px-[10px] mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Ready to bring your creative vision to life? Let’s start the conversation.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-[10px]">
        {/* Left Card: Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Let’s Connect</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Mail className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">hello@creativeenergy.com</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Phone className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </li>
          </ul>
          <hr className="my-6 border-gray-200" />
          <p className="text-gray-500 text-sm">
            We typically respond within 24 hours. For urgent inquiries, please call us directly.
          </p>
        </div>

        {/* Right Card: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                placeholder="Your company name (optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Tell us about your project, goals, or any questions you have…"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-600 transition-transform duration-200 ease-out hover:scale-105"
            >
              <Send className="w-5 h-5 -ml-1" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
