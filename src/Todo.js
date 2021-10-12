import React, { useState } from "react";

const Todo = (props) => {
  let item = props;

  return (
    <div className={"Todo"}>
      <input
        type={"checkbox"}
        id={item.item2.id}
        name={item.item2.id}
        defaultChecked={item.item2.done}
      />
      <label id={item.item2.id}>{item.item2.title}</label>
    </div>
  );
};

export default Todo;
