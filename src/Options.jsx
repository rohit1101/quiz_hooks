import React from "react"
import { Choose } from "./Choose"

export function Options({ options, scoreEvent, score, choose, setChoose }) {
  return (
    <div>
      <p>
        {options.map((option) => {
          return (
            <div>
              <Choose
                option={option}
                ScoreEventProp={scoreEvent}
                scoreProp={score}
              />
            </div>
          )
        })}
      </p>
    </div>
  )
}
