import React from "react";

export const Critical = ({ bug, handleDelete, id }) => {
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </span>
  );
};
