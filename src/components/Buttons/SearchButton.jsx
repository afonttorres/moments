import React from "react";
import { Button } from "./Buttons.styled";

export const SearchButton = () => {
    const content = <i className="fa-solid fa-magnifying-glass"></i>;
    return (
        <Button> {content} </Button>
    )
}