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
}

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
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
    gameMessage: "Cliquez pour défier l'IA OSOM"
  })

  const CANVAS_WIDTH = 800
  const CANVAS_HEIGHT = 400
  const PADDLE_HEIGHT = 80
  const PADDLE_WIDTH = 10
  const BALL_SIZE = 10

  const messages = [
    "L'IA vous domine...",
    "Encore raté !",
    "OSOM wins!",
    "Résistance futile",
    "Algorithme supérieur",
    "Erreur humaine détectée"
  ]

  const resetBall = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      ballX: CANVAS_WIDTH / 2,
      ballY: CANVAS_HEIGHT / 2,
      ballVelX: Math.random() > 0.5 ? 5 : -5,
      ballVelY: (Math.random() - 0.5) * 6
    }))
  }, [])

  const updateGame = useCallback(() => {
    setGameState(prev => {
      if (!prev.gameStarted) return prev

      let newState = { ...prev }

      // Ball movement
      newState.ballX += newState.ballVelX
      newState.ballY += newState.ballVelY

      // Ball collision with top/bottom walls
      if (newState.ballY <= 0 || newState.ballY >= CANVAS_HEIGHT - BALL_SIZE) {
        newState.ballVelY = -newState.ballVelY
      }

      // AI movement (simple but effective)
      const aiCenter = newState.aiY + PADDLE_HEIGHT / 2
      const ballCenter = newState.ballY + BALL_SIZE / 2
      const aiSpeed = 4

      if (ballCenter < aiCenter - 10) {
        newState.aiY = Math.max(0, newState.aiY - aiSpeed)
      } else if (ballCenter > aiCenter + 10) {
        newState.aiY = Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, newState.aiY + aiSpeed)
      }

      // Ball collision with paddles
      // Player paddle (left)
      if (newState.ballX <= PADDLE_WIDTH &&
          newState.ballY + BALL_SIZE >= newState.playerY &&
          newState.ballY <= newState.playerY + PADDLE_HEIGHT) {
        newState.ballVelX = Math.abs(newState.ballVelX)
        const hitPos = (newState.ballY + BALL_SIZE/2 - newState.playerY - PADDLE_HEIGHT/2) / (PADDLE_HEIGHT/2)
        newState.ballVelY = hitPos * 5
      }

      // AI paddle (right)
      if (newState.ballX + BALL_SIZE >= CANVAS_WIDTH - PADDLE_WIDTH &&
          newState.ballY + BALL_SIZE >= newState.aiY &&
          newState.ballY <= newState.aiY + PADDLE_HEIGHT) {
        newState.ballVelX = -Math.abs(newState.ballVelX)
        const hitPos = (newState.ballY + BALL_SIZE/2 - newState.aiY - PADDLE_HEIGHT/2) / (PADDLE_HEIGHT/2)
        newState.ballVelY = hitPos * 5
      }

      // Scoring
      if (newState.ballX < 0) {
        newState.aiScore++
        newState.gameMessage = messages[Math.floor(Math.random() * messages.length)]
        setTimeout(() => {
          resetBall()
        }, 1000)
      } else if (newState.ballX > CANVAS_WIDTH) {
        newState.playerScore++
        newState.gameMessage = "Coup de chance !"
        setTimeout(() => {
          resetBall()
        }, 1000)
      }

      return newState
    })
  }, [resetBall, messages])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseY = e.clientY - rect.top
    const paddleY = mouseY - PADDLE_HEIGHT / 2

    setGameState(prev => ({
      ...prev,
      playerY: Math.max(0, Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, paddleY))
    }))
  }, [])

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      gameMessage: "Bonne chance... vous en aurez besoin"
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
      gameMessage: "Cliquez pour défier l'IA OSOM"
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

    // Draw center line
    ctx.setLineDash([5, 5])
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(CANVAS_WIDTH / 2, 0)
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT)
    ctx.stroke()
    ctx.setLineDash([])

    // Draw paddles
    ctx.fillStyle = '#00ff00'
    // Player paddle
    ctx.fillRect(0, gameState.playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
    // AI paddle
    ctx.fillRect(CANVAS_WIDTH - PADDLE_WIDTH, gameState.aiY, PADDLE_WIDTH, PADDLE_HEIGHT)

    // Draw ball (JAUNE OSOM!)
    ctx.fillStyle = '#FACC15' // Yellow-400 OSOM
    ctx.fillRect(gameState.ballX, gameState.ballY, BALL_SIZE, BALL_SIZE)

    // Draw scores
    ctx.font = '32px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(gameState.playerScore.toString(), CANVAS_WIDTH / 4, 50)
    ctx.fillText(gameState.aiScore.toString(), (3 * CANVAS_WIDTH) / 4, 50)

    // Draw labels
    ctx.font = '16px monospace'
    ctx.fillText('HUMAIN', CANVAS_WIDTH / 4, 80)
    ctx.fillText('IA OSOM', (3 * CANVAS_WIDTH) / 4, 80)

  }, [gameState])

  return (
    <div className="bg-black p-8 rounded-2xl border border-green-500/30">
      {/* Header rétro */}
      <div className="text-center mb-6">
        <div className="text-green-400 font-mono text-lg mb-2">
          &gt; SYSTÈME DE COMBAT OSOM v1.972 &lt;
        </div>
        <div className="text-green-400/80 font-mono text-sm">
          {gameState.gameMessage}
        </div>
      </div>

      {/* Canvas Game */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="border border-green-500/50 bg-black cursor-none"
          onClick={!gameState.gameStarted ? startGame : undefined}
        />

        {!gameState.gameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={startGame}
              className="bg-green-500 text-black px-8 py-4 font-mono font-bold text-xl hover:bg-green-400 transition-colors"
            >
              &gt; INITIALISER COMBAT &lt;
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="text-center mt-4 space-y-2">
        <div className="text-green-400/80 font-mono text-sm">
          Déplacez votre souris pour contrôler votre paddle
        </div>
        <button
          onClick={resetGame}
          className="text-green-400 font-mono text-sm hover:text-green-300 underline"
        >
          &gt; RÉINITIALISER &lt;
        </button>
      </div>
    </div>
  )
}