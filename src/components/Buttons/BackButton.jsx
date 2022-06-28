import React from "react";
import { Link } from "react-router-dom";
import { SBackButton } from "./Buttons.styled";

export const BackButton = (props) => {

    return (
        <SBackButton color={props.color} top={props.top} onClick={props.action}>
            <>{props.location ?
                <Link to={`/${props.location}`}>
                    <i className="fa-solid fa-angle-left"></i>
                </Link>
                :
                <i className="fa-solid fa-angle-left"></i>}
            </>

        </SBackButton>
    )
}