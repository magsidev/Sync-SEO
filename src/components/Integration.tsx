"use client";

import { motion } from "framer-motion";
import { FileVideo, CheckCircle2 } from "lucide-react";
import { FaTrello, FaSlack } from "react-icons/fa";

export default function Integration() {
  return (
    <section className="section-padding" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-outfit)", marginBottom: "16px" }}>
            Zero-Friction Integration
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            We operate as a native extension of your team. No external portals or new software to learn.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {/* Block 1: Your Tools, Our Hands */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glass-hover" 
            style={{ padding: "40px" }}
          >
            <div style={{ color: "var(--accent-blue)", marginBottom: "20px" }}>
              <FaTrello size={40} />
            </div>
            <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-outfit)", marginBottom: "16px" }}>PM Tool Sync</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "20px", lineHeight: 1.6 }}>
              We manage fulfillment directly inside your existing infrastructure. We work seamlessly within your Asana, ClickUp, or Monday.com workspaces.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-blue)" /> Native integration with Asana, ClickUp, or Monday.com
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-blue)" /> Real-time tracking of deliverables
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-blue)" /> Zero workflow disruption for your CSMs
              </li>
            </ul>
          </motion.div>

          {/* Block 2: Real-Time Communication */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass glass-hover" 
            style={{ padding: "40px" }}
          >
            <div style={{ color: "var(--accent-emerald)", marginBottom: "20px" }}>
              <FaSlack size={40} />
            </div>
            <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-outfit)", marginBottom: "16px" }}>Internal Slack Access</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "20px", lineHeight: 1.6 }}>
              We join your internal channels to answer complex technical questions directly. Your CSMs no longer have to play "telephone" between the client and the SEO execution team.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Direct access to our execution leads via Slack/Teams
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Technical questions answered in real-time
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" /> Dedicated internal support for client meetings
              </li>
            </ul>
          </motion.div>

          {/* Block 3: White-Label Deliverables */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass glass-hover" 
            style={{ padding: "40px" }}
          >
            <div style={{ color: "var(--accent-blue)", marginBottom: "20px" }}>
              <FileVideo size={40} />
            </div>
            <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-outfit)", marginBottom: "16px" }}>White-Label Reporting</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "20px", lineHeight: 1.6 }}>
              Every deliverable, from monthly Looker Studio reports to comprehensive Loom audits, is entirely unbranded or uses your exact agency templates.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-blue)" /> Unbranded or custom-branded Looker Studio dashboards
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-blue)" /> "Client-Ready" monthly Loom video walkthroughs
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={16} color="var(--accent-blue)" /> Fully transparent reporting on all 7 silos
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
