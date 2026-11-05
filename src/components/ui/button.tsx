import * as React from "react"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const variants = {
  primary: "bg-brand text-white hover:bg-brand-600 shadow-lg shadow-brand/25",
  outlineLight: "border border-white/25 text-white hover:bg-white/10",
  outlineDark: "border border-line text-ink hover:bg-mist",
} as const

const sizes = {
  default: "h-10 px-4",
  sm: "h-9 px-3",
  lg: "h-12 px-6 text-base",
} as const

type Props = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

/** Clases reutilizables para enlaces con aspecto de botón. */
export function buttonClasses({ variant = "primary", size = "default" }: Props = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={buttonClasses({ variant, size }, className)} {...props} />
))
Button.displayName = "Button"

export { Button }
