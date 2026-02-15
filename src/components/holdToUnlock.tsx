"use client";

import { useEffect, useRef, useState } from "react";

export default function HoldToUnlock({
  onUnlock,
  holdDuration = 2000,
}: {
  onUnlock: () => void;
  holdDuration?: number;
}) {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (holding) {
      const start = Date.now();
      intervalRef.current = setInterval(() => {
        const pct = Math.min(
          ((Date.now() - start) / holdDuration) * 100,
          100
        );
        setProgress(pct);
        if (pct >= 100) {
          clearInterval(intervalRef.current!);
          onUnlock();
        }
      }, 16);
    } else {
      clearInterval(intervalRef.current!);
      setProgress(0);
    }

    return () => clearInterval(intervalRef.current!);
  }, [holding, holdDuration, onUnlock]);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="opacity-80">Hold your heart here.</p>

      <button
        onMouseDown={() => setHolding(true)}
        onMouseUp={() => setHolding(false)}
        onMouseLeave={() => setHolding(false)}
        onTouchStart={() => setHolding(true)}
        onTouchEnd={() => setHolding(false)}
        className="relative w-24 h-24 rounded-full border flex items-center justify-center text-2xl select-none"
      >
        ❤️
        <span
          className="absolute bottom-0 left-0 h-1 bg-white"
          style={{ width: `${progress}%` }}
        />
      </button>
    </div>
  );
}