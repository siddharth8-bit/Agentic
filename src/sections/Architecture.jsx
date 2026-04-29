import { motion } from "framer-motion";

const systems = [
  {
    id: "01",
    title: "Signal Acquisition",
    text: "Collection of multimodal interaction data including behavioral, cognitive, communication, and response-based signals.",
  },

  {
    id: "02",
    title: "Profile Intelligence Mapping",
    text: "Adaptive analysis engine refines candidate attributes into structured intelligence profiles.",
  },

  {
    id: "03",
    title: "Agentic Decision Core",
    text: "Autonomous reasoning modules evaluate alignment, potential, and contextual internship compatibility.",
  },

  {
    id: "04",
    title: "Strategic Allocation",
    text: "Optimized internship assignment based on multidimensional candidate-role intelligence correlation.",
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="min-h-screen px-8 py-32 relative"
    >

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="mb-24">

          <p className="uppercase tracking-[0.3em] text-xs text-cyan-300 mb-4">
            SYSTEM ARCHITECTURE
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
            Operational Intelligence Pipeline
          </h2>

          <p className="mt-8 text-slate-400 max-w-3xl text-lg leading-relaxed">
            The platform utilizes adaptive agentic reasoning and multimodal
            interpretation layers to transform raw interaction signals into
            strategically optimized internship allocation decisions.
          </p>

        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {systems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="panel p-10 relative overflow-hidden"
            >

              {/* corner line */}
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-cyan-400"></div>

              <p className="text-sm text-slate-500 tracking-[0.3em] mb-8">
                MODULE {item.id}
              </p>

              <h3 className="text-3xl font-semibold text-white mb-6">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}