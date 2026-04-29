export default function About() {
  function startTour() {
    localStorage.setItem("tourMode", "active");
    window.location.href = "/?tour=1";
  }

  return (
    <div className="min-h-screen bg-[#06090f] text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">

        <a
          href="/"
          className="border border-white/10 px-5 py-3 text-sm hover:bg-white/5 transition"
        >
          ← Return Home
        </a>

        <p className="uppercase tracking-[0.3em] text-xs text-cyan-300 mt-20 mb-4">
          ABOUT THE PROJECT
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Agentic AI System for Smarter Internship Allocation
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <div className="panel p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6">
              CREATED BY
            </p>

            <div className="space-y-4 text-2xl font-semibold">
              <p>Angel Suohu</p>
              <p>Tashi Rai</p>
            </div>
          </div>

          <div className="panel p-8 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6">
              PROJECT EXPLANATION
            </p>

            <p className="text-slate-300 leading-relaxed text-lg">
              This project is based on an agentic AI system that uses multimodal
              interaction signals from a training phase to refine candidate profiles
              for smarter internship allocation. The system does not rely only on
              marks, resumes, or basic skill lists. Instead, it evaluates multiple
              behavioral and cognitive indicators such as confidence, adaptability,
              communication quality, leadership ability, technical reasoning,
              decision stability, and company-specific compatibility.
            </p>

            <p className="text-slate-400 leading-relaxed text-lg mt-6">
              The website implements this idea as a professional intelligence-style
              platform. The homepage explains the system architecture, multimodal
              signal analysis process, operational dashboard, and company alignment
              logic. The simulation page allows users to select different candidate
              profiles and observe how the system processes their unique metrics,
              evaluates company compatibility, and generates a strategic allocation
              explanation.
            </p>

            <p className="text-slate-400 leading-relaxed text-lg mt-6">
              The implementation uses React, Vite, Tailwind CSS, Framer Motion, and
              Recharts to create a polished enterprise-style interface. Candidate
              profiles are represented using structured data, while the simulation
              dynamically changes metrics, recommended organizations, compatibility
              scores, processing outputs, and AI-style reasoning based on the selected
              candidate.
            </p>

            <button
              onClick={startTour}
              className="mt-10 border border-cyan-400/30 px-8 py-4 hover:bg-cyan-400/10 transition uppercase tracking-wider text-sm"
            >
              Start Guided Site Tour
            </button>

            <p className="text-slate-500 text-sm mt-4">
              Press ESC anytime during the tour to terminate and return here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}