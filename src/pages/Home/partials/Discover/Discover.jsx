import React from "react";
import ClothingList from "../../../../components/ClothingList/ClothingList";
export default function Discover() {
  return (
    <div className="p-4">
      <h2 className="mb-4 fw-bolder">Discover what's new</h2>
      <ClothingList />
      <div className="align-item-center justify-content-center d-flex">
        <button className="btn btn-dark mx-auto px-4">VIEW ALL</button>
      </div>
    </div>
  );
}
