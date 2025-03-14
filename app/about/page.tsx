"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Fun facts that will be revealed as the user scrolls
const funFacts = [
  "I debug with rubber ducks 🦆",
  "My code is powered by coffee ☕",
  "I speak fluent JavaScript, HTML, and sarcasm 😏",
  "I've dreamt in code once 💭",
  "I name my plants after programming languages 🌱",
  "I can solve a Rubik's cube while compiling 🧩",
  "My favorite HTTP status is 418: I'm a teapot 🫖",
  "I've written code on a beach 🏖️",
  "My cat has contributed to my GitHub 🐱",
  "I collect vintage keyboards ⌨️"
]

export default function About() {
  const [activeTab, setActiveTab] = useState("story")
  const [revealedFacts, setRevealedFacts] = useState<number[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [konami, setKonami] = useState<string[]>([])
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  
  const storyRef = useRef(null)
  const skillsRef = useRef(null)
  const timelineRef = useRef(null)
  const funFactsRef = useRef(null)
  
  const storyInView = useInView(storyRef, { once: false, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 })
  const timelineInView = useInView(timelineRef, { once: false, amount: 0.3 })
  const funFactsInView = useInView(funFactsRef, { once: false, amount: 0.3 })

  // Konami code easter egg
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key]
      if (newKonami.length > konamiCode.length) {
        newKonami.shift()
      }
      setKonami(newKonami)
      
      if (newKonami.join('') === konamiCode.join('')) {
        setShowEasterEgg(true)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konami])
  
  // Reveal a new fun fact when scrolling to that section
  useEffect(() => {
    if (funFactsInView && revealedFacts.length < funFacts.length) {
      const timer = setTimeout(() => {
        const nextFactIndex = revealedFacts.length
        if (!revealedFacts.includes(nextFactIndex)) {
          setRevealedFacts([...revealedFacts, nextFactIndex])
        }
      }, 800)
      
      return () => clearTimeout(timer)
    }
  }, [funFactsInView, revealedFacts])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.main
      className="flex flex-col items-center py-7 md:py-20 min-h-screen bg-offwhite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-black z-50 origin-left" style={{ scaleX }} />

      {/* Easter egg */}
      {showEasterEgg && (
        <motion.div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div 
            className="bg-white p-8 rounded-3xl max-w-md text-center"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h2 className="text-2xl font-bold mb-4">🎮 You found the secret! 🎮</h2>
            <p className="mb-4">You&apos;ve unlocked the developer&apos;s secret mode!</p>
            <div className="text-6xl mb-6">👾</div>
            <p className="text-sm text-gray-500 mb-4">Konami code activated. You&apos;re officially awesome.</p>
            <button 
              className="px-6 py-2 bg-black text-white rounded-full"
              onClick={() => setShowEasterEgg(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="w-full px-7 md:max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the human behind the code. Scroll down to discover some quirky facts!
          </p>
        </motion.div>

        {/* Navigation tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["story", "skills", "timeline", "fun facts"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === tab ? "bg-black text-white" : "bg-gray-100 text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* My Story Section */}
        <motion.section
          ref={storyRef}
          className={`mb-20 ${activeTab !== "story" && "hidden"}`}
          variants={containerVariants}
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex flex-col md:flex-row gap-10 items-center"
            variants={itemVariants}
          >
            <div className="w-full md:w-1/2">
              <motion.div 
                className="relative w-full aspect-square rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1000"
                  alt="Developer at work"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                variants={itemVariants}
              >
                I&apos;m Pranav Sonawane
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-4"
                variants={itemVariants}
              >
                I started my journey into the world of coding when I was just a curious teenager. What began as a hobby quickly evolved into a passion that would shape my career and life.
              </motion.p>
              <motion.p 
                className="text-gray-700 mb-4"
                variants={itemVariants}
              >
                After completing my education, I dove headfirst into the tech industry, working on projects that challenged me and helped me grow as a developer.
              </motion.p>
              <motion.p 
                className="text-gray-700"
                variants={itemVariants}
              >
                Today, I&apos;m focused on creating elegant solutions to complex problems, always learning new technologies and approaches to stay at the cutting edge of web development.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          className={`mb-20 ${activeTab !== "skills" && "hidden"}`}
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "JavaScript", level: 90, emoji: "🔥" },
              { name: "React", level: 85, emoji: "⚛️" },
              { name: "Node.js", level: 80, emoji: "🚀" },
              { name: "TypeScript", level: 75, emoji: "📘" },
              { name: "Next.js", level: 85, emoji: "⏭️" },
              { name: "CSS/Tailwind", level: 90, emoji: "🎨" },
              { name: "UI/UX Design", level: 70, emoji: "🎯" },
              { name: "GraphQL", level: 65, emoji: "📊" },
              { name: "DevOps", level: 60, emoji: "🔧" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-5 rounded-2xl shadow-sm"
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-xl">{skill.emoji}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className="bg-black h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          ref={timelineRef}
          className={`mb-20 ${activeTab !== "timeline" && "hidden"}`}
          variants={containerVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            My Journey
          </motion.h2>
          
          <div className="relative border-l-2 border-gray-300 ml-6 md:ml-0 md:mx-auto md:max-w-2xl pl-6 space-y-10">
            {[
              { year: "2018", title: "Started Coding Journey", description: "Wrote my first lines of code and fell in love with programming." },
              { year: "2019", title: "First Internship", description: "Joined a startup as an intern and learned the ropes of professional development." },
              { year: "2020", title: "Graduated", description: "Completed my degree in Computer Science with honors." },
              { year: "2021", title: "First Full-time Role", description: "Joined a tech company as a junior developer and worked on exciting projects." },
              { year: "2022", title: "Promotion", description: "Moved up to a mid-level developer position after delivering successful projects." },
              { year: "2023", title: "Started Freelancing", description: "Began taking on freelance projects to diversify my experience." },
              { year: "Present", title: "Building My Portfolio", description: "Working on personal projects and continuing to grow as a developer." }
            ].map((event, index) => (
              <motion.div
                key={event.year}
                className="relative"
                variants={itemVariants}
                custom={index}
              >
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-black" />
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts Section */}
        <motion.section
          ref={funFactsRef}
          className={`mb-20 ${activeTab !== "fun facts" && "hidden"}`}
          variants={containerVariants}
          initial="hidden"
          animate={funFactsInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Fun Facts About Me
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-10"
            variants={itemVariants}
          >
            Scroll to reveal more quirky facts about me!
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className={`bg-white p-5 rounded-2xl shadow-sm ${!revealedFacts.includes(index) && 'opacity-0'}`}
                variants={itemVariants}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={revealedFacts.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-lg font-medium">{fact}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-center text-gray-500 mt-8 text-sm"
            variants={itemVariants}
          >
            Psst! There&apos;s a secret Konami code on this page. Can you find it?
          </motion.p>
        </motion.section>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.main>
  )
} 