import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../config/colors";
import Button from "./button";
const NavBarOriginal = () => {
    return (
        <nav
            className="navbar bg-white justify-content-between px-5"
            style={{ marginBottom: 0 }}
        >
            <Link className="navbar-brand" to="/">
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "2rem",
                        color: Colors.primary,
                    }}
                >
                    tagscan
                    <span style={{ color: Colors.secondary }}>.com</span>
                </div>
            </Link>
            <form className="form-inline">
                <Link to="/login">
                    <Button text="Login" />
                </Link>
            </form>
        </nav>
    );
};

export default NavBarOriginal;
