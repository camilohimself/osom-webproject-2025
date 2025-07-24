'use client'

import { Task } from '../types/timer'

interface TimerDisplayProps {
  currentTask: Task | null
  elapsedTime: number
  formatTime: (seconds: number) => string
  isActive: boolean
}

export default function TimerDisplay({ 
  currentTask, 
  elapsedTime, 
  formatTime, 
  isActive 
}: TimerDisplayProps) {
  
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'production': return 'Production'
      case 'maintenance': return 'Maintenance'  
      case 'pause': return 'Pause'
      case 'atelier': return 'Atelier'
      default: return 'Inconnu'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'production': return 'bg-industrial-700'
      case 'maintenance': return 'bg-safety-600'
      case 'pause': return 'bg-green-600'
      case 'atelier': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  if (!currentTask || !isActive) {
    return (
      <div className="card-industrial text-center">
        <div className="text-industrial-400 mb-4">
          <div className="w-20 h-20 mx-auto mb-4 bg-industrial-200 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 112 0v4a1 1 0 11-2 0V7z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold text-industrial-600 mb-2">
          Aucune tâche active
        </h2>
        <p className="text-industrial-500">
          Scannez un QR code pour commencer
        </p>
      </div>
    )
  }

  return (
    <div className="card-industrial">
      {/* Statut actuel */}
      <div className="flex items-center justify-between mb-4">
        <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(currentTask.category)}`}>
          {getCategoryLabel(currentTask.category)}
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-industrial-600 font-medium">ACTIF</span>
        </div>
      </div>

      {/* Nom de la tâche */}
      <h2 className="text-2xl font-bold text-industrial-800 mb-6 text-center">
        {currentTask.name}
      </h2>

      {/* Timer principal */}
      <div className="text-center mb-6">
        <div className="text-6xl font-mono font-bold text-industrial-900 mb-2">
          {formatTime(elapsedTime)}
        </div>
        <p className="text-industrial-600">
          Temps écoulé
        </p>
      </div>

      {/* Informations supplémentaires */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-industrial-200">
        <div className="text-center">
          <div className="text-sm text-industrial-500 mb-1">Code QR</div>
          <div className="font-mono text-industrial-700 font-medium">
            {currentTask.qrCode}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-industrial-500 mb-1">Démarré</div>
          <div className="text-industrial-700 font-medium">
            {new Date().toLocaleTimeString('fr-FR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}