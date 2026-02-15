"use client";

import { useState } from "react";

export default function TeaseQuestion({
  onCorrect,
}: {
  onCorrect: () => void;
}) {
  const [tries, setTries] = useState(0);

  function wrongAnswer() {
    setTries((t) => t + 1);
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-medium">
        Why are you here?
      </h2>

      <p className="text-white/50 text-sm">
        There is a right answer.  
        You’ll know it.
      </p>

      <div className="flex flex-col gap-4">
        <button
          onClick={wrongAnswer}
          className="rounded-full border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
        >
          Just curious
        </button>

        <button
          onClick={wrongAnswer}
          className="rounded-full border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
        >
          You told me to come
        </button>

        {tries >= 2 ? (
          <button
            onClick={onCorrect}
            className="rounded-full bg-white text-black px-6 py-3 font-medium animate-pulse"
          >
            Because I care.
          </button>
        ) : (
          <button
            disabled
            className="rounded-full border border-white/10 px-6 py-3 opacity-40 cursor-not-allowed"
          >
            Because I care.
          </button>
        )}
      </div>

      {tries > 0 && (
        <p className="text-xs text-white/40 italic">
          Hm. Not that one.
        </p>
      )}
    </div>
  );
}