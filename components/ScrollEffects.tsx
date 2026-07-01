"use client";

import { useEffect } from "react";

const revealSelector = [
  ".hero-copy",
  ".hero-visual",
  ".section",
  ".stats-row",
  ".contact-band",
  ".map-section",
  ".legal-card",
  ".service-card",
  ".category-card",
  ".catalog-card",
  ".reference-grid article",
  ".post-card",
  ".advice-card",
  ".sector-stack article",
  ".blog-article",
  ".not-found-panel"
].join(",");

export function ScrollEffects() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
