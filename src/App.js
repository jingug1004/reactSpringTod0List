import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { useState } from "react";

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

  return (
    <div className="App">
      {items.map((item, idx) => (
        <Todo item2={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
