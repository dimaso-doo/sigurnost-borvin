import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionTitle({ eyebrow, title, text, align = "left", children }: SectionTitleProps) {
  return (
    <div className={`section-title ${align === "center" ? "center" : ""}`}>
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
      {children}
    </div>
  );
}
