import React, { useCallback, useState, useEffect } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Todo = (props) => {
  // console.log("l~ props.appItem : ", props.appItem);
  // const [item, setItem] = useState({ title: "", id: "", done: false });
  const [item, setItem] = useState(props.appItem);
  const [te, setTe] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  // console.log("l~ Todo item : ", item);

  const delet = props.delete;

  const deleteEventHandler = () => {
    delet(item);
  };

  const offReadOnlyMode = useCallback(() => {
    console.log("l~ Event! ", readOnly);
    setReadOnly(false);
    console.log("l~ Readonly? ", readOnly);
  }, [readOnly]);

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      console.log("l~ __02 Readonly? ", readOnly);
      setReadOnly(true);
      console.log("l~ ___03 Readonly? ", readOnly);
    }
  };

  const editEventHandler = (e) => {
    const thisItem = item;
    thisItem.title = e.target.value;
    // setItem({ title: "sdf 13" });
    // setItem({ title: e.target.value || "" });
    console.log("l~ Todo item thisItem : ", thisItem);

    setTe(e.target.value);

    // console.log("l~  e ,", e.target.value);
    // console.log("l~ Todo item : ", item);
    console.log("l~ te : ", te);
  };

  return (
    <ListItem>
      <Checkbox checked={item.done} disableRipple />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          type={"text"}
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
          onClick={offReadOnlyMode}
          onChange={editEventHandler}
          onKeyPress={enterKeyEventHandler}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label={"Delete Todo"} onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
