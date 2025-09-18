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
}

interface ScoreRecord {
  name: string
  score: number
  year: number
  date: string
}

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>()
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
    gameMessage: "Cliquez pour défier l'IA OSOM",
    ballSpeed: 5,
    maxSpeed: 15,
    playerName: "",
    showNameInput: false,
    currentSession: Date.now()
  })

  const [records, setRecords] = useState<ScoreRecord[]>([])
  const [showRecords, setShowRecords] = useState(false)

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

  // Load records from localStorage
  useEffect(() => {
    const savedRecords = localStorage.getItem('osom-pong-records')
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords))
    }
  }, [])

  const saveRecord = (score: number, name: string) => {
    const newRecord: ScoreRecord = {
      name: name.trim() || 'Anonyme',
      score,
      year: new Date().getFullYear(),
      date: new Date().toLocaleDateString('fr-CH')
    }

    const updatedRecords = [...records, newRecord]
      .sort((a, b) => b.score - a.score)
      .slice(0, 50) // Keep top 50 records

    setRecords(updatedRecords)
    localStorage.setItem('osom-pong-records', JSON.stringify(updatedRecords))
  }

  const resetBall = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      ballX: CANVAS_WIDTH / 2,
      ballY: CANVAS_HEIGHT / 2,
      ballVelX: Math.random() > 0.5 ? prev.ballSpeed : -prev.ballSpeed,
      ballVelY: (Math.random() - 0.5) * 6,
      ballSpeed: 5 // Reset speed on new ball
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

        // Increase speed by 5% on contact (max cap at maxSpeed)
        newState.ballSpeed = Math.min(newState.ballSpeed * 1.05, newState.maxSpeed)

        newState.ballVelX = newState.ballSpeed
        const hitPos = (newState.ballY + BALL_SIZE/2 - newState.playerY - PADDLE_HEIGHT/2) / (PADDLE_HEIGHT/2)
        newState.ballVelY = hitPos * 5

        // Update message with speed info
        newState.gameMessage = `Vitesse: ${Math.round(newState.ballSpeed * 10) / 10}x`
      }

      // AI paddle (right)
      if (newState.ballX + BALL_SIZE >= CANVAS_WIDTH - PADDLE_WIDTH &&
          newState.ballY + BALL_SIZE >= newState.aiY &&
          newState.ballY <= newState.aiY + PADDLE_HEIGHT) {

        // Increase speed by 5% on contact (max cap at maxSpeed)
        newState.ballSpeed = Math.min(newState.ballSpeed * 1.05, newState.maxSpeed)

        newState.ballVelX = -newState.ballSpeed
        const hitPos = (newState.ballY + BALL_SIZE/2 - newState.aiY - PADDLE_HEIGHT/2) / (PADDLE_HEIGHT/2)
        newState.ballVelY = hitPos * 5

        // Update message with speed info
        newState.gameMessage = `Vitesse: ${Math.round(newState.ballSpeed * 10) / 10}x`
      }

      // DEATHMATCH SCORING - Game ends immediately on miss
      if (newState.ballX < 0) {
        // Player loses - GAME OVER
        newState.gameStarted = false
        newState.gameMessage = "💀 DEATHMATCH TERMINÉ! L'IA OSOM a gagné!"
        newState.showNameInput = newState.playerScore > 0 // Only save if player scored
      } else if (newState.ballX > CANVAS_WIDTH) {
        // Player scores +1 point, game continues
        newState.playerScore++
        newState.gameMessage = `Score: ${newState.playerScore} | Vitesse: ${Math.round(newState.ballSpeed * 10) / 10}x`
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
      gameMessage: "DEATHMATCH MODE: Ratez une balle = GAME OVER!",
      ballSpeed: 5,
      playerScore: 0,
      aiScore: 0,
      showNameInput: false,
      currentSession: Date.now()
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
      gameMessage: "🎮 DEATHMATCH PONG OSOM - Cliquez pour défier l'IA",
      ballSpeed: 5,
      maxSpeed: 15,
      playerName: "",
      showNameInput: false,
      currentSession: Date.now()
    })
  }

  const submitScore = () => {
    if (gameState.playerScore > 0) {
      saveRecord(gameState.playerScore, gameState.playerName)
      setGameState(prev => ({
        ...prev,
        showNameInput: false,
        gameMessage: `Score ${gameState.playerScore} sauvegardé! Nouveau défi?`
      }))
    }
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

        {!gameState.gameStarted && !gameState.showNameInput && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={startGame}
              className="bg-green-500 text-black px-8 py-4 font-mono font-bold text-xl hover:bg-green-400 transition-colors"
            >
              &gt; DEATHMATCH MODE &lt;
            </button>
          </div>
        )}

        {/* Name Input for Score Saving */}
        {gameState.showNameInput && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80">
            <div className="bg-black border-2 border-green-500 p-6 rounded-lg">
              <div className="text-green-400 font-mono text-lg mb-4 text-center">
                🏆 SCORE: {gameState.playerScore} POINTS!
              </div>
              <div className="text-green-400 font-mono text-sm mb-4 text-center">
                Entrez votre nom pour concourir au projet OSOM gratuit:
              </div>
              <input
                type="text"
                value={gameState.playerName}
                onChange={(e) => setGameState(prev => ({...prev, playerName: e.target.value}))}
                placeholder="Votre nom/tag"
                className="w-full bg-black border border-green-500 text-green-400 font-mono p-2 mb-4 text-center"
                maxLength={20}
                onKeyPress={(e) => e.key === 'Enter' && submitScore()}
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={submitScore}
                  className="bg-green-500 text-black px-4 py-2 font-mono font-bold hover:bg-green-400 transition-colors"
                >
                  SAUVEGARDER
                </button>
                <button
                  onClick={() => setGameState(prev => ({...prev, showNameInput: false}))}
                  className="border border-green-500 text-green-400 px-4 py-2 font-mono hover:bg-green-500 hover:text-black transition-colors"
                >
                  IGNORER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="text-center mt-4 space-y-2">
        <div className="text-green-400/80 font-mono text-sm">
          DEATHMATCH: Ratez une balle = GAME OVER | Souris = contrôle paddle
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={resetGame}
            className="text-green-400 font-mono text-sm hover:text-green-300 underline"
          >
            &gt; NOUVEAU DÉFI &lt;
          </button>
          <button
            onClick={() => setShowRecords(!showRecords)}
            className="text-yellow-400 font-mono text-sm hover:text-yellow-300 underline"
          >
            &gt; RECORDS {new Date().getFullYear()} &lt;
          </button>
        </div>
      </div>

      {/* Records Table */}
      {showRecords && (
        <div className="mt-6 bg-black/90 border border-yellow-500/50 rounded-lg p-4">
          <div className="text-yellow-400 font-mono text-lg mb-4 text-center">
            🏆 HALL OF FAME {new Date().getFullYear()} 🏆
          </div>
          <div className="text-yellow-400/80 font-mono text-sm mb-4 text-center">
            Le meilleur score de l'année gagne un projet OSOM gratuit!
          </div>
          {records.length > 0 ? (
            <div className="max-h-40 overflow-y-auto">
              <table className="w-full font-mono text-sm">
                <thead>
                  <tr className="text-yellow-400 border-b border-yellow-500/30">
                    <th className="text-left">#</th>
                    <th className="text-left">NOM</th>
                    <th className="text-right">SCORE</th>
                    <th className="text-right">DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {records
                    .filter(r => r.year === new Date().getFullYear())
                    .slice(0, 10)
                    .map((record, index) => (
                    <tr key={index} className="text-green-400 border-b border-green-500/20">
                      <td>{index + 1}</td>
                      <td className="truncate max-w-[100px]">{record.name}</td>
                      <td className="text-right">{record.score}</td>
                      <td className="text-right text-xs">{record.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-green-400/60 font-mono text-sm text-center">
              Aucun record pour {new Date().getFullYear()}. Soyez le premier!
            </div>
          )}
        </div>
      )}
    </div>
  )
}