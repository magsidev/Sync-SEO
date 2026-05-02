"use client";

import { Zap } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      background: "var(--bg-primary)", 
      borderTop: "1px solid var(--border)", 
      padding: "80px 0 40px",
      marginTop: "100px" 
    }}>
      <div className="container">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "48px",
          marginBottom: "60px"
        }}>
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <div style={{ 
                width: "32px", 
                height: "32px", 
                background: "var(--accent-emerald)", 
                borderRadius: "8px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Zap size={20} color="#FFF" />
              </div>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "1.5rem" }}>SYNC SEO</span>
            </div>
            <p style={{ color: "var(--text-secondary)", maxWidth: "320px", lineHeight: 1.6, marginBottom: "24px" }}>
              The strategic execution partner for high-growth SEO agencies. Scalability without the overhead.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <FaTwitter size={20} color="var(--text-muted)" style={{ cursor: "pointer" }} />
              <FaLinkedin size={20} color="var(--text-muted)" style={{ cursor: "pointer" }} />
              <FaGithub size={20} color="var(--text-muted)" style={{ cursor: "pointer" }} />
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "24px", color: "var(--text-primary)" }}>Platform</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/services" className="nav-link" style={{ width: "fit-content" }}>Services</Link>
              <Link href="/process" className="nav-link" style={{ width: "fit-content" }}>Process</Link>
              <Link href="/apply" className="nav-link" style={{ width: "fit-content" }}>Apply for Partnership</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "24px", color: "var(--text-primary)" }}>Talk to An Expert</h4>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img 
                  src="/founder.jpg" 
                  alt="Usman - Founder" 
                  style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    border: "2px solid var(--accent-emerald)", 
                    objectFit: "cover",
                    background: "var(--bg-tertiary)"
                  }} 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.95rem" }}>Usman</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>Founder, Sync SEO</div>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <Link href="/apply" style={{ color: "var(--accent-blue)", fontSize: "0.9rem", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                Book a Discovery Call &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: "1px solid var(--border)", 
          paddingTop: "40px", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          color: "var(--text-muted)",
          fontSize: "0.9rem"
        }}>
          <div>© 2026 Sync SEO. All rights reserved.</div>
          <div>Built for Agency Scale.</div>
        </div>
      </div>
    </footer>
  );
}
