import React, { useState } from 'react';
import './App.css';
import questions from './data/question.json';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct! Well done.");
    } else {
      setFeedback(`Wrong. The correct answer was: ${questions[currentQuestion].answer}`);
    }

    setTimeout(() => {
      setFeedback("");
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  // Logic: Calculate progress percentage
  const progressPercentage = (currentQuestion / questions.length) * 100;

  return (
    <div className="App">
      <h1>SAA-C03 Hybrid Exam Simulator</h1>
      <div className="question-card">
        {showScore ? (
          <div className="score-section">
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
            Quiz Complete! <br/>
            Your Score: {score} / {questions.length}
            <button 
              onClick={() => window.location.reload()} 
              style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#ec7211', color: 'white', border: 'none' }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>

            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            <div className="question-text" style={{ fontSize: '18px', marginBottom: '20px' }}>
              {questions[currentQuestion].question}
            </div>
            
            {feedback && (
              <div style={{ 
                backgroundColor: feedback.startsWith("Correct") ? "#e7f4e8" : "#fdf2f2",
                color: feedback.startsWith("Correct") ? "#2d7d32" : "#d32f2f",
                padding: "10px",
                borderRadius: "4px",
                fontWeight: "bold",
                marginBottom: "15px"
              }}>
                {feedback}
              </div>
            )}

            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <button 
                  key={option} 
                  onClick={() => handleAnswerOptionClick(option)}
                  disabled={feedback !== ""}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
