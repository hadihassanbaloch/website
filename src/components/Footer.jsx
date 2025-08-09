import React from "react";
import logo from "../assets/Symbol.png";

export default function Footer() {
  return (
    <footer id = 'footer' className="py-20 md:py-28 bg-gradient-to-br from-neutral-100 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Logo Circle */}
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <img src={logo} alt="Creative Energy Logo" className="h-10 w-10" />
        </div>
        <div className="mb-2 text-lg font-semibold text-gray-900">Creative Energy</div>
        <div className="text-gray-400 mb-6">Futuristic Digital Solutions</div>
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-[#ff5b4d] font-medium text-base">
            <li><a href="#">Products</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </nav>
        <hr className="w-full border-t border-dashed border-gray-200 mb-6" />
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 px-2">
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <span>© 2024 Creative Energy. All rights reserved.</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lahore, Pakistan
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Twitter">
              <svg className="w-5 h-5 text-gray-400 hover:text-red-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.89a4.28 4.28 0 001.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 003.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.49-.02-.73-.07a4.29 4.29 0 004 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 4.59a8.44 8.44 0 01-2.54.7z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-gray-400 hover:text-red-400 transition rounded-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.25-1.22 1.66 0 3 1.34 3 3v6z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg className="w-5 h-5 text-gray-400 hover:text-red-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5 text-gray-400 hover:text-red-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116c.727 0 1.326-.6 1.326-1.326V1.326C24 .6 23.4 0 22.675 0"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-5 h-5 text-gray-400 hover:text-red-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608C4.517 2.497 5.784 2.225 7.15 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.417 3.678 1.398 2.697 2.379 2.411 3.491 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.345 2.393 1.326 3.374.981.981 2.093 1.267 3.374 1.326C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.345 3.374-1.326.981-.981 1.267-2.093 1.326-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.345-2.393-1.326-3.374-.981-.981-2.093-1.267-3.374-1.326C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}