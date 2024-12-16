import React, { useContext, useEffect, useState } from "react";
import Clothing from "../Clothing/Clothing";
import { cartContext } from "../../hooks/context/cart";
import { userContext } from "../../hooks/context/user";

const URL = import.meta.env.VITE_SERVER_URL;

export default function ClothingList(props) {
  const [list, setList] = useState([]);
  const { cart, setCart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const searchQuery = props.searchQuery || "";
  useEffect(() => {
    const URI = URL + `/clothing${searchQuery}`;
    console.log(URI, "URI");
    fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.data);
      });
  }, [searchQuery]);
  // const deleteFromCart = (id) => {
  //   const URI = URL + `/cart/${id}`;

  //   fetch(URI, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.oke) {
  //         const newCart = cart.filter((value, index) => {
  //           return value.product._id !== id;
  //         });
  //         setCart(newCart);
  //       }
  //     });
  // };
  // const addToCart = (clothing) => {
  //   const URI = URL + "/cart";

  //   fetch(URI, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user,
  //       clothing: clothing,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.oke) {
  //         const newCart = [...cart];
  //         newCart.push(data.data);
  //         setCart(newCart);
  //       }
  //     });
  // };
  // const isInCart = (id) => {
  //   if (cart?.length > 0) {
  //     return cart.some((value) => {
  //       return value.product._id === id;
  //     });
  //   } else return false;
  // };
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {list?.length > 0 &&
        list.map((value, index) => {
          return <Clothing product={value} />;
        })}
    </div>
  );
}
