import React, { useEffect, useState, useContext } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App.js"

function SignInPage(props) {
  const emailPattern = /^\D+[\w]{3,}[@][\D]{2,}[.][\D]{2,}$/;
  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [mailWarning, setMailWarning] = useState(null);
  const [passwordWarning, setPasswordWarning] = useState(null);
  const [warning, setWarning] = useState(null);

  const redirect = (e) => {
    navigate(e, { replace: true });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (emailPattern.test(email) && passwordPattern.test(password)) {
      setWarning(null);
      setMailWarning(null);
      setPasswordWarning(null);
      axios.post("http://localhost:5000/signin", {
          email: { email },
          password: { password },
        })
        .then((response) => {
          typeof response.data == "object"
            ? setUser(response.data.user)                                      // localStorage.setItem("user", JSON.stringify(response.data))
            : setWarning(
                "This email and password combination is not registered to our services"
              );
          typeof response.data == "object"
            ? redirect("/")
            : setMailWarning(null);
        })
        .catch((error) => console.log(error));
    } else if (passwordPattern.test(password)) {
      // only mail is wrong
      setWarning(null);
      setPasswordWarning(null);
      setMailWarning(
        "Your email is not valid, please enter a different e-mail"
      );
    } else if (emailPattern.test(email)) {
      // only password is wrong
      setWarning(null);
      setMailWarning(null);
      setPasswordWarning("Minimum 6 characters required");
    } else {
      // both mail and password is wrong
      setWarning(null);
      setMailWarning(
        "Your email is not valid, please enter a different e-mail"
      );
      setPasswordWarning("Minimum 6 characters required");
    }
  };

  return (
    <div className="page-container user-management-page">
      <Navbar>
        <Logo className="centered-logo" setCategoryApp={props.setCategoryApp} />
      </Navbar>
      <div className="outer-box">
        <div className="inner-box padding-extra-large">
          <h1 id="sign-in-header">Sign In</h1>
          <label htmlFor="sign-in-email-input">E-mail: </label>
          <input
            id="sign-in-email-input"
            className="user-management-input"
            name="email"
            type="email"
            required
            onChange={handleEmailChange}
          />
          {mailWarning ? <h5>{mailWarning}</h5> : null}
          <label htmlFor="sign-in-password-input">Password: </label>
          <input
            id="sign-in-password-input"
            className="user-management-input"
            name="password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
          {passwordWarning ? <h5>{passwordWarning}</h5> : null}
          {warning ? <h5>{warning}</h5> : null}
          <input
            id="login-submit"
            className="user-management-input"
            type="submit"
            onClick={handleClick}
          />
        </div>
        <div>
          <a className="user-options" href="/register">
            <h5>New to Azamon? Register here</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
