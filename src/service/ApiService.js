import { API_BASE_URL } from "../app-config";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  const options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      }),
    )
    .catch((error) => {
      console.log("l~ error.status : ", error.status);
      if (error.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO).then((response) => {
    // console.log("l~ response : ", response);
    alert("l~ 01 로그인 토큰 : ");
    if (response.token) {
      console.log("l~ response.token : \n", response.token);
      alert("l~ 02 로그인 토큰 : " + response.token);
      localStorage.setItem(ACCESS_TOKEN, response.token);
      window.location.href = "/";
    }
  });
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/";
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}
