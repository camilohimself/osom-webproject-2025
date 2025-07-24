'use client'

import { useState } from 'react'
import { useTimer } from '../hooks/useTimer'
import { getTaskByQrCode } from '../data/mockTasks'
import QRScanner from '../components/QRScanner'
import TimerDisplay from '../components/TimerDisplay'
import TaskSwitcher from '../components/TaskSwitcher'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'scanner' | 'manual'>('scanner')
  const { timerState, startTimer, stopTimer, switchTask, formatTime } = useTimer()

  const handleQRScan = (qrData: string) => {
    const task = getTaskByQrCode(qrData)
    
    if (task) {
      if (timerState.isActive) {
        switchTask(task)
      } else {
        startTimer(task)
      }
      
      // Feedback visuel
      navigator.vibrate?.(200)
    } else {
      // QR code non reconnu
      alert(`QR code non reconnu: ${qrData}`)
    }
  }

  const handleManualTaskSelect = (task: any) => {
    if (timerState.isActive) {
      switchTask(task)
    } else {
      startTimer(task)
    }
  }

  const handleStopTimer = () => {
    if (confirm('Voulez-vous vraiment arrêter le timer ?')) {
      stopTimer()
    }
  }

  return (
    <div className="min-h-screen bg-industrial-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-industrial-800 mb-2">
            Timer Industriel
          </h1>
          <p className="text-industrial-600">
            Gestion du temps par QR code
          </p>
        </header>

        {/* Timer Display */}
        <div className="mb-6">
          <TimerDisplay
            currentTask={timerState.currentTask}
            elapsedTime={timerState.elapsedTime}
            formatTime={formatTime}
            isActive={timerState.isActive}
          />
        </div>

        {/* Action Buttons */}
        {timerState.isActive && (
          <div className="mb-6">
            <button
              onClick={handleStopTimer}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl min-h-16 touch-manipulation transition-colors"
            >
              Arrêter Timer
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('scanner')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'scanner'
                  ? 'bg-industrial-700 text-white'
                  : 'text-industrial-600 hover:text-industrial-800'
              }`}
            >
              Scanner QR
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'manual'
                  ? 'bg-industrial-700 text-white'
                  : 'text-industrial-600 hover:text-industrial-800'
              }`}
            >
              Manuel
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          {activeTab === 'scanner' ? (
            <QRScanner
              onScan={handleQRScan}
              isActive={activeTab === 'scanner'}
            />
          ) : (
            <TaskSwitcher
              currentTask={timerState.currentTask}
              onTaskSelect={handleManualTaskSelect}
              isTimerActive={timerState.isActive}
            />
          )}
        </div>

        {/* Recent Entries */}
        {timerState.entries.length > 0 && (
          <div className="card-industrial">
            <h3 className="text-lg font-bold text-industrial-800 mb-4">
              Dernières activités
            </h3>
            
            <div className="space-y-3">
              {timerState.entries.slice(0, 3).map(entry => (
                <div
                  key={entry.id}
                  className="flex justify-between items-center py-2 border-b border-industrial-100 last:border-b-0"
                >
                  <div>
                    <div className="font-medium text-industrial-800">
                      {entry.taskName}
                    </div>
                    <div className="text-sm text-industrial-600">
                      {entry.startTime.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-mono font-bold text-industrial-800">
                      {formatTime(entry.duration || 0)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-8 pt-4 border-t border-industrial-200">
          <p className="text-sm text-industrial-500">
            OSOM Timer Industriel - Demo v1.0
          </p>
        </footer>
      </div>
    </div>
  )
}