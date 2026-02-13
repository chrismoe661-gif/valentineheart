import { motion } from "framer-motion";

const HeartfeltMessage = () => {
  return (
    <section id="heartfelt" className="py-24 px-6 gradient-section">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-card/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 card-glow border border-border/30"
        >
          <div className="text-center space-y-4 text-lg md:text-xl font-body leading-relaxed text-foreground/90">
            <p>Being single doesn't mean you are incomplete.</p>
            <p className="text-primary font-medium">
              It means your heart is protecting something precious.
            </p>
            <div className="w-12 h-px bg-primary/40 mx-auto my-6" />
            <p>You are not behind.</p>
            <p>You are not forgotten.</p>
            <p className="text-xl md:text-2xl font-handwritten text-primary mt-4">
              You are becoming.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeartfeltMessage;
