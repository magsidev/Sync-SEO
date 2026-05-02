"use client";

import { motion } from "framer-motion";
import { DownloadCloud, LayoutTemplate, Settings, LineChart, Briefcase, MessagesSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const processSteps = [
  {
    icon: <DownloadCloud size={32} />,
    step: "01",
    title: "Onboarding & Audit",
    description: "We don't disrupt your workflow; we adopt it. We integrate directly into your Slack channels and Asana boards. We ingest your client’s historical data, GSC access, and perform an exhaustive technical health audit to identify immediate roadblocks.",
    color: "var(--accent-emerald)"
  },
  {
    icon: <LayoutTemplate size={32} />,
    step: "02",
    title: "Silo Strategy Mapping",
    description: "Using our proprietary 7-silo content framework, we map out a meticulous 6-month roadmap. This isn't guesswork. It's a highly structured architectural plan designed to establish topical authority and maximize internal link equity.",
    color: "var(--accent-blue)"
  },
  {
    icon: <Settings size={32} />,
    step: "03",
    title: "Seamless Execution",
    description: "Our specialists execute the SOPs with surgical precision. From deploying schema to publishing cluster content, we do the heavy lifting in the background. You receive automated, white-label reports. We do the work; you get the credit.",
    color: "var(--accent-emerald)"
  },
  {
    icon: <LineChart size={32} />,
    step: "04",
    title: "Monthly Sync & Scale",
    description: "We review the data alongside you. We analyze keyword movement across the 7 silos, adjust topical focus based on algorithmic shifts, and prepare the execution deliverables for the next month of growth.",
    color: "var(--accent-blue)"
  }
];

export default function Process() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div className="bg-glow" style={{ top: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }} />
      <div className="bg-glow" style={{ bottom: "20%", left: "-10%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)" }} />
      
      <Navbar />

      <section className="container section-padding hero-padding" style={{ paddingTop: "200px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              padding: "8px 16px", 
              background: "rgba(16, 185, 129, 0.1)", 
              borderRadius: "99px", 
              border: "1px solid rgba(16, 185, 129, 0.2)",
              color: "var(--accent-emerald)",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "24px"
            }}>
              <Briefcase size={16} /> Enterprise-Grade SOPs
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "24px" }}
          >
            How We <span className="text-gradient">Sync</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "750px", margin: "0 auto", lineHeight: 1.6 }}
          >
            Agency owners don't need messy freelancers; they need predictable infrastructure. 
            When you partner with Sync SEO, you are plugging into a highly organized, invisible 
            SEO department that scales your agency's output without the management overhead.
          </motion.p>
        </div>

        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Vertical connecting line */}
          <div className="desktop-line" style={{ 
            position: "absolute", 
            left: "40px", 
            top: "40px", 
            bottom: "40px", 
            width: "2px", 
            background: "var(--border)"
          }} />

          {processSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ display: "flex", gap: "32px", marginBottom: "48px", position: "relative" }}
            >
              <div style={{ 
                width: "80px", 
                height: "80px", 
                flexShrink: 0,
                background: "var(--bg-secondary)", 
                borderRadius: "24px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: step.color,
                border: "1px solid var(--border)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
                zIndex: 10
              }}>
                {step.icon}
              </div>

              <div className="glass" style={{ padding: "40px", flexGrow: 1 }}>
                <div style={{ 
                  color: "var(--text-muted)", 
                  fontSize: "0.9rem", 
                  fontWeight: 700, 
                  letterSpacing: "0.1em",
                  marginBottom: "8px"
                }}>
                  PHASE {step.step}
                </div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", fontFamily: "var(--font-outfit)" }}>{step.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.05rem" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--bg-secondary)", padding: "100px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container">
          <div style={{ 
            width: "64px", 
            height: "64px", 
            background: "rgba(59, 130, 246, 0.1)", 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "0 auto 24px",
            color: "var(--accent-blue)"
          }}>
            <MessagesSquare size={32} />
          </div>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", fontFamily: "var(--font-outfit)" }}>
            Native Tool Integration
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            We communicate where you work. Whether your agency uses Slack, Teams, Asana, Monday, or ClickUp, our execution leads plug directly into your workspace. No external client portals, no messy email threads. Just streamlined SOPs executed natively within your ecosystem.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
