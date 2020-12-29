import React, { useState } from "react"
import "./App.css"
import Answers from "./Components/answers"
import Question from "./Components/question"

const quizArr = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    correct: 1,
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["true", "false"],
    correct: 1,
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    options: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'alertBox("Hello World");',
      'msg("Hello World");',
    ],
    correct: 1,
  },
]

function App() {
  const [question] = useState(quizArr)
  const [next, setNext] = useState(0)

  const handleClick = () => {}

  return (
    <div>
      <h1>Quiz App</h1>
      <Question questionNumber={next} question={question[next].question} />
      <Answers
        options={question[next].options}
        correct={question[next].correct}
      />
      <button onClick={handleClick}>Next Question =></button>
    </div>
  )
}

export default App
