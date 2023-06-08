import React from "react";

export const Major = ({ bug, handleDelete, id }) => {
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </span>
  );
};
