import React from "react";

export default function OrderDetail(props) {
  const { product, quantity } = props;
  return (
    <div>
      <div className="d-flex align-items-cente gap-2">
        <div>
          <img
            className="rounded-1"
            src={product.image}
            style={{ width: "64px", height: "64px" }}
          />
        </div>
        <div className="d-flex flex-column">
          <div className="span">{product.name}</div>
          <div className="span">{`Quantity: ${quantity}`}</div>
        </div>
        <div className="ms-auto">
          <span>{`${(quantity * product.price).toFixed(2)}$`}</span>
        </div>
      </div>
    </div>
  );
}
