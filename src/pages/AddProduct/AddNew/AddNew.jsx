import React from "react";
import { useState } from "react";
const option = ["Name", "Color", "Gender", "Price", "Image"];
const URL = import.meta.env.VITE_SERVER_URL;

export default function AddNew() {
  const [product, setProduct] = useState({});

  const handleAddProduct = () => {
    const URI = URL + "/clothing";

    fetch(URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ clothings: [product] }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.oke) {
          alert("Post product succesfully");
        }
      });
  };
  return (
    <div className="container d-flex flex-column">
      {option.map((value, index) => {
        return (
          <input
            key={value}
            className="mb-3 form-control"
            name={value.toLowerCase()}
            placeholder={value}
            onChange={(event) => {
              const { name, value } = event.target;
              setProduct({ ...product, [name]: value });
            }}
          ></input>
        );
      })}
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Submit
        </button>
      </div>
    </div>
  );
}
