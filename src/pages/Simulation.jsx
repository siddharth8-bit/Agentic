import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import BackgroundEffects from "../components/BackgroundEffects";
import Tooltip from "../components/Tooltip";

const candidates = [
  {
    name: "Aarav Mehta",
    role: "AI Systems Engineering",
    university: "National Institute of Technology",
    id: "A-2481",
    initial: "A",
    confidence: "96%",
    adaptability: "91%",
    communication: "87%",
    leadership: "82%",
    technical: "94%",
    company: "Helix AI Research",
    compatibility: "94%",
    description:
      "Candidate demonstrates advanced analytical reasoning, adaptive intelligence behavior, and strong compatibility with research-oriented AI environments.",
    aiReason:
      "Aarav Mehta was selected for Helix AI Research because his profile shows strong technical reasoning, high confidence, and advanced adaptability. These traits align well with research-heavy environments that require independent problem solving, rapid learning, and structured experimentation.",
    companies: ["Helix AI Research", "Aether Analytics", "Stratos Cybernetics"],
  },
  {
    name: "Riya Kapoor",
    role: "Cybersecurity Intelligence",
    university: "Indian Institute of Technology",
    id: "C-1942",
    initial: "R",
    confidence: "89%",
    adaptability: "84%",
    communication: "90%",
    leadership: "93%",
    technical: "88%",
    company: "Northbridge Defense Systems",
    compatibility: "92%",
    description:
      "Candidate exhibits high operational stability, strategic reasoning, and strong cybersecurity decision consistency.",
    aiReason:
      "Riya Kapoor was selected for Northbridge Defense Systems because her leadership, communication intelligence, and cybersecurity reasoning are highly aligned with secure operational environments. Her profile suggests reliability under pressure and strong decision-making discipline.",
    companies: [
      "Northbridge Defense Systems",
      "Sentinel Cyber Labs",
      "Vector Security Dynamics",
    ],
  },
  {
    name: "Vikram Rao",
    role: "Data Analytics Engineering",
    university: "BITS Pilani",
    id: "D-8821",
    initial: "V",
    confidence: "83%",
    adaptability: "88%",
    communication: "81%",
    leadership: "79%",
    technical: "92%",
    company: "Aether Analytics",
    compatibility: "90%",
    description:
      "Candidate displays strong analytical interpretation capability and advanced multidimensional data reasoning patterns.",
    aiReason:
      "Vikram Rao was selected for Aether Analytics because his technical reasoning and data interpretation scores indicate strong analytical depth. Although his leadership and communication scores are moderate, his profile is highly suited for data-focused environments where structured reasoning, pattern detection, and quantitative decision support are more critical.",
    companies: ["Aether Analytics", "Quantix Intelligence", "Nova Strategic Data"],
  },
  {
    name: "Neha Sharma",
    role: "Cognitive Computing",
    university: "Delhi Technological University",
    id: "N-3304",
    initial: "N",
    confidence: "97%",
    adaptability: "95%",
    communication: "86%",
    leadership: "90%",
    technical: "96%",
    company: "Synapse Cognitive Labs",
    compatibility: "96%",
    description:
      "Candidate demonstrates exceptional cognitive adaptability and high-level abstract reasoning capability.",
    aiReason:
      "Neha Sharma was selected for Synapse Cognitive Labs because she has exceptional cognitive adaptability, technical reasoning, and confidence. Her profile fits complex cognitive computing environments where abstract reasoning and adaptive problem solving are essential.",
    companies: ["Synapse Cognitive Labs", "Helix AI Research", "NeuroLogic Systems"],
  },
  {
    name: "Arjun Nair",
    role: "Autonomous Systems",
    university: "VIT University",
    id: "R-7719",
    initial: "A",
    confidence: "87%",
    adaptability: "88%",
    communication: "83%",
    leadership: "85%",
    technical: "91%",
    company: "Orion Autonomous Dynamics",
    compatibility: "91%",
    description:
      "Candidate exhibits strong autonomous systems reasoning and adaptive technical implementation behavior.",
    aiReason:
      "Arjun Nair was selected for Orion Autonomous Dynamics because his technical reasoning and adaptability indicate strong suitability for autonomous systems work. His balanced profile supports implementation-heavy roles involving robotics, automation, and intelligent control systems.",
    companies: ["Orion Autonomous Dynamics", "Aether Robotics", "Stratos Cybernetics"],
  },
];

export default function Simulation() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [step, setStep] = useState(0);
  const [showAIReason, setShowAIReason] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);

  const queryRef = useRef(null);

  useEffect(() => {
    if (!selectedCandidate) return;

    setStep(0);
    setShowAIReason(false);
    setLoadingAI(false);

    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < 5) return prev + 1;
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedCandidate]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isTour = params.get("tour") === "1";

    if (!isTour) return;

    const vikram = candidates.find((candidate) => candidate.name === "Vikram Rao");

    const selectTimer = setTimeout(() => {
      setSelectedCandidate(vikram);
    }, 1200);

    const scrollTimer = setTimeout(() => {
      queryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 12000);

    const analysisTimer = setTimeout(() => {
      handleAIReason();
    }, 13500);

    const returnTimer = setTimeout(() => {
      localStorage.removeItem("tourMode");
      window.location.href = "/about";
    }, 18500);

    function handleEsc(e) {
      if (e.key === "Escape") {
        clearTimeout(selectTimer);
        clearTimeout(scrollTimer);
        clearTimeout(analysisTimer);
        clearTimeout(returnTimer);
        localStorage.removeItem("tourMode");
        window.location.href = "/about";
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      clearTimeout(selectTimer);
      clearTimeout(scrollTimer);
      clearTimeout(analysisTimer);
      clearTimeout(returnTimer);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function handleAIReason() {
    setLoadingAI(true);
    setShowAIReason(false);

    setTimeout(() => {
      setLoadingAI(false);
      setShowAIReason(true);
    }, 2500);
  }

  return (
    <div className="min-h-screen bg-[#06090f] text-white px-8 py-20 relative overflow-hidden">
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              LIVE CANDIDATE SIMULATION
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Operational Intelligence Interface
            </h1>
          </div>

          <Link
            to="/"
            className="border border-white/10 px-6 py-3 hover:bg-white/5 transition text-sm uppercase tracking-wider"
          >
            Return
          </Link>
        </div>

        {!selectedCandidate && (
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-10">
              SELECT CANDIDATE PROFILE
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {candidates.map((candidate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCandidate(candidate)}
                  className="panel p-6 cursor-pointer hover:border-cyan-400/30 transition"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-cyan-400/30 flex items-center justify-center text-3xl text-cyan-300">
                      {candidate.initial}
                    </div>

                    <h3 className="text-xl font-semibold mt-6 text-center">
                      {candidate.name}
                    </h3>

                    <p className="text-slate-500 text-sm text-center mt-3">
                      {candidate.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedCandidate && (
          <div>
            <button
              onClick={() => setSelectedCandidate(null)}
              className="mb-10 border border-white/10 px-5 py-2 text-sm hover:bg-white/5 transition"
            >
              ← Change Candidate
            </button>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="panel p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
                  CANDIDATE PROFILE
                </p>

                <div className="flex flex-col items-center mb-10">
                  <div className="w-28 h-28 rounded-full border border-cyan-400/30 flex items-center justify-center text-4xl text-cyan-300">
                    {selectedCandidate.initial}
                  </div>

                  <h2 className="text-2xl font-semibold mt-6">
                    {selectedCandidate.name}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    {selectedCandidate.role}
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <Tooltip label="Measures how confidently the candidate responds under evaluation conditions.">
                      <p className="text-slate-500 text-sm cursor-help">
                        Confidence
                      </p>
                    </Tooltip>

                    <h3 className="text-cyan-300 text-2xl font-bold mt-1">
                      {selectedCandidate.confidence}
                    </h3>
                  </div>

                  <div>
                    <Tooltip label="Measures how well the candidate adapts to unfamiliar tasks and changing problem contexts.">
                      <p className="text-slate-500 text-sm cursor-help">
                        Adaptability
                      </p>
                    </Tooltip>

                    <h3 className="text-cyan-300 text-2xl font-bold mt-1">
                      {selectedCandidate.adaptability}
                    </h3>
                  </div>

                  <div>
                    <Tooltip label="Measures clarity, structure, articulation, and effectiveness of candidate communication.">
                      <p className="text-slate-500 text-sm cursor-help">
                        Communication
                      </p>
                    </Tooltip>

                    <h3 className="text-cyan-300 text-2xl font-bold mt-1">
                      {selectedCandidate.communication}
                    </h3>
                  </div>

                  <div>
                    <Tooltip label="Measures decision ownership, initiative, and ability to guide outcomes in collaborative environments.">
                      <p className="text-slate-500 text-sm cursor-help">
                        Leadership
                      </p>
                    </Tooltip>

                    <h3 className="text-cyan-300 text-2xl font-bold mt-1">
                      {selectedCandidate.leadership}
                    </h3>
                  </div>

                  <div>
                    <Tooltip label="Measures technical logic, implementation thinking, and problem-solving depth.">
                      <p className="text-slate-500 text-sm cursor-help">
                        Technical Reasoning
                      </p>
                    </Tooltip>

                    <h3 className="text-cyan-300 text-2xl font-bold mt-1">
                      {selectedCandidate.technical}
                    </h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="panel p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
                  LIVE AI PROCESSING
                </p>

                <div className="space-y-6">
                  <div className="border border-cyan-400/20 p-4">
                    <p>Analyzing behavioral consistency</p>

                    {step >= 1 && (
                      <p className="text-cyan-300 text-sm mt-3">
                        Stability analysis completed
                      </p>
                    )}
                  </div>

                  <div className="border border-cyan-400/20 p-4">
                    <p>Interpreting multimodal signals</p>

                    {step >= 2 && (
                      <p className="text-cyan-300 text-sm mt-3">
                        Adaptive intelligence patterns detected
                      </p>
                    )}
                  </div>

                  <div className="border border-cyan-400/20 p-4">
                    <p>Evaluating company compatibility</p>

                    {step >= 3 && (
                      <div className="text-cyan-300 text-sm mt-3 space-y-1">
                        {selectedCandidate.companies.map((company, index) => (
                          <p key={index}>• {company}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border border-cyan-400/20 p-4">
                    <p>Refining intelligence profile</p>

                    {step >= 4 && (
                      <p className="text-cyan-300 text-sm mt-3">
                        Strategic optimization completed
                      </p>
                    )}
                  </div>

                  <div className="border border-cyan-400/20 p-4">
                    <p>Generating strategic allocation</p>

                    {step >= 5 && (
                      <p className="text-cyan-300 text-sm mt-3">
                        Allocation confidence: {selectedCandidate.compatibility}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="panel p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">
                  STRATEGIC ALLOCATION
                </p>

                <div className="border border-cyan-400/20 p-6">
                  <p className="text-slate-500 text-sm">
                    Recommended Organization
                  </p>

                  <h3 className="text-3xl font-bold mt-4">
                    {selectedCandidate.company}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {selectedCandidate.description}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="flex justify-between mb-2">
                    <span>Compatibility Score</span>

                    <span className="text-cyan-300">
                      {selectedCandidate.compatibility}
                    </span>
                  </div>

                  <div className="w-full h-[2px] bg-white/10">
                    <div
                      className="h-full bg-cyan-300"
                      style={{ width: selectedCandidate.compatibility }}
                    ></div>
                  </div>
                </div>

                <div ref={queryRef} className="mt-10 border border-cyan-400/20 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">
                    AI QUERY GENERATED
                  </p>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    Why was {selectedCandidate.name} strategically allocated to{" "}
                    {selectedCandidate.company} based on multimodal intelligence
                    interpretation?
                  </p>

                  <button
                    onClick={handleAIReason}
                    className="w-full border border-cyan-400/30 py-3 hover:bg-cyan-400/10 transition uppercase tracking-wider text-sm"
                  >
                    Generate Analysis
                  </button>
                </div>

                <div className="mt-6 border border-white/10 p-5 min-h-[140px]">
                  {loadingAI && (
                    <p className="text-cyan-300">
                      Generating strategic reasoning...
                    </p>
                  )}

                  {showAIReason && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-4">
                        AI STRATEGIC ANALYSIS
                      </p>

                      <p className="text-slate-300 leading-relaxed">
                        {selectedCandidate.aiReason}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}