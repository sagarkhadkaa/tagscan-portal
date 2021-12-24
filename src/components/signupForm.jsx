import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

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
            <div class="login-form">
                <div className="my-4  d-flex flex-column align-items-center ">
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("name", "Name")}
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Register")}
                        <div className="d-flex justify-content-around">
                            <div
                                className="text-info mt-2"
                                onClick={this.handleClick}
                                style={{ cursor: "pointer" }}
                            >
                                Already Have an Account?
                            </div>
                            <Link to="/login">
                                <div
                                    className="text-info mt-2"
                                    onClick={this.handleClick}
                                    style={{ cursor: "pointer" }}
                                >
                                    Log In
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;
