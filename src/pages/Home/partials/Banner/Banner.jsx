import React from "react";
import "./banner.css";
export default function Banner() {
  return (
    <div className="position-relative">
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="//zenon3.myshopify.com/cdn/shop/files/main-banner-1.png?v=1705406613&amp;width=3840&height=992"
        />
        <source
          // media="(min-width:576px)"
          srcSet="https://zenon3.myshopify.com/cdn/shop/files/m.v-main-banner-1.png?v=1705406613&width=1100"
        />{" "}
        <img className="img-fluid" />
      </picture>
      <div className="position-absolute banner translate-middle text-center banner d-flex flex-column align-items-center">
        <h1>Go to my shop</h1>
        <div className="d-flex">
          <button className="btn btn-dark me-3 " style={{ width: "125px" }}>
            MENS
          </button>
          <button className="btn btn-light bg-white" style={{ width: "125px" }}>
            WOMENS
          </button>
        </div>
      </div>
    </div>
  );
}
