import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#eee",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          minWidth: "25rem",
          height: "30rem",
          margin: "5rem",
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "1rem",
          boxShadow: "1px 4px 15px darkblue",
          textAlign: "center",
          borderEndEndRadius: "70%",
          borderStartStartRadius: "70%",
          backgroundImage: "linear-gradient(#6441A5,#2a0845)",
          paddingLeft: "2rem",
          overflow: "auto",
        }}
      >
        <div class="mb-3" style={{ width: "15rem", margin: "3rem auto" }}>
          <label
            for="formGroupExampleInput"
            class="form-label"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              fontStyle: "Fantasy",
            }}
          >
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
            style={{ borderRadius: "10rem" }}
          />

          <label
            for="formGroupExampleInput"
            class="form-label"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              fontStyle: "Fantasy",
            }}
          >
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Email"
            style={{ borderRadius: "10rem" }}
          />
        </div>
        <div class="mb-3" style={{ width: "15rem", margin: "auto" }}>
          <label
            for="formGroupExampleInput2"
            class="form-label"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              fontStyle: "Fantasy",
            }}
          >
            Password
          </label>
          <input
            style={{ marginBottom: "1rem", borderRadius: "10rem" }}
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Password"
          />
          <button
            className="btn btn-danger"
            style={{
              fontWeight: "bolder",
              padding: "0.5rem",
              marginRight: "1rem",
            }}
          >
            Register
          </button>
          <p style={{ color: "white", marginTop: "0.8rem" }}>
            Already Registered?<Link to="/LogIn">LogIn here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
