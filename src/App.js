import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useState } from "react";
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

  const todoItems = items.length > 0 && (
    <div className="App">
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item, idx) => (
            <Todo item2={item} key={item.id} />
          ))}
        </List>
      </Paper>
    </div>
  );
  return (
    <div className={"App"}>
      <Container maxWidth={"md"}>
        <AddTodo />
        <div className={"TodoList"}>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
