import React from "react"
import Option from "./option"

const Answers = ({ options, correct, optClick, disable, disableEvent }) => {
  return (
    <div>
      {options.map((option, index) => (
        <ul key={index}>
          <Option
            disable={disable}
            disableEvent={disableEvent}
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
