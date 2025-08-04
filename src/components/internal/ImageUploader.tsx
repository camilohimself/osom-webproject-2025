'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ImageUploaderProps {
  title: string
  description: string
  maxFiles: number
  onFilesUploaded: (files: File[]) => void
}

export default function ImageUploader({ title, description, maxFiles, onFilesUploaded }: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const createPreview = useCallback((file: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target?.result as string)
      reader.readAsDataURL(file)
    })
  }, [])

  const handleFiles = useCallback(async (newFiles: File[]) => {
    const imageFiles = newFiles.filter(file => file.type.startsWith('image/'))
    const totalFiles = uploadedFiles.length + imageFiles.length
    
    if (totalFiles > maxFiles) {
      alert(`Maximum ${maxFiles} fichiers autorisés`)
      return
    }

    const updatedFiles = [...uploadedFiles, ...imageFiles]
    setUploadedFiles(updatedFiles)
    onFilesUploaded(updatedFiles)

    // Créer les previews
    const newPreviews = await Promise.all(
      imageFiles.map(file => createPreview(file))
    )
    setPreviews(prev => [...prev, ...newPreviews])
  }, [uploadedFiles, maxFiles, onFilesUploaded, createPreview])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [handleFiles])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      handleFiles(Array.from(files))
    }
  }, [handleFiles])

  const removeFile = useCallback((index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index)
    const updatedPreviews = previews.filter((_, i) => i !== index)
    
    setUploadedFiles(updatedFiles)
    setPreviews(updatedPreviews)
    onFilesUploaded(updatedFiles)
  }, [uploadedFiles, previews, onFilesUploaded])

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{description}</p>
        <p className="text-xs text-gray-500">
          Maximum {maxFiles} fichiers • Formats: PNG, JPG, GIF, WebP
        </p>
      </div>

      {/* Zone de drop */}
      <motion.div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all ${
          isDragOver 
            ? 'border-yellow-400 bg-yellow-400/10' 
            : uploadedFiles.length > 0
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
          accept="image/*"
          multiple
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="text-gray-400">
          <div className="text-2xl mb-2">🖼️</div>
          <div className="font-semibold">
            {uploadedFiles.length > 0 
              ? `${uploadedFiles.length}/${maxFiles} fichiers chargés`
              : 'Glissez vos images ici'
            }
          </div>
          <div className="text-sm mt-1">ou cliquez pour sélectionner</div>
        </div>
      </motion.div>

      {/* Grid des previews */}
      <AnimatePresence>
        {previews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {previews.map((preview, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group aspect-square bg-gray-800 rounded-lg overflow-hidden"
              >
                <Image
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                
                {/* Overlay avec infos */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                  <div className="text-white text-xs truncate">
                    {uploadedFiles[index]?.name}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-white text-xs">
                      {Math.round(uploadedFiles[index]?.size / 1024)}KB
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Résumé des fichiers */}
      {uploadedFiles.length > 0 && (
        <div className="bg-black/30 rounded-lg p-3 border border-gray-700">
          <div className="text-sm text-gray-300 mb-2">
            Fichiers sélectionnés ({uploadedFiles.length})
          </div>
          <div className="space-y-1">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-gray-400 truncate">{file.name}</span>
                <span className="text-gray-500 ml-2">
                  {Math.round(file.size / 1024)}KB
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}