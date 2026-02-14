import { motion } from "framer-motion";

const ClosingSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-body italic leading-relaxed">
            Tonight, if no one says it to you — Let me say it.
          </p>

          <div className="space-y-3">
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              You are loved.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold text-primary">
              You are worthy.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              You are not alone.
            </p>
          </div>

          {/* Heartbeat heart */}
          <div className="pt-8">
            <span
              className="inline-block text-5xl text-primary"
              style={{ animation: "heartbeat 2s ease-in-out infinite" }}
            >
              ♥
            </span>
          </div>

          <p className="text-sm text-muted-foreground/60 font-body pt-12">
            Made with love, for you. 🤍
          </p>
          <p className="text-sm text-muted-foreground/60 font-body">By Chris</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
