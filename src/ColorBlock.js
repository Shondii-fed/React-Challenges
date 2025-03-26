import React from 'react'

const ColorBlock = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className='colorBlock'
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF"
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

ColorBlock.defaultProps = {
  colorValue: "Empty Color Value"
}

export default ColorBlock