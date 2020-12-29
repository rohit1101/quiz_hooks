import React, { useState } from "react"
import Option from "./option"

const Answers = ({ options, correct, optClick }) => {
  return (
    <div>
      {options.map((option, index) => (
        <ul key={index}>
          <Option
            options={option}
            correct={correct}
            index={index}
            eventHandler={optClick}
          />
        </ul>
      ))}
    </div>
  )
}

export default Answers
