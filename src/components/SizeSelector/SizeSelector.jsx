import React, { useState } from "react";

const SizeSelector = (props) => {
  const { selectedSize, setSelectedSize } = props;

  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <div className="mb-2">
      <div style={{ display: "flex", gap: "10px" }}>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className="btn border"
            style={{
              borderColor: selectedSize === size ? "#000" : "#ccc",
              backgroundColor: selectedSize === size ? "#000" : "#fff",
              color: selectedSize === size ? "#fff" : "#000",
              cursor: "pointer",
              fontWeight: "bold",
              outline: "none",
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
