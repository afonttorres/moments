import React from "react";
import { Link } from "react-router-dom";
import { SBackButton } from "./Buttons.styled";

export const BackButton = (props) => {
    return (
        <SBackButton color={props.color} onClick={() => props.action ? props.action : null}>
            <Link to={`/${props.location ? props.location : 'home'}`}>
                <i className="fa-solid fa-angle-left"></i>
            </Link>
        </SBackButton>
    )
}