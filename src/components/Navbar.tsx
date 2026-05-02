"use client";

import { useState, useEffect } from "react";
import { Zap, Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const isDarkMode = storedTheme === 'dark';
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      <nav className="glass" style={{ 
        position: "fixed", 
        top: "16px", 
        left: "50%", 
        transform: "translateX(-50%)", 
        width: "min(95%, 1100px)", 
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        border: "1px solid var(--border)"
      }}>
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "1.1rem", color: "var(--text-primary)" }}>SYNC SEO</span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="desktop-only" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Link href="/" className="nav-link" style={{ fontSize: "0.9rem" }}>Home</Link>
          <Link href="/services" className="nav-link" style={{ fontSize: "0.9rem" }}>Services</Link>
          <Link href="/process" className="nav-link" style={{ fontSize: "0.9rem" }}>Process</Link>
          
          <button 
            onClick={toggleTheme} 
            style={{ 
              background: "transparent", 
              border: "1px solid var(--border)", 
              color: "var(--text-primary)", 
              width: "36px", 
              height: "36px", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/apply">
            <button className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.85rem", minHeight: "40px" }}>Get Started</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-only" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button 
            onClick={toggleTheme} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "var(--text-primary)", 
              cursor: "pointer"
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{ background: "transparent", border: "none", color: "var(--text-primary)", cursor: "pointer" }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="glass" style={{ 
          position: "fixed", 
          top: "85px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          width: "95%", 
          zIndex: 99, 
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          animation: "slideDown 0.3s ease-out"
        }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ fontSize: "1.2rem", fontWeight: 600 }}>Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} style={{ fontSize: "1.2rem", fontWeight: 600 }}>Services</Link>
          <Link href="/process" onClick={() => setIsMenuOpen(false)} style={{ fontSize: "1.2rem", fontWeight: 600 }}>Process</Link>
          <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
            <button className="btn-primary" style={{ width: "100%" }}>Get Started</button>
          </Link>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </>
  );
}
