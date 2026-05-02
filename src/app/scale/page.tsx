"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, FileText, ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ScalePage() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div className="bg-glow" style={{ top: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }} />
      
      <Navbar />

      {/* 1. The Problem Header */}
      <section className="container section-padding" style={{ paddingTop: "200px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
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
              background: "rgba(59, 130, 246, 0.1)", 
              borderRadius: "99px", 
              border: "1px solid rgba(59, 130, 246, 0.2)",
              color: "var(--accent-blue)",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "24px"
            }}>
              <TrendingUp size={16} /> For US-Based SEO Strategists
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "24px", lineHeight: 1.1 }}
          >
            Scale Your Agency Without the Overhead
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "40px" }}
          >
            You’ve hit the 8-client ceiling. You are splitting your week between high-level client success management (CSM) and deep-work technical fulfillment. As your roster grows, execution speed slows down, and deliverable quality drops. You can’t afford a $80k/year US-based specialist, but you can’t risk your agency's reputation on unreliable gig workers.
          </motion.p>
        </div>
      </section>

      {/* 2. Partner vs. Freelancer Comparison Table */}
      <section className="container section-padding" style={{ paddingTop: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontFamily: "var(--font-outfit)" }}>The Fulfillment Reality</h2>
        </div>
        
        <div className="glass" style={{ maxWidth: "1000px", margin: "0 auto", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", borderBottom: "1px solid var(--border)" }}>
            <div style={{ padding: "24px", background: "rgba(255, 255, 255, 0.02)", borderRight: "1px solid var(--border)" }}>
              <h3 style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>Standard Freelancer</h3>
            </div>
            <div style={{ padding: "24px", background: "rgba(16, 185, 129, 0.05)" }}>
              <h3 style={{ color: "var(--accent-emerald)", fontSize: "1.1rem", fontWeight: 700 }}>Sync SEO Partner</h3>
            </div>
          </div>
          
          {[
            {
              fail: "Unpredictable output and missed deadlines.",
              win: "SLA-backed deliverables via documented SOPs."
            },
            {
              fail: "Requires constant micro-management and QA.",
              win: "Autonomous execution based on our 7-Silo framework."
            },
            {
              fail: "Uses generic tools; difficult to integrate.",
              win: "Native integration into your Slack and Asana."
            },
            {
              fail: "Delivers raw text files or chaotic spreadsheets.",
              win: "Provides polished, white-label ready reporting."
            }
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", borderBottom: i === 3 ? "none" : "1px solid var(--border)" }}>
              <div style={{ padding: "24px", borderRight: "1px solid var(--border)", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <XCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{row.fail}</span>
              </div>
              <div style={{ padding: "24px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <CheckCircle2 size={20} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "0.95rem" }}>{row.win}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Fulfillment Menu (7-Silo Execution) */}
      <section style={{ background: "var(--bg-secondary)", padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontFamily: "var(--font-outfit)", marginBottom: "16px" }}>Core Product: 7-Silo Execution</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
              We don't sell hours. We sell a standardized, predictable content and technical architecture designed for search visibility.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", maxWidth: "1000px", margin: "0 auto" }}>
            {[
              "1. Technical Foundation Audits",
              "2. Entity & Keyword Mapping",
              "3. Pillar Page Architecture",
              "4. Cluster Content Production",
              "5. Internal Link Optimization",
              "6. Off-Page Asset Acquisition",
              "7. Local Entity Prominence"
            ].map((silo, i) => (
              <div key={i} className="glass" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ color: "var(--accent-blue)" }}><FileText size={20} /></div>
                <div style={{ fontWeight: 600, fontSize: "1rem" }}>{silo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The 'Profit Margin' Pitch */}
      <section className="container section-padding">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontFamily: "var(--font-outfit)", marginBottom: "24px" }}>Maintain 50-70% Margins</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Hiring a mid-level US SEO specialist costs $6,000+ per month, plus benefits, software seats, and management time. That instantly compresses your margins. Our white-label rate structure is designed specifically for agency unit economics. By outsourcing your technical and content execution to Sync SEO, you maintain a healthy 50% to 70% gross margin on your retainers, while freeing up 100% of your time to focus on client strategy, retention, and closing new MRR.
          </p>
          
          {/* CTA */}
          <Link href="/apply" style={{ width: "100%", display: "block" }}>
            <button className="btn-primary" style={{ width: "min(100%, 400px)", margin: "0 auto" }}>
              Request our White-Label Rate Card <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
