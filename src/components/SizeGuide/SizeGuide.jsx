import React from "react";

const field = ["Size", "Shoulder", "Chest"];

const properties = [
  { Size: "XXS", Shoulder: "24''", Chest: "26''" },
  { Size: "XS", Shoulder: "26''", Chest: "32''" },
  { Size: "S", Shoulder: "28''", Chest: "34''" },
  { Size: "M", Shoulder: "30''", Chest: "36''" },
  { Size: "L", Shoulder: "32''", Chest: "38''" },
  { Size: "XL", Shoulder: "34''", Chest: "40''" },
  { Size: "32XL", Shoulder: "36''", Chest: "42''" },
];

export default function SizeGuide() {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {field.map((value, index) => {
            return <th key={value}>{value}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {properties.map((row, index) => {
          return (
            <tr>
              {field.map((option, index) => {
                return <td>{row[option]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
