import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-2 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#021B4D]
            shadow-[0_20px_60px_rgba(2,27,77,0.18)]
          "
        >
          {/* background pattern */}
          <div
            className="
              absolute
              inset-0
              opacity-20
              bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
              bg-[size:24px_24px]
            "
          />

          <div className="relative p-8 lg:p-10">
            <div className="grid lg:grid-cols-[1fr_520px] gap-8 items-center">
              {/* LEFT */}
              <div className="flex items-center gap-6">
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shrink-0
                  "
                >
                  <Mail
                    size={34}
                    strokeWidth={1.5}
                    className="text-[#245BDA]"
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-white
                      text-3xl
                      font-bold
                    "
                  >
                    Stay Ahead with Tech Insights
                  </h3>

                  <p
                    className="
                      mt-2
                      text-white/75
                      text-lg
                    "
                  >
                    Subscribe to our newsletter and get latest
                    articles, trends, insights delivered to your inbox.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                {!subscribed ? (
                  <>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="
                          flex-1
                          h-16
                          rounded-xl
                          px-5
                          text-slate-700
                          outline-none
                          bg-white
                        "
                      />

                      <button
                        onClick={handleSubscribe}
                        className="
                          h-16
                          px-8
                          rounded-xl
                          bg-[#3A83CC]
                          text-white
                          font-semibold
                          flex
                          items-center
                          justify-center
                          gap-2
                          hover:bg-[#3A83FF]
                          transition-all
                        "
                      >
                        Subscribe Now
                        <ArrowRight size={18} />
                      </button>
                    </div>

                    <p className="text-white/60 text-sm mt-3">
                      No spam, unsubscribe at any time.
                    </p>
                  </>
                ) : (
                  <div
                    className="
                      h-16
                      rounded-xl
                      bg-white
                      flex
                      items-center
                      justify-center
                      gap-3
                      text-[#021B4D]
                      font-semibold
                    "
                  >
                    <Check className="text-green-500" />
                    Successfully Subscribed
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;