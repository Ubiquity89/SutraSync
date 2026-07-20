import { ArrowRight, Menu, X, Mail, Phone } from "lucide-react";
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

  const mobileLinkClass = ({ isActive }) =>
    `
    flex
    items-center
    py-4
    pl-4
    rounded-xl
    transition-all
    font-medium
    ${
      isActive
        ? "bg-blue-50 text-[#3A83CC] border-l-4 border-[#3A83CC]"
        : "text-slate-800 hover:bg-slate-50"
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 font-semibold underline-offset-4">

        <div className="h-16 sm:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src="/image.png"
              alt="logo"
              className="h-10 sm:h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">

              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/portfolio" className={navLinkClass}>
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className={navLinkClass}>
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink to="/lead" className={navLinkClass}>
                  Lead Generation
                </NavLink>
              </li>

            </ul>
          </nav>

          {/* Desktop CTA */}
          <button
            className="
              hidden
              lg:flex
              h-11
              px-5
              xl:px-6
              rounded-lg
              text-white
              text-sm
              xl:text-base
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
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

        </div>

        {/* Mobile Menu */}

             {/* Mobile Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[310px]
                bg-gradient-to-b
                from-white
                to-slate-50
                shadow-2xl
                z-50
                lg:hidden
                flex
                flex-col
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200">

                <div>
                  <img
                    src="/image.png"
                    alt="logo"
                    className="h-10"
                  />

                 
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    hover:bg-slate-200
                    transition
                  "
                >
                  <X size={20} />
                </button>

              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto px-5 py-5">

                <nav className="space-y-2">

                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    Portfolio
                  </NavLink>

                  <NavLink
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    Blog
                  </NavLink>

                  <NavLink
                    to="/lead"
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClass}
                  >
                    Lead Generation
                  </NavLink>

                  

                </nav>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-8
                    h-12
                    rounded-xl
                    text-white
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-gradient-to-r
                    from-[#234A7D]
                    to-[#3A83CC]
                    shadow-lg
                  "
                >
                  Book a Demo
                  <ArrowRight size={18} />
                </Link>

              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 p-6">

                <div className="flex items-center gap-3 text-slate-600 text-sm">

                  <Mail
                    size={16}
                    className="text-[#3A83CC]"
                  />

                  hello@sutrasync.com

                </div>

                <div className="flex items-center gap-3 text-slate-600 text-sm mt-3">

                  <Phone
                    size={16}
                    className="text-[#3A83CC]"
                  />

                  +91 98765 43210

                </div>

              </div>

            </div>
          </>
        )}

      </div>
    </header>
  );
}