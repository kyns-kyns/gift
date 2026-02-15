"use client";

import LiquidEther from "@/components/LiquidEther";

type EtherBackgroundProps = {
  colors: readonly string[];
};

export default function EtherBackground({ colors }: EtherBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <LiquidEther colors={[...colors]} />
    </div>
  );
}