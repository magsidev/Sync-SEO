"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Onboarding from "@/components/Onboarding";
import Integration from "@/components/Integration";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      {/* Dynamic Background Elements */}
      <div className="bg-glow" style={{ top: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }} />
      <div className="bg-glow" style={{ bottom: "10%", left: "-10%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)" }} />

      <Navbar />
      
      <Hero />
      
      <Testimonials />
      
      <Stats />
      
      <div id="features">
        <Features />
      </div>

      <div id="workflow">
        <Workflow />
      </div>

      <div id="onboarding">
        <Onboarding />
      </div>

      <Integration />

      <section className="container section-padding" style={{ textAlign: "center" }}>
        <div className="glass" style={{ padding: "80px 40px", position: "relative", overflow: "hidden" }}>
          <div className="bg-glow" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", height: "400px" }} />
          <h2 style={{ fontSize: "3rem", marginBottom: "24px", position: "relative" }}>Ready to Sync Your Fulfillment?</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 40px", position: "relative" }}>
            Stop hiring and start scaling. Partner with the execution team that understands agency speed.
          </p>
          <Link href="/apply">
            <button className="btn-primary" style={{ position: "relative" }}>
              Book Your Sync Call
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
