import * as React from "react";
import clsx from "clsx";

export type ButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const variants: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-neutral-800 focus:ring-black focus:ring-offset-white",
  secondary: "bg-neutral-100 text-black hover:bg-neutral-200 focus:ring-neutral-400 focus:ring-offset-white",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 focus:ring-offset-white",
  outline: "border border-neutral-300 bg-transparent text-black hover:bg-neutral-100",
  ghost: "bg-transparent hover:bg-neutral-100 text-black",
};
const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "default", size = "md", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});