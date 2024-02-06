import React, {useState} from "react";

function SignInMenuItem(props) {

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div id="signinmenuitem-component-container">
            <a href='/signin' id='sign-in-link'>
                { user ? <span>Welcome {user.user.name}</span> : <span>Sign In</span> }
            </a>
        </div>
    )
}

export default SignInMenuItem;