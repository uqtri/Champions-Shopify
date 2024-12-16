import React, { useContext } from "react";
import "./Clothing.css";
import Heart from "../../assets/ClothingIcons/Heart";
import FilledHeart from "../../assets/ClothingIcons/FilledHeart";
import { cartContext } from "../../hooks/context/cart";
import { userContext } from "../../hooks/context/user";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_SERVER_URL;

export default function Clothing(props) {
  const { product } = props;
  const { cart, setCart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const isInCart = (id) => {
    if (cart?.length > 0) {
      return cart.some((value) => {
        return value.product._id === id;
      });
    } else return false;
  };
  const inCart = isInCart(product._id);

  const deleteFromCart = (id) => {
    const URI = URL + `/cart/${id}`;

    fetch(URI, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.oke) {
          const newCart = cart.filter((value, index) => {
            return value.product._id !== id;
          });
          setCart(newCart);
        }
      });
  };
  const addToCart = (clothing) => {
    const URI = URL + "/cart";

    fetch(URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user,
        clothing: clothing,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.oke) {
          const newCart = [...cart];
          newCart.push(data.data);
          setCart(newCart);
        }
      });
  };
  return (
    <div
      className="card mx-3 mb-3 clothing position-relative"
      style={{ width: "25rem" }}
      onClick={() => {
        navigate(`/product/${product._id}`);
      }}
    >
      <div
        className="position-absolute heart-position"
        onClick={(event) => {
          {
            event.stopPropagation();
            inCart === true ? deleteFromCart(product._id) : addToCart(product);
          }
        }}
      >
        {inCart === true ? <FilledHeart /> : <Heart />}
      </div>
      <img
        className="img-fluid"
        src={product.image}
        alt="..."
        style={{ height: "25rem" }}
      />
      <div className="card-body">
        <span className="card-text d-block fw-bolder">{product.name}</span>
        <span className="card-text d-block">{product.price}$</span>
      </div>
    </div>
  );
}
