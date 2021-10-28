import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React, { useEffect, useState } from "react";
import {
  Paper,
  List,
  Container,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { call, signout } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo", "GET", null).then(
      (response) => setItems(response.data),
      setLoading(false),
    );
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

  const navigationBar = () => (
    <AppBar position={"static"}>
      <Toolbar>
        <Grid justifyContent={"space-between"} container>
          <Grid item>
            <Typography variant={"h6"}>오늘의 할일</Typography>
          </Grid>
          <Grid>
            <Button color={"inherit"} onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  const todoListPage = () => (
    <div>
      {navigationBar()}
      <Container maxWidth={"md"}>
        <AddTodo add={add} />
        <div className={"TodoList"}>{todoItems}</div>
      </Container>
    </div>
  );

  const loadingPage = <h1> 로딩중... </h1>;
  let content = loadingPage;
  if (true) {
    content = todoListPage;
  }

  return (
    <div className={"App"}>
      {navigationBar()}
      <Container maxWidth={"md"}>
        <AddTodo add={add} />
        <div className={"TodoList"}>{todoItems}</div>
      </Container>
      {/*{content}*/}
    </div>
  );
}

export default App;
