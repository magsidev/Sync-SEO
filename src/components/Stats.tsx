"use client";

export default function Stats() {
  const stats = [
    { label: "Agency Partners", value: "50+", color: "var(--accent-emerald)" },
    { label: "Backlinks Secured", value: "2.5M+", color: "var(--accent-blue)" },
    { label: "Keywords Ranked", value: "500k+", color: "var(--accent-emerald)" },
    { label: "Success Rate", value: "98%", color: "var(--accent-blue)" }
  ];

  return (
    <section style={{ 
      background: "var(--bg-primary)", 
      padding: "80px 0", 
      borderTop: "1px solid var(--border)", 
      borderBottom: "1px solid var(--border)" 
    }}>
      <div className="container" style={{ 
        display: "flex", 
        justifyContent: "space-around", 
        flexWrap: "wrap", 
        gap: "40px" 
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center", flex: "1 1 200px" }}>
            <div style={{ 
              fontSize: "3.5rem", 
              fontWeight: 800, 
              color: stat.color,
              fontFamily: "var(--font-outfit)",
              letterSpacing: "-0.04em"
            }}>
              {stat.value}
            </div>
            <div style={{ 
              color: "var(--text-secondary)", 
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
