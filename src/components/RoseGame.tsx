"use client";

import { useState } from "react";

export default function RoseGame({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const [message, setMessage] = useState("");
  const correct = Math.floor(Math.random() * 3);

  function pick(index: number) {
    if (index === correct) {
      onUnlock();
    } else {
      setMessage("Nope 🌸 not this one. Try again.");
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-lg opacity-90">
        One of these is for you.
      </p>

      <div className="flex gap-6">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className="text-4xl hover:scale-110 transition"
          >
            🌹
          </button>
        ))}
      </div>

      {message && <p className="text-sm opacity-70">{message}</p>}
    </div>
  );
}