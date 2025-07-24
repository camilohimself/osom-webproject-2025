'use client'

import { useState, useEffect, useCallback } from 'react'
import { Task, TimeEntry, TimerState } from '../types/timer'

const STORAGE_KEY = 'timer-industriel-data'

export const useTimer = () => {
  const [timerState, setTimerState] = useState<TimerState>({
    isActive: false,
    currentTask: null,
    startTime: null,
    elapsedTime: 0,
    entries: []
  })

  // Charger les données du localStorage au démarrage
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setTimerState(prev => ({
          ...prev,
          entries: parsed.entries || []
        }))
      } catch (error) {
        console.warn('Erreur chargement données sauvegardées:', error)
      }
    }
  }, [])

  // Sauvegarder les données dans localStorage
  const saveToStorage = useCallback((state: TimerState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        entries: state.entries
      }))
    } catch (error) {
      console.warn('Erreur sauvegarde:', error)
    }
  }, [])

  // Démarrer timer pour une tâche
  const startTimer = useCallback((task: Task) => {
    const now = new Date()
    
    setTimerState(prev => {
      const newState = {
        ...prev,
        isActive: true,
        currentTask: task,
        startTime: now,
        elapsedTime: 0
      }
      return newState
    })
  }, [])

  // Arrêter timer et enregistrer
  const stopTimer = useCallback(() => {
    const now = new Date()
    
    setTimerState(prev => {
      if (!prev.isActive || !prev.currentTask || !prev.startTime) {
        return prev
      }

      const duration = Math.floor((now.getTime() - prev.startTime.getTime()) / 1000)
      const newEntry: TimeEntry = {
        id: `entry-${Date.now()}`,
        taskId: prev.currentTask.id,
        taskName: prev.currentTask.name,
        startTime: prev.startTime,
        endTime: now,
        duration,
        userId: 'demo-user'
      }

      const newState = {
        ...prev,
        isActive: false,
        currentTask: null,
        startTime: null,
        elapsedTime: 0,
        entries: [newEntry, ...prev.entries]
      }

      saveToStorage(newState)
      return newState
    })
  }, [saveToStorage])

  // Changer de tâche (arrêter current + démarrer nouvelle)
  const switchTask = useCallback((newTask: Task) => {
    stopTimer()
    setTimeout(() => startTimer(newTask), 100)
  }, [stopTimer, startTimer])

  // Mettre à jour temps écoulé
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (timerState.isActive && timerState.startTime) {
      interval = setInterval(() => {
        const now = new Date()
        const elapsed = Math.floor((now.getTime() - timerState.startTime!.getTime()) / 1000)
        
        setTimerState(prev => ({
          ...prev,
          elapsedTime: elapsed
        }))
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerState.isActive, timerState.startTime])

  // Formatage du temps
  const formatTime = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [])

  return {
    timerState,
    startTimer,
    stopTimer,
    switchTask,
    formatTime
  }
}