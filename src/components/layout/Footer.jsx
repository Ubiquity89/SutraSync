import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      bg-gradient-to-r
      from-[#183055]
      to-[#22446B]
      text-white
      "
    >
      <div className="max-w-[1260px] mx-auto px-6">

        {/* Top Footer */}

        <div
          className="
          py-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1.2fr_0.8fr_1.4fr_1fr]
          md:grid-cols-2
      
          gap-8
          lg:gap-10
          "
        >

          {/* Company */}

          <div className="lg:col-span-1">

            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              SutraSync
            </h2>

            <p
              className="
              text-white/70
              leading-7
              text-sm
              "
            >
              We build digital solutions that help
              businesses grow, innovate and succeed
              in the digital world.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="https://www.facebook.com/people/Sutrasync-Technologies-Private-Limited/61586615313208/?rdid=okg8vDGH6wkbNzzb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GLCUxZKbX%2F"
                className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-[#3A83CC]
                transition-all
              "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://in.linkedin.com/company/sutra-sync-technologies"
                className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-[#3A83CC]
                transition-all
              "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/sutrasync_techonologies/"
                className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-[#3A83CC]
                transition-all
              "
              >
                <FaInstagram />
              </a>

            

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-semibold text-base sm:text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link to="/">Home</Link></li>
        
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/lead">Lead Generation</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-semibold text-base sm:text-lg mb-4">
              Our Locations
            </h3>

            <ul className="space-y-3 text-white/70">

            <div className="space-y-4">

  <div>
    <h4 className="font-rajdhani text-white mb-2">
      Headquarters
    </h4>

    <p className="text-white/70 text-sm leading-7">
      Scintilla Apartment, 23,
      1st Main Road,
      4th Phase,
      Yelahanka New Town,
      Bengaluru,
      Karnataka 560064,
      India
    </p>
  </div>

  <div>
    <h4 className="font-rajdhani text-white mb-3">
      Branch Office
    </h4>

    <p className="text-white/70 text-sm leading-7">
      402, 4th Floor,
      Global Business Park,
      Mehrauli-Gurgaon Road,
      Sector 26,
      Gurugram,
      Haryana 122002,
      India
    </p>
  </div>

</div>

            </ul>

          </div>

         

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-base sm:text-lg mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-white/70">

              <li className="flex gap-3">
                <MapPin size={18} />
                <span>
                  Scintilla Apartment,Bengaluru
                </span>
              </li>

              <li className="flex gap-3">
                <Mail size={18} />
                <span>
                  info@sutrasync.com
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={18} />
                <span>
                  +91 98376 07055
                </span>
              </li>

              <li className="flex gap-3">
                <Clock3 size={18} />
                <span>
                  Mon - Fri: 9 AM - 6 PM
                </span>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div
          className="
          max-w-[1320px]
          mx-auto
          px-4 sm:px-6
          py-2
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          text-sm
          text-white/60
          gap-4
        "
        >

          <p>
            © 2025 SutraSync Technologies.
            All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            w-10
            h-10
            rounded-full
            bg-white
            text-[#22446B]
            font-bold
            hover:scale-110
            transition-all
          "
          >
            ↑
          </button>

        </div>

      </div>

    </footer>
  );
}