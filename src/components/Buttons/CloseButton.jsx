import React from "react";
import { Link } from "react-router-dom";
import { SCloseButton } from "./Buttons.styled";

export const CloseButton = (props) => {
    return (
        <SCloseButton color={props.color} onClick={props.action}>
            <>
                {props.location ?
                    <Link to={`/${props.location}`}>
                        <i className="fa-solid fa-xmark"></i>
                    </Link>
                    : <i className="fa-solid fa-xmark"></i>
                }
            </>
        </SCloseButton>
    )
}