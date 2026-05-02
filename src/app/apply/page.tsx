"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mjglkzll", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an error submitting your inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your inquiry. Please try again.");
    }
  };

  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <div className="bg-glow" style={{ top: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }} />
      <div className="bg-glow" style={{ bottom: "10%", left: "-10%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)" }} />
      
      <Navbar />

      <section className="container section-padding hero-padding" style={{ paddingTop: "180px", paddingBottom: "100px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
                  <ShieldCheck size={16} /> Partner Application
                </div>

                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "20px", lineHeight: 1.1 }}>
                  Apply for a <span className="text-gradient">Sync Partnership</span>
                </h1>
                
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
                  To ensure impeccable execution quality, we strictly cap our active agency roster. Please complete the inquiry below to join the waitlist or secure one of our limited remaining fulfillment slots.
                </p>
              </div>

              <div className="glass" style={{ padding: "48px", borderRadius: "24px" }}>
                <form 
                  onSubmit={handleSubmit} 
                  style={{ display: "flex", flexDirection: "column", gap: "24px" }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Full Name</label>
                      <input type="text" name="name" required placeholder="John Doe" style={inputStyle} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Agency Name</label>
                      <input type="text" name="agency" required placeholder="Acme Digital" style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Agency URL</label>
                      <input type="url" name="website" required placeholder="https://acmedigital.com" style={inputStyle} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Current Active SEO Clients</label>
                      <select name="clients" required style={inputStyle} defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option value="1-5">1 - 5 Clients</option>
                        <option value="6-15">6 - 15 Clients</option>
                        <option value="16-30">16 - 30 Clients</option>
                        <option value="30+">30+ Clients</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>What is your primary agency bottleneck?</label>
                    <select name="bottleneck" required style={inputStyle} defaultValue="">
                      <option value="" disabled>Select your biggest hurdle</option>
                      <option value="technical">Technical Audits & Implementation</option>
                      <option value="content">Content Production at Scale</option>
                      <option value="links">High-Quality Link Acquisition</option>
                      <option value="reporting">White-Label Reporting & Ops</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>Which Project Management tools do you use? (e.g. Asana, Slack)</label>
                    <input type="text" name="tools" required placeholder="Slack, ClickUp, Notion, etc." style={inputStyle} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>What is your #1 goal for the next 6 months?</label>
                    <textarea name="goal" required placeholder="Briefly describe your agency's growth target..." rows={4} style={{ ...inputStyle, resize: "vertical" }}></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px", marginTop: "16px", fontSize: "1.05rem" }}>
                    Submit Partner Inquiry <Send size={18} />
                  </button>
                  <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "8px" }}>
                    100% confidential. No commitment required.
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Thank You State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", padding: "80px 40px" }}
              className="glass"
            >
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "rgba(16, 185, 129, 0.1)", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                margin: "0 auto 32px",
                color: "var(--accent-emerald)"
              }}>
                <CheckCircle2 size={40} />
              </div>
              
              <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", fontFamily: "var(--font-outfit)" }}>
                Inquiry Received
              </h2>
              
              <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "550px", margin: "0 auto 40px" }}>
                Thank you for applying. Our integration team is currently reviewing your agency's profile to ensure a perfect operational fit.
                <br /><br />
                Within the next 24 hours, you will receive our <strong>Sync Readiness Kit</strong> via email, along with a private link to book your comprehensive Discovery Audit.
              </p>
              
              <button onClick={() => window.location.href = '/'} className="btn-secondary">
                Return to Homepage <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}

// Reusable styling for form inputs
const inputStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  padding: "16px",
  color: "var(--text-primary)",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "var(--font-inter)",
  transition: "all 0.3s ease"
};
