"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: <BarChart3 size={40} />,
    title: "Technical Excellence",
    description: "From JS rendering issues to complex schema deployments, we handle the technical debt that blocks organic growth.",
    color: "var(--accent-emerald)"
  },
  {
    icon: <Globe size={40} />,
    title: "Content Engineering",
    description: "Not just writing, but engineering content clusters that dominate search intent and satisfy user queries.",
    color: "var(--accent-blue)"
  },
  {
    icon: <Layers size={40} />,
    title: "Agency-First Scale",
    description: "Our processes are built to plug directly into your agency workflow. We are the 'sync' in your SEO operations.",
    color: "var(--accent-emerald)"
  }
];

export default function Features() {
  return (
    <section id="features" className="container section-padding">
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Precision Execution Services</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          We focus on the high-impact technical tasks so your strategists can focus on client retention.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "24px",
        marginBottom: "64px"
      }}>
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass glass-hover" 
            style={{ padding: "40px" }}
          >
            <div style={{ color: feature.color, marginBottom: "20px" }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{feature.title}</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{feature.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
