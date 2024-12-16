import React from "react";

export default function Speech(props) {
  const { text, backgroundColor = "bg-secondary-subtle" } = props;
  return (
    <div className={`p-5 text-center ${backgroundColor}`}>
      <span className="" style={{ whiteSpace: "pre-line" }}>
        {text}
      </span>
    </div>
  );
}
