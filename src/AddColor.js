import React from 'react'
import colorNames from 'colornames'

const AddColor = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autofocus
        type="text"
        placeholder='Add color name'
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  )
}

export default AddColor