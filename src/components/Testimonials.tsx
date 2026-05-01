"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sync SEO completely changed our agency model. We were stuck at 8 clients for a year. After plugging in their execution team, we scaled to 25 clients in 6 months without hiring a single internal strategist. Their 7-silo framework is unmatched.",
    name: "Marcus T.",
    role: "CEO, Apex Peak Digital",
    initials: "MT",
    color: "var(--accent-emerald)"
  },
  {
    quote: "The hardest part of running an SEO agency is finding reliable technical talent. Sync SEO isn't just a white-label vendor; they are our entire backend department. The schema building and Looker Studio reports they produce are flawless.",
    name: "Sarah L.",
    role: "Head of SEO, Vanguard Search Partners",
    initials: "SL",
    color: "var(--accent-blue)"
  }
];

export default function Testimonials() {
  return (
    <section className="container section-padding" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "16px", fontFamily: "var(--font-outfit)" }}>
          Trusted by <span className="text-gradient">Elite Agencies</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
          Don't just take our word for it. Here is how we've helped agencies break through their client ceilings.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
        gap: "32px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="glass glass-hover" 
            style={{ padding: "40px", position: "relative" }}
          >
            <div style={{ display: "flex", gap: "4px", marginBottom: "24px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="var(--accent-emerald)" color="var(--accent-emerald)" />
              ))}
            </div>
            
            <p style={{ color: "var(--text-primary)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "32px", fontStyle: "italic" }}>
              "{testimonial.quote}"
            </p>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                borderRadius: "50%", 
                background: "var(--bg-tertiary)", 
                border: `2px solid ${testimonial.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "1.1rem"
              }}>
                {testimonial.initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-outfit)" }}>{testimonial.name}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
