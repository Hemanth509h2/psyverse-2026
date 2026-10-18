"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
  style?: React.CSSProperties;
  /** Animate with CSS on load instead of on scroll. Use above the fold so content never waits for JavaScript. */
  immediate?: boolean;
};

/** Gentle fade-and-rise as content enters the viewport. Plays once. */
export function Reveal({ children, delay = 0, y = 22, className, as = "div", style, immediate }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (immediate) {
    const Plain = as;
    return (
      <Plain className={`rise ${className ?? ""}`} style={{ ...style, animationDelay: `${delay}s` }}>
        {children}
      </Plain>
    );
  }
  if (reduce) {
    const Plain = as;
    return <Plain className={className} style={style}>{children}</Plain>;
  }
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
