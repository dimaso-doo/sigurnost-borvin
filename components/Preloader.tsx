"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const finish = () => {
      window.setTimeout(() => setHidden(true), 850);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish, { once: true });
    const fallback = window.setTimeout(finish, 1800);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={`preloader ${hidden ? "hidden" : ""}`} aria-hidden={hidden}>
      <div className="preloader-mark" aria-label="Sigurnost Borvin">
        <img className="preloader-base" src="/logo-sigurnost-borvin.png" alt="" />
        <img className="preloader-fill" src="/logo-sigurnost-borvin.png" alt="" />
      </div>
    </div>
  );
}
