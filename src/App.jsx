import React, { useState, useEffect } from "react"
import "./App.css"
import { Options } from "./Options"

function App() {
  const quizArr = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      options: [
        { option: "<script>", correct: true },
        { option: "<js>", correct: false },
        { option: "<javascript>", correct: false },
        { option: "<scripting>", correct: false },
      ],
    },
    {
      question: "The external JavaScript file must contain the <script> tag.",
      options: [
        { option: "true", correct: true },
        { option: "false", correct: false },
      ],
    },
    {
      question: `How do you write "Hello World" in an alert box?`,
      options: [
        { option: 'alert("Hello World");', correct: true },
        { option: 'msgBox("Hello World");', correct: false },
        { option: 'alertBox("Hello World");', correct: false },
        { option: 'msg("Hello World");', correct: false },
      ],
    },
  ]
  // const [quizState, setQuizState] = useState(quizArr)
  // const [scoreState, setScoreState] = useState(0)
  // const [checkedState, setCheckedState] = useState(false)

  return (
    <div className="App">
      <h1>quiz App</h1>
    </div>
  )
}

export default App
