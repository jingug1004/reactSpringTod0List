import React, { useCallback, useState } from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const AppRouter = (props) => {
  const Copyright = () => {
    return (
      <Typography variant={"body2"} color={"textSecondary"} align={"center"}>
        {"Copyright @ "}
        ing engineer, {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path={"/login"}>
              <Login />
            </Route>
            <Route path={"/"}>
              <App />
            </Route>
          </Switch>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Router>
    </div>
  );
};

export default AppRouter;
