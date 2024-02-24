import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Instructions from "./Instructions";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setTimeout(function showInstruction() {
      setShowAlert(false);
    }, 3000);
  }, []);



  function checUser() {
    if (email !== "" && password !== "") {
      window.localStorage.setItem("user","User1")
      navigate("/");
    } else {
      alert("Invali Credentials !!");
    }
  }
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
          boxShadow: "0px 4px 10px green",
          textAlign: "center",
          borderEndEndRadius: "70%",
          borderStartStartRadius: "70%",
          backgroundImage: "linear-gradient(#ffb347,#ffcc33)",
          paddingLeft: "2rem",
        }}
      >
        <div class="mb-3" style={{ width: "15rem", margin: "5rem auto" }}>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-success"
            style={{
              fontWeight: "bolder",
              padding: "0.5rem",
              marginRight: "1rem",
            }}
            onClick={checUser}
          >
            LoginIn
          </button>
          <p style={{ color: "white", marginTop: "0.8rem" }}>
            New user?<Link to="/SignUp">SignUp here</Link>
          </p>
        </div>
      </div>
      {showAlert && <Instructions />}
    </div>
  );
};
export default Login;
