'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardMinimalProps {
  title: string
  subtitle: string
  liveUrl: string
  screenshot?: string
  accentColor?: string
}

export const ProjectCardMinimal = ({
  title,
  subtitle,
  liveUrl,
  screenshot,
  accentColor = '#EC4899'
}: ProjectCardMinimalProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-2xl bg-black/40 border border-white/10 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, borderColor: `${accentColor}40` }}
    >
      {/* Screenshot Section - 80% de la card */}
      <div className="relative h-96 overflow-hidden bg-black">
        {screenshot ? (
          <motion.img
            src={screenshot}
            alt={title}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-8xl opacity-10">🌐</div>
          </div>
        )}

        {/* Overlay doux au hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* CTA discret au hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md border-2"
            style={{
              backgroundColor: `${accentColor}20`,
              color: accentColor,
              borderColor: accentColor
            }}
          >
            Découvrir →
          </div>
        </motion.div>
      </div>

      {/* Info minimaliste - 20% de la card */}
      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300"
          style={{ color: 'white', fontFamily: 'Cera PRO, Inter, sans-serif' }}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>

      {/* Accent line bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: accentColor }}
      />
    </motion.a>
  )
}
