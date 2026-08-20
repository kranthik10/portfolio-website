"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Html } from "@react-three/drei";
import { useExperience } from "@/components/experience/ExperienceContext";
import { hotspotAnchors, site, type SectionId } from "@/content/site";

export function Hotspot({
  id,
  hitbox,
  children,
}: {
  id: SectionId;
  hitbox: [number, number, number];
  children: ReactNode;
}) {
  const { active, openSection } = useExperience();
  const [hovered, setHovered] = useState(false);
  const selected = active === id;
  const isWall = id === "writing" || id === "location";
  const lift = !isWall && (hovered || selected) ? 0.025 : 0;
  const anchor = hotspotAnchors[id];

  useEffect(() => {
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <group
      position={[anchor.position[0], anchor.position[1] + lift, anchor.position[2]]}
      onClick={(event) => {
        event.stopPropagation();
        openSection(id);
      }}
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <mesh visible={false}>
        <boxGeometry args={hitbox} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      {children}
      <Html
        position={[0, anchor.labelY, 0]}
        center
        distanceFactor={10}
        occlude={false}
        style={{ pointerEvents: "none" }}
      >
        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-[9px] tracking-[0.14em] uppercase ${
            hovered || selected
              ? "bg-[#efe6d6] text-[#2a2118] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              : "bg-[#0c0b0e]/55 text-[#efe6d6]/90 backdrop-blur-sm"
          }`}
        >
          {site.sections[id].label}
        </span>
      </Html>
    </group>
  );
}
