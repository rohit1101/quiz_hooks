import React, { useState } from "react"

const Option = ({ options, correct, index, eventHandler }) => {
  const [validator, setValidator] = useState("black")
  const [disable, setDisable] = useState(false)
  const [score, setScore] = useState(0)

  const handleOptionClick = (index) => {
    eventHandler()
    if (index === correct) {
      setScore(score + 1)

      setValidator("green")
    } else {
      setDisable(true)
      setValidator("red")
    }
    setValidator("black")
  }

  return (
    <div>
      <button
        style={validator.length && { color: validator }}
        onClick={() => handleOptionClick(index, score)}
      >
        {options}
      </button>
    </div>
  )
}

export default Option
