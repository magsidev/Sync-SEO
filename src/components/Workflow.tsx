"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Onboarding & Audit",
    desc: "We integrate with your project management tools and perform a deep-dive technical audit of your client's property."
  },
  {
    title: "Strategic Sync",
    desc: "Our execution leads meet with your strategists to align on priority tasks and KPIs for the next 90 days."
  },
  {
    title: "Daily Execution",
    desc: "We deploy technical fixes, publish content, and secure links daily. You see progress in real-time."
  },
  {
    title: "White-Label Success",
    desc: "Receive comprehensive, branded reports that you can hand straight to your client. We stay in the background."
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding" style={{ background: "var(--bg-secondary)", position: "relative" }}>
      <div className="container">
        <div className="mobile-stack" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "3rem", marginBottom: "24px" }}>Built to <span className="text-emerald">Sync</span> With Your Agency</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "1.1rem" }}>
              Most partners just give you a list of recommendations. We give you a team that actually does the work.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {["No more hiring delays", "Scale content output by 10x", "Technical experts on demand", "Predictable monthly pricing"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={20} color="var(--accent-emerald)" />
                  <span style={{ fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  display: "flex", 
                  gap: "24px", 
                  marginBottom: "32px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: i === 2 ? "rgba(255, 255, 255, 0.03)" : "transparent",
                  border: i === 2 ? "1px solid var(--border)" : "1px solid transparent"
                }}
              >
                <div style={{ 
                  flexShrink: 0,
                  width: "32px", 
                  height: "32px", 
                  borderRadius: "50%", 
                  background: "var(--bg-tertiary)", 
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--accent-emerald)"
                }}>
                  {i + 1}
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{step.title}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
