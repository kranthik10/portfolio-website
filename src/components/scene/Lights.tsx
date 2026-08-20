"use client";

import { useExperience } from "@/components/experience/ExperienceContext";

export function Lights() {
  const { lowQuality } = useExperience();

  return (
    <>
      <hemisphereLight args={["#d7c4a8", "#1a1410", 0.32]} />
      <ambientLight intensity={0.07} color="#cbb8a0" />

      <directionalLight
        position={[2.1, 3.4, -7.4]}
        intensity={2.35}
        color="#9eb6d4"
        castShadow={!lowQuality}
        shadow-mapSize-width={lowQuality ? 512 : 2048}
        shadow-mapSize-height={lowQuality ? 512 : 2048}
        shadow-bias={-0.00025}
        shadow-normalBias={0.03}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={6}
        shadow-camera-bottom={-4}
      />

      <spotLight
        position={[-2.15, 2.05, -3.35]}
        angle={0.72}
        penumbra={0.9}
        intensity={22}
        color="#ffb56b"
        distance={7.5}
        decay={2}
        castShadow={!lowQuality}
      />

      <pointLight
        position={[0.72, 1.12, -3.45]}
        intensity={2.4}
        color="#6ea0c8"
        distance={3.2}
        decay={2}
      />

      <pointLight
        position={[3.65, 1.15, 0.85]}
        intensity={1.6}
        color="#e8c9a0"
        distance={3.4}
        decay={2}
      />

      <spotLight
        position={[0.2, 3.35, -1.2]}
        angle={1.1}
        penumbra={1}
        intensity={3.2}
        color="#f0d2a8"
        distance={10}
        decay={2}
      />
    </>
  );
}
