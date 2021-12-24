import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class SignupForm extends Form {
    state = {
        data: { name: "", username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name"),
    };

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    };

    render() {
        return (
            <div
                styles={{}}
                className="container mt-3 col-10 col-sm-6 col-md-5 col-lg-4"
            >
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default SignupForm;
