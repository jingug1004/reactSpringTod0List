import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React, { useEffect, useState } from "react";
import { Paper, List, Container } from "@material-ui/core";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null).then((response) => setItems(response.data));
  }, []);

  const add = (item) => {
    call("/todo", "POST", item).then((response) => setItems(response.data));
  };

  const del = (item) => {
    call("/todo", "DELETE", item).then((response) => setItems(response.data));
  };

  const update = (item) => {
    call("/todo", "PUT", item).then((response) => setItems(response.data));
  };

  const todoItems = items.length > 0 && (
    <div className="App">
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item, idx) => (
            <Todo appItem={item} key={item.id} delete={del} update={update} />
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
