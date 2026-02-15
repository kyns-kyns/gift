"use client";

import { useState } from "react";

export default function ProposeUnlock({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const [message, setMessage] = useState("");

  function choose(correct: boolean) {
    if (correct) {
      setMessage("Okay… yes. Always yes. 💍❤️");
      setTimeout(onUnlock, 1200);
    } else {
      setMessage("Hmm… cute, but not *that* one 😌");
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="opacity-80 text-lg">Choose wisely.</p>

      <div className="flex gap-6 text-4xl">
        <button onClick={() => choose(false)}>💍</button>
        <button onClick={() => choose(true)}>💎</button>
        <button onClick={() => choose(false)}>💍</button>
      </div>

      {message && <p className="text-sm opacity-70">{message}</p>}
    </div>
  );
}