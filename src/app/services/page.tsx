"use client";

import { motion } from "framer-motion";
import { Server, PenTool, Link2, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    icon: <Server size={32} />,
    title: "Technical Foundations",
    description: "The baseline architecture required for maximum crawlability and indexing. We eliminate the technical debt that holds client sites back.",
    color: "var(--accent-blue)",
    includes: [
      "Comprehensive site architecture & silo mapping",
      "Core Web Vitals & pagespeed optimization",
      "Schema markup deployment (Local, FAQ, Product)",
      "Log file analysis & crawl budget optimization",
      "White-labeled technical audit reports"
    ]
  },
  {
    icon: <PenTool size={32} />,
    title: "Content Authority Engine",
    description: "Data-driven content clusters designed to capture high-intent search queries and establish topical authority in competitive niches.",
    color: "var(--accent-emerald)",
    includes: [
      "Topical map creation & keyword gap analysis",
      "Silo-structured pillar pages & cluster content",
      "E-E-A-T optimization for authors and brand",
      "On-page NLP optimization (SurferSEO/Clearscope)",
      "Ready-to-publish drafts synced to your CMS"
    ]
  },
  {
    icon: <Link2 size={32} />,
    title: "Off-Page Acquisition",
    description: "High-impact, manual outreach campaigns to secure placements on authoritative, relevant domains. Zero spam, purely white-hat.",
    color: "var(--accent-blue)",
    includes: [
      "Custom outreach campaigns & digital PR",
      "Broken link building & resource page acquisition",
      "Competitor backlink gap execution",
      "Disavow file management & penalty recovery",
      "Transparent placement tracking dashboard"
    ]
  },
  {
    icon: <MapPin size={32} />,
    title: "Local & Conversion Sync",
    description: "Dominating the Map Pack and ensuring that the traffic we generate actually converts into leads for your clients.",
    color: "var(--accent-emerald)",
    includes: [
      "GBP (Google Business Profile) optimization",
      "Local citation building & NAP cleanup",
      "Hyper-local landing page creation",
      "CRO (Conversion Rate Optimization) audits",
      "Custom Looker Studio reporting dashboards"
    ]
  }
];

export default function Services() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div className="bg-glow" style={{ top: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }} />
      
      <Navbar />

      <section className="container section-padding" style={{ paddingTop: "200px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "24px" }}
          >
            Fulfillment <span className="text-gradient">Packages</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}
          >
            We've modularized our execution into four core packages. Plug us into your agency where you need us most.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}>
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover"
              style={{ padding: "40px", display: "flex", flexDirection: "column" }}
            >
              <div style={{ color: pkg.color, marginBottom: "24px" }}>
                {pkg.icon}
              </div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", fontFamily: "var(--font-outfit)" }}>{pkg.title}</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "32px", lineHeight: 1.6 }}>
                {pkg.description}
              </p>
              
              <div style={{ marginTop: "auto" }}>
                <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  What's Included
                </h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {pkg.includes.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                      <CheckCircle2 size={18} color={pkg.color} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--bg-secondary)", padding: "100px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", fontFamily: "var(--font-outfit)" }}>
              Why Agencies Partner With Us
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.8 }}>
              Scaling an SEO agency is notoriously difficult because fulfillment margins shrink as headcount grows. We reverse that equation. By partnering with Sync SEO, you tap into a fully-trained, elite execution team that operates entirely in the background. You handle the strategy, the client relationships, and the growth. We handle the technical implementation, content silos, and link acquisition. The result? You scale your client count exponentially without ever needing to interview, hire, or manage another internal specialist.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
