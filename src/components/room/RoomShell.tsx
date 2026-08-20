"use client";

import { RoundedBox } from "@react-three/drei";
import { palette } from "@/components/room/palette";

type Shadows = { shadows: boolean };

export function RoomShell({ shadows }: Shadows) {
  return (
    <group>
      <Floor shadows={shadows} />
      <mesh position={[0, 3.58, -0.6]} receiveShadow={shadows}>
        <boxGeometry args={[11.4, 0.12, 10.2]} />
        <meshStandardMaterial color={palette.plasterDeep} roughness={0.95} />
      </mesh>
      <mesh position={[0, 3.48, -1.4]} castShadow={shadows}>
        <boxGeometry args={[11.2, 0.16, 0.28]} />
        <meshStandardMaterial color={palette.walnut} roughness={0.7} />
      </mesh>

      <mesh position={[0, 1.8, -5.02]} receiveShadow={shadows}>
        <boxGeometry args={[11.2, 3.6, 0.18]} />
        <meshStandardMaterial color={palette.plaster} roughness={0.92} />
      </mesh>
      <mesh position={[-5.55, 1.8, 0]} receiveShadow={shadows}>
        <boxGeometry args={[0.18, 3.6, 10.1]} />
        <meshStandardMaterial color={palette.plasterCool} roughness={0.93} />
      </mesh>
      <mesh position={[5.55, 1.8, -1.1]} receiveShadow={shadows}>
        <boxGeometry args={[0.18, 3.6, 8]} />
        <meshStandardMaterial color={palette.plaster} roughness={0.92} />
      </mesh>

      <mesh position={[0, 0.9, -4.91]}>
        <boxGeometry args={[11, 0.04, 0.04]} />
        <meshStandardMaterial color={palette.linen} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.07, -4.9]} receiveShadow={shadows}>
        <boxGeometry args={[11, 0.16, 0.08]} />
        <meshStandardMaterial color={palette.walnutMid} roughness={0.75} />
      </mesh>
      <mesh position={[-5.43, 0.07, 0]} receiveShadow={shadows}>
        <boxGeometry args={[0.08, 0.16, 10]} />
        <meshStandardMaterial color={palette.walnutMid} roughness={0.75} />
      </mesh>

      <Rug shadows={shadows} />
    </group>
  );
}

function Floor({ shadows }: Shadows) {
  const tones = [palette.oakA, palette.oakB, palette.oakC, palette.oakD];
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow={shadows}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={palette.oakD} roughness={0.9} />
      </mesh>
      {Array.from({ length: 18 }, (_, index) => (
        <mesh
          key={index}
          position={[-5.3 + index * 0.62, 0.018, -0.2]}
          receiveShadow={shadows}
        >
          <boxGeometry args={[0.56, 0.03, 10.6]} />
          <meshStandardMaterial
            color={tones[index % tones.length]}
            roughness={0.78 + (index % 3) * 0.04}
          />
        </mesh>
      ))}
    </group>
  );
}

function Rug({ shadows }: Shadows) {
  return (
    <group position={[0.15, 0.035, 0.15]}>
      <mesh receiveShadow={shadows}>
        <boxGeometry args={[4.6, 0.03, 3.4]} />
        <meshStandardMaterial color={palette.rug} roughness={1} />
      </mesh>
      <mesh position={[0, 0.002, 0]} receiveShadow={shadows}>
        <boxGeometry args={[4.2, 0.032, 3.05]} />
        <meshStandardMaterial color="#6a3830" roughness={1} />
      </mesh>
      <RoundedBox
        args={[4.65, 0.02, 3.45]}
        radius={0.04}
        smoothness={2}
        position={[0, -0.004, 0]}
      >
        <meshStandardMaterial color={palette.rugBorder} roughness={1} />
      </RoundedBox>
    </group>
  );
}
