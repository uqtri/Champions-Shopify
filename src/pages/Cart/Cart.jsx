import React, { useContext, useState, useEffect } from "react";

import { cartContext } from "../../hooks/context/cart";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_SERVER_URL;

export default function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const [updatedCart, setUpdatedCart] = useState(cart);
  const [priceTotal, setPriceTotal] = useState(0);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState(cart);
  useEffect(() => {
    setUpdatedCart(cart);
    setSelectedProducts(cart);
  }, [cart]);

  useEffect(() => {
    if (updatedCart?.length > 0) {
      let total = 0;

      updatedCart.forEach((value, index) => {
        total += parseFloat(
          (value.product.price * (value.quantity || 1)).toFixed(2)
        );
      });
      setPriceTotal(total);
    } else setPriceTotal(0);
  }, [updatedCart]);
  const handleQuantity = (index, quantity) => {
    const newCart = [...updatedCart];
    newCart[index].quantity = quantity;
    setUpdatedCart(newCart);
  };
  const handleSelectedProduct = (event, index) => {
    const checked = event.target.checked;

    let newUpdatedCart = [...updatedCart];

    if (checked) {
      newUpdatedCart[index].choose = true;
    } else {
      newUpdatedCart[index].choose = false;
    }
    setSelectedProducts(newUpdatedCart);
  };
  const handleDeleteCart = (id) => {
    const URI = URL + `/cart/${id}`;
    fetch(URI, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {});

    const newCart = cart.filter((value, index) => {
      return value.product._id !== id;
    });
    setCart(newCart);
  };
  return (
    <div className="container p-4">
      <h2 className="mb-4">Your cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {updatedCart?.length > 0 &&
            updatedCart.map((value, index) => {
              const product = value.product;
              return (
                <tr key={value._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue="1"
                      min="1"
                      onChange={(event) => {
                        const value = event.target.value;
                        let number = parseInt(value);
                        if (isNaN(number)) {
                          event.target.value = 1;
                        }
                        number = parseInt(value);

                        handleQuantity(index, number);
                      }}
                    />
                  </td>
                  <td>{(product.price * (value.quantity || 1)).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDeleteCart(value.product._id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      style={{ width: "20px", height: "20px" }}
                      defaultChecked
                      onChange={(event) => {
                        handleSelectedProduct(event, index);
                      }}
                    ></input>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <h4>
          Total: <span id="total-price">{priceTotal.toFixed(2)}</span>
        </h4>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/checkout", { state: { products: updatedCart } });
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
