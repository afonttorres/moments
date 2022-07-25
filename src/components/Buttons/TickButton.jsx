import React from "react";
import { Button } from "./Buttons.styled";

export const TickButton = (props) => {
    const content = <i className="fa-solid fa-check"></i>;
    return (
        <Button onClick={props.action}> {content} </Button>
    )
}