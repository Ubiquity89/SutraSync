import { Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-white
        rounded-[32px]
        p-10
        border
        border-slate-100
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[300px]
          h-[300px]
          bg-[#3A83CC]/10
          blur-[100px]
          rounded-full
        "
      />

      <div className="relative z-10">
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            bg-[#EAF3FF]
            text-[#3A83CC]
            text-sm
            font-medium
            mb-5
          "
        >
          Quick Inquiry
        </div>

        {/* Heading */}

        <h3
          className="
            text-[22px]
            leading-tight
            font-semibold
            text-[#1A3552]
          "
        >
          Tell Us About
          
          Your <span className="text-[#3A83CC]">Project</span>
        </h3>

        <p className="mt-3 text-slate-500">
          We'll get back to you within 24 hours.
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-8"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="contact-input"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="contact-input"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="contact-input"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="contact-input"
            >
              <option value="">
                Select Service
              </option>

              <option>
                Web Development
              </option>

              <option>
                Mobile App Development
              </option>

              <option>
                UI / UX Design
              </option>

              <option>
                AI Solutions
              </option>

              <option>
                Cloud Solutions
              </option>
            </select>
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="contact-input"
          />

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            className="
              contact-input
              resize-none
              !h-auto
              py-4
            "
          />

          {/* Button */}

          <button
            type="submit"
            className="
              relative
              overflow-hidden
              group
              w-full
              h-14
              rounded-xl
              text-white
              font-medium
              bg-gradient-to-r
              from-[#234A7D]
              to-[#3A83CC]
              flex
              items-center
              justify-center
              gap-2
              hover:scale-[1.02]
              transition-all
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-white/20
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                transition-transform
                duration-700
              "
            />

            <span className="relative z-10 flex items-center gap-2">
              Send Message
              <Send size={18} />
            </span>
          </button>

          {/* Success */}

          {submitted && (
            <div
              className="
                mt-4
                rounded-2xl
                bg-green-50
                border
                border-green-200
                p-4
                text-green-700
                flex
                items-center
                gap-3
              "
            >
              <div className="text-xl">
                ✓
              </div>

              <div>
                <p className="font-medium">
                  Message Sent Successfully
                </p>

                <p className="text-sm">
                  We'll reach out shortly.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;