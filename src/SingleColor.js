import React, { useState } from "react";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  return (
    <div
      className={`box ${index > 9 ? "white" : "black"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
        let id = setTimeout(() => {
          setAlert(false);
          clearTimeout(id);
        }, 1000);
      }}
    >
      <p className="purc">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      <p className={alert ? "block" : "none"}>copied to clipboard</p>
    </div>
  );
};
export default SingleColor;
