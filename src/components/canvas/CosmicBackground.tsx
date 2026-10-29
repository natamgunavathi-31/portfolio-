export function CosmicBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.12),transparent_24%)]" />
      <div className="stars" />
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <style>{`
        .stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 15% 25%, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 35% 60%, rgba(34,211,238,0.9), transparent),
            radial-gradient(1.5px 1.5px at 70% 40%, rgba(168,85,247,0.8), transparent),
            radial-gradient(1.5px 1.5px at 82% 70%, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 55% 20%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 90% 30%, rgba(34,211,238,0.8), transparent),
            radial-gradient(2px 2px at 28% 80%, rgba(255,255,255,0.8), transparent);
          animation: twinkle 10s ease-in-out infinite alternate;
          opacity: 0.78;
        }

        @keyframes twinkle {
          0% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.06); }
          100% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
