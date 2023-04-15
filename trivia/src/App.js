import './App.css';
import Trivia from './components/Trivia.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then((response) => response.json())
    .then((data) => setQuestions(data.results))
    .catch((error) => console.log("Error:",error))
  }, [])
//console.log(questions);
  return (
    
    <div className="App">
      <div>
        {questions.length === 0? <p>no questions available</p> :
      <Trivia 
      questions = {questions}
      />
  }
      </div>
    </div>
  );
}
export default App;
