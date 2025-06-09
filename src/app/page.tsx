// src/app/landingpage.tsx

import React from "react";
import Asset1 from "./components/Asset1";
import Asset2 from "./components/Asset2";
import Asset3 from "./components/Asset3";
import Asset4 from "./components/Asset4";

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2e1a13", // deep brown
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top left logo */}
      <div style={{ position: "absolute", top: 32, left: 32, zIndex: 10 }}>
        <Asset1 width={60} height={60} />
      </div>

      {/* Top right brush stroke */}
      <div style={{ position: "absolute", top: -100, right: -200, zIndex: 1, transform: "rotate(210deg) scale(1.7)", transformOrigin: "center", }}>
        <Asset2 width={800} height={400} />
      </div>

      {/* Bottom left brush stroke */}
      <div style={{ position: "absolute", bottom: -280, left: 0, zIndex: 1, transform: "rotate(210deg) scale(2.4)", transformOrigin: "center", }}>
        <Asset3 width={800} height={400} />
      </div>

      {/* Center main text */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          color: "#d1c1b2", // light brown/tan
        }}
      >
        <Asset4 width={700} height={300} style={{ fill: "#d1c1b2" }} />

      </div>

      {/* Discover us button */}
      <div
        style={{
          position: "absolute",
          right: 48,
          bottom: 32,
          zIndex: 10,
        }}
      >
        <a
          href="/about"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#d1c1b2",
            fontSize: 22,
            textDecoration: "none",
            fontFamily: "'Playfair Display', serif",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "color 0.2s",
          }}
        >
          Discover us
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#d1c1b2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: 4 }}
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </main>
  );
}
