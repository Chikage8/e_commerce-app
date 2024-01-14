import React, {useEffect, useState} from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function RegisterPage(props) {
    const namePattern = /^[a-zA-Z]{2,}$/
    const emailPattern = /^\D+[\w]{3,}[@][\D]{2,}[.][\D]{2,}$/;
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [nameWarning, setNameWarning] = useState(null);
    const [mailWarning, setMailWarning] = useState(null);
    const [passwordWarning, setPasswordWarning] = useState(null);

    const redirect = (e) => {
        navigate(e, { replace: true } );
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }    

    const handleClick = () => {      
        if (emailPattern.test(email) && passwordPattern.test(password) && namePattern.test(name)) {
            setNameWarning(null)
            setMailWarning(null)
            setPasswordWarning(null)
            axios.post('http://localhost:5000/register', {
            email: {email},
            password: {password},
            name: {name}
        }).then(response => { console.log(response.data)
            localStorage.setItem('user', response.data)
            redirect('/')      })
           .catch((error) => console.log(error))
        } else {
            setNameWarning(null) 
            setMailWarning(null)
            setPasswordWarning(null)
        } 
        if (!emailPattern.test(email)){                             
            setMailWarning("Your email is not valid, please enter a different e-mail");
        }
        if (!passwordPattern.test(password)){   
            setPasswordWarning("Minimum 6 characters required");
        } 
        if (!namePattern.test(name)){   
            setNameWarning("Enter a proper name please");
        }  
    } 
    
    return(
        <div className="page-container">
            <Navbar>
                <Logo className="centered-logo" setCategoryApp={props.setCategoryApp} />
            </Navbar>
            <div className="outer-box">
                <div className="inner-box padding-extra-large">
                    <h1 id="register-header">Register</h1>
                    <label htmlFor="register-in-email-input">Name: </label>
                    <input id="register-name-input" name="name" type="text" required onChange={handleNameChange} />
                    {nameWarning ? <h5> { nameWarning } </h5> : null}
                    <label htmlFor="register-email-input">E-mail: </label>
                    <input id="register-email-input" name="email" type="email" required onChange={handleEmailChange} />
                    {mailWarning ? <h5> { mailWarning } </h5> : null}
                    <label htmlFor="register-password-input" >Password: </label>
                    <input id="register-password-input" name="password" type="password" required onChange={handlePasswordChange}/>
                    {passwordWarning ? <h5>{passwordWarning}</h5> : null}
                    <input id="login-submit" type="submit" onClick={handleClick} />
                </div>
                <div>
                    <a className="user-options" href="/signin"><h5>Already have an account? Sign In</h5></a>
                </div>       
            </div>    
        </div>
    )
}

export default RegisterPage;