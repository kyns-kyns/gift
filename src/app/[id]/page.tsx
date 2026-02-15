"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";
import { DAYS } from "@/lib/days";
import HoldToUnlock from "@/components/holdToUnlock";
import RiddleUnlock from "@/components/RiddleUnlock";
import RoseGame from "@/components/RoseGame";
import ProposeUnlock from "@/components/ProposeUnlock";
import Petals from "@/components/Petals";

export default function Day({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = String(resolvedParams.id);

  const router = useRouter();
  const { unlockDay } = useProgress();
  const [unlocked, setUnlocked] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  const day = DAYS.find((d) => d.id === id);

  if (!day) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Day not found.</p>
      </main>
    );
  }

  function completeDay() {
    unlockDay(id);
    router.push("/hub");
  }

  // ✅ decide unlock interaction
  const content = !unlocked ? (
    id === "rose" ? (
      <RoseGame
        onUnlock={() => {
          setUnlocked(true);
          setShowPetals(true);
          setTimeout(() => setShowPetals(false), 4000);
        }}
      />
    ) : id === "chocolate" ? (
      <HoldToUnlock
        onUnlock={() => {
          setUnlocked(true);
          setShowPetals(true);
          setTimeout(() => setShowPetals(false), 4000);
        }}
      />
    ) : id === "propose" ? (
      <ProposeUnlock
        onUnlock={() => {
          setUnlocked(true);
          setShowPetals(true);
          setTimeout(() => setShowPetals(false), 4000);
        }}
      />
    ) : id === "promise" ? (
      <RiddleUnlock
        onUnlock={() => {
          setUnlocked(true);
          setShowPetals(true);
          setTimeout(() => setShowPetals(false), 4000);
        }}
      />
    ) : id === "hug" ? (
      <HoldToUnlock
        onUnlock={() => {
          setUnlocked(true);
          setShowPetals(true);
          setTimeout(() => setShowPetals(false), 4000);
        }}
      />
    ) : (
      <WordUnlock
        onUnlock={() => {
          setUnlocked(true);
          setShowPetals(true);
          setTimeout(() => setShowPetals(false), 4000);
        }}
      />
    )
  ) : (
    <button
      onClick={completeDay}
      className="mt-8 px-6 py-3 rounded-full bg-rose-300 text-white hover:scale-105 transition"
    >
      Go back
    </button>
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl text-center bg-black/50 p-8 rounded-3xl backdrop-blur">
        <h1 className="text-4xl text-rose-300 mb-2">{day.title}</h1>
        <p className="italic opacity-80 mb-10">{day.subtitle}</p>

        {content}
        {showPetals && <Petals day={id} />}
        {unlocked && (
          <div className="mt-10 bg-white p-6 rounded-xl text-black shadow-xl">
            {day.message}
          </div>
        )}
      </div>
    </main>
  );
}

function WordUnlock({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function tryUnlock() {
    if (value.trim().toLowerCase() === "basketball court" || "observatory") {
      onUnlock();
    } else {
      setError("That’s not it 🙂");
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="opacity-80">Say the word.</p>

      <input
        className="px-4 py-2 rounded w-64 text-center bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
        placeholder="type here..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
      />

      <button
        className="px-6 py-2 rounded-full bg-white text-black hover:bg-rose-300 transition"
        onClick={tryUnlock}
      >
        Unlock
      </button>

      {error && <p className="text-sm opacity-60">{error}</p>}
    </div>
  );
}
