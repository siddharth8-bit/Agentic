export default function About() {
  function startTour() {
    localStorage.setItem("tourMode", "active");
    window.location.href = "#/?tour=1";
  }

  return (
    <div className="min-h-screen bg-[#06090f] text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <a
          href="#/"
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
              interaction signals from a training phase to refine candidate
              profiles for smarter internship allocation.
            </p>

            <p className="text-slate-400 leading-relaxed text-lg mt-6">
              The website implements this concept through a professional
              intelligence-style interface, system architecture, dashboard,
              candidate simulation, company compatibility engine, and AI-style
              allocation reasoning.
            </p>

            <button
              onClick={startTour}
              className="mt-10 border border-cyan-400/30 px-8 py-4 hover:bg-cyan-400/10 transition uppercase tracking-wider text-sm"
            >
              Start Guided Site Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}