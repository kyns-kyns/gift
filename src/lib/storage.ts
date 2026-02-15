import { Progress, defaultProgress } from "./progress";

const KEY = "pipo-progress";

export function loadProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress;

  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(progress));
}