import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox } from "@material-ui/core";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddTodo = (props) => {
  const add = props.add;

  const [item, setItem] = useState({ title: "" });

  const onInputChange = (e) => {
    let thisItem = item;
    // thisItem.title = e.target.value;
    // setItem({ item: thisItem });
    setItem({ title: e.target.value });
    console.log("l~ thisItem : ", thisItem);
  };

  const onButtonClick = () => {
    add(item);
    setItem({ title: "" });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder={"Add Todo here"}
            fullWidth
            onChange={onInputChange}
            value={item.title}
            onKeyPress={enterKeyEventHandler}
          />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button
            fullWidth
            color={"secondary"}
            variant={"outlined"}
            onClick={onButtonClick}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
