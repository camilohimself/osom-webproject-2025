'use client'

import { Task } from '../types/timer'
import { mockTasks } from '../data/mockTasks'

interface TaskSwitcherProps {
  currentTask: Task | null
  onTaskSelect: (task: Task) => void
  isTimerActive: boolean
}

export default function TaskSwitcher({ 
  currentTask, 
  onTaskSelect, 
  isTimerActive 
}: TaskSwitcherProps) {

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'production': return 'border-industrial-500 bg-industrial-50'
      case 'maintenance': return 'border-safety-500 bg-safety-50'
      case 'pause': return 'border-green-500 bg-green-50'
      case 'atelier': return 'border-purple-500 bg-purple-50'
      default: return 'border-gray-500 bg-gray-50'
    }
  }

  const groupedTasks = mockTasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = []
    }
    acc[task.category].push(task)
    return acc
  }, {} as Record<string, Task[]>)

  const categoryOrder = ['production', 'maintenance', 'pause', 'atelier']
  const categoryLabels = {
    production: 'Production',
    maintenance: 'Maintenance',
    pause: 'Pause',
    atelier: 'Atelier'
  }

  return (
    <div className="card-industrial">
      <h3 className="text-lg font-bold text-industrial-800 mb-4 text-center">
        {isTimerActive ? 'Changer de tâche' : 'Sélectionner une tâche'}
      </h3>

      <div className="space-y-4">
        {categoryOrder.map(category => {
          const tasks = groupedTasks[category] || []
          if (tasks.length === 0) return null

          return (
            <div key={category}>
              <h4 className="text-sm font-semibold text-industrial-600 mb-2 uppercase tracking-wide">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h4>
              
              <div className="grid gap-2">
                {tasks.map(task => {
                  const isActive = currentTask?.id === task.id
                  
                  return (
                    <button
                      key={task.id}
                      onClick={() => onTaskSelect(task)}
                      disabled={isActive}
                      className={`
                        p-4 rounded-lg border-2 text-left transition-all duration-200
                        ${isActive 
                          ? 'border-industrial-700 bg-industrial-100 opacity-50 cursor-not-allowed' 
                          : `${getCategoryColor(task.category)} hover:border-opacity-100 hover:shadow-md active:scale-95`
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-industrial-800">
                            {task.name}
                          </div>
                          <div className="text-sm text-industrial-600 font-mono">
                            {task.qrCode}
                          </div>
                        </div>
                        
                        {isActive && (
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs text-industrial-600 font-medium">
                              ACTIF
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {isTimerActive && (
        <div className="mt-6 pt-4 border-t border-industrial-200">
          <p className="text-sm text-industrial-600 text-center">
            Sélectionnez une nouvelle tâche pour changer automatiquement
          </p>
        </div>
      )}
    </div>
  )
}