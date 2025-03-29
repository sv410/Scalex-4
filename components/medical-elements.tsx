"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface MedicalElement {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
  type: "cross" | "heart" | "pulse" | "pill"
  opacity: number
  pulseSpeed: number
  pulseSize: number
}

export function MedicalElements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const elementsRef = useRef<MedicalElement[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 })
  const timeRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createElements = () => {
      // Clear existing elements
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

      // Create new elements
      const count = Math.floor(window.innerWidth / 350)
      elementsRef.current = []

      for (let i = 0; i < count; i++) {
        const element = document.createElement("div")
        const type = ["cross", "heart", "pulse", "pill"][Math.floor(Math.random() * 4)] as MedicalElement["type"]
        
        // Random size between 50px and 120px
        const size = Math.random() * 70 + 50

        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100

        // Random opacity between 0.25 and 0.4 for light mode, 0.2 and 0.3 for dark mode
        const opacity = resolvedTheme === "dark" 
          ? Math.random() * 0.1 + 0.2 
          : Math.random() * 0.15 + 0.25

        // Random animation duration between 20s and 35s
        const duration = Math.random() * 15 + 20

        // Random delay
        const delay = Math.random() * 5

        // Set styles based on type
        element.style.position = "absolute"
        element.style.width = `${size}px`
        element.style.height = `${size}px`
        element.style.left = `${posX}%`
        element.style.top = `${posY}%`
        element.style.opacity = opacity.toString()
        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`

        // Create SVG content based on type
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.setAttribute("viewBox", "0 0 24 24")
        svg.setAttribute("fill", "none")
        svg.setAttribute("stroke", resolvedTheme === "dark" ? "#9D4EDD" : "#1E40AF")
        svg.setAttribute("stroke-width", "1.5")
        svg.setAttribute("stroke-linecap", "round")
        svg.setAttribute("stroke-linejoin", "round")

        let path: SVGPathElement
        switch (type) {
          case "cross":
            path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttribute("d", "M12 2v20M2 12h20")
            break
          case "heart":
            path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttribute("d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z")
            break
          case "pulse":
            path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttribute("d", "M22 12h-4l-3 9L9 3l-3 9H2")
            break
          case "pill":
            path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttribute("d", "M12 2v20M2 12h20M12 2a10 10 0 0 1 10 10A10 10 0 0 1 12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2z")
            break
        }

        // Add enhanced glow effect
        const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter")
        filter.setAttribute("id", `glow-${i}`)
        
        // Add multiple blur layers for better glow effect
        const blur1 = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur")
        blur1.setAttribute("stdDeviation", resolvedTheme === "dark" ? "3" : "4")
        blur1.setAttribute("result", "coloredBlur1")
        
        const blur2 = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur")
        blur2.setAttribute("stdDeviation", resolvedTheme === "dark" ? "2" : "3")
        blur2.setAttribute("result", "coloredBlur2")
        
        const merge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge")
        const mergeNode1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode")
        mergeNode1.setAttribute("in", "coloredBlur1")
        const mergeNode2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode")
        mergeNode2.setAttribute("in", "coloredBlur2")
        const mergeNode3 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode")
        mergeNode3.setAttribute("in", "SourceGraphic")
        
        merge.appendChild(mergeNode1)
        merge.appendChild(mergeNode2)
        merge.appendChild(mergeNode3)
        filter.appendChild(blur1)
        filter.appendChild(blur2)
        filter.appendChild(merge)
        
        svg.appendChild(filter)
        svg.appendChild(path)
        element.appendChild(svg)
        container.appendChild(element)

        // Store element data with pulse properties
        elementsRef.current.push({
          x: posX,
          y: posY,
          size,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1.5,
          type,
          opacity,
          pulseSpeed: 0.02 + Math.random() * 0.01,
          pulseSize: 0.5 + Math.random() * 0.5,
        })
      }
    }

    // Create initial elements
    createElements()

    // Recreate on resize
    window.addEventListener("resize", createElements)

    // Add keyframes for animations with enhanced effects
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) rotate(0) scale(1);
        }
        50% {
          transform: translateY(-20px) translateX(10px) rotate(5deg) scale(1.05);
        }
        100% {
          transform: translateY(20px) translateX(-10px) rotate(-5deg) scale(1);
        }
      }

      @keyframes pulse {
        0% {
          filter: brightness(1) drop-shadow(0 0 2px rgba(30, 64, 175, 0.3));
        }
        50% {
          filter: brightness(1.2) drop-shadow(0 0 4px rgba(30, 64, 175, 0.5));
        }
        100% {
          filter: brightness(1) drop-shadow(0 0 2px rgba(30, 64, 175, 0.3));
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      window.removeEventListener("resize", createElements)
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [resolvedTheme])

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[1]" />
} 