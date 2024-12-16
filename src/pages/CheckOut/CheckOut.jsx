import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../hooks/context/user";
const field = ["Gmail", "Address", "Phone"];
import { useLocation } from "react-router-dom";
import OrderDetail from "./OrderDetail/OrderDetail";
import { notification } from "antd";

const URL = import.meta.env.VITE_SERVER_URL;

export default function CheckOut(props) {
  const { user } = useContext(userContext);
  const [userInput, setUserInput] = useState(user);
  const location = useLocation();
  const cartItems = location.state?.products || [];
  const [api, contextHolder] = notification.useNotification();

  console.log(cartItems, "@@@");
  const openNotification = (placement, message) => {
    api.info({
      message: `Notification`,
      description: message,
      placement,
    });
  };

  useEffect(() => {
    setUserInput(user);
  }, [user]);
  const handlePlaceOrder = () => {
    const URI = URL + `/order/${user.username}`;

    const filtedArray = cartItems.filter((value, index) => {
      let choose;
      if (value.choose !== undefined) {
        choose = value.choose;
      } else choose = true;
      return choose;
    });
    fetch(URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user,
        products: filtedArray,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200) {
          let noti =
            "Place order succesfully and check your email to confirm your order";
          openNotification("topRight", noti);
          console.log("TRI");
        } else {
          openNotification("topRight", data.message);
        }
      });
  };
  const calculateSum = () => {
    let sum = 0;

    cartItems.forEach((value, index) => {
      let choose;
      if (value.choose !== undefined) {
        choose = value.choose;
      } else choose = true;

      if (choose) {
        sum += (value.quantity || 1) * value.product.price;
      }
    });
    return sum.toFixed(2);
  };
  return (
    <div className="container">
      <div className="row w-100 d-flex flex-wrap-reverse mt-3 justify-content-center gap-3">
        <div className="p-3 col-12 col-lg-5 shadow">
          <div className="d-flex align-item-center justify-content-center">
            <label className="title-text fs-3">Delivery</label>
          </div>
          {field.map((value, index) => {
            let defaultValue = user[value.toLowerCase()];
            if (!defaultValue) {
              console.log(defaultValue, "!@!@@@DAYDYADYAS");
              defaultValue = value;
            }
            return (
              <div key={value}>
                <label>{value}</label>
                <input
                  className="form-control mb-3"
                  value={userInput[value.toLowerCase()]}
                  name={value}
                  onChange={(event) => {
                    let { name, value } = event.target;
                    name = name.toLowerCase();
                    setUserInput({ ...userInput, [name]: value });
                  }}
                ></input>
              </div>
            );
          })}
          {contextHolder}
          <div className="d-flex align-item-center justify-content-center">
            <button className="btn btn-dark" onClick={() => handlePlaceOrder()}>
              Place order
            </button>
          </div>
        </div>
        <div className="p-3 col-12 col-lg-6 shadow">
          <div className="d-flex align-item-center justify-content-center">
            <label className="title-text fs-3">Order Summary</label>
          </div>
          <div>
            {cartItems.map((value, index) => {
              let choose;
              if (value.choose !== undefined) {
                choose = value.choose;
              } else choose = true;

              console.log(value.choose, choose);
              if (choose)
                return (
                  <OrderDetail
                    product={value.product}
                    quantity={value.quantity || 1}
                  />
                );
            })}
          </div>
          <div>
            <span className="title-text">{`Total: ${calculateSum()}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
