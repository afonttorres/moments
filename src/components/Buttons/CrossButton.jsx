import React from "react";
import { Button } from "./Buttons.styled";

export const CrossButton = (props) => {
    const content = <i className="fa-solid fa-xmark"></i>;
    return (
        <Button onClick={props.action}> {content} </Button>
    )
}