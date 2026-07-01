"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { useRef } from "react";

type HeroShowcaseProps = {
  badgeTitle: string;
  badgeText: string;
};

export function HeroShowcase({ badgeTitle, badgeText }: HeroShowcaseProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const rect = root.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    root.style.setProperty("--hero-x", `${x.toFixed(3)}`);
    root.style.setProperty("--hero-y", `${y.toFixed(3)}`);
  }

  function handlePointerLeave() {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    root.style.setProperty("--hero-x", "0");
    root.style.setProperty("--hero-y", "0");
  }

  return (
    <div
      className="hero-visual hero-showcase"
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-flame-lines" aria-hidden="true" />
      <div className="hero-product hero-product-main">
        <img
          src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Po%C5%BEar%20na%20Dor%C4%87olu%20-%20vatrogasci%2003.jpg"
          alt="Vatrogasci na intervenciji gašenja požara na Dorćolu"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="hero-product hero-product-hydrant">
        <Image
          src="/hero-assets/hydrant-serbia.png"
          width={1254}
          height={910}
          alt="Hidrantska oprema u stambenom objektu"
          loading="lazy"
        />
      </div>
      <div className="hero-product hero-product-alarm">
        <Image
          src="/hero-assets/worker-ppe-hydrant.png"
          width={1254}
          height={910}
          alt="Radnik u HTZ opremi proverava protivpožarnu opremu"
          loading="lazy"
        />
      </div>
      <div className="hero-product hero-product-service">
        <Image
          src="/catalog-products/fire-extinguishers.png"
          width={1254}
          height={1254}
          alt="Protivpožarni aparati iz kataloga"
          loading="lazy"
        />
      </div>
      <div className="hero-card">
        <Image src="/logo-sigurnost-borvin.png" width={72} height={72} alt="" />
        <div>
          <strong>{badgeTitle}</strong>
          <span>{badgeText}</span>
        </div>
      </div>
    </div>
  );
}
