'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const articles = [
    {
      id: 'culture-peinture-140x-roi',
      title: 'Culture Peinture : 140x plus efficace que la publicité payante',
      excerpt: 'Comment une stratégie organique sur Facebook a généré 688 conversions vs 49 en publicité payante sur la même période.',
      category: 'Case Study',
      readTime: '5 min',
      date: '15 Janvier 2025',
      author: 'OSOM Team',
      image: '/blog/culture-peinture-case-study.jpg',
      tags: ['ROI', 'Organique', 'Facebook', 'Conversions'],
      featured: true,
      metrics: {
        conversions: 688,
        roi: '140x',
        periode: '6 mois'
      }
    },
    {
      id: 'artisane-lumiere-seo',
      title: 'Artisane de Lumière : 68.6% engagement SEO vs 44.6% trafic direct',
      excerpt: 'Analyse GA4 sur 200+ jours : pourquoi le trafic SEO génère un engagement 54% supérieur au trafic direct.',
      category: 'SEO Analysis',
      readTime: '4 min',
      date: '10 Janvier 2025',
      author: 'OSOM Team',
      image: '/blog/artisane-seo-analysis.jpg',
      tags: ['SEO', 'Engagement', 'GA4', 'Analyse'],
      featured: true,
      metrics: {
        engagement: '68.6%',
        amelioration: '+54%',
        donnees: '200+ jours'
      }
    },
    {
      id: 'tracking-invisible-roi',
      title: '14,171 sessions "Unassigned" récupérées : révéler le ROI invisible',
      excerpt: 'Comment un tracking avancé révèle la vraie performance de vos actions marketing et optimise votre attribution.',
      category: 'Data Analysis',
      readTime: '6 min',
      date: '5 Janvier 2025',
      author: 'OSOM Team',
      image: '/blog/tracking-invisible-roi.jpg',
      tags: ['Tracking', 'Attribution', 'GA4', 'ROI'],
      featured: false,
      metrics: {
        sessions: '14,171',
        attribution: 'Récupérée',
        impact: 'ROI visible'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Style Linear */}
      <section className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
        {/* Background Pattern Linear */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-wide">BLOG OSOM</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Expertise par <span className="text-cyan-400 font-bold">données</span>.<br />
              Insights par <span className="text-cyan-400 font-bold">résultats</span>.
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Case studies réels, analyses GA4 et stratégies éprouvées. Découvrez comment nous transformons les investissements clients en <span className="text-cyan-400 font-semibold">performances mesurables</span>.
            </p>
            
            {/* Stats Pills - Style Linear */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="text-yellow-400 font-bold">400+</span>
                <span className="text-gray-300 ml-2">jours de données</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="text-green-400 font-bold">100%</span>
                <span className="text-gray-300 ml-2">case studies réels</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="text-purple-400 font-bold">GA4</span>
                <span className="text-gray-300 ml-2">données vérifiées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section - Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">CASE STUDIES VÉRIFIÉS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Résultats par <span className="text-green-400 font-bold">transparence</span>.<br />
              Performance par <span className="text-green-400 font-bold">preuves</span>.
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(article => article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-green-400/30 transition-all duration-500 bg-gradient-to-br from-white/5 to-black/40 group"
              >
                {/* Article Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-400/20 to-cyan-400/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-6xl">{article.category === 'Case Study' ? '📊' : '🔍'}</span>
                  </div>
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>
                  {/* Metrics Overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {Object.entries(article.metrics).map(([key, value], i) => (
                      <div key={key} className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-green-400 font-bold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-400 text-sm font-medium">{article.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-green-400 transition-colors" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  >
                    Lire l'analyse complète
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Other Articles */}
          <div className="mt-20">
            <h3 className="text-3xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Analyses <span className="text-purple-400 font-bold">Techniques</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500 bg-gradient-to-br from-white/5 to-black/40 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-400 text-sm font-medium">{article.category}</span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>

                  <h4 className="text-xl font-light text-white mb-3 group-hover:text-purple-400 transition-colors" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.title}
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  >
                    Lire plus
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-green-400/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-12 bg-gradient-to-br from-white/5 to-black/40">
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-wide">VOTRE CASE STUDY</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Prêt pour votre <span className="text-cyan-400 font-bold">transformation</span> ?
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Créons ensemble votre prochain case study avec des <span className="text-cyan-400 font-semibold">résultats mesurables</span> et vérifiables.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-400 text-black px-8 py-4 rounded-lg hover:bg-cyan-500 transition-colors font-bold shadow-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Démarrer mon projet
              </Link>
              <Link
                href="/calculator"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Calculer mon ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}