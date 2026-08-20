"use client";

import { RoundedBox } from "@react-three/drei";
import { Hotspot } from "@/components/room/Hotspot";
import { palette } from "@/components/room/palette";
import { RoomShell } from "@/components/room/RoomShell";
import { useExperience } from "@/components/experience/ExperienceContext";

type Shadows = { shadows: boolean };

export function Room() {
  const { lowQuality } = useExperience();
  const shadows = !lowQuality;

  return (
    <group>
      <RoomShell shadows={shadows} />
      <Bookshelf shadows={shadows} />
      <Desk shadows={shadows} />
      <Chair shadows={shadows} />
      <TrophyShelf shadows={shadows} />
      <Corkboard shadows={shadows} />
      <WindowView shadows={shadows} />
      <HobbiesCorner shadows={shadows} />
      <SideTable shadows={shadows} />
      <FloorLamp shadows={shadows} />
      <Dressing shadows={shadows} />
    </group>
  );
}

function Bookshelf({ shadows }: Shadows) {
  return (
    <Hotspot id="about" hitbox={[1.2, 2.65, 0.55]}>
      <RoundedBox args={[1.16, 2.48, 0.4]} radius={0.025} smoothness={3} position={[0, 1.24, 0]} castShadow={shadows} receiveShadow={shadows}>
        <meshStandardMaterial color={palette.walnut} roughness={0.62} />
      </RoundedBox>
      <mesh position={[0, 1.24, 0.14]} receiveShadow={shadows}>
        <boxGeometry args={[1.02, 2.28, 0.04]} />
        <meshStandardMaterial color={palette.walnutMid} roughness={0.75} />
      </mesh>
      {[0.28, 0.78, 1.28, 1.78, 2.28].map((y) => (
        <mesh key={y} position={[0, y, 0.04]} receiveShadow={shadows} castShadow={shadows}>
          <boxGeometry args={[1.04, 0.045, 0.34]} />
          <meshStandardMaterial color={palette.walnutLight} roughness={0.58} />
        </mesh>
      ))}
      {BOOKS.map((book) => (
        <mesh
          key={book.id}
          position={[book.x, book.y, 0.1]}
          rotation={[0, 0, book.lean]}
          castShadow={shadows}
        >
          <boxGeometry args={[book.w, book.h, book.d]} />
          <meshStandardMaterial color={book.color} roughness={0.55} />
        </mesh>
      ))}
      <mesh position={[-0.22, 2.38, 0.08]} castShadow={shadows}>
        <cylinderGeometry args={[0.07, 0.08, 0.1, 12]} />
        <meshStandardMaterial color={palette.terracotta} roughness={0.8} />
      </mesh>
      <mesh position={[-0.22, 2.5, 0.08]} castShadow={shadows}>
        <sphereGeometry args={[0.09, 10, 8]} />
        <meshStandardMaterial color={palette.leafB} roughness={0.7} />
      </mesh>
    </Hotspot>
  );
}

const BOOKS: Array<{
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  d: number;
  lean: number;
  color: string;
}> = [
  { id: "b1", x: -0.38, y: 0.5, w: 0.11, h: 0.36, d: 0.22, lean: 0, color: "#6e2e24" },
  { id: "b2", x: -0.24, y: 0.48, w: 0.1, h: 0.32, d: 0.21, lean: 0, color: "#d7c4a0" },
  { id: "b3", x: -0.1, y: 0.52, w: 0.12, h: 0.4, d: 0.23, lean: 0, color: "#2f4a3c" },
  { id: "b4", x: 0.05, y: 0.47, w: 0.09, h: 0.3, d: 0.2, lean: 0, color: "#3d4c6b" },
  { id: "b5", x: 0.2, y: 0.51, w: 0.13, h: 0.38, d: 0.22, lean: 0.08, color: "#c07a3a" },
  { id: "b6", x: 0.36, y: 0.46, w: 0.1, h: 0.28, d: 0.2, lean: 0, color: "#efe6d6" },
  { id: "b7", x: -0.34, y: 1.0, w: 0.12, h: 0.34, d: 0.22, lean: 0, color: "#4a2c23" },
  { id: "b8", x: -0.18, y: 1.02, w: 0.1, h: 0.38, d: 0.21, lean: 0, color: "#6d7f5c" },
  { id: "b9", x: -0.02, y: 0.96, w: 0.32, h: 0.08, d: 0.22, lean: 0, color: "#8b5a2b" },
  { id: "b10", x: -0.02, y: 1.05, w: 0.3, h: 0.07, d: 0.2, lean: 0, color: "#b9a07a" },
  { id: "b11", x: 0.28, y: 1.0, w: 0.11, h: 0.34, d: 0.22, lean: -0.1, color: "#5c3d5e" },
  { id: "b12", x: 0.4, y: 0.98, w: 0.09, h: 0.3, d: 0.2, lean: 0, color: "#2c3a4a" },
  { id: "b13", x: -0.36, y: 1.5, w: 0.1, h: 0.33, d: 0.21, lean: 0, color: "#a34a32" },
  { id: "b14", x: -0.22, y: 1.52, w: 0.12, h: 0.38, d: 0.23, lean: 0, color: "#d6c4a0" },
  { id: "b15", x: -0.08, y: 1.48, w: 0.1, h: 0.3, d: 0.2, lean: 0, color: "#3d6b4f" },
  { id: "b16", x: 0.08, y: 1.51, w: 0.11, h: 0.36, d: 0.22, lean: 0, color: "#7a3b2e" },
  { id: "b17", x: 0.24, y: 1.47, w: 0.1, h: 0.28, d: 0.2, lean: 0, color: "#e8d5b5" },
  { id: "b18", x: 0.38, y: 1.5, w: 0.12, h: 0.34, d: 0.22, lean: 0.06, color: "#2f4a3c" },
  { id: "b19", x: -0.3, y: 2.0, w: 0.11, h: 0.32, d: 0.21, lean: 0, color: "#3d4c6b" },
  { id: "b20", x: -0.16, y: 2.03, w: 0.1, h: 0.38, d: 0.22, lean: 0, color: "#c07a3a" },
  { id: "b21", x: 0.02, y: 1.98, w: 0.28, h: 0.07, d: 0.2, lean: 0, color: "#efe6d6" },
  { id: "b22", x: 0.28, y: 2.0, w: 0.12, h: 0.33, d: 0.22, lean: 0, color: "#4a2c23" },
];

function Desk({ shadows }: Shadows) {
  return (
    <Hotspot id="work" hitbox={[2.25, 1.45, 1.15]}>
      <RoundedBox args={[2.16, 0.09, 0.98]} radius={0.03} smoothness={3} position={[0, 0.74, 0]} castShadow={shadows} receiveShadow={shadows}>
        <meshStandardMaterial color={palette.walnutMid} roughness={0.48} />
      </RoundedBox>
      <mesh position={[0, 0.66, 0]} receiveShadow={shadows}>
        <boxGeometry args={[2.05, 0.08, 0.88]} />
        <meshStandardMaterial color={palette.walnut} roughness={0.65} />
      </mesh>
      {[-0.92, 0.92].flatMap((x) =>
        [-0.34, 0.34].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.34, z]} castShadow={shadows}>
            <cylinderGeometry args={[0.035, 0.045, 0.68, 8]} />
            <meshStandardMaterial color={palette.walnut} roughness={0.6} />
          </mesh>
        )),
      )}
      <RoundedBox args={[0.42, 0.16, 0.72]} radius={0.015} smoothness={2} position={[-0.55, 0.55, 0]} castShadow={shadows}>
        <meshStandardMaterial color={palette.walnutLight} roughness={0.55} />
      </RoundedBox>
      <mesh position={[-0.55, 0.55, 0.37]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color={palette.brass} metalness={0.8} roughness={0.3} />
      </mesh>
      <group position={[0.28, 0.8, 0.02]} rotation={[0, -0.18, 0]}>
        <RoundedBox args={[0.74, 0.025, 0.5]} radius={0.01} smoothness={2} castShadow={shadows}>
          <meshStandardMaterial color={palette.charcoal} metalness={0.45} roughness={0.35} />
        </RoundedBox>
        <mesh position={[0, 0.28, -0.2]} rotation={[0.18, 0, 0]} castShadow={shadows}>
          <boxGeometry args={[0.72, 0.46, 0.028]} />
          <meshStandardMaterial color="#11161c" metalness={0.2} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.28, -0.185]} rotation={[0.18, 0, 0]}>
          <boxGeometry args={[0.64, 0.38, 0.01]} />
          <meshStandardMaterial
            color="#1c2a38"
            emissive="#4f86a8"
            emissiveIntensity={0.55}
          />
        </mesh>
      </group>
      <mesh position={[-0.62, 0.8, 0.18]} rotation={[0, 0.45, 0]} castShadow={shadows}>
        <boxGeometry args={[0.3, 0.015, 0.38]} />
        <meshStandardMaterial color={palette.paper} roughness={0.85} />
      </mesh>
      <mesh position={[0.78, 0.82, 0.22]} castShadow={shadows}>
        <cylinderGeometry args={[0.045, 0.04, 0.1, 12]} />
        <meshStandardMaterial color="#6e2e24" roughness={0.5} />
      </mesh>
      <mesh position={[0.84, 0.84, 0.22]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.035, 0.008, 6, 12, Math.PI]} />
        <meshStandardMaterial color="#6e2e24" roughness={0.5} />
      </mesh>
    </Hotspot>
  );
}

function Chair({ shadows }: Shadows) {
  return (
    <group position={[0.7, 0, -2.35]} rotation={[0, 0.35, 0]}>
      <RoundedBox args={[0.48, 0.05, 0.48]} radius={0.02} smoothness={2} position={[0, 0.48, 0]} castShadow={shadows}>
        <meshStandardMaterial color={palette.walnutMid} roughness={0.55} />
      </RoundedBox>
      <RoundedBox args={[0.46, 0.58, 0.06]} radius={0.02} smoothness={2} position={[0, 0.82, -0.21]} castShadow={shadows}>
        <meshStandardMaterial color={palette.walnut} roughness={0.6} />
      </RoundedBox>
      {[-0.18, 0.18].flatMap((x) =>
        [-0.18, 0.18].map((z) => (
          <mesh key={`${x}${z}`} position={[x, 0.24, z]} castShadow={shadows}>
            <cylinderGeometry args={[0.025, 0.03, 0.48, 8]} />
            <meshStandardMaterial color={palette.walnut} />
          </mesh>
        )),
      )}
      <group position={[0, 0.92, -0.18]} rotation={[0.15, 0, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.14, 0.018, 8, 18, Math.PI]} />
          <meshStandardMaterial color={palette.charcoal} roughness={0.45} />
        </mesh>
        <mesh position={[-0.14, -0.04, 0.02]}>
          <sphereGeometry args={[0.055, 10, 8]} />
          <meshStandardMaterial color={palette.charcoal} roughness={0.4} />
        </mesh>
        <mesh position={[0.14, -0.04, 0.02]}>
          <sphereGeometry args={[0.055, 10, 8]} />
          <meshStandardMaterial color={palette.charcoal} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

function Trophy({
  shadows,
  position,
  scale = 1,
}: Shadows & { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow={shadows}>
        <cylinderGeometry args={[0.07, 0.09, 0.05, 10]} />
        <meshStandardMaterial color={palette.walnut} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.06, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.025, 0.025, 0.12, 8]} />
        <meshStandardMaterial color={palette.brass} metalness={0.85} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.18, 0]} castShadow={shadows}>
        <sphereGeometry args={[0.07, 12, 10]} />
        <meshStandardMaterial color={palette.brass} metalness={0.88} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0.22, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.075, 0.08, 10]} />
        <meshStandardMaterial color={palette.brass} metalness={0.88} roughness={0.22} />
      </mesh>
    </group>
  );
}

function TrophyShelf({ shadows }: Shadows) {
  return (
    <Hotspot id="awards" hitbox={[1.1, 2.15, 0.5]}>
      <mesh position={[0, 0.95, 0]} castShadow={shadows}>
        <boxGeometry args={[0.08, 1.9, 0.08]} />
        <meshStandardMaterial color={palette.walnut} />
      </mesh>
      <mesh position={[-0.42, 0.95, 0]} castShadow={shadows}>
        <boxGeometry args={[0.08, 1.9, 0.08]} />
        <meshStandardMaterial color={palette.walnut} />
      </mesh>
      <mesh position={[0.42, 0.95, 0]} castShadow={shadows}>
        <boxGeometry args={[0.08, 1.9, 0.08]} />
        <meshStandardMaterial color={palette.walnut} />
      </mesh>
      {[0.55, 1.1, 1.65].map((y) => (
        <RoundedBox key={y} args={[1.02, 0.06, 0.34]} radius={0.015} smoothness={2} position={[0, y, 0]} castShadow={shadows} receiveShadow={shadows}>
          <meshStandardMaterial color={palette.walnutMid} roughness={0.55} />
        </RoundedBox>
      ))}
      <Trophy shadows={shadows} position={[-0.22, 1.13, 0]} />
      <Trophy shadows={shadows} position={[0.24, 1.13, 0]} scale={0.85} />
      <Trophy shadows={shadows} position={[0, 1.68, 0]} scale={1.1} />
      <mesh position={[-0.2, 0.62, 0.02]} castShadow={shadows}>
        <boxGeometry args={[0.16, 0.12, 0.08]} />
        <meshStandardMaterial color={palette.brassDark} metalness={0.7} roughness={0.35} />
      </mesh>
    </Hotspot>
  );
}

function Corkboard({ shadows }: Shadows) {
  return (
    <Hotspot id="writing" hitbox={[1.35, 1.05, 0.22]}>
      <RoundedBox args={[1.28, 0.92, 0.05]} radius={0.02} smoothness={2} castShadow={shadows} receiveShadow={shadows}>
        <meshStandardMaterial color="#b08958" roughness={1} />
      </RoundedBox>
      <mesh position={[0, 0, 0.028]} receiveShadow={shadows}>
        <boxGeometry args={[1.16, 0.8, 0.02]} />
        <meshStandardMaterial color="#c4a06a" roughness={1} />
      </mesh>
      {[
        { x: -0.32, y: 0.16, rot: -0.08, color: "#efe6d6", w: 0.34, h: 0.24 },
        { x: 0.26, y: 0.2, rot: 0.1, color: "#f2d3b0", w: 0.3, h: 0.22 },
        { x: -0.08, y: -0.18, rot: 0.04, color: "#e8cfc0", w: 0.36, h: 0.2 },
        { x: 0.34, y: -0.14, rot: -0.12, color: "#dfe8f0", w: 0.22, h: 0.18 },
      ].map((note) => (
        <mesh key={note.color} position={[note.x, note.y, 0.05]} rotation={[0, 0, note.rot]}>
          <boxGeometry args={[note.w, note.h, 0.008]} />
          <meshStandardMaterial color={note.color} roughness={0.9} />
        </mesh>
      ))}
    </Hotspot>
  );
}

function WindowView({ shadows }: Shadows) {
  return (
    <Hotspot id="location" hitbox={[1.85, 1.85, 0.3]}>
      <mesh position={[0, 0, -0.04]} receiveShadow={shadows}>
        <boxGeometry args={[1.82, 1.82, 0.1]} />
        <meshStandardMaterial color={palette.walnut} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[1.52, 1.52, 0.02]} />
        <meshStandardMaterial color={palette.night} emissive={palette.dusk} emissiveIntensity={0.45} />
      </mesh>
      {[
        { x: -0.48, y: -0.15, w: 0.32, h: 1.05 },
        { x: -0.14, y: 0.02, w: 0.26, h: 1.28 },
        { x: 0.18, y: -0.22, w: 0.34, h: 0.88 },
        { x: 0.5, y: -0.08, w: 0.22, h: 1.16 },
      ].map((bldg) => (
        <mesh key={`${bldg.x}`} position={[bldg.x, bldg.y, 0.04]}>
          <boxGeometry args={[bldg.w, bldg.h, 0.05]} />
          <meshStandardMaterial color="#0f141c" roughness={1} />
        </mesh>
      ))}
      {WINDOW_LIGHTS.map((light) => (
        <mesh key={light.id} position={[light.x, light.y, 0.07]}>
          <boxGeometry args={[0.045, 0.055, 0.01]} />
          <meshStandardMaterial
            color={palette.tungsten}
            emissive={palette.tungsten}
            emissiveIntensity={light.bright}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[0.03, 1.5, 0.02]} />
        <meshStandardMaterial color={palette.walnutLight} />
      </mesh>
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[1.5, 0.03, 0.02]} />
        <meshStandardMaterial color={palette.walnutLight} />
      </mesh>
      <mesh position={[0, -0.92, 0.12]} receiveShadow={shadows} castShadow={shadows}>
        <boxGeometry args={[1.95, 0.08, 0.28]} />
        <meshStandardMaterial color={palette.walnutMid} roughness={0.55} />
      </mesh>
      <mesh position={[-0.82, 0.05, 0.16]} rotation={[0, 0.18, 0]} castShadow={shadows}>
        <boxGeometry args={[0.22, 1.7, 0.04]} />
        <meshStandardMaterial color={palette.linen} roughness={0.95} />
      </mesh>
      <mesh position={[0.84, -0.05, 0.18]} rotation={[0, -0.22, 0]} castShadow={shadows}>
        <boxGeometry args={[0.2, 1.65, 0.04]} />
        <meshStandardMaterial color="#cbb59a" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.1, 0.35]} rotation={[-0.4, 0, 0]}>
        <planeGeometry args={[1.1, 1.6]} />
        <meshBasicMaterial color="#9eb6d4" transparent opacity={0.07} depthWrite={false} />
      </mesh>
    </Hotspot>
  );
}

const WINDOW_LIGHTS = [
  { id: "w1", x: -0.5, y: 0.12, bright: 1.4 },
  { id: "w2", x: -0.42, y: -0.05, bright: 0.8 },
  { id: "w3", x: -0.12, y: 0.28, bright: 1.6 },
  { id: "w4", x: 0.2, y: -0.02, bright: 1.1 },
  { id: "w5", x: 0.48, y: 0.18, bright: 1.5 },
  { id: "w6", x: 0.54, y: -0.22, bright: 0.7 },
];

function HobbiesCorner({ shadows }: Shadows) {
  return (
    <Hotspot id="hobbies" hitbox={[1.4, 1.5, 1.15]}>
      <mesh position={[-0.22, 0.16, 0.08]} castShadow={shadows}>
        <cylinderGeometry args={[0.15, 0.18, 0.2, 16]} />
        <meshStandardMaterial color={palette.terracotta} roughness={0.78} />
      </mesh>
      <mesh position={[-0.22, 0.27, 0.08]}>
        <cylinderGeometry args={[0.17, 0.17, 0.04, 16]} />
        <meshStandardMaterial color="#8a4630" roughness={0.7} />
      </mesh>
      <mesh position={[-0.22, 0.24, 0.08]}>
        <cylinderGeometry args={[0.13, 0.13, 0.04, 12]} />
        <meshStandardMaterial color="#3a2a1c" roughness={1} />
      </mesh>
      <mesh position={[-0.22, 0.52, 0.08]} castShadow={shadows}>
        <sphereGeometry args={[0.28, 12, 10]} />
        <meshStandardMaterial color={palette.leafA} roughness={0.68} />
      </mesh>
      <mesh position={[-0.08, 0.72, 0.16]} castShadow={shadows}>
        <sphereGeometry args={[0.16, 10, 8]} />
        <meshStandardMaterial color={palette.leafC} roughness={0.65} />
      </mesh>
      <mesh position={[-0.34, 0.7, 0]} castShadow={shadows}>
        <sphereGeometry args={[0.14, 10, 8]} />
        <meshStandardMaterial color={palette.leafB} roughness={0.7} />
      </mesh>
      <mesh position={[-0.18, 0.88, 0.04]} castShadow={shadows}>
        <sphereGeometry args={[0.11, 8, 8]} />
        <meshStandardMaterial color="#3f6b4e" roughness={0.66} />
      </mesh>
      <group position={[0.38, 0.14, -0.18]} rotation={[1.18, 0.15, 0.35]}>
        <RoundedBox args={[0.78, 0.035, 0.22]} radius={0.012} smoothness={2} castShadow={shadows}>
          <meshStandardMaterial color="#2a2a2c" roughness={0.5} />
        </RoundedBox>
        <mesh position={[0, 0.012, 0]}>
          <boxGeometry args={[0.5, 0.01, 0.12]} />
          <meshStandardMaterial color="#c45c3a" roughness={0.6} />
        </mesh>
        {[-0.26, 0.26].map((x) => (
          <group key={x} position={[x, -0.03, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.095, 0.095, 0.045, 16]} />
              <meshStandardMaterial color="#141414" roughness={0.4} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.095, 0.012, 8, 16]} />
              <meshStandardMaterial color="#3a3a3a" metalness={0.5} roughness={0.4} />
            </mesh>
          </group>
        ))}
      </group>
    </Hotspot>
  );
}

function SideTable({ shadows }: Shadows) {
  return (
    <Hotspot id="contact" hitbox={[0.75, 1.25, 0.75]}>
      <mesh position={[0, 0.42, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.07, 0.09, 0.84, 12]} />
        <meshStandardMaterial color={palette.walnutMid} roughness={0.58} />
      </mesh>
      <mesh position={[0, 0.04, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.22, 0.24, 0.06, 16]} />
        <meshStandardMaterial color={palette.walnut} roughness={0.6} />
      </mesh>
      <RoundedBox args={[0.72, 0.05, 0.72]} radius={0.03} smoothness={3} position={[0, 0.86, 0]} castShadow={shadows} receiveShadow={shadows}>
        <meshStandardMaterial color={palette.walnutLight} roughness={0.5} />
      </RoundedBox>
      <mesh position={[0.08, 0.91, 0.06]} rotation={[-0.05, 0.5, 0.12]} castShadow={shadows}>
        <boxGeometry args={[0.24, 0.008, 0.17]} />
        <meshStandardMaterial color={palette.paper} roughness={0.88} />
      </mesh>
      <RoundedBox args={[0.07, 0.15, 0.035]} radius={0.008} smoothness={2} position={[-0.14, 0.96, -0.08]} castShadow={shadows}>
        <meshStandardMaterial color={palette.charcoal} metalness={0.55} roughness={0.35} />
      </RoundedBox>
      <mesh position={[0.18, 1.02, -0.12]} castShadow={shadows}>
        <cylinderGeometry args={[0.05, 0.055, 0.08, 12]} />
        <meshStandardMaterial color="#1e2a24" roughness={0.4} />
      </mesh>
      <pointLight position={[0.18, 1.08, -0.12]} intensity={0.8} color="#ffd7a0" distance={1.6} />
    </Hotspot>
  );
}

function FloorLamp({ shadows }: Shadows) {
  return (
    <group position={[-2.18, 0, -3.38]}>
      <mesh position={[0, 0.04, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.16, 0.18, 0.05, 16]} />
        <meshStandardMaterial color={palette.walnut} roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.72, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.025, 0.03, 1.4, 10]} />
        <meshStandardMaterial color={palette.brassDark} metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh position={[0, 1.42, 0]} rotation={[Math.PI, 0, 0]} castShadow={shadows}>
        <coneGeometry args={[0.28, 0.36, 16]} />
        <meshStandardMaterial
          color="#ead4b0"
          roughness={0.7}
          emissive="#ffd19a"
          emissiveIntensity={0.28}
        />
      </mesh>
      <mesh position={[0, 1.32, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#fff3d6" emissive="#ffe0a8" emissiveIntensity={1.4} />
      </mesh>
    </group>
  );
}

function Dressing({ shadows }: Shadows) {
  return (
    <group>
      <group position={[-4.95, 1.55, 0.35]} rotation={[0, Math.PI / 2, 0]}>
        <RoundedBox args={[0.7, 0.9, 0.04]} radius={0.01} smoothness={2} castShadow={shadows}>
          <meshStandardMaterial color={palette.walnut} roughness={0.55} />
        </RoundedBox>
        <mesh position={[0, 0, 0.025]}>
          <boxGeometry args={[0.56, 0.74, 0.01]} />
          <meshStandardMaterial color="#4a5c58" roughness={0.7} />
        </mesh>
      </group>
      <group position={[4.2, 0.12, -2.4]}>
        {[-0.02, 0.02, 0.055].map((y, index) => (
          <mesh key={y} position={[0, y, 0]} rotation={[-Math.PI / 2, 0, index * 0.2]} castShadow={shadows}>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 20]} />
            <meshStandardMaterial
              color={index === 1 ? "#2c2420" : "#1a1a1c"}
              roughness={0.55}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
