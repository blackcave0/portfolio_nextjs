// components/ui/visually-hidden.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const VisuallyHidden = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "absolute border-0 h-px w-px overflow-hidden whitespace-nowrap p-0 m-[-1px] focus:absolute",
      className
    )}
    {...props}
  />
))
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }