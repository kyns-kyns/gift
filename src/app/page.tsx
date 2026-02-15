"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EtherBackground from "@/components/EtherBackground";
import Character from "@/components/Character";
import { CHARACTER } from "@/lib/character";
import type { CharacterMood } from "@/lib/types";

/**
 * Rogue button is restricted to THIS box only
 * (right side of screen, below character)
 */
const ROGUE_BOUNDS = {
  minX: 10,
  maxX: 90,
  minY: 20,
  maxY: 80,
};

export default function EntryPage() {
  const router = useRouter();

  const [mood, setMood] = useState<CharacterMood>("default");
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [dodges, setDodges] = useState(0);
  const [wrongClicked, setWrongClicked] = useState(0);
  const [canClick, setCanClick] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  /* ---------------- WRONG ANSWERS ---------------- */

  function wrongAnswer() {
    setWrongClicked((c) => c + 1);
  }

  /* ---------------- ROGUE DODGE ---------------- */

  function dodge() {
    if (canClick || isMoving) return;

    setIsMoving(true);
    setDodges((d) => d + 1);
    setMood("tease");

    const nextX =
      Math.random() * (ROGUE_BOUNDS.maxX - ROGUE_BOUNDS.minX) +
      ROGUE_BOUNDS.minX;
    const nextY =
      Math.random() * (ROGUE_BOUNDS.maxY - ROGUE_BOUNDS.minY) +
      ROGUE_BOUNDS.minY;

    setPos({ x: nextX, y: nextY });

    setTimeout(() => {
      setIsMoving(false);
      if (dodges + 1 >= 10 && wrongClicked >= 10) {
        setCanClick(true);
        setMood("soft");
      }
    }, 350);
  }

  /* ---------------- ACCEPT ---------------- */

  function accept() {
    if (!canClick) return;
    setMood("love");
    setTimeout(() => router.push("/hub"), 1200);
  }

  /* ---------------- RENDER ---------------- */

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <EtherBackground colors={CHARACTER[mood].etherColors} />
      <div className="absolute right-90 bottom-170 pointer-events-none w-100">
        <Character mood={mood} />
      </div>

      {/* UI LAYER */}
      <div className="relative z-10 flex w-full max-w-5xl mx-auto pt-100 px-50">
        {/* LEFT: SAFE BUTTONS */}
        <div className="w-1/2 flex flex-col gap-6 items-start">
          <button
            onClick={() => {
              setMood("tease");
              wrongAnswer();
            }}
            className="choice-btn"
          >
            Just exploring..
          </button>

          <button
            onClick={() => {
              setMood("annoyed");
              wrongAnswer();
            }}
            className="choice-btn"
          >
            I was bored..
          </button>

          <button
            onClick={() => {
              setMood("soft");
              wrongAnswer();
            }}
            className="choice-btn"
          >
            Just to see you...
          </button>
        </div>

        {/* RIGHT: ROGUE ZONE (ISOLATED) */}
        <div className="relative w-1/2 h-60">
          <div
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-70%, -70%)",
              transition:
                "left 350ms cubic-bezier(0.22, 1, 0.36, 1), top 350ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={dodge}
          >
            <button
              onClick={accept}
              disabled={!canClick}
              className={`choice-btn transition-all duration-300 ${
                canClick
                  ? "bg-rose-300 text-black scale-105 cursor-pointer"
                  : "opacity-80 cursor-not-allowed"
              }`}
            >
              Because I feel something ❤️
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
