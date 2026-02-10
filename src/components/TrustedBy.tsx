import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TrustedBy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { title: "Operator-Informed Design", sub: "Product shaped by depot managers and frontline teams running real autonomous vehicle fleets." },
    { title: "Workflow-First Approach", sub: "Every feature maps to actual depot processes — charging, cleaning, inspection, service, and dispatch." },
    { title: "No Rip-and-Replace", sub: "TARS integrates with existing fleet management systems. We orchestrate execution, we don't replace upstream tools." },
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
            Built With Operators, Not In a Lab
          </h2>
          <p className="text-muted-foreground text-sm">
            Informed by real depot workflows and the teams who run them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/50 px-6 py-8 text-center"
            >
              <span className="text-sm text-foreground font-medium mb-2">
                {partner.title}
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {partner.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
