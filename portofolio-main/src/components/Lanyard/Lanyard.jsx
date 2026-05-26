import "./Lanyard.css";

export default function Lanyard() {
  return (
    <div className="lanyard-wrapper flex items-center justify-center">
      <div className="rounded-2xl border border-violet-500/30 bg-zinc-900/60 p-6 shadow-lg">
        <img
          src="/assets/placeholder.svg"
          alt="Placeholder"
          className="h-64 w-48 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
