// src/components/Quiz.js

import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Who wrote the Harry Potter series?',
      options: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'J.R.R. Tolkien'],
      answer: 'J.K. Rowling'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    setUserAnswers([...userAnswers, { question: questions[currentQuestion].question, answer: selectedOption, correct: isCorrect }]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score bg-gray-200 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Your Score</h2>
          <p className="text-lg mb-4">{userAnswers.filter(answer => answer.correct).length} / {questions.length}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
          <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map(option => (
              <button key={option} onClick={() => handleAnswerClick(option)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 mb-2">{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
