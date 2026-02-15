"use client";

import { useRouter } from "next/navigation";
import EtherBackground from "@/components/EtherBackground";
import Character from "@/components/Character";
import { CHARACTER } from "@/lib/character";

export default function ValentinePage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <EtherBackground colors={CHARACTER.valentine.etherColors} />

      <div className="absolute right-210 bottom-190 pointer-events-none w-100">
        <Character mood="valentine" />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-xl text-center px-6">
        <h1 className="text-5xl font-serif text-rose-300 mb-6">
          Happy Valentine’s Day
        </h1>

        <p className="text-lg opacity-85 leading-relaxed">
          I didn’t make this to impress you.
          <br />
          I made it because some feelings deserve time.
          <br />
          And you… felt worth every step. 
          <br />
          This whole thing — the puzzles, the patience, the waiting — was just an excuse.
        </p>

        <p className="mt-8 italic text-rose-200">
          “An excuse to remind you that loving you is my favorite thing to do.”
        </p>

        <div className="text-6xl mt-10 mb-6 animate-pulse">❤️</div>

        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 rounded-full border border-rose-300 hover:bg-rose-300 hover:text-black transition"
        >
          Go back to our journey
        </button>
      </div>
    </main>
  );
}
