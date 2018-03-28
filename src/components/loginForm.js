import React from "react";

class LoginForm extends React.Component {
    
    loginRef = React.createRef();
    passwordRef = React.createRef();

    sendMessage = e => {
        const loginInformations = {
            login: this.loginRef.current.value,
            password: this.passwordRef.current.value
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
                        <label for="login"> Login </label>
                        <input type="text" ref={this.loginRef} name="login" />
                    </div>
                    <div className="password-input">
                        <label for="password"> Password </label>
                        <input type="password" ref={this.passwordRef} name="password" />
                    </div>
                    <div className="login-btn">
                        <button onClick={this.sendMessage.bind(this)}> Log in </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm;