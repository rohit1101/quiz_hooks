import React, { useState } from "react"

const Answers = ({ options, correct }) => {
  const [validator, setValidator] = useState("")

  const handleOptionClick = (index) => {
    if (index === correct) {
      setValidator("green")
    }
  }

  return (
    <div>
      {options.map((option, index) => (
        <ul>
          <li
            className={validator.length !== 0 ? { color: validator } : ""}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Answers
