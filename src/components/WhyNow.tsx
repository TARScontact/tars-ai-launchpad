import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyNow = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "200,000+", label: "autonomous miles driven daily across US fleets" },
    { value: "400–600", label: "vehicles—the threshold where manual ops collapse" },
    { value: "4–6", label: "depot cycles required per AV, per day" },
  ];

  return (
    <section id="why-now" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Market Context
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The AV Industry is Scaling—Operations Must Too
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center rounded-xl border border-border bg-card p-8"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-3">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto text-base"
        >
          As fleets expand from dozens to thousands of vehicles, orchestration becomes critical infrastructure.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyNow;
