import React from "react"

const Option = ({ options, index, eventHandler, disable, disableEvent }) => {
  const handleOptionClick = (index) => {
    disableEvent(index)
  }

  return (
    <button disabled={disable} onClick={() => handleOptionClick(index)}>
      {options}
    </button>
  )
}

export default Option
