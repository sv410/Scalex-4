"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function MedicalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const color = resolvedTheme === "dark" ? "#9D4EDD" : "#00CED1"

    const drawDNA = (timestamp: number, x: number) => {
      // DNA parameters
      const dnaWidth = 80
      const dnaHeight = 300
      const segments = 15
      const baseRadius = 4

      // Draw DNA strands
      for (let i = 0; i < segments; i++) {
        const t = i / segments
        const wave = Math.sin(t * Math.PI * 4 + timestamp * 0.0005)
        
        // First strand
        const x1 = x + Math.sin(t * Math.PI * 2 + timestamp * 0.0005) * dnaWidth / 2
        const y1 = canvas.height / 2 - dnaHeight / 2 + t * dnaHeight

        // Second strand
        const x2 = x - Math.sin(t * Math.PI * 2 + timestamp * 0.0005) * dnaWidth / 2
        const y2 = canvas.height / 2 - dnaHeight / 2 + t * dnaHeight

        // Draw base pairs
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = color
        ctx.globalAlpha = 0.4
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw nodes
        const nodeRadius = Math.max(baseRadius + wave * 2, 2)
        
        ctx.beginPath()
        ctx.arc(x1, y1, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = 0.6
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x2, y2, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = 0.6
        ctx.fill()
      }
    }

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw three DNA helixes
      drawDNA(timestamp, canvas.width * 0.2)  // Left
      drawDNA(timestamp, canvas.width * 0.5)  // Middle
      drawDNA(timestamp, canvas.width * 0.8)  // Right

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
    />
  )
} 