import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import testimonials from "../../data/testimonials";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#FAFBFE]">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p
            className="
            text-[#3A83CC]
            text-sm
            font-semibold
            uppercase
            tracking-[3px]
            mb-3
          "
          >
            CLIENTS LOVE US
          </p>

          <h2
            className="
            text-[42px]
            lg:text-[48px]
            font-bold
            text-[#1A3552]
          "
          >
            What Our Clients Say
          </h2>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 5000,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>

            <div
  className="
    h-[300px]
    bg-white
    rounded-3xl
    p-8
    border
    border-[#E8EDF5]
    hover:shadow-2xl
    transition-all
    duration-500
    flex
    flex-col
  "
>
  <Quote
    size={32}
    className="text-[#3A83CC]"
  />

  <p
    className="
      mt-5
      text-[#64748B]
      leading-8
      mb-6
    "
  >
    {item.review}
  </p>

  <div className="flex items-center gap-4">

    <img
      src={item.image}
      alt={item.name}
      className="
        w-14
        h-14
        rounded-full
        object-cover
      "
    />

    <div>
      <h4
        className="
          font-bold
          text-[#1A3552]
        "
      >
        {item.name}
      </h4>

      <p
        className="
          text-sm
          text-slate-500
        "
      >
        {item.role}
      </p>
    </div>

  </div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}