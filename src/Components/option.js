import React, { useState } from "react"

const Option = ({ options, index, eventHandler, disable, disableEvent }) => {
  const handleOptionClick = (index) => {
    disableEvent(index)
  }

  return (
    <div>
      <button disabled={disable} onClick={() => handleOptionClick(index)}>
        {options}
      </button>
    </div>
  )
}

export default Option
