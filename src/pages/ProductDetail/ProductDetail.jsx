import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Clothing from "../../components/Clothing/Clothing";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import { Button, Modal } from "antd";
import SizeGuide from "../../components/SizeGuide/SizeGuide";

const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductDetail() {
  const { id } = useParams();
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("XS");
  const [modal, contextHolder] = Modal.useModal();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const URI = URL + `/clothing/${id}`;
    fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data);
      });
  }, []);
  return (
    <div className="container px-1 py-3 d-flex justify-content-center flex-wrap">
      <Clothing product={product} />
      <div>
        <div className="d-flex flex-column">
          <span className="fw-bolder">{product.name}</span>
          <span>{product.price}$</span>

          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <div className="mb-2">
            <Button
              className="btn btn-dark"
              onClick={() => {
                modal.confirm({ content: <SizeGuide />, icon: null });
              }}
            >
              Size Guide
            </Button>
            {contextHolder}
          </div>
          <div className="btn btn-primary"> Buy Now</div>
        </div>
      </div>
    </div>
  );
}
