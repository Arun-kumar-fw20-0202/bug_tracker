import React from "react";

export const Major = ({ bug, handleDelete, id }) => {
  let type = "major";
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id, type)}>Delete</button>
    </span>
  );
};
