import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="overview"
      className="min-h-screen flex items-center px-8 relative overflow-hidden"
    >

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.3em] text-xs text-cyan-300 mb-6"
          >
            AGENTIC MULTIMODAL INTELLIGENCE SYSTEM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold leading-tight text-white"
          >
            Intelligent
            <br />
            Internship
            <br />
            Allocation
            <br />
            Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-slate-400 text-lg leading-relaxed max-w-2xl"
          >
            An agentic AI framework that interprets multimodal interaction
            signals during training phases to refine candidate intelligence
            profiles and optimize strategic internship allocation outcomes.
          </motion.p>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="panel p-8 h-[500px] relative overflow-hidden"
        >

          <div className="relative z-10">

            <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
              LIVE SIGNAL MATRIX
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Behavioral Alignment</span>
                  <span className="accent">92%</span>
                </div>

                <div className="w-full h-[2px] bg-white/10">
                  <div className="w-[92%] h-full bg-cyan-300"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Cognitive Mapping</span>
                  <span className="accent">88%</span>
                </div>

                <div className="w-full h-[2px] bg-white/10">
                  <div className="w-[88%] h-full bg-cyan-300"></div>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}