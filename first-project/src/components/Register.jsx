import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center mainDiv">
      <form action="" className="border w-25 p-4 rounded shadow formDiv">
        <h2 className="text-center">
          <span className="bi bi-person-fill"></span>User Registration
        </h2>
        <dl>
          <label className="form-label">Username</label>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
            />
          </div>
          <label className="form-label">Password</label>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
        </dl>
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
