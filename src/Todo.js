import React, { useCallback, useState } from "react";
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
  const delet = props.delete;
  const update = props.update;

  const [item, setItem] = useState(() => props.appItem);
  const [te, setTe] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  // <IconButton aria-label={"Delete Todo"} onClick={deleteEventHandler}>
  const deleteEventHandler = () => {
    delet(item);
  };

  // <InputBase onClick
  const offReadOnlyMode = useCallback(() => {
    console.log("l~ Event! ", readOnly);
    setReadOnly(false);
    console.log("l~ Readonly? ", readOnly);
  }, [readOnly]);

  // <InputBase onKeyPress
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      console.log("l~ __02 Readonly? ", readOnly);
      setReadOnly(true);
      update(item); // 엔터를 누르면 저장
      console.log("l~ ___03 Readonly? ", readOnly);
    }
  };

  // <InputBase onChange
  const editEventHandler = (e) => {
    const thisItem = item;
    thisItem.title = e.target.value;
    console.log("l~ editEventHandler thisItem : ", thisItem);

    // 임시로 useState 쓰니 e.t.v 할 때 계속 이어짐. 정상적으로 잘 됨.
    setTe(e.target.value);
  };

  // <Checkbox checked={item.done} onChange={checkboxEventHandler} />
  const checkboxEventHandler = (e) => {
    setItem({ done: !item.done });
    update(item); // 체크박스가 변경되면 저장
  };

  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler} />
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
