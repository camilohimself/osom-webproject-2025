'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface CSVUploaderProps {
  title: string
  description: string
  expectedColumns: string[]
  onDataLoaded: (data: any[]) => void
}

export default function CSVUploader({ title, description, expectedColumns, onDataLoaded }: CSVUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadedData, setUploadedData] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  const parseCSV = useCallback((csvText: string) => {
    try {
      const lines = csvText.trim().split('\n')
      if (lines.length < 2) {
        throw new Error('Le fichier CSV doit contenir au moins un header et une ligne de données')
      }

      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
      const data = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/"/g, ''))
        const row: any = {}
        headers.forEach((header, index) => {
          row[header] = values[index] || ''
        })
        return row
      })

      return { headers, data }
    } catch (err) {
      throw new Error('Erreur de parsing CSV: ' + (err as Error).message)
    }
  }, [])

  const handleFile = useCallback(async (file: File) => {
    if (!file.name.endsWith('.csv')) {
      setError('Veuillez sélectionner un fichier CSV')
      return
    }

    setIsProcessing(true)
    setError('')

    try {
      const text = await file.text()
      const { headers, data } = parseCSV(text)
      
      // Validation des colonnes attendues
      const missingColumns = expectedColumns.filter(col => 
        !headers.some(h => h.toLowerCase().includes(col.toLowerCase()))
      )
      
      if (missingColumns.length > 0) {
        console.warn(`Colonnes manquantes recommandées: ${missingColumns.join(', ')}`)
      }

      setUploadedData(data)
      onDataLoaded(data)
      
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsProcessing(false)
    }
  }, [parseCSV, expectedColumns, onDataLoaded])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFile(files[0])
    }
  }, [handleFile])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }, [handleFile])

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        
        {/* Colonnes attendues */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">Colonnes recommandées:</div>
          <div className="flex flex-wrap gap-2">
            {expectedColumns.map((col) => (
              <span key={col} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                {col}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Zone de drop */}
      <motion.div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all ${
          isDragOver 
            ? 'border-yellow-400 bg-yellow-400/10' 
            : uploadedData.length > 0
            ? 'border-green-500 bg-green-500/10'
            : 'border-gray-600 hover:border-yellow-400/50'
        }`}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        {isProcessing ? (
          <div className="text-yellow-400">
            <div className="text-2xl mb-2">⏳</div>
            <div>Traitement du fichier...</div>
          </div>
        ) : uploadedData.length > 0 ? (
          <div className="text-green-400">
            <div className="text-2xl mb-2">✅</div>
            <div className="font-semibold">Fichier chargé avec succès</div>
            <div className="text-sm text-gray-400 mt-1">
              {uploadedData.length} lignes trouvées
            </div>
          </div>
        ) : (
          <div className="text-gray-400">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold">Glissez votre fichier CSV ici</div>
            <div className="text-sm mt-1">ou cliquez pour sélectionner</div>
          </div>
        )}
      </motion.div>

      {/* Erreur */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500/50 rounded-lg p-3"
        >
          <div className="text-red-400 text-sm font-semibold">Erreur:</div>
          <div className="text-red-300 text-sm">{error}</div>
        </motion.div>
      )}

      {/* Aperçu des données */}
      {uploadedData.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-black/30 rounded-lg p-4 border border-gray-700"
        >
          <div className="text-sm font-semibold text-gray-300 mb-3">
            Aperçu des données ({uploadedData.length} lignes)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-700">
                  {Object.keys(uploadedData[0] || {}).map((key) => (
                    <th key={key} className="text-left py-2 px-3 text-gray-400 font-semibold">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {uploadedData.slice(0, 3).map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    {Object.values(row).map((value: any, cellIndex) => (
                      <td key={cellIndex} className="py-2 px-3 text-gray-300">
                        {String(value).substring(0, 30)}
                        {String(value).length > 30 ? '...' : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {uploadedData.length > 3 && (
              <div className="text-center py-2 text-gray-500 text-xs">
                ... et {uploadedData.length - 3} autres lignes
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}