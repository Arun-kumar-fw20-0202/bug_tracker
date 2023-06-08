import React from "react";

export const Critical = ({ bug, handleDelete, id }) => {
  let type = "critical";
  return (
    <span>
      {bug}
      <button onClick={() => handleDelete(id, type)}>Delete</button>
    </span>
  );
};
