import { useEffect } from "react";

import Navbar from "./components/Navbar";
import BackgroundEffects from "./components/BackgroundEffects";

import Hero from "./sections/Hero";
import Architecture from "./sections/Architecture";
import Analysis from "./sections/Analysis";
import Dashboard from "./sections/Dashboard";

export default function App() {
  useEffect(() => {
   const hashQuery = window.location.hash.split("?")[1] || "";
const params = new URLSearchParams(hashQuery);
    const isTour = params.get("tour") === "1";

    if (!isTour) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const architectureTimer = setTimeout(() => {
      document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
    }, 2500);

    const analysisTimer = setTimeout(() => {
      document.getElementById("analysis")?.scrollIntoView({ behavior: "smooth" });
    }, 5200);

    const dashboardTimer = setTimeout(() => {
      document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
    }, 7900);

    const simulationTimer = setTimeout(() => {
      window.location.href = "#/simulation?tour=1";
    }, 10800);

    function handleEsc(e) {
      if (e.key === "Escape") {
        clearTimeout(architectureTimer);
        clearTimeout(analysisTimer);
        clearTimeout(dashboardTimer);
        clearTimeout(simulationTimer);
        localStorage.removeItem("tourMode");
        window.location.href = "#/about";
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      clearTimeout(architectureTimer);
      clearTimeout(analysisTimer);
      clearTimeout(dashboardTimer);
      clearTimeout(simulationTimer);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="relative">
      <BackgroundEffects />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Architecture />
        <Analysis />
        <Dashboard />
      </div>
    </div>
  );
}