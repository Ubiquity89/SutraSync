import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navLinkClass = ({ isActive }) =>
  `
  relative
  pb-2
  transition-all
  ${
    isActive
      ? "text-[#3A83CC] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full after:bg-[#3A83CC]"
      : "text-[#1A3552] hover:text-[#3A83CC]"
  }
`;
  return (
    <header
  className="
  sticky
  top-0
  z-50
  bg-white
  border-b
  border-slate-200
  shadow-sm
"
>
      <div className="max-w-[1200px] mx-auto px-6 font-semibold underline-offset-4">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
<Link to="/">
          <img
            src="/image.png"
            alt="logo"
            className="h-12"
          /></Link>

          {/* Desktop Menu */}

        <nav className="hidden lg:block">
  <ul className="flex items-center gap-10">

    <li>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/services" 
        className={navLinkClass}
      >
        Services
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/about" 
        className={navLinkClass}
      >
        About
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/portfolio" 
        className={navLinkClass}
      >
        Portfolio
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/blog" 
        className={navLinkClass}
      >
        Blog
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/lead" 
        className={ navLinkClass}
      >
        Lead Generation
      </NavLink>
    </li>

  </ul>
</nav>

          {/* Desktop Button */}

          <button
            className="
            hidden
            lg:flex
            h-11
            px-6
            rounded-lg
            text-white
            items-center
            gap-2
            bg-gradient-to-r
            from-[#234A7D]
            to-[#3A83CC]
          "
          >
            <Link
              to="/contact"
              className="flex items-center gap-2"
            >
              Book a demo
              <ArrowRight size={16} />
            </Link>
          </button>

          {/* Mobile Toggle */}

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

      {isOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/40 z-40 lg:hidden"
      onClick={() => setIsOpen(false)}
    />

    {/* Drawer */}
    <div
      className="
        fixed
        top-0
        right-0
        h-screen
        w-72
        bg-white
        shadow-2xl
        z-50
        lg:hidden
      "
    >
      <div className="flex flex-col p-6 gap-4">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={() => setIsOpen(false)}>
          Services
        </NavLink>

        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>

        <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>
          Portfolio
        </NavLink>

        <NavLink to="/blog" onClick={() => setIsOpen(false)}>
          Blog
        </NavLink>

        <NavLink to="/lead" onClick={() => setIsOpen(false)}>
          Lead Generation
        </NavLink>
      </div>
    </div>
  </>
)}

      </div>
    </header>
  );
}