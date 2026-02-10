import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TrustedBy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const signals = [
    { title: "30+ Interviews", sub: "Depot operators, staffing partners, and fleet managers across Waymo- and Uber-scale fleets confirmed the same pain point." },
    { title: "Signed LOI", sub: "Letter of intent with a Tier-1 depot staffing provider managing autonomous vehicle fleets across multiple cities." },
    { title: "Pilot: April 2026", sub: "Single depot deployment processing 100–200 vehicles per day with 5–8 depot associates and 2 managers." },
    { title: "MVP In Development", sub: "Week 4 of 12-week build. Temporal-based orchestration backend with mobile-first design for depot environments." },
  ];

  return (
    <section className="py-20 md:py-28 border-y border-border" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Validated With Real Operators
          </h2>
          <p className="text-muted-foreground text-sm">
            From discovery through LOI to pilot deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/50 px-6 py-8 text-center"
            >
              <span className="text-sm text-foreground font-medium mb-2">
                {signal.title}
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {signal.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
