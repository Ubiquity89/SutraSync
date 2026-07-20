import team from "../../data/team";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <section
      className="
      pt-20 sm:pt-24 lg:pt-28
      pb-8 sm:pb-12
      bg-white
      relative
      overflow-hidden
      "
    >
      {/* Background Blob */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[500px]
        bg-[#EEF4FF]
        blur-[120px]
        opacity-60
        rounded-full
        "
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative">

        {/* Header */}

        <div className="text-center mb-20">

          <p
            className="
            text-[#3A83CC]
            uppercase
            tracking-[3px]
            text-sm
            font-semibold
            "
          >
            OUR TEAM
          </p>

          <h2
            className="
            mt-4
            text-[32px]
            sm:text-[42px]
            lg:text-[52px]
            font-bold
            text-[#1A3552]
            "
          >
            Meet Our Expert Team
          </h2>

          <p
            className="
            mt-5
            max-w-[700px]
            mx-auto
            text-[#64748B]
            leading-8
            "
          >
            Our talented professionals bring years of
            experience and passion to deliver exceptional
            digital solutions for your business.
          </p>

        </div>

        {/* Grid */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
          gap-6 sm:gap-8 lg:gap-10
          "
        >
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}