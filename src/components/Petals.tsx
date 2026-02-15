"use client";

import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  drift: number;
};

const PETAL_COLORS: Record<string, string> = {
  rose: "from-rose-300 via-rose-400 to-rose-500",
  chocolate: "from-amber-300 via-amber-400 to-amber-500",
  propose: "from-pink-300 via-pink-400 to-pink-500",
  promise: "from-purple-300 via-purple-400 to-purple-500",
  hug: "from-red-300 via-red-400 to-red-500",
  kiss: "from-fuchsia-300 via-fuchsia-400 to-fuchsia-500",
};

export default function Petals({ day }: { day: string }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 8, // 🌸 smaller petals
      duration: 4 + Math.random() * 3,
      delay: Math.random(),
      rotation: Math.random() * 360,
      drift: (Math.random() - 0.5) * 80, // 💨 sideways wind
    }));

    setPetals(generated);
  }, []);

  const color =
    PETAL_COLORS[day] ?? "from-rose-300 via-rose-400 to-rose-500";

  const glow =
    day === "rose"
      ? "drop-shadow-[0_0_10px_rgba(251,113,133,0.6)]"
      : "";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
          className={`
            absolute -top-10
            bg-gradient-to-br ${color}
            rounded-[60%_40%_60%_40%]
            opacity-90
            animate-petal-fall
            ${glow}
          `}
        />
      ))}
    </div>
  );
}