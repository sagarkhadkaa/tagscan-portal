import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };
    schema = {
        username: Joi.string().required(),
        password: Joi.string().required(),
    };

    doSubmit = () => {
        //Server Call
        console.log("Submitted");
    };

    render() {
        return (
            <div className="my-4  d-flex flex-column align-items-center ">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}

                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
