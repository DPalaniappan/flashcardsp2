import './App.css';
import {questions} from './data/Questions.js'
import {useState} from 'react';
import GuessArea from './components/GuessArea.jsx'
import Card from './components/Card.jsx'


const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

const App = () => {
  const [shuffledQuestions] = useState( () => {
    const shuffled = shuffleArray(questions); 
    return [{question:"Start", answer: "Click button to begin", reason: "Click button to begin", category: "None"}, ...shuffled];
    });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const handleQuestionChange = (direction) => {
    const newQuestionIndex = currentQuestion + direction;
    if (newQuestionIndex >= 0 && newQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestion(newQuestionIndex);
    }
  }
  const currGameAnswer = shuffledQuestions[currentQuestion]?.gameanswer ?? null;
  return (
    <div className="App">
      <div className="header">
      <h2>Ultimate Nintendo Trivia Questions</h2>
      <h4>Test your knowledge of Nintendo's rich history and iconic characters!</h4>
      <h5> Number of Questions: {shuffledQuestions.length-1}</h5>
      </div>
      <Card question={shuffledQuestions[currentQuestion].question} answer={shuffledQuestions[currentQuestion].answer} reason={shuffledQuestions[currentQuestion].reason} category={shuffledQuestions[currentQuestion].category}/>
      <GuessArea key={currentQuestion} answer={currGameAnswer} streak={ setCurrentStreak }/>
      <div>
        <button className="arrow-button" onClick={() => handleQuestionChange(-1)} disabled={currentQuestion === 0} >{"←"}</button>
        <button className="arrow-button" onClick={() => handleQuestionChange(1)} disabled={currentQuestion === shuffledQuestions.length - 1} >{"→"}</button>
      </div>
    </div>
  )
}

export default App
