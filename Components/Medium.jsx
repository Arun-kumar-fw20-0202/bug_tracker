import React from "react";

export const Medium = ({ bug, handleDelete, id }) => {
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </span>
  );
};
