import React from "react"

const Question = ({ questionNumber, question }) => (
  <div>
    {questionNumber + 1}. {question}
  </div>
)

export default Question
