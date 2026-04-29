import { motion } from "framer-motion";

export default function BackgroundEffects() {

  const nodes = [
    { top: "10%", left: "20%" },
    { top: "30%", left: "70%" },
    { top: "60%", left: "40%" },
    { top: "80%", left: "75%" },
    { top: "50%", left: "15%" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/5 blur-3xl rounded-full"></div>

      {/* scanning line */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100vh" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 w-full h-[1px] bg-cyan-400/10"
      />

      {/* nodes */}
      {nodes.map((node, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index,
          }}
          className="absolute"
          style={{
            top: node.top,
            left: node.left,
          }}
        >

          {/* node */}
          <div className="w-2 h-2 rounded-full bg-cyan-300"></div>

          {/* pulse */}
          <motion.div
            animate={{
              scale: [1, 3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index,
            }}
            className="absolute inset-0 rounded-full border border-cyan-300/30"
          />

        </motion.div>

      ))}

      {/* vertical tactical lines */}
      <div className="absolute left-[20%] top-0 w-[1px] h-full bg-white/5"></div>
      <div className="absolute left-[50%] top-0 w-[1px] h-full bg-white/5"></div>
      <div className="absolute left-[80%] top-0 w-[1px] h-full bg-white/5"></div>

    </div>
  );
}