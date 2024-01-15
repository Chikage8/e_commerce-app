import React, {useState} from "react";

function SignInMenuItem(props) {

    const user = window.localStorage.getItem('user');
    return (
        <div id="signinmenuitem-component-container">
            <a href='/signin' id='sign-in-link'>
                { user ? <span>Welcome {JSON.parse(user).user.name}</span> : <span>Sign In</span> }
            </a>
        </div>
    )
}

export default SignInMenuItem;