import { Task } from '../types/timer'

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    name: 'Découpe Métal - Poste 1',
    qrCode: 'METAL_CUT_01',
    color: '#475569',
    category: 'production'
  },
  {
    id: 'task-2', 
    name: 'Soudure Assemblage - Poste 2',
    qrCode: 'WELD_ASM_02',
    color: '#475569',
    category: 'production'
  },
  {
    id: 'task-3',
    name: 'Contrôle Qualité - Station 3',
    qrCode: 'QC_STATION_03',
    color: '#475569',
    category: 'production'
  },
  {
    id: 'maintenance-1',
    name: 'Maintenance Préventive',
    qrCode: 'MAINT_PREV_01',
    color: '#ea580c',
    category: 'maintenance'
  },
  {
    id: 'pause-1',
    name: 'Pause Officielle',
    qrCode: 'BREAK_TIME_01',
    color: '#16a34a',
    category: 'pause'
  },
  {
    id: 'atelier-1',
    name: 'Atelier - Divers',
    qrCode: 'WORKSHOP_MISC',
    color: '#9333ea',
    category: 'atelier'
  }
]

export const getTaskByQrCode = (qrCode: string): Task | undefined => {
  return mockTasks.find(task => task.qrCode === qrCode)
}