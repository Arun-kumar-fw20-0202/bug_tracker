import React from "react";
import "../Style/Pop.css";

export const Pop = ({ handleClose, handleChange, handleSubmit, bug }) => {
  return (
    <div className="pop">
      <div className="popBx">
        <div className="close" onClick={handleClose}>
          X
        </div>
        <input type="text" onChange={(e) => handleChange(e)} value={bug} />
        <button onClick={handleSubmit}>Add Bug</button>
      </div>
    </div>
  );
};
