'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Technology {
  name: string
  color: string
}

interface ImpactMetric {
  label: string
  value: string
  icon?: string
}

interface ProjectCardProps {
  title: string
  subtitle: string
  sector: string
  challenge: string
  solution: string
  impact: ImpactMetric[]
  technologies: Technology[]
  liveUrl: string
  screenshot?: string
  accentColor?: string
}

export const ProjectCard = ({
  title,
  subtitle,
  sector,
  challenge,
  solution,
  impact,
  technologies,
  liveUrl,
  screenshot,
  accentColor = '#EC4899'
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  return (
    <motion.div
      className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, borderColor: `${accentColor}40` }}
    >
      {/* Screenshot/Preview Section */}
      <div className="relative h-64 lg:h-80 overflow-hidden bg-black/40">
        {screenshot ? (
          <motion.div
            className="w-full h-full"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={screenshot}
              alt={`Screenshot ${title}`}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-20">🌐</div>
          </div>
        )}

        {/* Overlay with Live Preview Button */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2"
          >
            Voir le site live
            <span>→</span>
          </a>
        </motion.div>

        {/* Sector Badge */}
        <div
          className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md"
          style={{
            backgroundColor: `${accentColor}20`,
            color: accentColor,
            border: `1px solid ${accentColor}40`
          }}
        >
          {sector}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h3
            className="text-3xl font-bold mb-2"
            style={{ color: accentColor, fontFamily: 'Cera PRO, Inter, sans-serif' }}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Le Défi</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <h4
              className="font-bold text-sm mb-2 uppercase tracking-wide"
              style={{ color: accentColor }}
            >
              La Solution OSOM
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-6">
          <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">L'Impact</h4>
          <div className="grid grid-cols-2 gap-3">
            {impact.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-black/40 rounded-lg p-3 border border-white/10"
                whileHover={{ borderColor: `${accentColor}40`, scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {metric.icon && <span className="text-sm">{metric.icon}</span>}
                  <span
                    className="text-lg font-bold"
                    style={{ color: accentColor }}
                  >
                    {metric.value}
                  </span>
                </div>
                <p className="text-gray-400 text-xs">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wide">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${tech.color}20`,
                  color: tech.color,
                  border: `1px solid ${tech.color}40`
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline"
            style={{ color: accentColor }}
          >
            Visiter le site →
          </a>
          <span className="text-xs text-gray-500">Projet OSOM 2025</span>
        </div>
      </div>
    </motion.div>
  )
}
