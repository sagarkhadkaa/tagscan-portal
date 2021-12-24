import React from "react";
const Button = (props) => {
    const borderCustomize = () => {
        if (!props.borderColor) return "1px solid black";
    };
    return (
        <button
            style={{
                borderRadius: "3.625rem",
                fontWeight: "bold",
                backgroundColor: props.backgroundColor,
                color: props.textColor,
                border: borderCustomize(),
            }}
            className="btn btn my-2 my-sm-0"
            type="submit"
        >
            {props.text}
        </button>
    );
};

export default Button;
