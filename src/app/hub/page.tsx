"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";

export default function HubPage() {
  const router = useRouter();
  const { canAccessValentine, canOpenDay } = useProgress();

  function go(id: string, locked: boolean) {
    if (locked) return;
    router.push(`/${id}`);
  }

  return (
    <>
      <motion.main
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative min-h-screen overflow-hidden"
      >
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/park.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40 " />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[20px_20px]" />

        <button
          onClick={() => go("valentine", !canAccessValentine)}
          className="absolute z-10"
          style={{
            left: "50%",
            top: "58%", // adjust this to align with picnic cloth
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="/couple.png"
            alt="Couple"
            className={`transition-all duration-700 ease-out
      ${
        canAccessValentine
          ? "opacity-90 scale-[0.55]"
          : "opacity-20 grayscale scale-[0.45]"
      }
    `}
            style={{
              filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.35))",
            }}
          />

          <p className="text-sm opacity-70 mt-2 text-center">
            {canAccessValentine ? "Open our story" : "Complete the journey"}
          </p>
        </button>

        {/* HOTSPOTS */}
        <Hotspot
          label="🌹"
          locked={!canOpenDay("rose")}
          x="22%"
          y="31%"
          onClick={() => go("rose", !canOpenDay("rose"))}
        />
        <Hotspot
          label="🍫"
          locked={!canOpenDay("chocolate")}
          x="30%"
          y="80%"
          onClick={() => go("chocolate", !canOpenDay("chocolate"))}
        />
        <Hotspot
          label="💍"
          locked={!canOpenDay("propose")}
          x="69%"
          y="88%"
          onClick={() => go("propose", !canOpenDay("propose"))}
        />
        <Hotspot
          label="🤝"
          locked={!canOpenDay("promise")}
          x="10%"
          y="85%"
          onClick={() => go("promise", !canOpenDay("promise"))}
        />
        <Hotspot
          label="🫂"
          locked={!canOpenDay("hug")}
          x="77%"
          y="22%"
          onClick={() => go("hug", !canOpenDay("hug"))}
        />
        <Hotspot
          label="💋"
          locked={!canOpenDay("kiss")}
          x="10%"
          y="35%"
          onClick={() => go("kiss", !canOpenDay("kiss"))}
        />
      </motion.main>
    </>
  );
}

/* 🔹 HOTSPOT */
function Hotspot({
  label,
  locked,
  x,
  y,
  onClick,
}: {
  label: string;
  locked: boolean;
  x: string;
  y: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{ left: x, top: y }}
      className={`absolute text-4xl z-10 transition ${
        locked ? "opacity-30 grayscale" : "hover:scale-110 drop-shadow-lg"
      }`}
    >
      {label}
    </button>
  );
}
