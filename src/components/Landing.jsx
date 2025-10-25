import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundImage: "url('/images/monstera.jpg')", // ✅ one of your plant images
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "50px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <h1>🌿 Paradise Nursery 🌿</h1>
        <p>Your one-stop shop for beautiful houseplants!</p>
        <button
          onClick={() => navigate("/products")}
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
