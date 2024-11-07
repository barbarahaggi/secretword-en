import React from 'react'
import { useState, useRef } from 'react'
import './Game.css'

const Game = ({
     verifyLetter,
     pickedWord,
     pickedCategory,
     letters,
     guessedLetters,
     wrongLetters,
     guesses,
     score,
}) => {

  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("")

    letterInputRef.current.focus();
  }

  const letterInputRef = useRef(null)

  return (
    

   <div className="game">
    <p className="points">
      <span>Score: {score}</span>
    </p>
    <h1>Guess the word:</h1>
    <h3 className="tip">Tip about the word: 
      <span> {pickedCategory}</span>
    </h3>
    <p>You still have {guesses} guesses.</p>


    <div className="wordContainer">
      {letters.map((letter, i) => 
      guessedLetters.includes(letter) ? (
      <span className="letter" key={i}>
        {letter}
        </span>) 
      
      : (<span key={i} className="blankSquare"></span>) 
      
    
    )}
    </div>

    <div className="letterContainer">
      <p>Try to guess a letter of the word:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="letter" 
        maxLength="1" 
        required 
        onChange={(e) => setLetter(e.target.value)}
        value={letter}
        ref={letterInputRef}
        />
        <button>Jogar</button>
      </form>
    </div>
    <div className="wrongLettersContainer">
      <p>letters already used:</p>
      {wrongLetters.map((letters, i) => (
        <span key={i}>{letters}, </span>
      ))}
    </div>
   </div>
  )
}

export default Game