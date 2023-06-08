import React from "react";

export const Medium = ({ bug, handleDelete, id }) => {
  let type = "medium";
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id, type)}>Delete</button>
    </span>
  );
};
