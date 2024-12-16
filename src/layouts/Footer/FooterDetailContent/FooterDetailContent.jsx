import React from "react";
import "./FooterDetailContent.css";
export default function FooterDetailContent(props) {
  const { array } = props;
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="d-lg-none w-100">
        <div className="dropdown w-100">
          <button
            className="btn dropdown-toggle w-100 d-flex align-items-center custom-dropdown "
            type="button"
            data-bs-display="static"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {array[0]}
          </button>
          <ul className="dropdown-menu position-static">
            {array.map((value, index) => {
              if (index != 0) {
                return (
                  <li key={index + array[0]}>
                    <a href="" className="dropdown-item">
                      {value}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div className="d-none d-lg-flex flex-column align-items-center">
        {array.map((value, index) => {
          return (
            <a
              key={index + array[0]}
              className="text-decoration-none text-dark"
              href=""
            >
              {value}
            </a>
          );
        })}
      </div>
    </div>
  );
}
