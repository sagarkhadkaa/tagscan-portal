import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import "../assets/login.css";
import { Link } from "react-router-dom";
class TestLoginForm extends Form {
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
    handleClick = () => {
        // console.log("Forget me clicked");
    };

    render() {
        return (
            <>
                <div class="login-form">
                    <div className="my-4  d-flex flex-column align-items-center ">
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("username", "Username")}
                            {this.renderInput(
                                "password", //name
                                "Password", //label
                                "password" //type
                            )}

                            {this.renderButton("Login")}
                            <div className="form-check mt-2">
                                <input type="checkbox" htmlFor="rememberMe" />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div
                                    className="text-info mt-2"
                                    onClick={this.handleClick}
                                    style={{ cursor: "pointer" }}
                                >
                                    Forgot Password?
                                </div>
                                <Link to="/register">
                                    <div
                                        className="text-info mt-2"
                                        onClick={this.handleClick}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Sign up
                                    </div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default TestLoginForm;
