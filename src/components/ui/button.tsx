import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost" | "link" | "emerald"
    size?: "default" | "sm" | "lg" | "icon"
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90": variant === "default",
          "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20": variant === "emerald",
          "border border-zinc-800 bg-transparent hover:bg-zinc-800 text-zinc-300": variant === "outline",
          "hover:bg-zinc-800 hover:text-zinc-50": variant === "ghost",
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-11 rounded-md px-8 text-base": size === "lg",
          "h-10 w-10": size === "icon",
        },
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
