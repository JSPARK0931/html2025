import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md" | "form";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  hint?: string;
  error?: string;
  size?: InputSize;
};

export function Input({
  className,
  label,
  hint,
  error,
  id,
  size = "md",
  ...props
}: InputProps) {
  const inputId = id ?? (label ? `input-${label.replaceAll(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <div className={styles.wrap}>
      {(label || hint) && (
        <div className={styles.labelRow}>
          {label && (
            <label className={styles.label} htmlFor={inputId}>
              {label}
            </label>
          )}
          {hint && <div className={styles.hint}>{hint}</div>}
        </div>
      )}
      <input
        id={inputId}
        className={cn(styles.input, styles[size], error && styles.error, className)}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <div id={`${inputId}-error`} className={styles.errorText}>
          {error}
        </div>
      )}
    </div>
  );
}

