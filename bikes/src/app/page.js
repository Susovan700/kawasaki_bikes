import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Sidebar from "./components/sidebar/page";
import "./page.css";

// src/app/page.js
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="main-layout-wrapper"> {/* Add this class */}
        <Sidebar />
        <main className="hero-section">
          <Hero />
        </main>
      </div>
    </div>
  );
}