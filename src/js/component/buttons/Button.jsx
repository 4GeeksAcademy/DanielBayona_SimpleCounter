import React from "react";
import "./Button.css";

const Button = ({text, onClick}) =>{
    return(
        <button type="button" className="btn btn-dark btn-lg" onClick={onClick}>{text}</button>
    )
}

export default Button;