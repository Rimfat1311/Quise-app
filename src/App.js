// src/App.js

import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Interactive Quiz App</h1>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
