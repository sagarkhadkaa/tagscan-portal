import React from "react";
import { Button } from "react-bootstrap";
import Input from "./common/input";
class LoginForm extends React.Component {
    state = {
        account: { username: "", password: "" },
        errors: {},
    };
    validate = () => {
        const errors = {};
        const { account } = this.state;
        if (account.username.trim() === "")
            errors.username = "Username is required";
        if (account.password.trim() === "")
            errors.password = "Password is required";

        return Object.keys(errors).length === 0 ? null : errors;
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        // console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;
        //Server Call
        console.log("Submitted");
    };
    validateProperty = ({ name, value }) => {
        if (name === "username") {
            if (value.trim() === "") return "Username is required.";
            //...
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required.";
            //...
        }
    };
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMesssage = this.validateProperty(input);
        if (errorMesssage) errors[input.name] = errorMesssage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account, errors });
    };
    render() {
        const { account, errors } = this.state;
        return (
            <div className="my-4  d-flex flex-column align-items-center ">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button className="btn btn-primary mt-4">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
