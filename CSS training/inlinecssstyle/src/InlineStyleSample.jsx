import React from 'react'

const InlineStyleSample = () => {
    const styleObj = {
        backgroundColor: "Blue",
        color: "White",
        margin: "140px",
        padding: "20px"
    }
  return (
    <div style={styleObj}>
      Hello Inline Css
    </div>
  )
}

export default InlineStyleSample
