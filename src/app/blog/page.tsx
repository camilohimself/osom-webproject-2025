'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BlogEditorialPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null)

  const categories = ['all', 'case studies', 'insights', 'data analysis', 'methodology']

  const articles = [
    {
      id: 'culture-peinture-14x-roi',
      title: 'The Organic Revolution: How We Generated 688 Conversions Without Ads',
      subtitle: 'A deep dive into the strategy that outperformed paid media by 1,400%',
      excerpt: 'In six months, we proved that organic growth isn\'t dead. It\'s just been done wrong. Here\'s how Culture Peinture rewrote the rules of digital acquisition.',
      category: 'case studies',
      readTime: '5 min read',
      date: 'Issue 024 • January 15',
      author: {
        name: 'OSOM Analytics Team',
        role: 'Data Strategy'
      },
      featured: true,
      metrics: {
        primary: '688',
        primaryLabel: 'Organic Conversions',
        secondary: '1,400%',
        secondaryLabel: 'Performance vs Paid',
        tertiary: '6 months',
        tertiaryLabel: 'Timeline'
      },
      color: 'yellow',
      quote: '"L\'IA a révolutionné notre façon de travailler. Notre équipe se concentre enfin sur l\'innovation."'
    },
    {
      id: 'artisane-lumiere-seo',
      title: 'Why Search Traffic Converts 54% Better Than Direct',
      subtitle: 'The hidden psychology of intent revealed through 200 days of data',
      excerpt: 'Search traffic isn\'t just traffic. It\'s qualified intent. Our analysis of Artisane de Lumière proves what we\'ve suspected all along about user behavior.',
      category: 'insights',
      readTime: '4 min read',
      date: 'Issue 023 • January 10', 
      author: {
        name: 'Search Intelligence Unit',
        role: 'SEO Research'
      },
      featured: true,
      metrics: {
        primary: '68.6%',
        primaryLabel: 'SEO Engagement',
        secondary: '+54%',
        secondaryLabel: 'vs Direct Traffic',
        tertiary: '200+ days',
        tertiaryLabel: 'Data Period'
      },
      color: 'cyan',
      quote: '"Les données ne mentent jamais. La qualité du trafic SEO est incomparable."'
    },
    {
      id: 'tracking-invisible-roi',
      title: 'Found: 14,171 Lost Sessions Worth 47,000 CHF',
      subtitle: 'How proper attribution revealed hidden revenue streams',
      excerpt: 'Your analytics are lying to you. Here\'s how we uncovered the truth about "unassigned" traffic and its real commercial value through advanced tracking.',
      category: 'data analysis',
      readTime: '6 min read',
      date: 'Issue 022 • January 5',
      author: {
        name: 'Attribution Lab',
        role: 'Data Forensics'
      },
      featured: false,
      metrics: {
        primary: '14,171',
        primaryLabel: 'Recovered Sessions',
        secondary: '47K CHF',
        secondaryLabel: 'Hidden Value',
        tertiary: '92%',
        tertiaryLabel: 'Now Tracked'
      },
      color: 'purple',
      quote: '"Chaque session compte. L\'attribution précise révèle le vrai ROI."'
    },
    {
      id: 'swiss-market-digital-maturity',
      title: 'Swiss Digital Landscape 2025: The Untapped Potential',
      subtitle: 'Why 73% of Swiss SMEs are leaving money on the table',
      excerpt: 'Our comprehensive market analysis reveals a massive gap between digital investment and optimization. The opportunity for Swiss businesses is unprecedented.',
      category: 'methodology',
      readTime: '7 min read',
      date: 'Issue 021 • January 1',
      author: {
        name: 'Market Intelligence',
        role: 'Strategic Research'
      },
      featured: false,
      metrics: {
        primary: '73%',
        primaryLabel: 'Underoptimized',
        secondary: '4.2M CHF',
        secondaryLabel: 'Avg. Potential',
        tertiary: '2025',
        tertiaryLabel: 'Market Size'
      },
      color: 'green',
      quote: '"Le marché suisse a un potentiel digital énorme encore inexploité."'
    }
  ]

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* MASTHEAD - Premium Magazine Style */}
      <header className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center justify-between">
            {/* Logo Editorial */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-3xl font-light tracking-tight">
                OSOM<span className="text-yellow-400 font-bold">.</span>
              </Link>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span className="font-medium">Digital Intelligence Digest</span>
              </div>
            </div>
            
            {/* Subscribe CTA */}
            <motion.button 
              className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
          
          {/* Navigation Editorial */}
          <nav className="py-4 -mb-px flex space-x-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO ARTICLE - Featured Story */}
      {filteredArticles.filter(a => a.featured).length > 0 && (
        <motion.section 
          className="border-b border-black/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {filteredArticles.filter(a => a.featured)[0] && (
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visual Side */}
                <motion.div 
                  className="order-2 lg:order-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div 
                    className="aspect-[4/3] rounded-sm overflow-hidden relative group cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${
                        filteredArticles[0].color === 'yellow' ? '#ffd507' :
                        filteredArticles[0].color === 'cyan' ? '#06b6d4' :
                        filteredArticles[0].color === 'purple' ? '#8b5cf6' :
                        '#10b981'
                      }15, ${
                        filteredArticles[0].color === 'yellow' ? '#ffd507' :
                        filteredArticles[0].color === 'cyan' ? '#06b6d4' :
                        filteredArticles[0].color === 'purple' ? '#8b5cf6' :
                        '#10b981'  
                      }05)`
                    }}
                    onMouseEnter={() => setHoveredArticle(filteredArticles[0].id)}
                    onMouseLeave={() => setHoveredArticle(null)}
                  >
                    {/* Data Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div 
                          className="text-8xl md:text-9xl font-bold opacity-10 leading-none"
                          animate={hoveredArticle === filteredArticles[0].id ? {
                            scale: [1, 1.05, 1],
                            opacity: [0.1, 0.2, 0.1]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {filteredArticles[0].metrics.primary}
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Metrics Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="text-3xl font-bold">{filteredArticles[0].metrics.primary}</div>
                          <div className="text-xs opacity-80">{filteredArticles[0].metrics.primaryLabel}</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="text-3xl font-bold">{filteredArticles[0].metrics.secondary}</div>
                          <div className="text-xs opacity-80">{filteredArticles[0].metrics.secondaryLabel}</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <div className="text-3xl font-bold">{filteredArticles[0].metrics.tertiary}</div>
                          <div className="text-xs opacity-80">{filteredArticles[0].metrics.tertiaryLabel}</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Content Side */}
                <motion.div 
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-xs font-medium px-3 py-1 bg-black text-white">
                      {filteredArticles[0].category.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{filteredArticles[0].date}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                    {filteredArticles[0].title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                    {filteredArticles[0].subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  
                  {/* Quote */}
                  <blockquote className="border-l-4 border-gray-200 pl-6 mb-8">
                    <p className="text-gray-600 italic">{filteredArticles[0].quote}</p>
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">OS</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">{filteredArticles[0].author.name}</div>
                        <div className="text-xs text-gray-500">{filteredArticles[0].author.role}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${filteredArticles[0].id}`}
                      className="inline-flex items-center text-black font-medium hover:underline group"
                    >
                      Read Story
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </div>
                </motion.div>
              </article>
            )}
          </div>
        </motion.section>
      )}

      {/* GRID EDITORIAL - Magazine Layout */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            className="mb-12 pb-8 border-b border-black/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light">
              Ligne éditoriale : <span className="font-semibold">méthodologie, cas concrets suisses, check-lists pratico-pratiques</span>
            </h2>
          </motion.div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredArticles.slice(1).map((article, index) => (
              <motion.article 
                key={article.id}
                className={`group cursor-pointer ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Article Visual */}
                <div 
                  className="aspect-[16/9] bg-gray-100 mb-6 overflow-hidden relative"
                  onMouseEnter={() => setHoveredArticle(article.id)}
                  onMouseLeave={() => setHoveredArticle(null)}
                >
                  <div 
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${
                        article.color === 'yellow' ? '#ffd507' :
                        article.color === 'cyan' ? '#06b6d4' :
                        article.color === 'purple' ? '#8b5cf6' :
                        article.color === 'green' ? '#10b981' :
                        '#ef4444'
                      }10, transparent)`
                    }}
                  >
                    {/* Metric Display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="text-center"
                        animate={hoveredArticle === article.id ? {
                          y: [-5, 0, -5]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="text-6xl font-bold opacity-20">
                          {article.metrics.primary}
                        </div>
                        <div className="text-sm font-medium opacity-40 mt-2">
                          {article.metrics.primaryLabel}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium px-2 py-1 bg-white/90 backdrop-blur-sm">
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                {/* Article Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className={`font-light mb-3 group-hover:underline ${
                    index === 0 ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {article.author.name}
                    </div>
                    
                    <Link 
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-sm font-medium hover:underline group"
                    >
                      Read
                      <motion.svg 
                        className="w-3 h-3 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-light mb-6">
            Get Intelligence Delivered
          </h3>
          <p className="text-lg text-gray-400 mb-8">
            Data-driven insights for Swiss digital leaders. Once a week, no spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
            />
            <motion.button 
              className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  )
}