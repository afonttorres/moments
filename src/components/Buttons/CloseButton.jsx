import React from "react";
import { Link } from "react-router-dom";
import { SCloseButton } from "./Buttons.styled";

export const CloseButton = (props) => {
    return (
        <SCloseButton color={props.color} onClick={() => props.action ? props.action : null}>
            <Link to={`/${props.location ? props.location : null}`}>
                <i className="fa-solid fa-xmark"></i>
            </Link>
        </SCloseButton>
    )
}