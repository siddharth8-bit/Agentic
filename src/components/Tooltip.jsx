export default function Tooltip({ label, children }) {
  return (
    <div className="relative group inline-block">
      {children}

      <div className="absolute left-0 bottom-full mb-3 w-64 opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
        <div className="bg-black/90 border border-cyan-400/20 text-slate-300 text-sm p-4 leading-relaxed">
          {label}
        </div>
      </div>
    </div>
  );
}