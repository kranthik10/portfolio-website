"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import { Room } from "@/components/room/Room";
import { CameraRig } from "@/components/scene/CameraRig";
import { Lights } from "@/components/scene/Lights";
import { useExperience } from "@/components/experience/ExperienceContext";

export function PortfolioCanvas({
  onReady,
}: {
  onReady: () => void;
}) {
  const { lowQuality } = useExperience();

  return (
    <Canvas
      className="touch-none"
      style={{ width: "100%", height: "100%" }}
      shadows={!lowQuality}
      dpr={lowQuality ? [1, 1] : [1, 1.5]}
      camera={{
        fov: 42,
        position: [6.35, 3.85, 7.15],
        near: 0.1,
        far: 80,
      }}
      gl={{
        antialias: !lowQuality,
        toneMapping: ACESFilmicToneMapping,
        powerPreference: "high-performance",
      }}
      onCreated={() => {
        onReady();
      }}
    >
      <color attach="background" args={["#1c1712"]} />
      <fog attach="fog" args={["#1c1712", 14, 32]} />
      <CameraRig />
      <Lights />
      <Room />
      {!lowQuality ? (
        <ContactShadows
          position={[0, 0.01, 0]}
          opacity={0.38}
          scale={14}
          blur={2.2}
          far={8}
        />
      ) : null}
    </Canvas>
  );
}
