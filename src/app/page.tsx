// pages/index.js
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: '#1a1a2e',
          color: 'white',
          padding: '10px 20px',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span>📞 (225) 555-0118</span>
          <span>✉️ michelle.rivera@example.com</span>
        </div>
        <div
  style={{
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    padding: "10px 20px",
    backgroundColor: "#1a1a2e",
    color: "white",
  }}
>
  <span style={{ fontWeight: "bold", textAlign: "center" }}>
    Follow Us and get a chance to win 80% off
  </span>
  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "20px" }}>
    Follow Us:
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      <FaInstagram />
    </a>
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      <FaYoutube />
    </a>
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      <FaFacebook />
    </a>
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      <FiTwitter />
    </a>
  </div>
</div>


      </div>

      {/* Navbar */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Bandage</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            Home
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            Shop
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            About
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            Blog
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            Contact
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            Pages
          </a>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
            Login / Register
          </a>
          <span>🔍</span>
          <span>🛒 1</span>
          <span>❤️ 1</span>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px 20px',
          backgroundColor: '#00adef',
        }}
      >
        {/* Text Section */}
        <div style={{ color: 'white', maxWidth: '50%' }}>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            SUMMER 2020
          </h5>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            NEW COLLECTION
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="/images/model.png" // Replace with the actual image path
            alt="Model"
            width={500}
            height={700}
            style={{ borderRadius: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}
