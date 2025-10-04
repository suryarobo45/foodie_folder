import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-[50] bg-[#beb996]">
      <div className="container mx-auto flex items-center justify-between py-4 px-5">
        {/* Logo */}
        <img src={logo} alt="Foodie Logo" className="h-14" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-9 font-semibold text-white text-xl items-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#beb996] text-white text-lg px-5 py-6 absolute top-16 left-0 w-full shadow-lg">
          <ul className="flex flex-col space-y-5 font-semibold">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
          </ul>
        </div>
      )}
    </header>
  );
}
