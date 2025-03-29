"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export function Header() {
  return (
    <header className="border-b relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
        </motion.div>
        <div className="hidden md:flex items-center gap-6">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary interactive-element px-3 py-2 rounded-md"
            >
              About
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link
              href="/explore"
              className="text-sm font-medium hover:text-primary interactive-element px-3 py-2 rounded-md"
            >
              Explore
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary interactive-element px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-primary interactive-element px-3 py-2 rounded-md"
            >
              FAQ
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  )
} 