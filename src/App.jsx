import React, { useState } from "react"
import "./App.css"
import Answers from "./Components/answers"
import Question from "./Components/question"

const quizArr = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    correct: 0,
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["true", "false"],
    correct: 0,
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    options: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'alertBox("Hello World");',
      'msg("Hello World");',
    ],
    correct: 0,
  },
  {
    question: "sds",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    correct: 0,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    correct: 0,
  },
]

function App() {
  const [question] = useState(quizArr)
  const [next, setNext] = useState(0)
  const [start, setStart] = useState(true)
  const [disable, setDisable] = useState(false)
  const [disableNextQuestion, setNextQuestion] = useState(true)
  const [score, setScore] = useState(0)

  const handleClick = () => {
    if (next !== question.length) {
      setNext(next + 1)
      setDisable(!disable)
      setNextQuestion(!disableNextQuestion)
    } else {
      setStart(!start)
    }
  }

  const handleDisable = (index) => {
    const correct = question[next].correct
    if (index === correct) {
      setScore(score + 1)
    }
    setDisable(!disable)
    setNextQuestion(!disableNextQuestion)
  }

  console.log(question.length, next)

  return (
    <div>
      {start ? (
        <button
          onClick={() => {
            setStart(!start)
            setNext(0)
          }}
        >
          Start Quiz
        </button>
      ) : (
        <div>
          {question.length === next ? (
            <h1>
              You scored:{" "}
              {score < question.length / 2
                ? `${score}/${question.length} 😕`
                : `${score}/${question.length} 🚀`}
            </h1>
          ) : (
            <div>
              <h1>Fun Quiz!</h1>
              <h3>Question Completed: {`${next + 1} / ${quizArr.length}`}</h3>
              <Question
                questionNumber={next}
                question={question[next].question}
              />
              <Answers
                disable={disable}
                disableEvent={handleDisable}
                options={question[next].options}
                correct={question[next].correct}
                optClick={handleClick}
              />
              <button disabled={disableNextQuestion} onClick={handleClick}>
                Next Question
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
