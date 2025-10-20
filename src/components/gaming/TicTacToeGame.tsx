'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Player = 'X' | 'O' | null
type Board = Player[]

interface GameState {
  board: Board
  currentPlayer: Player
  winner: Player | 'draw' | null
  gameStarted: boolean
  gameMessage: string
  isAIThinking: boolean
}

const winMessages = {
  X: "Impossible ! Vous avez gagné !",
  O: "Logique. L'IA OSOM domine.",
  draw: "Match nul. Pas mal pour un humain."
}

export default function TicTacToeGame() {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    gameStarted: false,
    gameMessage: "Touchez pour défier l'IA OSOM",
    isAIThinking: false
  })

  const [sessionStats, setSessionStats] = useState({
    wins: 0,
    losses: 0,
    draws: 0
  })

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ]

  const aiMessages = [
    "Calcul en cours...",
    "Analyse des patterns...",
    "Algorithme supérieur activé",
    "Prédiction de votre échec...",
    "IA OSOM réfléchit...",
    "Votre défaite approche..."
  ]

  const checkWinner = (board: Board): Player | 'draw' | null => {
    // Check winning combinations
    for (const combo of winningCombinations) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }

    // Check for draw
    if (board.every(cell => cell !== null)) {
      return 'draw'
    }

    return null
  }

  const minimax = (board: Board, depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(board)

    if (winner === 'O') return 10 - depth
    if (winner === 'X') return depth - 10
    if (winner === 'draw') return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'O'
          const score = minimax(board, depth + 1, false)
          board[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'X'
          const score = minimax(board, depth + 1, true)
          board[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  const getBestMove = (board: Board): number => {
    let bestScore = -Infinity
    let bestMove = -1

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = 'O'
        const score = minimax(board, 0, false)
        board[i] = null

        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }

    return bestMove
  }

  const makeMove = (index: number) => {
    if (!gameState.gameStarted || gameState.board[index] || gameState.winner || gameState.isAIThinking) {
      return
    }

    // Player move
    const newBoard = [...gameState.board]
    newBoard[index] = 'X'

    const winner = checkWinner(newBoard)
    if (winner) {
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        winner,
        gameMessage: winMessages[winner] || ""
      }))
      return
    }

    // AI turn
    setGameState(prev => ({
      ...prev,
      board: newBoard,
      currentPlayer: 'O',
      isAIThinking: true,
      gameMessage: aiMessages[Math.floor(Math.random() * aiMessages.length)]
    }))

    // AI move with delay for dramatic effect
    setTimeout(() => {
      const aiMove = getBestMove(newBoard)
      if (aiMove !== -1) {
        newBoard[aiMove] = 'O'
      }

      const finalWinner = checkWinner(newBoard)
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        currentPlayer: 'X',
        winner: finalWinner,
        isAIThinking: false,
        gameMessage: finalWinner ? winMessages[finalWinner] || "" : "À votre tour..."
      }))
    }, 1500)
  }

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      gameMessage: "Vous commencez. Bonne chance..."
    }))
  }

  const resetGame = () => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      gameStarted: false,
      gameMessage: "Touchez pour défier l'IA OSOM",
      isAIThinking: false
    })
  }

  // Auto-reset après victoire/défaite/nul avec compte à rebours
  useEffect(() => {
    if (gameState.winner && gameState.gameStarted) {
      // Mettre à jour les stats de session
      if (gameState.winner === 'X') {
        setSessionStats(prev => ({ ...prev, wins: prev.wins + 1 }))
      } else if (gameState.winner === 'O') {
        setSessionStats(prev => ({ ...prev, losses: prev.losses + 1 }))
      } else if (gameState.winner === 'draw') {
        setSessionStats(prev => ({ ...prev, draws: prev.draws + 1 }))
      }

      let countdown = 5
      const interval = setInterval(() => {
        countdown--
        if (countdown > 0) {
          const winMsg = winMessages[gameState.winner as 'X' | 'O' | 'draw'] || ""
          setGameState(prev => ({
            ...prev,
            gameMessage: `${winMsg} • Nouvelle partie dans ${countdown}s...`
          }))
        } else {
          clearInterval(interval)
          resetGame()
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameState.winner, gameState.gameStarted])

  const getCellColor = (cell: Player) => {
    if (cell === 'X') return 'text-blue-400'
    if (cell === 'O') return 'text-red-400'
    return 'text-gray-500'
  }

  return (
    <div className="bg-black p-6 rounded-2xl border border-purple-500/30 max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-purple-400 font-mono text-lg mb-2">
          MORPION vs IA OSOM
        </div>
        <div className="text-purple-400/80 font-mono text-sm min-h-[20px]">
          {gameState.gameMessage}
        </div>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {gameState.board.map((cell, index) => (
          <motion.button
            key={index}
            onClick={() => makeMove(index)}
            disabled={!gameState.gameStarted || gameState.isAIThinking || !!cell || !!gameState.winner}
            className={`
              h-24 w-24 border-2 border-purple-500/50 bg-gray-900/50
              flex items-center justify-center font-mono text-3xl font-bold
              transition-all duration-200 rounded-lg
              ${!cell && gameState.gameStarted && !gameState.winner && !gameState.isAIThinking
                ? 'hover:bg-purple-500/20 hover:border-purple-400'
                : 'cursor-not-allowed'
              }
            `}
            whileTap={!cell ? { scale: 0.95 } : {}}
            animate={gameState.isAIThinking && !cell ? {
              borderColor: ['#a855f7', '#d946ef', '#a855f7'],
              transition: { duration: 0.5, repeat: Infinity }
            } : {}}
          >
            <span className={getCellColor(cell)}>
              {cell}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Start/Reset Button */}
      <div className="text-center">
        {!gameState.gameStarted ? (
          <button
            onClick={startGame}
            className="bg-purple-500 text-white px-6 py-3 font-mono font-bold rounded-lg hover:bg-purple-400 transition-colors"
          >
            DÉMARRER LE DÉFI
          </button>
        ) : (
          <button
            onClick={resetGame}
            className="bg-purple-500 text-white px-6 py-3 font-mono font-bold rounded-lg hover:bg-purple-400 transition-colors min-h-[44px] min-w-[120px] text-base"
          >
            NOUVELLE PARTIE
          </button>
        )}
      </div>

      {/* Loading indicator when AI is thinking */}
      {gameState.isAIThinking && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Session Stats */}
      {(sessionStats.wins > 0 || sessionStats.losses > 0 || sessionStats.draws > 0) && (
        <div className="mt-6 pt-4 border-t border-purple-500/30">
          <div className="text-center text-purple-400/80 font-mono text-xs mb-2">
            STATISTIQUES SESSION
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-blue-400 font-mono text-xl font-bold">{sessionStats.wins}</div>
              <div className="text-gray-400 font-mono text-xs">Victoires</div>
            </div>
            <div className="text-center">
              <div className="text-red-400 font-mono text-xl font-bold">{sessionStats.losses}</div>
              <div className="text-gray-400 font-mono text-xs">Défaites</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-mono text-xl font-bold">{sessionStats.draws}</div>
              <div className="text-gray-400 font-mono text-xs">Nuls</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}