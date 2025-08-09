// src/pages/Projects.jsx
import React from 'react'
import HRMCO from '/src/assets/HRMCO.jpg'
import Logisticly from '/src/assets/logisticly.jpg'
import Academicos from '/src/assets/learning.jpg'
import SetRestGo from '/src/assets/SetRestGo.jpg'

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Featured Solutions Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 text-red-500 font-medium text-lg shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Featured Solutions
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-neutral-900 mb-6">
          Our Digital <span className="text-red-500">Solutions</span>
        </h1>
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center text-slate-600 max-w-2xl mx-auto mb-16">
          Discover our comprehensive suite of web applications designed to revolutionize
          business operations across industries.
        </p>

        {/* HRMCO Project Feature */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text & Features */}
          <div className="flex-1">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 rounded-lg bg-blue-100 text-blue-500 font-medium text-lg shadow-sm">
                Human Resources Made Simple
              </span>
            </div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">HRMCO</h2>
            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Comprehensive HR management platform with employee analytics, performance tracking, and automated workflows.
            </p>
            {/* Features */}
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                  {/* User Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6-8a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Employee Management</div>
                  <div className="text-slate-500 text-base">Comprehensive employee profiles and data</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                  {/* Analytics Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19V6m4 13V10m4 9v-4m-8 4v-2m-4 2v-6" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Analytics Dashboard</div>
                  <div className="text-slate-500 text-base">Real-time HR metrics and insights</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                  {/* Calendar Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Attendance Tracking</div>
                  <div className="text-slate-500 text-base">Automated time and attendance system</div>
                </div>
              </li>
            </ul>
            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg shadow transition"
            >
              Explore HRMCO
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xl group">
              {/* Browser window frame */}
              <div className="rounded-3xl bg-blue-100/30 shadow-lg p-6 pt-10 pb-8 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Browser bar */}
                <div className="absolute top-0 left-0 w-full flex items-center px-6 pt-4">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="ml-auto text-slate-400 text-sm font-medium">Employee Dashboard</span>
                </div>
                {/* Screenshot */}
                <img
                  src={HRMCO}
                  alt="HRMCO Dashboard"
                  className="rounded-2xl mt-8 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logisticly Project Feature */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mt-24">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xl group">
              {/* Device frame */}
              <div className="rounded-3xl bg-[#0f172a] shadow-lg p-6 pt-10 pb-8 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Screenshot */}
                <img
                  src={Logisticly}
                  alt="Logisticly Dashboard"
                  className="rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          {/* Right: Text & Features */}
          <div className="flex-1">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 rounded-lg bg-green-100 text-green-600 font-medium text-lg shadow-sm">
                Smart Logistics Solutions
              </span>
            </div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Logisticly</h2>
            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Advanced logistics platform with real-time tracking, route optimization, and automated inventory management.
            </p>
            {/* Features */}
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
                  {/* Truck Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V5a1 1 0 011-1h5a1 1 0 011 1v12m-1 4a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2zm13-4V9a1 1 0 00-1-1h-5V5a1 1 0 00-1-1H4a1 1 0 00-1 1v12" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Fleet Management</div>
                  <div className="text-slate-500 text-base">Real-time vehicle tracking and management</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
                  {/* Route Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="18" cy="5" r="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 17V7a2 2 0 012-2h8" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Route Optimization</div>
                  <div className="text-slate-500 text-base">AI-powered route planning and optimization</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
                  {/* Clock Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Delivery Tracking</div>
                  <div className="text-slate-500 text-base">Real-time shipment status and updates</div>
                </div>
              </li>
            </ul>
            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow transition"
            >
              Explore Logisticly
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Academicos Project Feature */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-24">
          {/* Left: Text & Features */}
          <div className="flex-1">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 rounded-lg bg-purple-100 text-purple-600 font-medium text-lg shadow-sm">
                Education Reimagined
              </span>
            </div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Academicos</h2>
            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Modern learning management system with interactive courses, progress tracking, and virtual classrooms.
            </p>
            {/* Features */}
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl">
                  {/* Book Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4h9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12a2 2 0 002 2h8V4H6a2 2 0 00-2 2z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Course Management</div>
                  <div className="text-slate-500 text-base">Interactive course creation and delivery</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl">
                  {/* Video Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16 10,8" fill="white" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Virtual Classroom</div>
                  <div className="text-slate-500 text-base">Live video sessions and collaboration</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl">
                  {/* Award Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 14h-7l-2 6h11l-2-6z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Progress Tracking</div>
                  <div className="text-slate-500 text-base">Detailed learning analytics and achievements</div>
                </div>
              </li>
            </ul>
            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold text-lg shadow transition"
            >
              Explore Academicos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xl group">
              {/* Browser window frame */}
              <div className="rounded-3xl bg-purple-100/30 shadow-lg p-6 pt-10 pb-8 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Browser bar */}
                <div className="absolute top-0 left-0 w-full flex items-center px-6 pt-4">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="ml-auto text-slate-400 text-sm font-medium">Course Dashboard</span>
                </div>
                {/* Screenshot */}
                <img
                  src={Academicos}
                  alt="Academicos Dashboard"
                  className="rounded-2xl mt-8 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SetRestGo Project Feature */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mt-24">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xl group">
              {/* Device frame */}
              <div className="rounded-3xl bg-[#18181b] shadow-lg p-6 pt-10 pb-8 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Screenshot */}
                <img
                  src={SetRestGo}
                  alt="SetRestGo Dashboard"
                  className="rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          {/* Right: Text & Features */}
          <div className="flex-1">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 rounded-lg bg-orange-100 text-orange-500 font-medium text-lg shadow-sm">
                Food Ordering Revolution
              </span>
            </div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">SetRestGo</h2>
            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Comprehensive food ordering platform with menu management, real-time tracking, and customer analytics.
            </p>
            {/* Features */}
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl">
                  {/* Menu Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Menu Management</div>
                  <div className="text-slate-500 text-base">Dynamic menu creation and pricing</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl">
                  {/* Order Tracking Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Order Tracking</div>
                  <div className="text-slate-500 text-base">Real-time order status and updates</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl">
                  {/* Star/Review Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">Customer Reviews</div>
                  <div className="text-slate-500 text-base">Integrated rating and feedback system</div>
                </div>
              </li>
            </ul>
            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg shadow transition"
            >
              Explore SetRestGo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        {/* End SetRestGo */}
         <div className="flex flex-col items-center mt-32 mb-8">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-white text-xl font-semibold shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Ready to transform your business?
            </span>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-[#ff5b4d] text-white font-bold text-lg shadow transform transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 focus:outline-none"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg border-2 border-[#ff5b4d] text-[#ff5b4d] font-bold text-lg bg-white transition-colors duration-200 focus:outline-none
                hover:bg-[#ff5b4d] hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              View Portfolio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        {/* End CTA */}
      </div>
    </section>
  )
}
