"use client";

import { useEffect } from "react";
import { CameraControls } from "@react-three/drei";
import { useExperience } from "@/components/experience/ExperienceContext";
import { cameraViews } from "@/content/site";

export function CameraRig() {
  const { controlsRef, reduceMotion } = useExperience();

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) {
      return;
    }
    controls.smoothTime = reduceMotion ? 0.01 : 0.45;
    const view = cameraViews.home;
    void controls.setLookAt(
      view.position[0],
      view.position[1],
      view.position[2],
      view.target[0],
      view.target[1],
      view.target[2],
      false,
    );
  }, [controlsRef, reduceMotion]);

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      minPolarAngle={0.55}
      maxPolarAngle={1.32}
      minDistance={4.6}
      maxDistance={12}
    />
  );
}
