import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TrustedBy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { title: "Tier-1 AV Fleet Operator", sub: "Multi-city autonomous rideshare deployment" },
    { title: "National Depot Staffing Provider", sub: "Managing 10,000+ depot associates across Waymo, Uber, Cruise operations" },
    { title: "Multi-City AV Deployment", sub: "Scaling operations from dozens to hundreds of vehicles" },
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
            Trusted by Leaders in Autonomous Operations
          </h2>
          <p className="text-muted-foreground text-sm">
            Partnering with operators managing thousands of autonomous vehicle cycles daily.
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
