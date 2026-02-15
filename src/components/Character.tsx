"use client";

import Image from "next/image";
import { CHARACTER } from "@/lib/character";
import type { CharacterMood } from "@/lib/types";

export default function Character({ mood }: { mood: CharacterMood }) {
  const data = CHARACTER[mood];

  return (
    <div className="absolute top-16 flex flex-col items-center gap-3">
      <Image
        src={data.image}
        alt="character"
        width={180}
        height={180}
        className="drop-shadow-xl animate-float"
        priority
      />

      <p className="px-4 py-2 bg-white text-black rounded-full text-sm max-w-xs text-center">
        {data.text}
      </p>
    </div>
  );
}