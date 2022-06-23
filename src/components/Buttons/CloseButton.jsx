import React from "react";
import { Link } from "react-router-dom";
import { SCloseButton } from "./Buttons.styled";

export const CloseButton = (props) => {
    return (
        <SCloseButton color={props.color} index={props.index} top={props.top} right={props.right} onClick={props.action}>
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