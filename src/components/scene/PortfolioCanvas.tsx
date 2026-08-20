"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, SoftShadows } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
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
      dpr={lowQuality ? [1, 1] : [1, 1.75]}
      camera={{
        fov: 38,
        position: [5.85, 3.15, 6.55],
        near: 0.1,
        far: 60,
      }}
      gl={{
        antialias: !lowQuality,
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: SRGBColorSpace,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 1.12;
        onReady();
      }}
    >
      <color attach="background" args={["#0c0b0e"]} />
      <fog attach="fog" args={["#121014", 9, 20]} />
      {!lowQuality ? <SoftShadows size={18} samples={10} focus={0.85} /> : null}
      <Environment preset="night" environmentIntensity={0.18} />
      <CameraRig />
      <Lights />
      <Room />
      <ContactShadows
        position={[0, 0.02, 0]}
        opacity={lowQuality ? 0.28 : 0.45}
        scale={14}
        blur={lowQuality ? 2.8 : 2.1}
        far={7}
        color="#1a100c"
      />
    </Canvas>
  );
}
