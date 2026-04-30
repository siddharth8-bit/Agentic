import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();

  function goToSection(id) {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }

  useEffect(() => {
    const sections = ["overview", "architecture", "analysis", "dashboard"];

    function handleScroll() {
      let current = "overview";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && window.scrollY >= section.offsetTop - 160) {
          current = id;
        }
      });

      setActive(current);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    active === id
      ? "text-cyan-300 transition cursor-pointer"
      : "hover:text-white transition cursor-pointer";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-[0.2em] text-white">
            AGENTIC//AI
          </h1>

          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-1">
            Strategic Intelligence Infrastructure
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm tracking-wide text-slate-300">
          <button onClick={() => goToSection("overview")} className={linkClass("overview")}>
            Overview
          </button>

          <button onClick={() => goToSection("architecture")} className={linkClass("architecture")}>
            Architecture
          </button>

          <button onClick={() => goToSection("analysis")} className={linkClass("analysis")}>
            Signal Analysis
          </button>

          <button onClick={() => goToSection("dashboard")} className={linkClass("dashboard")}>
            Dashboard
          </button>

          <Link to="/about" className="hover:text-cyan-300 transition">
            About
          </Link>

          <Link to="/simulation" className="hover:text-cyan-300 transition">
            Simulation
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}