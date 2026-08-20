"use client";

import { useExperience } from "@/components/experience/ExperienceContext";

export function Lights() {
  const { lowQuality } = useExperience();

  return (
    <>
      <hemisphereLight args={["#ffe6c2", "#2a2420", 0.55]} />
      <ambientLight intensity={0.18} color="#c4b8a8" />
      <directionalLight
        position={[5.5, 8, 4]}
        intensity={1.05}
        color="#ffd9a0"
        castShadow={!lowQuality}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[2.05, 2.6, -3.6]}
        angle={0.55}
        penumbra={0.85}
        intensity={18}
        color="#9eb8e8"
        distance={9}
      />
      <pointLight
        position={[-2.2, 1.35, -3.4]}
        intensity={4.5}
        color="#ffb36b"
        distance={6}
      />
    </>
  );
}
