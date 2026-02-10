import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { label: "Charging", delay: 0 },
    { label: "Cleaning", delay: 0.8 },
    { label: "Inspection", delay: 1.6 },
    { label: "Dispatch", delay: 2.4 },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 relative bg-radial-fade" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Software-Defined Depot Operations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            TARS replaces manual depot coordination with end-to-end orchestration across charging,
            cleaning, inspection, and dispatch. System-driven workflows route exceptions in real time,
            enforce safety escalations for dangerous items and biohazards, and give supervisors
            full auditability—so every vehicle cycle is accounted for, not just tracked.
          </p>
        </motion.div>

        {/* Animated workflow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-px bg-primary -translate-y-1/2"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
            />
            {steps.map((step) => (
              <motion.div
                key={step.label}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + step.delay * 0.4 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse_glow" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16"
        >
          {[
            { title: "Automated Bay Assignment", description: "Routes vehicles to charging, cleaning, inspection, and service bays based on vehicle state and real-time availability." },
            { title: "Mobile Task Routing", description: "Step-by-step workflows, checklists, and photo documentation delivered to depot associates' devices." },
            { title: "Real-Time Visibility", description: "Progress tracking and bottleneck detection across all shifts, bays, and vehicle stages." },
            { title: "Exception Handling", description: "Automated escalation for charger faults, dangerous items, biohazards, and unplanned maintenance." },
            { title: "Predictive Planning", description: "Arrival and throughput forecasting to optimize staffing levels and bay capacity." },
            { title: "Cross-Depot Analytics", description: "Performance benchmarking across locations, partners, and time periods." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.0 + 0.1 * i }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-2">{card.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Built with depot operators. Not in a lab.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
