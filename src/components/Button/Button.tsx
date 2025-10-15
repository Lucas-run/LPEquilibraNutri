import React, { type AnchorHTMLAttributes, type JSX } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element {
  const className = `${styles.button} ${
    variant === "ghost" ? styles.ghost : styles.primary
  }`;
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
