import React, { useEffect, useState } from "react";
import ClothingList from "../../components/ClothingList/ClothingList";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const supportedColor = ["red", "blue", "green", "gray", "black"];
const supportedGender = ["Female", "Male"];
export default function Shop() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [query] = useSearchParams();
  const page = parseInt(query.get("page"));
  const minPage = Math.max(1, page - 1);
  const handleFilterColor = (event) => {
    const checked = event.target.checked;
    const name = event.target.name;

    let newSelectedColors;

    if (checked) {
      newSelectedColors = [...selectedColors];
      newSelectedColors.push(name);
    } else {
      newSelectedColors = selectedColors.filter((value, index) => {
        return value !== name;
      });
    }
    console.log(newSelectedColors);
    setSelectedColors(newSelectedColors);
  };
  const handleFilterGender = (event) => {
    const checked = event.target.checked;
    const name = event.target.name;

    let newSelectedGenders;

    if (checked) {
      newSelectedGenders = [...selectedGenders];
      newSelectedGenders.push(name);
    } else {
      newSelectedGenders = selectedGenders.filter((value, index) => {
        return value !== name;
      });
    }

    setSelectedGenders(newSelectedGenders);
  };
  useEffect(() => {
    const formatSearchQuery = () => {
      let result = `?page=${page}`;
      selectedColors.forEach((value, index) => {
        result += `&&color=${value}`;
      });
      selectedGenders.forEach((value, index) => {
        result += `&&gender=${value}`;
      });
      setSearchQuery(result);
    };
    formatSearchQuery();
  }, [page, selectedColors, selectedGenders]);

  console.log("RENDER PAGE", page);
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <div className="">
            <span>FILTER</span>
          </div>
          <div>
            <button
              className="dropdown-toggle border-0 custom-dropdown w-100 d-flex align-items-center"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              Color
            </button>
            <div className="dropdown-menu">
              {supportedColor.map((value, index) => {
                return (
                  <div
                    className="px-3 d-flex align-items-center gap-2 dropdown-item"
                    key={value}
                  >
                    <input
                      name={value}
                      type="checkbox"
                      onChange={handleFilterColor}
                    ></input>
                    <span className="text-capitalize"> {value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <button
              className="dropdown-toggle border-0 custom-dropdown w-100 d-flex align-items-center"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              Gender
            </button>
            <div className="dropdown-menu">
              {supportedGender.map((value, index) => {
                return (
                  <div
                    className="px-3 d-flex align-items-center gap-2 dropdown-item"
                    key={value}
                  >
                    <input
                      name={value}
                      type="checkbox"
                      onChange={handleFilterGender}
                    ></input>
                    <span className="text-capitalize"> {value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col">
          <ClothingList searchQuery={searchQuery} />
        </div>
      </div>
      <div className="row">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link className="page-link" to={`?page=${Math.max(1, page - 1)}`}>
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`?page=${minPage}`}>
                {minPage}
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`?page=${minPage + 1}`}>
                {minPage + 1}
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`?page=${minPage + 2}`}>
                {minPage + 2}
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={`?page=${page + 1}`}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
