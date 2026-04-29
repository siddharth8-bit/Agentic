import { motion } from "framer-motion";

const signals = [
  {
    title: "Behavioral Signal Processing",
    value: "92%",
    description:
      "Analysis of engagement consistency, confidence behavior, and adaptive interaction characteristics.",
  },

  {
    title: "Cognitive Pattern Mapping",
    value: "88%",
    description:
      "Interpretation of reasoning structures, response logic, and problem-solving pathways.",
  },

  {
    title: "Communication Intelligence",
    value: "81%",
    description:
      "Evaluation of verbal structure, articulation flow, and contextual communication effectiveness.",
  },

  {
    title: "Technical Competency Index",
    value: "94%",
    description:
      "AI-driven assessment of technical alignment, implementation proficiency, and execution capability.",
  },
];

export default function Analysis() {
  return (
    <section
      id="analysis"
      className="min-h-screen px-8 py-32 relative"
    >

      <div className="max-w-7xl mx-auto">

        {/* top heading */}
        <div className="mb-24">

          <p className="uppercase tracking-[0.3em] text-xs text-cyan-300 mb-4">
            MULTIMODAL ANALYSIS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white max-w-5xl leading-tight">
            Candidate Intelligence Signal Interpretation
          </h2>

          <p className="mt-8 text-slate-400 max-w-3xl text-lg leading-relaxed">
            The platform processes diverse interaction streams to generate
            refined intelligence profiles for strategic internship placement
            optimization and adaptive decision support.
          </p>

        </div>

        {/* large tactical layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* left side */}
          <div className="lg:col-span-2 space-y-8">

            {signals.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="panel p-8 relative overflow-hidden"
              >

                <div className="absolute top-0 left-0 w-20 h-[1px] bg-cyan-400"></div>

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-400 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>

                  </div>

                  <div className="text-4xl font-bold text-cyan-300">
                    {item.value}
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

          {/* right side panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="panel p-8 flex flex-col justify-between"
          >

            <div>

              <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-8">
                LIVE INTERPRETATION MATRIX
              </p>

              <div className="space-y-10">

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Decision Stability</span>
                    <span className="text-cyan-300">87%</span>
                  </div>

                  <div className="w-full h-[2px] bg-white/10">
                    <div className="w-[87%] h-full bg-cyan-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Adaptive Learning</span>
                    <span className="text-cyan-300">91%</span>
                  </div>

                  <div className="w-full h-[2px] bg-white/10">
                    <div className="w-[91%] h-full bg-cyan-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Signal Reliability</span>
                    <span className="text-cyan-300">95%</span>
                  </div>

                  <div className="w-full h-[2px] bg-white/10">
                    <div className="w-[95%] h-full bg-cyan-300"></div>
                  </div>
                </div>

              </div>

            </div>

            <div className="mt-20 border-t border-white/10 pt-8">

              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">
                SYSTEM STATUS
              </p>

              <h3 className="text-3xl font-bold text-white">
                ACTIVE
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                Multimodal interpretation engine operating within optimized
                analytical thresholds.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}