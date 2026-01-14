import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import hero from "@/assets/hero.png";
import logo from "@/assets/logo33.png";

const HeroLight = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-blue-50"
    >
      {/* Light Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200" />

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(90deg, #cbd5e1 1px, transparent 1px), linear-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Soft Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-300/40 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 py-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-300 bg-white/70 backdrop-blur-md px-5 py-2 mb-8"
            >
              <span className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700">
                Premium Real Estate Solutions
              </span>
            </motion.div> */}

            {/* LOGO (Centered & Responsive) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 flex justify-center lg:justify-start lg:pl-32 lg:pt-12"
            >
              <img
                src={logo}
                alt="Investment Property Trust Logo"
                className="
                              h-24        /* MOBILE (bigger) */
                              sm:h-28     /* small tablets */
                              md:h-32     /* tablets */
                              lg:h-36     /* desktop */
                              xl:h-48     /* large desktop */
                              w-auto
                            "
              />
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-700 mb-8 max-w-lg leading-relaxed"
            >
              Four decades of institutional expertise in real estate investment,
              development, and portfolio management. We transform opportunities
              into profitable assets.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-10"
            >
              {[
                {
                  icon: Award,
                  label: "40+ Years",
                  text: "Industry Leadership",
                },
                {
                  icon: TrendingUp,
                  label: "50+ Assets",
                  text: "Under Management",
                },
                { icon: Users, label: "100%", text: "Client Satisfaction" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-bold text-slate-900">
                        {item.label}
                      </div>
                      <div className="text-sm text-slate-600">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-lg font-semibold shadow-xl group"
              >
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-blue-300 text-blue-700 hover:bg-blue-100 px-8 py-6 rounded-lg font-semibold transition-all"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-slate-600 mt-8"
            >
              Trusted by institutional investors and high-net-worth individuals
              worldwide
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-200 shadow-2xl bg-white">
              <img
                src={hero}
                alt="Investment properties"
                className="w-full h-96 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl rounded-xl border border-blue-200 p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold">100%</div>
                    <div className="text-xs text-slate-600">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-blue-300/40 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-blue-300/40 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLight;
