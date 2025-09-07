'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CustomCursor from '@/components/ui/CustomCursor'

export default function BlogEditorialPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null)

  const categories = ['all', 'case studies', 'insights', 'data analysis', 'methodology']

  const articles = [
    {
      id: 'verite-ecran-place-ia',
      title: 'La Vérité Sur L\'Écran : Où L\'IA Nous Mène-t-Elle Vraiment ?',
      subtitle: '8.2h/Jour Devant L\'Écran. Révélation Choc Sur Notre Dépendance',
      excerpt: 'Enquête exclusive auprès de 2,847 dirigeants suisses. 67% se sentent dépendants, mais l\'IA peut-elle encore nous libérer ?',
      category: 'insights',
      readTime: '15 min read',
      date: 'Issue 027 • January 18',
      author: {
        name: 'OSOM Digital Psychology Lab',
        role: 'Behavioural Tech'
      },
      featured: true,
      metrics: {
        primary: '8.2h',
        primaryLabel: 'Temps écran quotidien',
        secondary: '67%',
        secondaryLabel: 'Se sentent dépendants',
        tertiary: '2,847',
        tertiaryLabel: 'Dirigeants sondés'
      },
      color: 'blue',
      quote: '"Je passe plus de temps à regarder des écrans qu\'à regarder mes clients dans les yeux."'
    },
    {
      id: 'ia-alignement-dangers-business',
      title: 'L\'Alignement IA : Le Danger Que Personne N\'Ose Nommer',
      subtitle: 'Ce Que Microsoft, Google Et OpenAI Ne Vous Disent Pas',
      excerpt: 'Révélations explosives sur les vrais risques d\'alignement IA pour PME suisses. 73% découvriront ces dangers trop tard.',
      category: 'insights',
      readTime: '8 min read',
      date: 'Issue 026 • January 20',
      author: {
        name: 'OSOM Research Division',
        role: 'IA Safety'
      },
      featured: true,
      metrics: {
        primary: '73%',
        primaryLabel: 'PME à risque',
        secondary: '-127K CHF',
        secondaryLabel: 'Perte moyenne',
        tertiary: '5 dangers',
        tertiaryLabel: 'Identifiés'
      },
      color: 'red',
      quote: '"L\'IA optimise selon leurs valeurs. Pas les vôtres."'
    },
    {
      id: 'ia-sur-mesure-10-solutions-pme',
      title: '10 Solutions IA Sur Mesure Qui Transforment Votre PME',
      subtitle: 'Dashboard, Automation, CRM... À Vie, Sur Mesure, Garanti',
      excerpt: 'Dashboard prédictif, automation intelligente, CRM révolutionnaire... Découvrez pourquoi 156 dirigeants suisses ont choisi notre révolution IA.',
      category: 'methodology',
      readTime: '12 min read',
      date: 'Issue 025 • January 19',
      author: {
        name: 'OSOM Solutions IA',
        role: 'Innovation Tech'
      },
      featured: true,
      metrics: {
        primary: '47K CHF',
        primaryLabel: 'Économies Année 1',
        secondary: '340%',
        secondaryLabel: 'ROI 6 Mois',
        tertiary: '156 PME',
        tertiaryLabel: 'Transformées'
      },
      color: 'purple',
      quote: '"23h/semaine gagnées par employé. Révolution garantie."'
    },
    {
      id: 'culture-peinture-14x-roi',
      title: 'The Organic Revolution: How We Generated 688 Conversions Without Ads',
      subtitle: 'A Deep Dive Into The Strategy That Outperformed Paid Advertising By 1,400%',
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
      subtitle: 'The Hidden Psychology Of Intent Revealed Through 200 Days Of Data',
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
      subtitle: 'How Proper Attribution Revealed Hidden Revenue Streams',
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
      subtitle: 'Why 73% Of Swiss SMEs Are Leaving Money On The Table',
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
    <>
      <CustomCursor isActive={true} />
      <div className="min-h-screen bg-white text-black">
      
      {/* MASTHEAD - Premium Magazine Style */}
      <motion.header 
        className="border-b border-black/10"
      >
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
              className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Subscribe</span>
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
          
          {/* Navigation Editorial */}
          <nav className="py-4 -mb-px flex space-x-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap transition-all relative group ${
                  activeCategory === cat
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {/* Active glow */}
                {activeCategory === cat && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-400/10 to-cyan-400/10 rounded-sm"
                    layoutId="activeCategory"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

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
                        filteredArticles[0].color === 'red' ? '#ef4444' :
                        '#10b981'
                      }15, ${
                        filteredArticles[0].color === 'yellow' ? '#ffd507' :
                        filteredArticles[0].color === 'cyan' ? '#06b6d4' :
                        filteredArticles[0].color === 'purple' ? '#8b5cf6' :
                        filteredArticles[0].color === 'red' ? '#ef4444' :
                        '#10b981'  
                      }05)`
                    }}
                    onMouseEnter={() => setHoveredArticle(filteredArticles[0].id)}
                    onMouseLeave={() => setHoveredArticle(null)}
                  >
                    {/* Custom SVG Visual per Article */}
                    <div className="absolute inset-0 p-8">
                      <svg className="w-full h-full" viewBox="0 0 400 300">
                        {filteredArticles[0].id === 'ia-alignement-dangers-business' && (
                          <g>
                            {/* Danger Warning System */}
                            <motion.polygon
                              points="200,50 350,250 50,250"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="text-red-400"
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <circle cx="200" cy="200" r="8" fill="currentColor" className="text-red-400" />
                            <line x1="200" y1="120" x2="200" y2="170" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-red-400" />
                            
                            {/* Corporate Buildings */}
                            <rect x="80" y="100" width="40" height="80" fill="currentColor" opacity="0.2" className="text-gray-400" />
                            <rect x="280" y="120" width="40" height="60" fill="currentColor" opacity="0.2" className="text-gray-400" />
                            
                            {/* Data Streams */}
                            <motion.path
                              d="M120 140 Q200 100 280 140"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              className="text-red-400"
                              strokeDasharray="5,5"
                              animate={{ strokeDashoffset: [0, -20] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                          </g>
                        )}
                        
                        {filteredArticles[0].id === 'ia-sur-mesure-10-solutions-pme' && (
                          <g>
                            {/* Dashboard Interface */}
                            <rect x="50" y="60" width="300" height="180" rx="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" className="text-purple-400" />
                            
                            {/* Charts and Widgets */}
                            <rect x="70" y="80" width="80" height="50" rx="5" fill="currentColor" opacity="0.1" className="text-purple-400" />
                            <rect x="170" y="80" width="80" height="50" rx="5" fill="currentColor" opacity="0.1" className="text-purple-400" />
                            <rect x="270" y="80" width="60" height="50" rx="5" fill="currentColor" opacity="0.1" className="text-purple-400" />
                            
                            <rect x="70" y="150" width="120" height="70" rx="5" fill="currentColor" opacity="0.1" className="text-purple-400" />
                            <rect x="210" y="150" width="120" height="70" rx="5" fill="currentColor" opacity="0.1" className="text-purple-400" />
                            
                            {/* Data Flow Lines */}
                            <motion.path
                              d="M110 130 L110 150"
                              stroke="currentColor"
                              strokeWidth="2" 
                              className="text-purple-400"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            />
                            <motion.path
                              d="M210 130 L210 150"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-purple-400"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.path
                              d="M270 130 L270 150"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-purple-400"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                            />
                            
                            {/* Success Indicator */}
                            <motion.circle
                              cx="320"
                              cy="70"
                              r="8"
                              fill="currentColor"
                              className="text-green-400"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </g>
                        )}
                        
                        {/* Default visualization for other articles */}
                        {!['ia-alignement-dangers-business', 'ia-sur-mesure-10-solutions-pme'].includes(filteredArticles[0].id) && (
                          <g>
                            <motion.div 
                              className="text-8xl md:text-9xl font-bold opacity-10 leading-none"
                              animate={hoveredArticle === filteredArticles[0].id ? {
                                scale: [1, 1.05, 1],
                                opacity: [0.1, 0.2, 0.1]
                              } : {}}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <text x="200" y="160" textAnchor="middle" fill="currentColor" fontSize="80" className={`text-${filteredArticles[0].color}-400`}>
                                {filteredArticles[0].metrics.primary}
                              </text>
                            </motion.div>
                          </g>
                        )}
                      </svg>
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
                        article.color === 'red' ? '#ef4444' :
                        '#ef4444'
                      }10, transparent)`
                    }}
                  >
                    {/* Custom SVG for each article */}
                    <div className="absolute inset-0 p-6">
                      <svg className="w-full h-full" viewBox="0 0 300 200">
                        {/* SEO Traffic Article */}
                        {article.id === 'artisane-lumiere-seo' && (
                          <g>
                            <motion.path
                              d="M50 150 Q100 100 150 120 Q200 140 250 80"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              className="text-cyan-400"
                              animate={{ pathLength: [0.8, 1, 0.8] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.circle cx="250" cy="80" r="6" fill="currentColor" className="text-cyan-400" 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <text x="150" y="180" textAnchor="middle" fill="currentColor" fontSize="24" opacity="0.3" className={`text-${article.color}-400`}>
                              68.6%
                            </text>
                          </g>
                        )}
                        
                        {/* Tracking Article */}
                        {article.id === 'tracking-invisible-roi' && (
                          <g>
                            <rect x="50" y="50" width="200" height="100" rx="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" className="text-purple-400" />
                            <motion.rect x="70" y="70" width="50" height="20" rx="3" fill="currentColor" className="text-purple-400" opacity="0.6"
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            />
                            <motion.rect x="130" y="70" width="60" height="20" rx="3" fill="currentColor" className="text-purple-400" opacity="0.6"
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.rect x="200" y="70" width="40" height="20" rx="3" fill="currentColor" className="text-purple-400" opacity="0.6"
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                            />
                            <text x="150" y="175" textAnchor="middle" fill="currentColor" fontSize="18" opacity="0.4" className={`text-${article.color}-400`}>
                              14,171
                            </text>
                          </g>
                        )}
                        
                        {/* Swiss Market Article */}
                        {article.id === 'swiss-market-digital-maturity' && (
                          <g>
                            <motion.circle cx="150" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.2" className="text-green-400" />
                            <motion.path
                              d="M 150 40 A 60 60 0 1 1 149.99 40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="text-green-400"
                              strokeLinecap="round"
                              pathLength="0.73"
                              animate={{ pathLength: [0, 0.73] }}
                              transition={{ duration: 2, delay: 0.5 }}
                            />
                            <text x="150" y="175" textAnchor="middle" fill="currentColor" fontSize="20" opacity="0.4" className={`text-${article.color}-400`}>
                              73%
                            </text>
                          </g>
                        )}
                        
                        {/* Culture Peinture Article */}
                        {article.id === 'culture-peinture-14x-roi' && (
                          <g>
                            {/* Bar Chart */}
                            <rect x="80" y="120" width="30" height="50" fill="currentColor" className="text-red-400" opacity="0.3" />
                            <motion.rect x="130" y="60" width="30" height="110" fill="currentColor" className="text-yellow-400" opacity="0.8"
                              animate={{ scaleY: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <text x="60" y="185" fill="currentColor" fontSize="12" opacity="0.5" className="text-gray-400">Paid</text>
                            <text x="125" y="185" fill="currentColor" fontSize="12" opacity="0.5" className="text-gray-400">Organic</text>
                            <text x="150" y="190" textAnchor="middle" fill="currentColor" fontSize="20" opacity="0.4" className={`text-${article.color}-400`}>
                              688
                            </text>
                          </g>
                        )}
                        
                        {/* Vérité Écran Article */}
                        {article.id === 'verite-ecran-place-ia' && (
                          <g>
                            {/* Phone addiction visualization */}
                            <rect x="130" y="60" width="40" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" className="text-blue-400" />
                            <rect x="135" y="70" width="30" height="3" rx="1" fill="currentColor" className="text-blue-400" opacity="0.3" />
                            <rect x="135" y="80" width="25" height="3" rx="1" fill="currentColor" className="text-blue-400" opacity="0.3" />
                            <rect x="135" y="90" width="28" height="3" rx="1" fill="currentColor" className="text-blue-400" opacity="0.3" />
                            
                            {/* Addiction waves */}
                            <motion.path
                              d="M90 100 Q130 80 170 100 Q210 120 250 100"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              className="text-red-400"
                              animate={{ pathLength: [0.6, 1, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            
                            {/* Time indicator */}
                            <motion.text 
                              x="150" y="170" 
                              textAnchor="middle" 
                              fill="currentColor" 
                              fontSize="18" 
                              opacity="0.6" 
                              className="text-blue-400"
                              animate={{ opacity: [0.4, 0.8, 0.4] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              8.2h
                            </motion.text>
                          </g>
                        )}
                        
                        {/* Default visualization for unmatched articles */}
                        {!['artisane-lumiere-seo', 'tracking-invisible-roi', 'swiss-market-digital-maturity', 'culture-peinture-14x-roi', 'verite-ecran-place-ia'].includes(article.id) && (
                          <motion.div 
                            className="text-center"
                            animate={hoveredArticle === article.id ? {
                              y: [-5, 0, -5]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <text x="150" y="110" textAnchor="middle" fill="currentColor" fontSize="48" opacity="0.2" className={`text-${article.color}-400`}>
                              {article.metrics.primary}
                            </text>
                            <text x="150" y="140" textAnchor="middle" fill="currentColor" fontSize="12" opacity="0.4" className={`text-${article.color}-400`}>
                              {article.metrics.primaryLabel}
                            </text>
                          </motion.div>
                        )}
                      </svg>
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
    </>
  )
}