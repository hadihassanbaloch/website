import { NavLink } from 'react-router-dom'
import logo from '../assets/Symbol.png'

export default function Navbar() {
  return (
    <nav className="relative z-10 px-[10px] py-6 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="Creative Energy Logo" className="h-10 w-10" />
      </NavLink>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center space-x-6 bg-white bg-opacity-90 rounded-full px-6 py-2 shadow-md">
        {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((label) => (
          <li key={label}>
            {label === 'Services' ? (
              // In-page anchor to scroll to the Services section
              <a
                href="#services"
                className="text-gray-800 font-semibold hover:text-[#ff5b4d] transition-colors"
              >
                {label}
              </a>
            ) : label === 'Portfolio' ? (
              // In-page anchor to scroll to the Projects section
              <a
                href="#projects"
                className="text-gray-800 font-semibold hover:text-[#ff5b4d] transition-colors"
              >
                {label}
              </a>
            ) :label === 'About' ? (
              // In-page anchor to scroll to the About section
              <a
                href="#clients"
                className="text-gray-800 font-semibold hover:text-[#ff5b4d] transition-colors"
              >
                {label}
              </a>
            ) :label ==='Contact' ? (
              <a
                href="#contact"
                className="text-gray-800 font-semibold hover:text-[#ff5b4d] transition-colors"
              >
                {label}
              </a>
            ) : (
              // Regular NavLink for other items
              <NavLink
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className="text-gray-800 font-semibold hover:text-[#ff5b4d] transition-colors"
              >
                {label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Book a Call button */}
      <a href="#contact">
        <button
          className="
            hidden md:inline-block 
            bg-[#ff5b4d] text-white 
            px-6 py-2 rounded-full 
            shadow-lg 
            transition-transform transition-shadow duration-200 ease-out
            hover:scale-105 hover:shadow-2xl
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
          "
        >
          Book a Call
        </button>
      </a>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-white">☰</button>
    </nav>
  )
}
