import { Mail, Clock3 } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#17375D] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-10 flex items-center justify-between">

          <div className="flex items-center gap-8 text-sm">

            <div className="flex items-center gap-2">
              <Mail size={14} />
              info@sutrasync.com
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={14} />
              Mon - Fri: 9:00 AM - 6:00 PM
            </div>

          </div>

          <div className="flex items-center gap-4">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

        </div>
      </div>
    </div>
  );
}