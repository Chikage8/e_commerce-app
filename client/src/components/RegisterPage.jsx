import React, { useEffect, useState, useContext } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App.js"
import bcryptjs from "bcryptjs"

function RegisterPage(props) {
  const namePattern = /^[a-zA-Z]{2,}$/;
  const emailPattern = /^\D+[\w]{3,}[@][\D]{2,}[.][\D]{2,}$/;
  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [nameWarning, setNameWarning] = useState(null);
  const [mailWarning, setMailWarning] = useState(null);
  const [passwordWarning, setPasswordWarning] = useState(null);

  const redirect = (e) => {
    navigate(e, { replace: true });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (
      emailPattern.test(email) &&
      passwordPattern.test(password) &&
      namePattern.test(name)
    ) {
      setNameWarning(null);
      setMailWarning(null);
      setPasswordWarning(null);
      // axios
      //   .post("http://localhost:5000/register", {
      //     email: { email },
      //     password: { password },
      //     name: { name },
      //   })
      //   .then((response) => {
      //     console.log("setting user");
      //     setUser([response.data.user[0]])  
      //     console.log("redirecting...");                                                                // localStorage.setItem("user", response.data);;
      //     redirect("/");
      //   })
      // .catch((error) => console.log(error));

      const salt = bcryptjs.genSaltSync(10);
      let hash = bcryptjs.hashSync(password, salt);
      console.log(hash)

      axios.post("http://localhost:5000/register", {
          email: { email },
          password: { hash },
          name: { name },
        })
        .then((response) => {
          if (typeof response.data == "object")  {
            console.log("setting user");
            setUser(response.data.user[0]);  
            console.log("redirecting...");                                                                // localStorage.setItem("user", response.data);;
            redirect("/");
          }
        })
      .catch((error) => console.log(error));
    } else {
      setNameWarning(null);
      setMailWarning(null);
      setPasswordWarning(null);
    }
    if (!emailPattern.test(email)) {
      setMailWarning(
        "Your email is not valid, please enter a different e-mail"
      );
    }
    if (!passwordPattern.test(password)) {
      setPasswordWarning("Minimum 6 characters required");
    }
    if (!namePattern.test(name)) {
      setNameWarning("Enter a proper name please");
    }
  };

  return (
    <div className="page-container">
      <Navbar>
        <Logo className="centered-logo" setCategoryApp={props.setCategoryApp} />
      </Navbar>
      <div className="outer-box">
        <div className="inner-box padding-extra-large">
          <h1 id="register-header">Register</h1>
          <label htmlFor="register-name-input">Name: </label>
          <input
            id="register-name-input"
            className="user-management-input"
            name="name"
            type="text"
            required
            onChange={handleNameChange}
            // autoComplete="name-surname"
          />
          {nameWarning ? <h5> {nameWarning} </h5> : null}
          <label htmlFor="register-email-input">E-mail: </label>
          <input
            id="register-email-input"
            className="user-management-input"
            name="email"
            type="email"
            required
            onChange={handleEmailChange}
            // autoComplete="email"
          />
          {mailWarning ? <h5> {mailWarning} </h5> : null}
          <label htmlFor="register-password-input">Password: </label>
          <input
            id="register-password-input"
            className="user-management-input"
            name="password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
          {passwordWarning ? <h5>{passwordWarning}</h5> : null}
          <input
            id="login-submit"
            className="user-management-input"
            type="submit"
            onClick={handleClick}
          />
        </div>
        <div>
          <a className="user-options" href="/signin">
            <h5>Already have an account? Sign In</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
