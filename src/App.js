import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React, { useState } from "react";
import { Paper, List, Container } from "@material-ui/core";

function App() {
  const [items, setItems] = useState([]);

  const add = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    const vItemsConcat = items.concat(item);

    console.log("l~ 01 vItemsConcat : ", vItemsConcat);
    console.log("l~ _02 items : ", items);
    setItems(vItemsConcat);
    console.log("l~ ___03 items : ", items);
  };

  const del = (item) => {
    console.log("l~ Before Update Items : ", items);
    const newItems = items.filter((e) => e.id !== item.id);
    setItems(newItems);
    console.log("l~ Update Items : ", items);
  };

  const todoItems = items.length > 0 && (
    <div className="App">
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item, idx) => (
            <Todo appItem={item} key={item.id} delete={del} />
          ))}
        </List>
      </Paper>
    </div>
  );
  return (
    <div className={"App"}>
      <Container maxWidth={"md"}>
        <AddTodo add={add} />
        <div className={"TodoList"}>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
