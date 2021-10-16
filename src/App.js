import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React, { useState, useCallback } from "react";
import { Paper, List, Container } from "@material-ui/core";

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "hello world 1",
      done: true,
    },
    {
      id: 1,
      title: "hello world 2",
      done: false,
    },
  ]);

  const add = (item) => {
    console.log("l~ 01 item: ", item);
    console.log("l~ 01-01 items : ", items);
    item.id = "ID-" + items.length;
    item.done = false;
    console.log("l~ __02 item: ", item);
    const a01 = items.concat(item);
    console.log("l~ ___03 items: ", a01, "l~ ", items);

    setItems(a01);
    // // items.push(item);
    // setItems((prevItems) => prevItems.concat(item));
    console.log("l~ ____04 items: ", items);
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
