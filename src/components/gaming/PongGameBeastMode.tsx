'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface GameState {
  ballX: number
  ballY: number
  ballVelX: number
  ballVelY: number
  playerY: number
  aiY: number
  playerScore: number
  aiScore: number
  gameStarted: boolean
  gameMessage: string
  ballSpeed: number
  maxSpeed: number
  playerName: string
  showNameInput: boolean
  currentSession: number
  paddleHeight: number // NOUVEAU - paddle dynamique
  ballSize: number // NOUVEAU - taille balle dynamique
  aiSpeed: number // NOUVEAU - vitesse IA dynamique
  chaosMode: boolean // NOUVEAU - mode chaos
}

export default function PongGameBeastMode() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const [gameState, setGameState] = useState<GameState>({
    ballX: 400,
    ballY: 200,
    ballVelX: 5,
    ballVelY: 3,
    playerY: 150,
    aiY: 150,
    playerScore: 0,
    aiScore: 0,
    gameStarted: false,
    gameMessage: "Cliquez pour défier l'IA OSOM - Mode BEAST activé",
    ballSpeed: 5,
    maxSpeed: 35, // Augmenté pour mode BEAST
    playerName: "",
    showNameInput: false,
    currentSession: Date.now(),
    paddleHeight: 80, // Taille initiale
    ballSize: 10, // Taille initiale
    aiSpeed: 4, // Vitesse IA initiale
    chaosMode: false
  })

  const CANVAS_WIDTH = 800
  const CANVAS_HEIGHT = 400
  const PADDLE_WIDTH = 10

  // PALIERS DE DIFFICULTÉ
  const getDifficultyLevel = (score: number) => {
    if (score >= 50) return 3 // CHAOS
    if (score >= 20) return 2 // RÉTRÉCISSEMENT
    return 1 // VITESSE SEULE
  }

  const getDifficultyLabel = (level: number) => {
    switch(level) {
      case 1: return "PHASE 1: VITESSE"
      case 2: return "PHASE 2: RÉTRÉCISSEMENT"
      case 3: return "PHASE 3: CHAOS MODE"
      default: return "PHASE 1"
    }
  }

  const resetBall = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      ballX: CANVAS_WIDTH / 2,
      ballY: CANVAS_HEIGHT / 2,
      ballVelX: Math.random() > 0.5 ? prev.ballSpeed : -prev.ballSpeed,
      ballVelY: (Math.random() - 0.5) * (prev.chaosMode ? 10 : 6), // Plus aléatoire en chaos mode
    }))
  }, [])

  const updateGame = useCallback(() => {
    setGameState(prev => {
      if (!prev.gameStarted) return prev

      let newState = { ...prev }
      const difficultyLevel = getDifficultyLevel(newState.playerScore)

      // PALIER 1: VITESSE (0-20 contacts)
      // Speed augmente normalement

      // PALIER 2: RÉTRÉCISSEMENT PADDLE (20-50 contacts)
      if (difficultyLevel >= 2) {
        // Paddle réduit progressivement de 80px → 40px
        const shrinkProgress = Math.min((newState.playerScore - 20) / 30, 1) // 0 à 1
        newState.paddleHeight = 80 - (40 * shrinkProgress) // 80 → 40
        newState.aiSpeed = 4 + (2 * shrinkProgress) // 4 → 6
      }

      // PALIER 3: CHAOS MODE (50+ contacts)
      if (difficultyLevel >= 3) {
        newState.chaosMode = true
        const chaosProgress = Math.min((newState.playerScore - 50) / 50, 1)
        newState.paddleHeight = 40 - (20 * chaosProgress) // 40 → 20
        newState.ballSize = 10 - (3 * chaosProgress) // 10 → 7
        newState.aiSpeed = 6 + (2 * chaosProgress) // 6 → 8
      }

      // Ball movement
      newState.ballX += newState.ballVelX
      newState.ballY += newState.ballVelY

      // CHAOS MODE: Random trajectory changes
      if (newState.chaosMode && Math.random() < 0.02) { // 2% chance par frame
        newState.ballVelY += (Math.random() - 0.5) * 3
      }

      // Ball collision with top/bottom walls
      if (newState.ballY <= 0 || newState.ballY >= CANVAS_HEIGHT - newState.ballSize) {
        newState.ballVelY = -newState.ballVelY
      }

      // AI movement (vitesse dynamique)
      const aiCenter = newState.aiY + newState.paddleHeight / 2
      const ballCenter = newState.ballY + newState.ballSize / 2

      if (ballCenter < aiCenter - 10) {
        newState.aiY = Math.max(0, newState.aiY - newState.aiSpeed)
      } else if (ballCenter > aiCenter + 10) {
        newState.aiY = Math.min(CANVAS_HEIGHT - newState.paddleHeight, newState.aiY + newState.aiSpeed)
      }

      // Ball collision with paddles
      // Player paddle (left)
      if (newState.ballX <= PADDLE_WIDTH &&
          newState.ballY + newState.ballSize >= newState.playerY &&
          newState.ballY <= newState.playerY + newState.paddleHeight) {

        newState.playerScore++

        // Speed increase (plus rapide en chaos mode)
        const speedIncrease = newState.chaosMode ? 1.08 : 1.05
        newState.ballSpeed = Math.min(newState.ballSpeed * speedIncrease, newState.maxSpeed)

        newState.ballVelX = newState.ballSpeed
        const hitPos = (newState.ballY + newState.ballSize/2 - newState.playerY - newState.paddleHeight/2) / (newState.paddleHeight/2)
        newState.ballVelY = hitPos * (newState.chaosMode ? 7 : 5)

        const level = getDifficultyLevel(newState.playerScore)
        newState.gameMessage = `${getDifficultyLabel(level)} | Contacts: ${newState.playerScore} | Vitesse: ${Math.round(newState.ballSpeed * 10) / 10}x`
      }

      // AI paddle (right)
      if (newState.ballX + newState.ballSize >= CANVAS_WIDTH - PADDLE_WIDTH &&
          newState.ballY + newState.ballSize >= newState.aiY &&
          newState.ballY <= newState.aiY + newState.paddleHeight) {

        const speedIncrease = newState.chaosMode ? 1.08 : 1.05
        newState.ballSpeed = Math.min(newState.ballSpeed * speedIncrease, newState.maxSpeed)

        newState.ballVelX = -newState.ballSpeed
        const hitPos = (newState.ballY + newState.ballSize/2 - newState.aiY - newState.paddleHeight/2) / (newState.paddleHeight/2)
        newState.ballVelY = hitPos * (newState.chaosMode ? 7 : 5)
      }

      // GAME OVER si player rate
      if (newState.ballX < 0) {
        newState.gameStarted = false
        const level = getDifficultyLevel(newState.playerScore)
        newState.gameMessage = `💀 GAME OVER - ${getDifficultyLabel(level)} | ${newState.playerScore} contacts!`
        newState.showNameInput = newState.playerScore > 0
      } else if (newState.ballX > CANVAS_WIDTH) {
        // Ball passed AI - reset
        setTimeout(() => {
          resetBall()
        }, 1000)
      }

      return newState
    })
  }, [resetBall])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseY = e.clientY - rect.top
    const paddleY = mouseY - gameState.paddleHeight / 2

    setGameState(prev => ({
      ...prev,
      playerY: Math.max(0, Math.min(CANVAS_HEIGHT - prev.paddleHeight, paddleY))
    }))
  }, [gameState.paddleHeight])

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      gameMessage: "PHASE 1: VITESSE | Survie à 20 contacts = Phase 2!",
      ballSpeed: 5,
      playerScore: 0,
      aiScore: 0,
      showNameInput: false,
      currentSession: Date.now(),
      paddleHeight: 80,
      ballSize: 10,
      aiSpeed: 4,
      chaosMode: false
    }))
  }

  const resetGame = () => {
    setGameState({
      ballX: CANVAS_WIDTH / 2,
      ballY: CANVAS_HEIGHT / 2,
      ballVelX: 5,
      ballVelY: 3,
      playerY: 150,
      aiY: 150,
      playerScore: 0,
      aiScore: 0,
      gameStarted: false,
      gameMessage: "🎮 BEAST MODE PONG - 3 phases de difficulté progressive",
      ballSpeed: 5,
      maxSpeed: 35,
      playerName: "",
      showNameInput: false,
      currentSession: Date.now(),
      paddleHeight: 80,
      ballSize: 10,
      aiSpeed: 4,
      chaosMode: false
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.addEventListener('mousemove', handleMouseMove)
    return () => canvas.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    if (gameState.gameStarted) {
      const gameLoop = () => {
        updateGame()
        animationRef.current = requestAnimationFrame(gameLoop)
      }
      animationRef.current = requestAnimationFrame(gameLoop)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gameState.gameStarted, updateGame])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx || !canvas) return

    // Clear canvas
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // CHAOS MODE visual effect
    if (gameState.chaosMode) {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.05)'
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    }

    // Draw center line
    ctx.setLineDash([5, 5])
    ctx.strokeStyle = gameState.chaosMode ? '#ff0000' : '#00ff00'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(CANVAS_WIDTH / 2, 0)
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT)
    ctx.stroke()
    ctx.setLineDash([])

    // Draw paddles
    ctx.fillStyle = gameState.chaosMode ? '#ff0000' : '#00ff00'
    // Player paddle (taille dynamique)
    ctx.fillRect(0, gameState.playerY, PADDLE_WIDTH, gameState.paddleHeight)
    // AI paddle
    ctx.fillRect(CANVAS_WIDTH - PADDLE_WIDTH, gameState.aiY, PADDLE_WIDTH, gameState.paddleHeight)

    // Draw ball (taille dynamique)
    ctx.fillStyle = '#FACC15' // Yellow OSOM
    ctx.fillRect(gameState.ballX, gameState.ballY, gameState.ballSize, gameState.ballSize)

    // Draw scores
    ctx.font = '32px monospace'
    ctx.fillStyle = gameState.chaosMode ? '#ff0000' : '#00ff00'
    ctx.textAlign = 'center'
    ctx.fillText(gameState.playerScore.toString(), CANVAS_WIDTH / 4, 50)

    ctx.font = '16px monospace'
    ctx.fillText('CONTACTS', CANVAS_WIDTH / 4, 80)

    // Right side - Difficulty level
    const level = getDifficultyLevel(gameState.playerScore)
    ctx.font = '20px monospace'
    ctx.fillText(`PHASE ${level}`, (3 * CANVAS_WIDTH) / 4, 50)
    ctx.font = '14px monospace'
    ctx.fillText(`${Math.round(gameState.ballSpeed * 10) / 10}x`, (3 * CANVAS_WIDTH) / 4, 75)

  }, [gameState])

  return (
    <div className="bg-black p-8 rounded-2xl border border-green-500/30 mx-auto max-w-4xl">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-green-400 font-mono text-lg mb-2">
          &gt; BEAST MODE PONG v2.0 &lt;
        </div>
        <div className="text-green-400/80 font-mono text-sm">
          {gameState.gameMessage}
        </div>
        <div className="text-yellow-400 font-mono text-xs mt-2">
          Phase 1 (0-20): Vitesse | Phase 2 (20-50): Rétrécissement | Phase 3 (50+): CHAOS
        </div>
      </div>

      {/* Canvas Game */}
      <div className="relative flex justify-center">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className={`border ${gameState.chaosMode ? 'border-red-500/50' : 'border-green-500/50'} bg-black cursor-none`}
          onClick={!gameState.gameStarted ? startGame : undefined}
        />

        {!gameState.gameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={startGame}
              className="bg-green-500 text-black px-8 py-4 font-mono font-bold text-xl hover:bg-green-400 transition-colors"
            >
              &gt; BEAST MODE &lt;
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="text-center mt-4 space-y-2">
        <div className="text-green-400/80 font-mono text-sm">
          BEAST MODE: 3 phases progressives | Ratez = GAME OVER | Souris = paddle
        </div>
        <button
          onClick={resetGame}
          className="text-green-400 font-mono text-sm hover:text-green-300 underline"
        >
          &gt; NOUVEAU DÉFI &lt;
        </button>
      </div>
    </div>
  )
}
