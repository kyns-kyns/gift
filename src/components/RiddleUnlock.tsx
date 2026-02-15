"use client";

import { useState } from "react";

export default function RiddleUnlock({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (answer.trim().toLowerCase() === "trust") {
      onUnlock();
    } else {
      setError("Think softer. Not louder.");
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 max-w-md">
      <p className="text-lg opacity-90 leading-relaxed">
        I don’t need to be spoken,<br />
        I don’t need to be shown.<br />
        I grow when I’m kept,<br />
        And I break when I’m thrown.
      </p>

      <input
        className="px-4 py-2 rounded text-white w-64 text-center"
        placeholder="your answer…"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />

      <button
        onClick={submit}
        className="px-6 py-2 border rounded hover:bg-black hover:text-white transition"
      >
        Unlock
      </button>

      {error && <p className="text-sm opacity-60">{error}</p>}
    </div>
  );
}