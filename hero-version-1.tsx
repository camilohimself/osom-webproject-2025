{/* VERSION 1 - HERO AVEC ANIMATION PROGRESSIVE */}
<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
  {/* Background gradients animés */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-green-400/10"></div>
    
    {/* Particules d'ombre flottantes */}
    <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gray-800/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-yellow-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    {/* Badge premium */}
    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full mb-8 border border-yellow-400/30">
      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
      <span className="text-green-400 font-bold text-sm tracking-wide">GROWTH MARKETING INTENSIF</span>
    </div>
    
    {/* Titre principal avec animation */}
    <div className="mb-8">
      <h1 className="text-6xl md:text-8xl font-light text-white leading-tight mb-4">
        Accélérez votre <br/>
        <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent font-bold">
          croissance
        </span>
      </h1>
      
      {/* Slogan animé */}
      <div className="h-16 flex items-center justify-center">
        <p className={`text-2xl md:text-3xl text-gray-300 transition-all duration-1000 ${
          animatedText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {animatedText.split(' ').map((word, index) => (
            <span 
              key={index}
              className={`inline-block mr-2 transition-all duration-500 ${
                word === 'briller' ? 'text-yellow-400 animate-pulse' : ''
              } ${
                word === "l'ombre" ? 'text-gray-500' : ''
              }`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>

    {/* Description */}
    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
      Quand il faut mettre le paquet pour dominer votre marché, nous orchestrons 
      des campagnes d'acquisition qui transforment vos concurrents en spectateurs.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <Link
        href="/contact"
        className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-black rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #ffd507, #10b981)' }}
      >
        <span className="relative z-10">Déployer la stratégie</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
      
      <Link
        href="#strategies" 
        className="group inline-flex items-center justify-center px-8 py-6 text-lg font-medium text-yellow-400 border-2 border-yellow-400/40 rounded-2xl hover:bg-yellow-400/10 transition-all duration-300"
      >
        <span>Voir l'arsenal</span>
        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>

    {/* Métriques impressionnantes */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {[
        { value: "15K+", label: "CHF budget/jour", color: "yellow" },
        { value: "3.2x", label: "ROAS moyen", color: "green" },
        { value: "48h", label: "Time to market", color: "blue" },
        { value: "98%", label: "Client retention", color: "purple" }
      ].map((metric, index) => (
        <div 
          key={index}
          className={`group p-6 rounded-2xl border transition-all duration-500 hover:scale-105 bg-gradient-to-br ${
            metric.color === 'yellow' ? 'from-yellow-400/10 to-yellow-600/5 border-yellow-400/20 hover:border-yellow-400/40' :
            metric.color === 'green' ? 'from-green-400/10 to-green-600/5 border-green-400/20 hover:border-green-400/40' :
            metric.color === 'blue' ? 'from-blue-400/10 to-blue-600/5 border-blue-400/20 hover:border-blue-400/40' :
            'from-purple-400/10 to-purple-600/5 border-purple-400/20 hover:border-purple-400/40'
          }`}
          style={{animationDelay: `${index * 200}ms`}}
        >
          <div className={`text-4xl font-bold mb-2 ${
            metric.color === 'yellow' ? 'text-yellow-400' :
            metric.color === 'green' ? 'text-green-400' :
            metric.color === 'blue' ? 'text-blue-400' :
            'text-purple-400'
          }`}>
            {metric.value}
          </div>
          <div className="text-gray-400 text-sm font-medium">{metric.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>