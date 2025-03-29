"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 40 }: LogoProps) {
  const { theme } = useTheme()

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors"
      >
        {/* Main DNA Helix */}
        <path
          d="M30 20C30 20 70 20 70 35C70 50 30 50 30 65C30 80 70 80 70 80"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-primary"
        />
        <path
          d="M70 20C70 20 30 20 30 35C30 50 70 50 70 65C70 80 30 80 30 80"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-primary"
        />

        {/* Horizontal Lines */}
        <path
          d="M40 27H60"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-primary"
        />
        <path
          d="M40 42H60"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-primary"
        />
        <path
          d="M40 57H60"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-primary"
        />
        <path
          d="M40 73H60"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-primary"
        />
      </svg>
      <span className="text-2xl font-semibold text-primary">ScaleX⁴</span>
    </div>
  )
} 