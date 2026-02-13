import { motion } from "framer-motion";

const LetterToYou = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-12"
        >
          A Letter to You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 card-glow"
        >
          <div className="font-handwritten text-xl md:text-2xl leading-[2] text-foreground/85 space-y-6">
            <p>Maybe love hasn't arrived yet.</p>
            <p>Maybe it came and taught you lessons.</p>
            <p>Maybe you're healing quietly.</p>
            <div className="w-8 h-px bg-primary/30 mx-auto my-8" />
            <p className="text-muted-foreground text-lg font-body italic">
              Please don't measure your worth by your relationship status.
            </p>
            <div className="mt-8 pt-6 border-t border-border/20">
              <p className="text-primary text-2xl md:text-3xl font-bold">
                You are enough.
              </p>
              <p className="text-muted-foreground text-lg mt-2">
                You always have been.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterToYou;
