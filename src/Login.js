import React from "react";
import { signin } from "./service/ApiService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, Link } from "@material-ui/core";

const Login = (props) => {
  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");

    signin({ email: email, password: password });
  };

  return (
    <Container component={"main"} maxWidth={"xs"} style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component={"h1"} variant={"h5"}>
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant={"outlined"}
              required
              fullWidth
              id={"email"}
              label={"이메일 주소"}
              name={"email"}
              autoComplete={"email"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant={"outlined"}
              required
              fullWidth
              type={"password"}
              id={"password"}
              label={"패스워드"}
              name={"password"}
              autoComplete={"current-password"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
            >
              로그인
            </Button>
          </Grid>
          <Link href={"/signup"} variant={"body2"}>
            <Grid item>계정이 없습니까? 여기서 가입 하세요.</Grid>
          </Link>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
