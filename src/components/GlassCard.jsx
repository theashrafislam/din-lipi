export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-soft p-4 ${className}`}
    >
      {children}
    </div>
  );
}