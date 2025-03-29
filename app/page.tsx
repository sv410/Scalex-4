"use client"

import { Header } from "@/components/header"
import { MedicalBackground } from "@/components/medical-background"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Beaker, Brain, Cpu, Rocket, Leaf, Server, CircleDashed, Network, Users, Lightbulb, Coins } from "lucide-react"

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Background layers */}
      <div className="fixed inset-0 theme-gradient -z-10" />
      <MedicalBackground />

      {/* Content layers */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-primary">ScaleX4</span>
              <span className="text-3xl md:text-4xl mt-4 block">The Hub for Deep Science & Deep Tech Innovation</span>
            </h1>
          </motion.section>

          {/* About ScaleX4 Section */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-6">About ScaleX⁴</h2>
              <p className="text-xl text-center max-w-3xl mx-auto text-muted-foreground">
                ScaleX4 is the premier platform for Deep Science and Deep Tech startups, bringing together researchers, entrepreneurs, investors, and industry leaders. We provide a secure, high-impact ecosystem designed to accelerate innovation, collaboration, and commercialization in groundbreaking fields.
              </p>
            </div>
          </section>

          {/* Who We Support Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Support</h2>
            <p className="text-center text-xl mb-12">We empower startups in cutting-edge sectors, including:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Beaker className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Biotechnology & Life Sciences</h3>
                <p className="text-muted-foreground">Genetics, Drug Discovery, MedTech, Cosmetics, AgriTech</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Brain className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
                <p className="text-muted-foreground">Healthcare AI, Robotics, Automation</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Cpu className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
                <p className="text-muted-foreground">Advanced computing solutions</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <CircleDashed className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Advanced Materials</h3>
                <p className="text-muted-foreground">Nanotech, Smart Materials, Sustainable Innovations</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Leaf className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Sustainable Energy & Clean Tech</h3>
                <p className="text-muted-foreground">Green Hydrogen, Carbon Capture, Nuclear Fusion</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Rocket className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Aerospace & Space Tech</h3>
                <p className="text-muted-foreground">Propulsion, Satellites, Space Exploration</p>
            </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group col-span-full md:col-span-2 lg:col-span-1"
              >
                <Server className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Semiconductors & Microelectronics</h3>
                <p className="text-muted-foreground">Chip Design, Photonics, Quantum Chips</p>
                </motion.div>
            </div>
          </section>

          {/* What We Offer Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Network className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Networking & Collaboration</h3>
                <p className="text-muted-foreground">Connect with fellow deep science entrepreneurs, researchers, and mentors.</p>
                </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
                <p className="text-muted-foreground">Get guidance from industry leaders, scientists, and business strategists.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Lightbulb className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Technology Sharing</h3>
                <p className="text-muted-foreground">Find R&D partners and access cutting-edge research.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <Coins className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Fundraising Opportunities</h3>
                <p className="text-muted-foreground">Pitch to investors actively seeking high-impact deep tech startups.</p>
              </motion.div>
            </div>
          </section>

          {/* Why Join Us Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Join Us?</h2>
            <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
            >
                <div className="text-2xl">✔</div>
                <p className="text-lg">A Confidential & Trust-Based Ecosystem</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="text-2xl">✔</div>
                <p className="text-lg">Curated Connections with Investors & Industry Leaders</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="text-2xl">✔</div>
                <p className="text-lg">Exclusive Deep Science & Deep Tech Community</p>
            </motion.div>
          </div>
          </section>

          {/* CTA Section */}
        <motion.section
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-bold mb-6">Be Part of the Future of Innovation</h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you're building the next breakthrough in deep science or deep tech, this is where you belong. Join ScaleX4 today!
            </p>
            <Button size="lg" onClick={() => router.push("/signup")} className="text-lg px-8">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
        </motion.section>

          {/* Footer with Rights */}
          <footer className="border-t mt-20 py-8">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                    <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                    <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                    <li><Link href="/security" className="text-muted-foreground hover:text-primary">Security</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                    <li><Link href="/docs" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                    <li><Link href="/support" className="text-muted-foreground hover:text-primary">Support</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><Link href="/twitter" className="text-muted-foreground hover:text-primary">Twitter</Link></li>
                    <li><Link href="/linkedin" className="text-muted-foreground hover:text-primary">LinkedIn</Link></li>
                    <li><Link href="/github" className="text-muted-foreground hover:text-primary">GitHub</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
                <p>© {new Date().getFullYear()} ScaleX4. All rights reserved.</p>
                <p className="mt-2 text-sm">Patents Pending. ScaleX4 and the ScaleX4 logo are trademarks of ScaleX4, Inc.</p>
          </div>
        </div>
      </footer>
        </main>
      </div>
    </div>
  )
}

