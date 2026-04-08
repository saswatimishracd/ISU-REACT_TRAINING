import React, { useState } from "react";

const Product = ({ name, price }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState([name, price]);

  return (
    <>
      {/* Toggle Button */}
      <button onClick={() => setIsEditing(!isEditing)}>
        Toggle Edit
      </button>

      {/* Conditional Rendering */}
      {isEditing ? (
        <>
        <h3>-----Edit the name-----</h3>
        <input
          type="text"
          value={product[0]}
          onChange={(e) => setProduct([e.target.value, product[1]])}
        />
        <input
          type="text"
          value={product[1]}
          onChange={(e) => setProduct([ product[0],e.target.value])}
        />
        </>
      ) : (
        <>
        <h1>Product Name: {product[0]}</h1>
        <p>Price: {product[1]}</p>
        </>
      )}

      {/* Always show price */}
    </>
  );
};

export default Product;