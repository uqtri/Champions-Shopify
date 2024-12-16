import React from "react";
// import "./Marquee.css";

export default function Marquee(props) {
  const { array, direction, backgroundColor } = props;

  const repeatedArray = [...array];
  for (let i = 1; i < 5; i++) {
    repeatedArray.push(...array);
  }

  return (
    <div
      className={`marquee-${direction} ${backgroundColor} position-relative`}
      style={{ width: "100vw", height: "200px" }}
    >
      <div className="align-items-center justify-content-center d-flex">
        {repeatedArray.map((value, index) => (
          <span key={index} className="fs-5 me-5 position-absolute">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}
