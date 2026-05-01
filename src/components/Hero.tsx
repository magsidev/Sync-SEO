"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container section-padding" style={{ paddingTop: "200px", textAlign: "center", position: "relative" }}>
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
          <ShieldCheck size={16} /> Fulfillment Partner for US SEO Agencies
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", marginBottom: "24px", maxWidth: "1000px", margin: "0 auto 24px" }}
      >
        The <span className="text-gradient">Execution Layer</span> Your Strategy Has Been Missing
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          fontSize: "clamp(1.1rem, 2vw, 1.25rem)", 
          color: "var(--text-secondary)", 
          maxWidth: "750px", 
          margin: "0 auto 40px",
          lineHeight: 1.6
        }}
      >
        Sync SEO acts as a native extension of your team. We handle the technical heavy lifting and fulfillment while you focus on high-level strategy and scaling your client base.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ display: "flex", gap: "16px", justifyContent: "center" }}
      >
        <Link href="/apply">
          <button className="btn-primary">
            Partner With Us <ArrowRight size={20} />
          </button>
        </Link>
        <Link href="/workflow">
          <button className="btn-secondary">View Workflow</button>
        </Link>
      </motion.div>
    </section>
  );
}
