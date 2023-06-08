import React from "react";

export const Low = ({ bug, handleDelete, id }) => {
  let type = "low";
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id, type)}>Delete</button>
    </span>
  );
};
