import React from "react";
import ContactIcons from "../../components/ContactIcons/ContactIcons";

export default function Welcome() {
  return (
    <div className=" bg-body-tertiary text-center px-3 d-flex justify-content-between">
      <div className="d-flex align-items-center d-none d-md-flex ">
        <ContactIcons />
      </div>
      <span className="fs-4 mx-auto">Welcome to our store</span>
      <div className="d-flex align-items-center d-none d-md-flex">
        <ContactIcons />
      </div>
    </div>
  );
}
