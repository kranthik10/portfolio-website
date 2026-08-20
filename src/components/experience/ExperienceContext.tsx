"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type MutableRefObject,
  type ReactNode,
} from "react";
import type CameraControls from "camera-controls";
import { cameraViews, type SectionId } from "@/content/site";
import { useIsCoarsePointer, usePrefersReducedMotion } from "@/lib/media";

type ExperienceContextValue = {
  active: SectionId | null;
  openSection: (id: SectionId) => void;
  closeSection: () => void;
  controlsRef: MutableRefObject<CameraControls | null>;
  reduceMotion: boolean;
  lowQuality: boolean;
};

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

function flyTo(
  controls: CameraControls | null,
  view: (typeof cameraViews)["home"],
  animate: boolean,
) {
  if (!controls) {
    return;
  }
  const [px, py, pz] = view.position;
  const [tx, ty, tz] = view.target;
  void controls.setLookAt(px, py, pz, tx, ty, tz, animate);
}

export function ExperienceProvider({
  children,
  active,
  setActive,
}: {
  children: ReactNode;
  active: SectionId | null;
  setActive: (id: SectionId | null) => void;
}) {
  const controlsRef = useRef<CameraControls | null>(null);
  const reduceMotion = usePrefersReducedMotion();
  const lowQuality = useIsCoarsePointer();

  const openSection = useCallback(
    (id: SectionId) => {
      setActive(id);
      flyTo(controlsRef.current, cameraViews[id], !reduceMotion);
    },
    [reduceMotion, setActive],
  );

  const closeSection = useCallback(() => {
    setActive(null);
    flyTo(controlsRef.current, cameraViews.home, !reduceMotion);
  }, [reduceMotion, setActive]);

  const value = useMemo(
    () => ({
      active,
      openSection,
      closeSection,
      controlsRef,
      reduceMotion,
      lowQuality,
    }),
    [active, closeSection, lowQuality, openSection, reduceMotion],
  );

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience(): ExperienceContextValue {
  const ctx = useContext(ExperienceContext);
  if (!ctx) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }
  return ctx;
}
