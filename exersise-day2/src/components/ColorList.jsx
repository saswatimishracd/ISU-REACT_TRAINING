import React, { useRef } from "react";

const ColorList = () => {
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple",
    "Orange", "Pink", "Brown", "Black", "White"
  ];

  // Store refs in array
  const itemRefs = useRef([]);

  const highlight = (index) => {
    const el = itemRefs.current[index];
    if (el) {
      el.style.fontWeight = "bold";
    }
  };

  return (
    <>
      {colors.map((color, index) => (
        <div key={index}>
          <span ref={(el) => (itemRefs.current[index] = el)}>
            {color}
          </span>

          <button onClick={() => highlight(index)}>
            Highlight
          </button>
        </div>
      ))}
    </>
  );
};

export default ColorList;