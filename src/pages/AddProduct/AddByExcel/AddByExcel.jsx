import React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";

const URL = import.meta.env.VITE_SERVER_URL;
export default function AddByExcel() {
  const [products, setProducts] = useState([]);
  const handleAddProduct = () => {
    if (products.length == 0) return;
    const URI = URL + "/clothing";

    console.log(JSON.stringify({ clothings: [products] }), "PRODUCTS");
    fetch(URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ clothings: products }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.oke) {
          alert("Post product succesfully");
        }
      });
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setProducts(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return (
    <div className="d-flex ">
      <div className="mb-3">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        ></input>
      </div>
      <div className="">
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Submit
        </button>
      </div>
    </div>
  );
}
