import {useState, useEffect} from 'react'
import '../styles/GuessArea.css';

const GuessArea = (props) => {
  const [isCorrect, setIsCorrect] = useState("");
  const [guess, setGuess] = useState("");
  const { answer, streak } = props;
  const checkGuess = (e) => {
    e.preventDefault();
    if(!answer) return;
    if (guess.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect("correct");
      streak((prev) => prev + 1);
    } else {
      setIsCorrect("incorrect");
      streak(0);
    }
  }
  return (
    <div>
      <form onSubmit={checkGuess} className="guess-area">
      <h2 className="header">Guess your answer here: </h2>
      <input type="text" className="guess-input" id={`${isCorrect}`} value={guess} placeholder="Enter your guess..." onChange={(e) => setGuess(e.target.value)}/>
      <button>Submit Guess</button>
      </form>
    </div>
  );
}

export default GuessArea;
