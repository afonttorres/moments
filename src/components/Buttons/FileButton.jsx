import React from "react";
import { Button } from "./Buttons.styled";

export const FileButton = (props) => {
    const content = <i className="fa-solid fa-cloud-arrow-up"></i>;
    return (
        <Button onClick={props.action}> {content} </Button>
    )
}