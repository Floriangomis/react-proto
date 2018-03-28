import React from "react";

class LoginForm extends React.Component {
    
    loginRef = React.createRef();
    passwordRef = React.createRef();

    sendMessage = e => {
        const loginInformations = {
            login: this.loginRef.value.value,
            password: this.passwordRef.value.value
        }
        this.props.loginBtnHandler(loginInformations);
        this.goToHome();
    };

    goToHome = () => {
        this.props.props.history.push(`/home`);
    };

    render() {
        return (
            <React.Fragment>
                <div className="login-container">
                    <div className="login-input">
                        <label> Login </label>
                        <input type="text" ref={this.loginRef} name="login" />
                    </div>
                    <div className="password-input">
                        <label> Password </label>
                        <input type="password" ref={this.passwordRef} name="password" />
                    </div>
                    <div className="login-btn">
                        <button onClick={ () =>  { this.sendMessage() } }> Log in </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm;