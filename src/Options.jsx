import React from "react"

export function Options({
  options,
  scoreEvent,
  score,
  checkedState,
  setCheck,
}) {
  return (
    <div>
      <p>
        {options.map((option) => {
          return (
            <div>
              <input
                type="checkbox"
                value={option.option}
                onClick={(e) => {
                  setCheck(!checkedState)
                  if (option.correct) {
                    scoreEvent(score + 1)
                  }
                }}
                checked={checkedState}
              />{" "}
              {option.option}
            </div>
          )
        })}
      </p>
    </div>
  )
}
