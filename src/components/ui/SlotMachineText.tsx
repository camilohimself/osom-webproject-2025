'use client'

import { useState, useEffect } from 'react'

interface SlotMachineTextProps {
  words: string[]
  finalWord: string
  className?: string
  duration?: number
}

export default function SlotMachineText({
  words,
  finalWord,
  className = '',
  duration = 2000
}: SlotMachineTextProps) {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    let currentIndex = 0

    // Phase 1: Spinning rapide
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length
      setCurrentWord(words[currentIndex])
    }, 100) // Change tous les 100ms

    // Phase 2: Ralentissement et arrêt sur finalWord
    setTimeout(() => {
      clearInterval(intervalId)

      // Effet de ralentissement
      let slowDownIndex = 0
      const slowDown = setInterval(() => {
        slowDownIndex = (slowDownIndex + 1) % words.length
        setCurrentWord(words[slowDownIndex])
      }, 200)

      setTimeout(() => {
        clearInterval(slowDown)
        setCurrentWord(finalWord)
        setIsSpinning(false)
      }, 600)

    }, duration)

    return () => {
      clearInterval(intervalId)
    }
  }, [words, finalWord, duration])

  return (
    <span className={`inline-block transition-all duration-200 ${isSpinning ? 'blur-[1px]' : 'blur-0'} ${className}`}>
      {currentWord}
    </span>
  )
}
