import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("heartfelt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-4 text-glow"
        >
          Happy Valentine's Day 🤍
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl font-handwritten text-primary mb-8"
        >
          Especially to the hearts that are still waiting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-12 max-w-xl mx-auto"
        >
          <p>If today feels quiet, that's okay.</p>
          <p>If today feels heavy, that's okay too.</p>
          <p className="mt-2 text-foreground/80 italic">Your story is still unfolding.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToContent}
          className="bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-body text-lg backdrop-blur-sm card-glow hover:bg-primary transition-colors"
        >
          Feel the Love ♥
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
