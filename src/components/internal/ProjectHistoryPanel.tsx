'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjectHistory, type ProjectHistoryEntry } from '@/hooks/useProjectHistory'

interface ProjectHistoryPanelProps {
  currentProjectData?: any
  onLoadProject?: (project: ProjectHistoryEntry) => void
}

export default function ProjectHistoryPanel({ currentProjectData, onLoadProject }: ProjectHistoryPanelProps) {
  const { 
    projects, 
    isLoading, 
    getStatistics, 
    searchProjects, 
    getSimilarProjects,
    deleteProject,
    archiveProject,
    updateProject
  } = useProjectHistory()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [showStats, setShowStats] = useState(false)

  const statistics = getStatistics()
  const filteredProjects = searchProjects(searchQuery).filter(project => 
    selectedStatus === 'all' || project.status === selectedStatus
  )
  const similarProjects = currentProjectData ? getSimilarProjects(currentProjectData) : []

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'text-gray-400 bg-gray-500/20'
      case 'in_progress': return 'text-blue-400 bg-blue-500/20'  
      case 'completed': return 'text-green-400 bg-green-500/20'
      case 'archived': return 'text-purple-400 bg-purple-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'simple': return 'text-green-400'
      case 'medium': return 'text-yellow-400'
      case 'complex': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-CH', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header avec statistiques */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center">
            📚 Historique Projets
          </h3>
          <button
            onClick={() => setShowStats(!showStats)}
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            {showStats ? 'Masquer stats' : 'Voir stats'}
          </button>
        </div>

        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{statistics.total}</div>
                <div className="text-xs text-gray-400">Total projets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{statistics.recentProjects}</div>
                <div className="text-xs text-gray-400">Ce mois</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{statistics.avgHours}h</div>
                <div className="text-xs text-gray-400">Moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{statistics.totalHours}h</div>
                <div className="text-xs text-gray-400">Total estimé</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filtres */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher client, projet, secteur..."
              className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
          >
            <option value="all">Tous statuts</option>
            <option value="draft">Brouillons</option>
            <option value="in_progress">En cours</option>
            <option value="completed">Terminés</option>
            <option value="archived">Archivés</option>
          </select>
        </div>
      </div>

      {/* Projets similaires (si projet actuel) */}
      {similarProjects.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20">
          <h4 className="text-sm font-bold text-yellow-400 mb-3">
            💡 Projets similaires trouvés
          </h4>
          <div className="space-y-2">
            {similarProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-white font-medium">{project.clientName}</span>
                  <span className="text-gray-400 ml-2">• {project.sector}</span>
                </div>
                <button
                  onClick={() => onLoadProject?.(project)}
                  className="text-yellow-400 hover:text-yellow-300 text-xs"
                >
                  Réutiliser
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Liste des projets */}
      <div className="space-y-3">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            {projects.length === 0 
              ? 'Aucun projet enregistré. Créez votre premier brief !'
              : 'Aucun projet ne correspond à vos critères.'
            }
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-white font-semibold">{project.clientName}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`text-xs font-medium ${getComplexityColor(project.complexity)}`}>
                      {project.complexity}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-300 mb-1">{project.projectName}</div>
                  <div className="text-xs text-gray-400">
                    {project.sector} • {project.budget} • {project.estimatedHours}h estimées
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {onLoadProject && (
                    <button
                      onClick={() => onLoadProject(project)}
                      className="text-blue-400 hover:text-blue-300 text-xs px-2 py-1 rounded bg-blue-500/20"
                    >
                      Charger
                    </button>
                  )}
                  
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-white p-1">⋮</button>
                    <div className="absolute right-0 top-8 bg-black border border-gray-600 rounded-lg p-2 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-[120px]">
                      <button
                        onClick={() => updateProject(project.id, { status: 'completed' })}
                        className="w-full text-left text-xs text-green-400 hover:text-green-300 px-2 py-1 rounded hover:bg-green-500/20"
                      >
                        Marquer terminé
                      </button>
                      <button
                        onClick={() => archiveProject(project.id)}
                        className="w-full text-left text-xs text-purple-400 hover:text-purple-300 px-2 py-1 rounded hover:bg-purple-500/20"
                      >
                        Archiver
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="w-full text-left text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded hover:bg-red-500/20"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Dates */}
              <div className="flex justify-between text-xs text-gray-500">
                <span>Créé: {formatDate(project.createdAt)}</span>
                <span>Modifié: {formatDate(project.lastModified)}</span>
                {project.deadline && (
                  <span className={
                    new Date(project.deadline) < new Date() 
                      ? 'text-red-400' 
                      : 'text-gray-400'
                  }>
                    Échéance: {formatDate(project.deadline)}
                  </span>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}