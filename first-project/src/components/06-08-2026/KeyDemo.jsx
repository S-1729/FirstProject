import axios from "axios";
import React, { useEffect, useState } from "react";

const KeyDemo = () => {
  const [regexp] = useState(/^(?=.*[A-Z])\w{4,15}$/);
  const [progressWidth, setProgressWidth] = useState({ width: "" });
  const [progressColor, setProgressColor] = useState("");
  const [msg, setMsg] = useState("");

  function verifyPassword(e) {
    if (e.target.value.match(regexp)) {
      setProgressWidth({ width: "100%" });
      setProgressColor("bg-success");
      setMsg("Strong Password");
    } else {
      if (e.target.value.length < 4) {
        setProgressWidth({ width: "30%" });
        setProgressColor("bg-danger");
        setMsg("Poor Password");
      } else {
        setProgressWidth({ width: "70%" });
        setProgressColor("bg-warning");
        setMsg("Weak Password");
      }
    }
  }

  //Username

  const [users, setUsers] = useState([{ userId: "" }]);
  const [userMsg, setUserMsg] = useState("");
  const [errorClass, setErrorClass] = useState("");
  const [content, setContent] = useState("");

  function LoadUsers() {
    axios.get("users.json").then((response) => {
      setUsers(response.data);
    });
  }

  useEffect(() => {
    LoadUsers();
  }, []);

  function verifyUser(e) {
    // console.log(e.target.value.charCodeAt(0));
    for (var user of users) {
      if (user.userId == e.target.value) {
        setUserMsg("Username already exists");
        setErrorClass("text-danger");
        break;
      } else {
        setUserMsg("Username is available");
        setErrorClass("text-success");
      }
    }
  }

  function changeToUppercase(e) {
    setContent(e.target.value.toUpperCase());
  }

  return (
    <div className="container-fluid p-3">
      <h3>Register</h3>
      <dl className="w-25">
        <dt>Username</dt>
        <dd>
          <input
            type="text"
            className="form-control"
            onKeyUp={verifyUser}
            onChange={(e) => setContent(e.target.value)}
            onBlur={changeToUppercase}
            value={content}
          />
        </dd>
        <dd className={errorClass}>{userMsg}</dd>
        <dt>Password</dt>
        <dd>
          <input
            type="password"
            className="form-control"
            onChange={verifyPassword}
          />
        </dd>
        <dd className="progress">
          <div
            className={`progress-bar ${progressColor} progress-bar-striped progress-bar-animated`}
            style={progressWidth}
          >
            {msg}
          </div>
        </dd>
      </dl>
    </div>
  );
};

export default KeyDemo;
