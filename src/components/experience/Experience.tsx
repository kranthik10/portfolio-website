"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { CanvasErrorBoundary } from "@/components/experience/CanvasErrorBoundary";
import { ExperienceProvider } from "@/components/experience/ExperienceContext";
import { BootScreen } from "@/components/ui/BootScreen";
import { Hud } from "@/components/ui/Hud";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { site, type SectionId } from "@/content/site";

const PortfolioCanvas = dynamic(
  () =>
    import("@/components/scene/PortfolioCanvas").then((mod) => mod.PortfolioCanvas),
  { ssr: false },
);

export function Experience() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [booting, setBooting] = useState(true);
  const [webglFailed, setWebglFailed] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  const onCanvasReady = useCallback(() => {
    setCanvasReady(true);
  }, []);

  const onWebglError = useCallback(() => {
    setWebglFailed(true);
    setBooting(false);
  }, []);

  useEffect(() => {
    if (!canvasReady) {
      return;
    }
    const timeout = window.setTimeout(() => {
      setBooting(false);
    }, 900);
    return () => window.clearTimeout(timeout);
  }, [canvasReady]);

  useEffect(() => {
    if (canvasReady) {
      return;
    }
    const failSafe = window.setTimeout(() => {
      setWebglFailed(true);
      setBooting(false);
    }, 8000);
    return () => window.clearTimeout(failSafe);
  }, [canvasReady]);

  return (
    <ExperienceProvider active={active} setActive={setActive}>
      <div className="relative h-dvh w-full overflow-hidden bg-[#1c1712]">
        {webglFailed ? (
          <WebGlFallback />
        ) : (
          <CanvasErrorBoundary onError={onWebglError}>
            <div className="absolute inset-0">
              <PortfolioCanvas onReady={onCanvasReady} />
            </div>
          </CanvasErrorBoundary>
        )}
        {booting && !webglFailed ? <BootScreen /> : null}
        {!booting && !webglFailed ? <Hud /> : null}
        <SectionPanel />
      </div>
    </ExperienceProvider>
  );
}

function WebGlFallback() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center text-[#efe6d6]">
      <p className="font-display text-3xl">{site.name}</p>
      <p className="max-w-md text-sm text-[#efe6d6]/75">
        This room needs WebGL. Here is a quieter version of the same work.
      </p>
      <nav className="flex gap-4 text-sm underline decoration-white/30 underline-offset-4">
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
