"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileSignature, 
  Users, 
  Search, 
  FileText, 
  Map, 
  CheckSquare, 
  ListTodo, 
  PlayCircle, 
  TrendingUp, 
  Presentation, 
  Calendar, 
  Trophy 
} from "lucide-react";

const workflowSteps = [
  {
    icon: <FileSignature size={20} />,
    title: "1. Client Signs the Deal",
    points: [
      "Client agrees and shares website + access",
      "You collect basic info (goals, location, services, competitors)"
    ]
  },
  {
    icon: <Users size={20} />,
    title: "2. Onboarding",
    points: [
      "Add client into your system (CRM / project tool)",
      "Create project workspace (tasks, timelines)",
      "Assign team (strategist, content, dev if needed)"
    ]
  },
  {
    icon: <Search size={20} />,
    title: "3. Full Website Audit",
    points: [
      "Technical SEO (speed, errors, indexing)",
      "On-page SEO (titles, content, structure)",
      "Off-page (backlinks, authority)"
    ]
  },
  {
    icon: <FileText size={20} />,
    title: "4. Audit Report + Recommendations",
    points: [
      "Turn audit into a clear action list",
      "Prioritize tasks (high impact first)",
      "Share with internal strategist team"
    ]
  },
  {
    icon: <Map size={20} />,
    title: "5. Strategy Creation",
    points: [
      "Target keywords & Content plan",
      "Location pages (if needed) & Link building plan",
      "Define timeline (3–6 months realistic)"
    ]
  },
  {
    icon: <CheckSquare size={20} />,
    title: "6. Internal Review + Approval",
    points: [
      "Strategy is reviewed internally",
      "Adjust if needed",
      "Final plan is locked"
    ]
  },
  {
    icon: <ListTodo size={20} />,
    title: "7. Task Execution Setup",
    points: [
      "Break strategy into tasks",
      "Add everything into project management tool",
      "Assign tasks to: Writers, Developers, SEO team"
    ]
  },
  {
    icon: <PlayCircle size={20} />,
    title: "8. Execution Phase",
    points: [
      "Content creation starts",
      "Website fixes implemented",
      "SEO optimizations applied & tracked"
    ]
  },
  {
    icon: <TrendingUp size={20} />,
    title: "9. Progress Tracking",
    points: [
      "Monitor rankings, traffic, conversions",
      "Weekly or bi-weekly check-ins internally"
    ]
  },
  {
    icon: <Presentation size={20} />,
    title: "10. Client Reporting",
    points: [
      "Share updates with client: What was done",
      "What’s next",
      "Early results"
    ]
  },
  {
    icon: <Calendar size={20} />,
    title: "11. Results Timeline",
    points: [
      "Month 1–2: Setup + early movement",
      "Month 3+: Real results start showing",
      "Continue improving and scaling"
    ]
  },
  {
    icon: <Trophy size={20} />,
    title: "12. Case Study / Proof",
    points: [
      "Document results",
      "Create case study",
      "Publish on website (reviews + proof)"
    ]
  }
];

export default function WorkflowPage() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div className="bg-glow" style={{ top: "-5%", left: "-5%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }} />
      <Navbar />

      <section className="container section-padding hero-padding" style={{ paddingTop: "200px", paddingBottom: "100px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              <TrendingUp size={16} /> From Sign to Success
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "24px" }}
          >
            Our SEO <span className="text-gradient">Workflow</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}
          >
            A transparent, 12-step execution map outlining exactly how we take a client from onboarding to case-study status.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          <div className="desktop-line" style={{ 
            position: "absolute", 
            left: "24px", 
            top: "24px", 
            bottom: "24px", 
            width: "2px", 
            background: "var(--border)"
          }} />

          {workflowSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              style={{ display: "flex", gap: "32px", marginBottom: "32px", position: "relative" }}
            >
              <div style={{ 
                width: "48px", 
                height: "48px", 
                flexShrink: 0,
                background: "var(--bg-tertiary)", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "var(--accent-emerald)",
                border: "2px solid var(--border-bright)",
                zIndex: 10
              }}>
                {step.icon}
              </div>

              <div className="glass glass-hover" style={{ padding: "32px", flexGrow: 1, borderRadius: "16px" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "16px", fontFamily: "var(--font-outfit)", color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {step.points.map((point, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--accent-emerald)", marginTop: "2px" }}>•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
