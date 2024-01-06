import React from "react";

function SignInPage() {
    
    return(
        <div className="outer-box">
            <div className="inner-box padding-extra-large">
                <h1 id="sign-in-header">Sign In</h1>
                <form id="login-form" action="submit">
                    <label for="sign-in-email-input">E-mail: </label>
                    <input id="sign-in-email-input" type="email" />
                    <label for="sign-in-password-input" >Password: </label>
                    <input id="sign-in-password-input" type="password" />
                    <input type="submit" />
                </form>
            </div>

        </div>
    )
}

export default SignInPage;