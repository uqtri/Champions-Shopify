import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import AddNew from "./AddNew/AddNew";
import AddByExcel from "./AddByExcel/AddByExcel";
const option = ["name", "price", "color", "gender"];
const URL = import.meta.env.VITE_SERVER_URL;

export default function AddProduct() {
  const [render, setRender] = useState(false);
  const [addNewModal, addNewContextHolder] = Modal.useModal();

  const [list, setList] = useState([]);
  const getProducts = () => {
    const URI = URL + "/clothing";

    fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.data);
      });
  };
  useEffect(() => {
    getProducts();
  });
  return (
    <div className="container p-3">
      <div></div>
      <div className="mb-3">
        <Button
          className="btn btn-dark me-3"
          onClick={() => {
            addNewModal.confirm({
              icon: null,
              content: <AddNew />,
              onCancel: () => {
                setRender(!render);
              },
              footer: null,
              maskClosable: true,
            });
          }}
        >
          Add New
        </Button>

        <Button
          className="btn btn-dark"
          onClick={() => {
            addNewModal.confirm({
              icon: null,
              content: <AddByExcel />,
              onCancel: () => {
                console.log("OFFF");
                setRender(!render);
              },
              footer: null,
              maskClosable: true,
            });
          }}
        >
          Add by excel
        </Button>
        {addNewContextHolder}
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="text-capitalize">
            {option.map((value, index) => {
              return <th key={value}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {list.map((value, index) => {
            return (
              <tr key={value._id}>
                {option.map((option, index) => {
                  return <td key={option}>{value[option]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
