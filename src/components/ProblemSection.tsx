import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
      title: "Manual Coordination",
      description: "Depot teams coordinate 100+ vehicle cycles daily with whiteboards, radios, and spreadsheets. The same tools they used 20 years ago—now managing million-dollar autonomous assets.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      ),
      title: "Operations Collapse at Scale",
      description: "Manual coordination breaks past 100 vehicles. Beyond 400–600, it's unsustainable—labor costs explode, vehicle downtime compounds, and every missed cycle cascades across the fleet.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "No Orchestration Layer Exists",
      description: "AV companies invest billions in autonomy stacks but run depots on tribal knowledge. The slowest layer in the system gates every vehicle that reaches the road.",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Invisible Bottleneck
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group rounded-xl border border-border bg-card p-8 hover:border-primary/30 hover:bg-surface-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:glow-sm transition-shadow duration-300">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Economic Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 mb-12"
        >
          {[
            { value: "3.6", label: "additional trips per vehicle per day unlocked by reducing depot bottlenecks" },
            { value: "10–15%", label: "immediate uptime gains from eliminating congestion and manual coordination" },
            { value: "$2.4M", label: "monthly revenue at risk per 400-vehicle fleet from current depot inefficiencies" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground text-xs leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto text-sm"
        >
          Autonomy wins rides. Depot operations win scale.{" "}
          <span className="text-foreground font-medium">→ Driving is already software. Scaling requires orchestration.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
