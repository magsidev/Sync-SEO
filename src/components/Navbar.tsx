"use client";

import { useState, useEffect } from "react";
import { Zap, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const isDarkMode = storedTheme === 'dark' || 
        (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
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
    <nav className="glass" style={{ 
      position: "fixed", 
      top: "24px", 
      left: "50%", 
      transform: "translateX(-50%)", 
      width: "min(90%, 1100px)", 
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 32px",
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
            <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "1.25rem", color: "var(--text-primary)" }}>SYNC SEO</span>
          </div>
        </Link>
      
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        <Link href="/" className="nav-link" style={{ fontSize: "0.95rem" }}>Home</Link>
        <Link href="/services" className="nav-link" style={{ fontSize: "0.95rem" }}>Services</Link>
        <Link href="/process" className="nav-link" style={{ fontSize: "0.95rem" }}>Process</Link>
        
        {/* Theme Toggle Button */}
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
            cursor: "pointer",
            transition: "var(--transition-smooth)"
          }}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link href="/apply">
          <button className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.9rem" }}>Get Started</button>
        </Link>
      </div>
    </nav>
  );
}
