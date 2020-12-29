import React from "react"

const Answers = ({ options, correct }) =>
  options.map((option) => {
    return (
      <ul>
        <li>{option}</li>
      </ul>
    )
  })

export default Answers
