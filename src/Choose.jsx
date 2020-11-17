import React, { useState } from "react"

export function Choose({ option, ScoreEventProp, scoreProp }) {
  const [bgColor, setbgColor] = useState("grey")

  return (
    <div>
      <p
        style={{ backgroundColor: `${bgColor}` }}
        onClick={(e) => {
          if (option.correct) {
            ScoreEventProp(scoreProp + 1)
            setbgColor("green")
          } else {
            setbgColor("red")
          }
        }}
      >
        {option.option}
      </p>
    </div>
  )
}
