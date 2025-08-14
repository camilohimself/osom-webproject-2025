{/* VERSION 2 - HERO AVEC ANIMATION TYPEWRITER + SPOTLIGHT */}
<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
  {/* Background noir avec spots lumineux animés */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black"></div>
    
    {/* Spots lumineux qui bougent */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-400/20 via-yellow-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-green-400/15 via-green-400/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
    <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-radial from-purple-400/10 via-purple-400/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    {/* Badge avec pulsation */}
    <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl rounded-full mb-12 border border-yellow-400/40">
      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-ping"></div>
      <span className="text-yellow-400 font-bold text-lg tracking-wider">STRATÉGIE GROWTH INTENSIVE</span>
    </div>
    
    {/* Titre principal avec effet de gradient */}
    <div className="mb-12">
      <h1 className="text-7xl md:text-9xl font-extralight text-white leading-tight mb-6">
        <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          METTRE LE
        </span>
        <span className="block bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-400 bg-clip-text text-transparent font-bold animate-pulse">
          PAQUET
        </span>
      </h1>
      
      {/* Slogan avec effet typewriter */}
      <div className="h-20 flex items-center justify-center">
        <div className="relative">
          <p className={`text-3xl md:text-4xl text-gray-300 font-light transition-all duration-2000 ${
            animatedText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {animatedText.split('').map((char, index) => (
              <span 
                key={index}
                className={`inline transition-all duration-300 ${
                  char === ' ' ? 'w-2' : ''
                } ${
                  animatedText.includes('briller') && index >= animatedText.indexOf('briller') ? 
                  'text-yellow-400 drop-shadow-lg' : 'text-gray-300'
                } ${
                  animatedText.includes("l'ombre") && index >= animatedText.indexOf("l'ombre") && index < animatedText.indexOf("l'ombre") + 6 ? 
                  'text-gray-600' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  textShadow: animatedText.includes('briller') && index >= animatedText.indexOf('briller') ? 
                    '0 0 20px rgba(250, 204, 21, 0.5)' : 'none'
                }}
              >
                {char}
              </span>
            ))}
          </p>
          
          {/* Curseur clignotant */}
          <span className="absolute -right-1 top-0 w-1 h-12 bg-yellow-400 animate-pulse"></span>
        </div>
      </div>
    </div>

    {/* Description avec fond glass */}
    <div className="mb-16 max-w-4xl mx-auto">
      <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Quand il faut <span className="text-yellow-400 font-medium">investir massivement</span> 
          {' '}pour dominer votre marché, nous orchestrons des campagnes d'acquisition 
          qui transforment vos concurrents en spectateurs.
        </p>
      </div>
    </div>

    {/* CTA Buttons avec effet néon */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
      <Link
        href="/contact"
        className="group relative inline-flex items-center justify-center px-16 py-8 text-2xl font-bold text-black rounded-2xl transition-all duration-500 hover:scale-110 overflow-hidden shadow-2xl"
        style={{ 
          background: 'linear-gradient(135deg, #ffd507, #10b981)',
          boxShadow: '0 0 50px rgba(255, 213, 7, 0.3)'
        }}
      >
        <span className="relative z-10">DÉPLOYER LA STRATÉGIE</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </Link>
      
      <Link
        href="#strategies" 
        className="group inline-flex items-center justify-center px-12 py-8 text-xl font-medium text-yellow-400 border-2 border-yellow-400/50 rounded-2xl hover:bg-yellow-400/10 transition-all duration-500 hover:scale-105 hover:border-yellow-400"
      >
        <span>Découvrir l'arsenal</span>
        <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>

    {/* Métriques avec effet de brillance */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { value: "20K+", label: "CHF déployés/jour", color: "yellow", icon: "💰" },
        { value: "4.2x", label: "ROAS garanti", color: "green", icon: "📈" },
        { value: "24h", label: "Time to launch", color: "blue", icon: "⚡" },
        { value: "100%", label: "Satisfaction", color: "purple", icon: "🎯" }
      ].map((metric, index) => (
        <div 
          key={index}
          className={`group relative p-8 rounded-3xl border transition-all duration-700 hover:scale-110 bg-gradient-to-br overflow-hidden $${
            metric.color === 'yellow' ? 'from-yellow-400/10 to-yellow-600/5 border-yellow-400/30 hover:border-yellow-400/60' :
            metric.color === 'green' ? 'from-green-400/10 to-green-600/5 border-green-400/30 hover:border-green-400/60' :
            metric.color === 'blue' ? 'from-blue-400/10 to-blue-600/5 border-blue-400/30 hover:border-blue-400/60' :
            'from-purple-400/10 to-purple-600/5 border-purple-400/30 hover:border-purple-400/60'
          }`}
          style={{animationDelay: `${index * 300}ms`}}
        >
          {/* Effet de brillance au hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-4">{metric.icon}</div>
            <div className={`text-5xl font-bold mb-3 $${
              metric.color === 'yellow' ? 'text-yellow-400' :
              metric.color === 'green' ? 'text-green-400' :
              metric.color === 'blue' ? 'text-blue-400' :
              'text-purple-400'
            }`}>
              {metric.value}
            </div>
            <div className="text-gray-400 font-medium">{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>