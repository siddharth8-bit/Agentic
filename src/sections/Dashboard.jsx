import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

import { motion } from "framer-motion";

const performanceData = [
  { month: "JAN", score: 62 },
  { month: "FEB", score: 71 },
  { month: "MAR", score: 78 },
  { month: "APR", score: 86 },
  { month: "MAY", score: 96 },
];

const allocationData = [
  {
    company: "Northbridge Defense Systems",
    compatibility: "94%",
  },

  {
    company: "Helix AI Research",
    compatibility: "91%",
  },

  {
    company: "Aether Analytics",
    compatibility: "88%",
  },

  {
    company: "Stratos Cybernetics",
    compatibility: "84%",
  },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="min-h-screen px-8 py-32"
    >

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="mb-24">

          <p className="uppercase tracking-[0.3em] text-xs text-cyan-300 mb-4">
            OPERATIONAL DASHBOARD
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Strategic Allocation Analytics
          </h2>

          <p className="mt-8 text-slate-400 max-w-3xl text-lg leading-relaxed">
            Real-time visualization of candidate intelligence metrics,
            multimodal interpretation efficiency, and company-specific
            compatibility optimization.
          </p>

        </div>

        {/* top metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          {[
            ["Profiles Processed", "12,847"],
            ["Signal Accuracy", "96%"],
            ["Allocation Efficiency", "91%"],
            ["Adaptive Learning", "89%"],
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="panel p-6"
            >

              <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">
                {item[0]}
              </p>

              <h3 className="text-4xl font-bold text-white mt-6">
                {item[1]}
              </h3>

            </motion.div>
          ))}

        </div>

        {/* charts */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* left chart */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="panel p-8 lg:col-span-2"
          >

            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-10">
              LEARNING PERFORMANCE
            </p>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={performanceData}>

                  <XAxis
                    dataKey="month"
                    stroke="#64748b"
                  />

                  <YAxis stroke="#64748b" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#67e8f9"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </motion.div>

          {/* right panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="panel p-8"
          >

            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-10">
              COMPANY ALIGNMENT
            </p>

            <div className="space-y-8">

              {allocationData.map((item, index) => (
                <div key={index}>

                  <div className="flex justify-between mb-3">

                    <span className="text-white text-sm">
                      {item.company}
                    </span>

                    <span className="text-cyan-300">
                      {item.compatibility}
                    </span>

                  </div>

                  <div className="w-full h-[2px] bg-white/10">

                    <div
                      className="h-full bg-cyan-300"
                      style={{
                        width: item.compatibility,
                      }}
                    ></div>

                  </div>

                </div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* bottom tactical chart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="panel p-8 mt-8"
        >

          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-10">
            ALLOCATION INTELLIGENCE FLOW
          </p>

          <div className="h-[300px]">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={performanceData}>

                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                />

                <YAxis stroke="#64748b" />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#67e8f9"
                  fill="#164e63"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </motion.div>

      </div>
    </section>
  );
}