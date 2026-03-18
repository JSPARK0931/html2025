import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Badge.module.css";

export type BadgeTone = "default" | "info" | "success" | "warning" | "danger";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  left?: ReactNode;
};

export function Badge({ className, tone = "default", left, children, ...props }: BadgeProps) {
  return (
    <span className={cn(styles.badge, tone !== "default" && styles[tone], className)} {...props}>
      {left}
      {children}
    </span>
  );
}

export function StatusDot({ className, color }: { className?: string; color?: string }) {
  return <span className={cn(styles.dot, className)} style={color ? { background: color } : undefined} />;
}

