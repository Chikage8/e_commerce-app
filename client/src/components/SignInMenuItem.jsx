import React, {useState, useContext} from "react";
import { UserContext } from "../App.js"

function SignInMenuItem(props) {

    const [user, setUser] = useContext(UserContext);
    
    return (
        <div id="signinmenuitem-component-container">
            <a href='/signin' id='sign-in-link'>
                { user ? <span>Welcome {user.name}</span> : <span>Sign In</span> }
            </a>
        </div>
    )
}

export default SignInMenuItem;