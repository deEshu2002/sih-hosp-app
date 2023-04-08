import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function NodeSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const configuration = {
    method: "post",
    url: "http://localhost:9000/register",
    data: {
      email,
      password,
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/JoinForm";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return <div>Node login form goes here</div>;
}
