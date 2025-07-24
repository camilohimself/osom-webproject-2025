export interface Task {
  id: string
  name: string
  qrCode: string
  color: string
  category: 'production' | 'maintenance' | 'pause' | 'atelier'
}

export interface TimeEntry {
  id: string
  taskId: string
  taskName: string
  startTime: Date
  endTime?: Date
  duration?: number
  userId: string
}

export interface TimerState {
  isActive: boolean
  currentTask: Task | null
  startTime: Date | null
  elapsedTime: number
  entries: TimeEntry[]
}