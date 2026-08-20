"use client";

import { Hotspot } from "@/components/room/Hotspot";
import { useExperience } from "@/components/experience/ExperienceContext";

const plaster = "#d2c3ae";
const plasterShadow = "#b9aa96";
const floor = "#5a3c2c";
const walnut = "#3c291e";
const walnutMid = "#5c4030";
const brass = "#c4a35a";
const paper = "#efe4d0";
const leaf = "#3f6b4e";
const night = "#1a2230";
const glow = "#f0c27a";

export function Room() {
  const { lowQuality } = useExperience();
  const shadows = !lowQuality;

  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow={shadows}
      >
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={floor} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.02, 0.4]} receiveShadow={shadows}>
        <boxGeometry args={[4.2, 0.04, 3.2]} />
        <meshStandardMaterial color="#6e3f32" roughness={0.9} />
      </mesh>

      <mesh position={[0, 2.1, -5]} receiveShadow={shadows}>
        <boxGeometry args={[12, 4.2, 0.16]} />
        <meshStandardMaterial color={plaster} roughness={0.9} />
      </mesh>
      <mesh position={[-5.9, 2.1, 0]} receiveShadow={shadows}>
        <boxGeometry args={[0.16, 4.2, 12]} />
        <meshStandardMaterial color={plasterShadow} roughness={0.9} />
      </mesh>
      <mesh position={[5.9, 2.1, -1.5]} receiveShadow={shadows}>
        <boxGeometry args={[0.16, 4.2, 7]} />
        <meshStandardMaterial color={plaster} roughness={0.92} />
      </mesh>

      <Bookshelf shadows={shadows} />
      <Desk shadows={shadows} />
      <TrophyShelf shadows={shadows} />
      <Corkboard shadows={shadows} />
      <WindowView shadows={shadows} />
      <HobbiesCorner shadows={shadows} />
      <SideTable shadows={shadows} />
      <Lamp shadows={shadows} />
    </group>
  );
}

function Bookshelf({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="about" hitbox={[1.15, 2.5, 0.5]}>
      <mesh position={[0, 1.2, 0]} castShadow={shadows} receiveShadow={shadows}>
        <boxGeometry args={[1.1, 2.4, 0.38]} />
        <meshStandardMaterial color={walnut} roughness={0.7} />
      </mesh>
      {[0.35, 0.85, 1.35, 1.85].map((y) => (
        <mesh key={y} position={[0, y, 0.02]} receiveShadow={shadows}>
          <boxGeometry args={[1.02, 0.05, 0.34]} />
          <meshStandardMaterial color={walnutMid} />
        </mesh>
      ))}
      {BOOK_COLORS.map((color, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        return (
          <mesh
            key={color + String(index)}
            position={[-0.38 + col * 0.19, 0.55 + row * 0.5, 0.08]}
            castShadow={shadows}
          >
            <boxGeometry args={[0.12, 0.32 + (index % 3) * 0.04, 0.22]} />
            <meshStandardMaterial color={color} roughness={0.6} />
          </mesh>
        );
      })}
    </Hotspot>
  );
}

const BOOK_COLORS = [
  "#7a3b2e",
  "#d9c7a1",
  "#2f4a3c",
  "#c07a3a",
  "#3d4c6b",
  "#efe6d6",
  "#8b5a2b",
  "#4a2c23",
  "#6d7f5c",
  "#b9a07a",
  "#5c3d5e",
  "#e8d5b5",
  "#2c3a4a",
  "#a34a32",
  "#d6c4a0",
];

function Desk({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="work" hitbox={[2.2, 1.4, 1.1]}>
      <mesh position={[0, 0.72, 0]} castShadow={shadows} receiveShadow={shadows}>
        <boxGeometry args={[2.1, 0.08, 0.95]} />
        <meshStandardMaterial color={walnutMid} roughness={0.55} />
      </mesh>
      {[-0.9, 0.9].map((x) => (
        <mesh key={x} position={[x, 0.35, 0.32]} castShadow={shadows}>
          <boxGeometry args={[0.08, 0.7, 0.08]} />
          <meshStandardMaterial color={walnut} />
        </mesh>
      ))}
      {[-0.9, 0.9].map((x) => (
        <mesh key={`b${x}`} position={[x, 0.35, -0.32]} castShadow={shadows}>
          <boxGeometry args={[0.08, 0.7, 0.08]} />
          <meshStandardMaterial color={walnut} />
        </mesh>
      ))}
      <mesh position={[0.15, 0.78, 0.05]} rotation={[0, -0.15, 0]} castShadow={shadows}>
        <boxGeometry args={[0.7, 0.03, 0.48]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh
        position={[0.15, 1.08, -0.16]}
        rotation={[0.15, -0.15, 0]}
        castShadow={shadows}
      >
        <boxGeometry args={[0.68, 0.42, 0.03]} />
        <meshStandardMaterial
          color="#1a2430"
          emissive="#3d6b8a"
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh position={[-0.55, 0.8, 0.12]} rotation={[0, 0.4, 0]}>
        <boxGeometry args={[0.28, 0.02, 0.36]} />
        <meshStandardMaterial color={paper} />
      </mesh>
    </Hotspot>
  );
}

function TrophyShelf({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="awards" hitbox={[1.05, 2.1, 0.45]}>
      <mesh position={[0, 1.0, 0]} castShadow={shadows}>
        <boxGeometry args={[0.95, 0.08, 0.32]} />
        <meshStandardMaterial color={walnut} />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow={shadows}>
        <boxGeometry args={[0.95, 0.08, 0.32]} />
        <meshStandardMaterial color={walnut} />
      </mesh>
      <mesh position={[-0.4, 0.5, 0]} castShadow={shadows}>
        <boxGeometry args={[0.08, 1.0, 0.08]} />
        <meshStandardMaterial color={walnut} />
      </mesh>
      <mesh position={[0.4, 0.5, 0]} castShadow={shadows}>
        <boxGeometry args={[0.08, 1.0, 0.08]} />
        <meshStandardMaterial color={walnut} />
      </mesh>
      {[-0.25, 0.22].map((x, i) => (
        <group key={x} position={[x, 1.08, 0]}>
          <mesh castShadow={shadows}>
            <cylinderGeometry args={[0.07, 0.09, 0.08, 8]} />
            <meshStandardMaterial color={brass} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.16, 0]} castShadow={shadows}>
            <coneGeometry args={[0.11 - i * 0.02, 0.22, 6]} />
            <meshStandardMaterial color={brass} metalness={0.75} roughness={0.25} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 1.66, 0]} castShadow={shadows}>
        <boxGeometry args={[0.16, 0.22, 0.08]} />
        <meshStandardMaterial color={brass} metalness={0.6} roughness={0.35} />
      </mesh>
    </Hotspot>
  );
}

function Corkboard({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="writing" hitbox={[1.3, 1.0, 0.2]}>
      <mesh castShadow={shadows} receiveShadow={shadows}>
        <boxGeometry args={[1.2, 0.85, 0.06]} />
        <meshStandardMaterial color="#c4a574" roughness={1} />
      </mesh>
      {[
        { x: -0.28, y: 0.12, color: "#efe6d6" },
        { x: 0.22, y: 0.18, color: "#f2d3b0" },
        { x: -0.1, y: -0.18, color: "#e8cfc0" },
      ].map((note) => (
        <mesh key={note.color} position={[note.x, note.y, 0.05]}>
          <boxGeometry args={[0.32, 0.22, 0.01]} />
          <meshStandardMaterial color={note.color} />
        </mesh>
      ))}
    </Hotspot>
  );
}

function WindowView({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="location" hitbox={[1.7, 1.7, 0.25]}>
      <mesh position={[0, 0, -0.05]} receiveShadow={shadows}>
        <boxGeometry args={[1.7, 1.7, 0.08]} />
        <meshStandardMaterial color="#4a4036" />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[1.45, 1.45, 0.02]} />
        <meshStandardMaterial color={night} emissive="#243044" emissiveIntensity={0.4} />
      </mesh>
      {[
        [-0.45, -0.2, 0.28, 0.9],
        [-0.12, -0.05, 0.22, 1.15],
        [0.18, -0.28, 0.3, 0.75],
        [0.48, -0.1, 0.2, 1.05],
      ].map(([x, y, w, h]) => (
        <mesh key={`${x}-${y}`} position={[x, y, 0.04]}>
          <boxGeometry args={[w, h, 0.04]} />
          <meshStandardMaterial color="#121820" />
        </mesh>
      ))}
      {[-0.45, -0.1, 0.2, 0.48].map((x, i) => (
        <mesh key={x} position={[x, 0.15 + (i % 2) * 0.2, 0.06]}>
          <boxGeometry args={[0.06, 0.08, 0.01]} />
          <meshStandardMaterial color={glow} emissive={glow} emissiveIntensity={1.2} />
        </mesh>
      ))}
    </Hotspot>
  );
}

function HobbiesCorner({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="hobbies" hitbox={[1.3, 1.4, 1.1]}>
      <mesh position={[-0.15, 0.18, 0.1]} castShadow={shadows}>
        <cylinderGeometry args={[0.16, 0.2, 0.22, 10]} />
        <meshStandardMaterial color="#8a4d36" roughness={0.8} />
      </mesh>
      <mesh position={[-0.15, 0.55, 0.1]} castShadow={shadows}>
        <icosahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial color={leaf} roughness={0.7} />
      </mesh>
      <mesh position={[-0.05, 0.78, 0.18]} castShadow={shadows}>
        <icosahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color="#2f5640" />
      </mesh>
      <group position={[0.35, 0.12, -0.15]} rotation={[0.15, 0.6, 0.9]}>
        <mesh castShadow={shadows}>
          <boxGeometry args={[0.7, 0.04, 0.2]} />
          <meshStandardMaterial color="#2b2b2b" />
        </mesh>
        <mesh position={[-0.22, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 0.04, 12]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.22, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 0.04, 12]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>
    </Hotspot>
  );
}

function SideTable({ shadows }: { shadows: boolean }) {
  return (
    <Hotspot id="contact" hitbox={[0.7, 1.2, 0.7]}>
      <mesh position={[0, 0.45, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.22, 0.24, 0.9, 10]} />
        <meshStandardMaterial color={walnutMid} />
      </mesh>
      <mesh position={[0, 0.92, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.32, 0.32, 0.06, 12]} />
        <meshStandardMaterial color={walnut} />
      </mesh>
      <mesh position={[0.05, 0.98, 0.04]} rotation={[0, 0.4, 0.15]} castShadow={shadows}>
        <boxGeometry args={[0.22, 0.01, 0.16]} />
        <meshStandardMaterial color={paper} />
      </mesh>
      <mesh position={[-0.1, 0.99, -0.08]} castShadow={shadows}>
        <boxGeometry args={[0.08, 0.14, 0.04]} />
        <meshStandardMaterial color="#1c1c1c" metalness={0.5} roughness={0.4} />
      </mesh>
    </Hotspot>
  );
}

function Lamp({ shadows }: { shadows: boolean }) {
  return (
    <group position={[-2.2, 0, -3.4]}>
      <mesh position={[0, 0.55, 0]} castShadow={shadows}>
        <cylinderGeometry args={[0.04, 0.08, 1.1, 8]} />
        <meshStandardMaterial color={walnut} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow={shadows}>
        <coneGeometry args={[0.28, 0.32, 8]} />
        <meshStandardMaterial
          color="#e8d2a8"
          emissive="#ffd19a"
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  );
}
