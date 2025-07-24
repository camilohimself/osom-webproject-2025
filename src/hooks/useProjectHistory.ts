'use client'

import { useState, useEffect, useCallback } from 'react'

export interface ProjectHistoryEntry {
  id: string
  clientName: string
  projectName: string
  sector: string
  budget: string
  deadline: string
  createdAt: string
  lastModified: string
  status: 'draft' | 'in_progress' | 'completed' | 'archived'
  complexity: 'simple' | 'medium' | 'complex'
  estimatedHours: number
  briefGenerated: boolean
  tags: string[]
  notes?: string
}

const STORAGE_KEY = 'osom_project_history'

export const useProjectHistory = () => {
  const [projects, setProjects] = useState<ProjectHistoryEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Charger l'historique depuis localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setProjects(parsed)
      }
    } catch (error) {
      console.error('Erreur chargement historique:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Sauvegarder dans localStorage
  const saveToStorage = useCallback((updatedProjects: ProjectHistoryEntry[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects))
      setProjects(updatedProjects)
    } catch (error) {
      console.error('Erreur sauvegarde:', error)
    }
  }, [])

  // Ajouter un nouveau projet
  const addProject = useCallback((projectData: any) => {
    const newProject: ProjectHistoryEntry = {
      id: `project_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      clientName: projectData.clientName || 'Client non défini',
      projectName: projectData.projectName || 'Projet sans nom',
      sector: projectData.sector || 'Secteur non spécifié',
      budget: projectData.budget || 'Budget à définir',
      deadline: projectData.deadline || '',
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      status: 'draft',
      complexity: determineComplexity(projectData),
      estimatedHours: estimateHours(projectData),
      briefGenerated: false,
      tags: generateTags(projectData),
      notes: ''
    }

    const updated = [newProject, ...projects]
    saveToStorage(updated)
    return newProject.id
  }, [projects, saveToStorage])

  // Mettre à jour un projet
  const updateProject = useCallback((id: string, updates: Partial<ProjectHistoryEntry>) => {
    const updated = projects.map(project => 
      project.id === id 
        ? { ...project, ...updates, lastModified: new Date().toISOString() }
        : project
    )
    saveToStorage(updated)
  }, [projects, saveToStorage])

  // Marquer un brief comme généré
  const markBriefGenerated = useCallback((id: string) => {
    updateProject(id, { briefGenerated: true, status: 'in_progress' })
  }, [updateProject])

  // Supprimer un projet
  const deleteProject = useCallback((id: string) => {
    const updated = projects.filter(project => project.id !== id)
    saveToStorage(updated)
  }, [projects, saveToStorage])

  // Archiver un projet
  const archiveProject = useCallback((id: string) => {
    updateProject(id, { status: 'archived' })
  }, [updateProject])

  // Obtenir statistiques
  const getStatistics = useCallback(() => {
    const total = projects.length
    const byStatus = projects.reduce((acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    const byComplexity = projects.reduce((acc, project) => {
      acc[project.complexity] = (acc[project.complexity] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const totalHours = projects.reduce((acc, project) => acc + project.estimatedHours, 0)
    const avgHours = total > 0 ? Math.round(totalHours / total) : 0

    const recentProjects = projects
      .filter(p => new Date(p.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
      .length

    return {
      total,
      byStatus,
      byComplexity,
      totalHours,
      avgHours,
      recentProjects
    }
  }, [projects])

  // Rechercher projets
  const searchProjects = useCallback((query: string) => {
    if (!query.trim()) return projects

    const searchTerm = query.toLowerCase()
    return projects.filter(project => 
      project.clientName.toLowerCase().includes(searchTerm) ||
      project.projectName.toLowerCase().includes(searchTerm) ||
      project.sector.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }, [projects])

  // Obtenir projets similaires
  const getSimilarProjects = useCallback((currentProject: any) => {
    return projects.filter(project => 
      project.sector === currentProject.sector ||
      project.complexity === determineComplexity(currentProject) ||
      project.tags.some(tag => generateTags(currentProject).includes(tag))
    ).slice(0, 3)
  }, [projects])

  return {
    projects,
    isLoading,
    addProject,
    updateProject,
    markBriefGenerated,
    deleteProject,
    archiveProject,
    getStatistics,
    searchProjects,
    getSimilarProjects
  }
}

// Fonctions utilitaires

function determineComplexity(projectData: any): 'simple' | 'medium' | 'complex' {
  let score = 0
  
  if (projectData.ecommerce) score += 2
  if (projectData.multilingual) score += 2
  if (projectData.crmIntegration) score += 1
  if (projectData.competitorsData?.length > 3) score += 1
  if (projectData.conversionGoal === 'sale') score += 1
  
  if (score <= 2) return 'simple'
  if (score <= 4) return 'medium'
  return 'complex'
}

function estimateHours(projectData: any): number {
  let hours = 40 // Base

  if (projectData.ecommerce) hours += 60
  if (projectData.multilingual) hours += 30
  if (projectData.crmIntegration) hours += 25
  if (projectData.visualStyle === 'creative') hours += 20
  if (projectData.companySize === 'corporate') hours += 15

  return hours
}

function generateTags(projectData: any): string[] {
  const tags: string[] = []
  
  if (projectData.ecommerce) tags.push('E-commerce')
  if (projectData.multilingual) tags.push('Multilingue')
  if (projectData.crmIntegration) tags.push('CRM')
  if (projectData.visualStyle) tags.push(projectData.visualStyle)
  if (projectData.conversionGoal) tags.push(projectData.conversionGoal)
  if (projectData.companySize) tags.push(projectData.companySize)
  if (projectData.sector) tags.push(projectData.sector)
  
  return tags
}