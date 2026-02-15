"use client";

import Link from "next/link";
import clsx from "clsx";

export default function DayTile({
  id,
  label,
  emoji,
  locked,
}: {
  id: string;
  label: string;
  emoji: string;
  locked: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative rounded-xl p-6 text-center transition-all",
        locked
          ? "bg-neutral-900 opacity-50 grayscale blur-[1px] cursor-not-allowed"
          : "bg-linear-to-b from-neutral-800 to-black hover:scale-105",
      )}
    >
      {!locked ? (
        <Link href={`/${id}`} className="block space-y-2">
          <div className="text-4xl">{emoji}</div>
          <p className="text-lg">{label}</p>
        </Link>
      ) : (
        <div className="space-y-2">
          <div className="text-4xl">🔒</div>
          <p className="text-sm opacity-60">Not yet</p>
        </div>
      )}
    </div>
  );
}
