'use client'

import { useState, useRef, useEffect } from 'react'
import { BrowserMultiFormatReader } from '@zxing/library'

interface QRScannerProps {
  onScan: (data: string) => void
  isActive: boolean
}

export default function QRScanner({ onScan, isActive }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const codeReader = useRef<BrowserMultiFormatReader | null>(null)

  useEffect(() => {
    if (isActive && !isScanning) {
      startScanning()
    } else if (!isActive && isScanning) {
      stopScanning()
    }

    return () => {
      stopScanning()
    }
  }, [isActive])

  const startScanning = async () => {
    try {
      setError(null)
      setIsScanning(true)

      codeReader.current = new BrowserMultiFormatReader()
      
      const videoInputDevices = await navigator.mediaDevices.enumerateDevices()
      const cameras = videoInputDevices.filter(device => device.kind === 'videoinput')
      
      if (cameras.length === 0) {
        throw new Error('Aucune caméra détectée')
      }

      // Préférer la caméra arrière si disponible
      const backCamera = cameras.find(device => 
        device.label.toLowerCase().includes('back') || 
        device.label.toLowerCase().includes('environment')
      )
      
      const selectedDeviceId = backCamera ? backCamera.deviceId : cameras[0].deviceId

      await codeReader.current.decodeFromVideoDevice(
        selectedDeviceId,
        videoRef.current!,
        (result, error) => {
          if (result) {
            const scannedText = result.getText()
            onScan(scannedText)
            
            // Feedback audio
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEZAjuN0u/ZeSMFG2G+8NSETgwIUqjo8bxmGgW4wOD5lQwKM4PD8N2DPwUGYqjy8tWBPAMA')
            audio.play().catch(() => {}) // Ignore si pas autorisé
          }
          
          if (error && !(error.name === 'NotFoundException')) {
            console.warn('Erreur scan QR:', error)
          }
        }
      )

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
      setIsScanning(false)
    }
  }

  const stopScanning = () => {
    if (codeReader.current) {
      codeReader.current.reset()
    }
    setIsScanning(false)
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="card-industrial">
        <div className="aspect-square bg-industrial-800 rounded-lg overflow-hidden relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
          
          {/* Overlay guide de scan */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-safety-500 rounded-lg border-dashed opacity-70" />
          </div>
          
          {/* Status overlay */}
          <div className="absolute top-4 left-4 right-4">
            {isScanning && (
              <div className="bg-safety-500 text-white px-3 py-1 rounded-full text-sm font-medium text-center">
                Scanner le QR code
              </div>
            )}
            
            {error && (
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium text-center">
                {error}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-industrial-600 text-sm">
            Pointez la caméra vers le QR code du poste de travail
          </p>
        </div>
      </div>
    </div>
  )
}