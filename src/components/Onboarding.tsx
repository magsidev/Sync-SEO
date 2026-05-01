"use client";

import { motion } from "framer-motion";
import { Search, Rocket, Zap } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} />,
    title: "Workflow Discovery",
    description: "We dive into your agency’s processes, tools, and reporting style to ensure a perfect technical sync from day one."
  },
  {
    icon: <Rocket size={32} />,
    title: "Pilot Sprint",
    description: "We start with a single project or client to calibrate our execution with your specific quality and delivery standards."
  },
  {
    icon: <Zap size={32} />,
    title: "Seamless Scale",
    description: "Once aligned, you simply pass us the work. We handle the full fulfillment cycle, from audit to white-labeled report."
  }
];

export default function Onboarding() {
  return (
    <section id="onboarding" className="container section-padding">
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>How We <span className="text-emerald">Sync</span></h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
          A frictionless onboarding process designed to get us executing for you in less than a week.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", position: "relative" }}>
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            style={{ textAlign: "center", position: "relative" }}
          >
            <div style={{ 
              width: "80px", 
              height: "80px", 
              background: "var(--bg-secondary)", 
              borderRadius: "24px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              margin: "0 auto 24px",
              color: "var(--accent-emerald)",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
            }}>
              {step.icon}
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-outfit)" }}>{step.title}</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.description}</p>
            
            {i < steps.length - 1 && (
              <div style={{ 
                position: "absolute", 
                top: "40px", 
                right: "-20px", 
                width: "40px", 
                height: "2px", 
                background: "linear-gradient(to right, var(--accent-emerald), transparent)",
                display: "none", // Hidden on mobile, can be shown with media queries
                "@media (min-width: 1024px)": { display: "block" }
              } as any} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
