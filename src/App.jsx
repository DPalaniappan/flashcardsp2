import './App.css';
import {questions} from './data/Questions.js'
import {useState} from 'react';
import GuessArea from './components/GuessArea.jsx'
import Card from './components/Card.jsx'


const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * (i - 1 + 1)) + 1;
    let temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

const App = () => {
  const [gameQuestions, setGameQuestions] = useState([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const handleQuestionChange = (direction) => {
    const newQuestionIndex = currentQuestion + direction;
    if (newQuestionIndex >= 0 && newQuestionIndex < gameQuestions.length) {
      setCurrentQuestion(newQuestionIndex);
    }
  }
  const currGameAnswer = gameQuestions[currentQuestion]?.gameanswer ?? null;
  return (
    <div className="App">
      <div className="header">
      <h2>Ultimate Nintendo Trivia Questions</h2>
      <h4>Test your knowledge of Nintendo's rich history and iconic characters!</h4>
      <h5> Number of Questions: {gameQuestions.length-1}</h5>
      <h5> Current Streak: {currentStreak}, Longest Streak: {maxStreak}</h5>
      </div>
      <Card question={gameQuestions[currentQuestion].question} answer={gameQuestions[currentQuestion].answer} reason={gameQuestions[currentQuestion].reason} category={gameQuestions[currentQuestion].category}/>
      <GuessArea key={currentQuestion} answer={currGameAnswer} setStreak={ setCurrentStreak } streak = {currentStreak} maxStreak={ setMaxStreak }/>
      <div>
        <button className="arrow-button" onClick={() => handleQuestionChange(-1)} disabled={currentQuestion === 0} >{"←"}</button>
        <button className="arrow-button" onClick={() => handleQuestionChange(1)} disabled={currentQuestion === gameQuestions.length - 1} >{"→"}</button>
        <button onClick={() => setGameQuestions(shuffleArray(gameQuestions))}>Shuffle</button>
      </div>
    </div>
  )
}

export default App
