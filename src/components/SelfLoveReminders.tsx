import { motion } from "framer-motion";

const reminders = [
  { emoji: "🤍", text: "You are growing at your own pace." },
  { emoji: "🌸", text: "Your heart is not late." },
  { emoji: "✨", text: "Love will meet you when it's meant to." },
  { emoji: "🕊", text: "You are already whole." },
];

const SelfLoveReminders = () => {
  return (
    <section className="py-24 px-6 gradient-section">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-16"
        >
          Gentle Reminders
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reminders.map((reminder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 card-glow card-glow-hover text-center"
            >
              <span className="text-4xl mb-4 block">{reminder.emoji}</span>
              <p className="text-lg font-body text-foreground/85 leading-relaxed">
                {reminder.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfLoveReminders;
