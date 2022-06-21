import React, { useState, useEffect } from "react";
import { Col } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const SearchButton = () => {
    const [content, setContent] = useState(<i className="fa-solid fa-magnifying-glass"></i>)
    return (
        <Col>
            <Button> {content} </Button>
        </Col>
    )
}