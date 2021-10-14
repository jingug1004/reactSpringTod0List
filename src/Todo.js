import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox } from "@material-ui/core";

const Todo = (props) => {
  const item = props.item2;

  return (
    <ListItem>
      <Checkbox checked={item.done} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked" }}
          type={"text"}
          id={item.id.toString()}
          name={item.id.toString()}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
