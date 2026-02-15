"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pipo-progress";

export const PRE_VALENTINE_DAYS = [
  "rose",
  "chocolate",
  "propose",
  "promise",
  "hug",
  "kiss",
];

function normalize(value: unknown): string[] {
  return Array.isArray(value) ? value : [];
}

export function useProgress() {
  const [unlockedDays, setUnlockedDays] = useState<string[]>([]);

  // ✅ Client-only load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        const initial = ["rose"];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        setUnlockedDays(initial);
        return;
      }

      setUnlockedDays(normalize(JSON.parse(raw)));
    } catch {
      setUnlockedDays(["rose"]);
    }
  }, []);

  // 🔓 Unlock day AND next day
function unlockDay(id: string) {
  setUnlockedDays((prev) => {
    const safePrev = normalize(prev);
    if (safePrev.includes(id)) return safePrev;

    const updated = [...safePrev, id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  });
}

  function isUnlocked(id: string) {
    return unlockedDays.includes(id);
  }

  function canOpenDay(id: string) {
    const index = PRE_VALENTINE_DAYS.indexOf(id);
    if (index === -1) return false;
    if (index === 0) return true;

    return unlockedDays.includes(PRE_VALENTINE_DAYS[index - 1]);
  }

  const canAccessValentine =
    PRE_VALENTINE_DAYS.every((d) => unlockedDays.includes(d));

  return {
    unlockedDays,
    unlockDay,
    isUnlocked,
    canOpenDay,
    canAccessValentine,
  };
}