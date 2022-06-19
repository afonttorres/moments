import React, { useState, useEffect } from "react";
import { Col } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const SendButton = () => {
    const [content, setContent] = useState(<i className="fa-regular fa-paper-plane"></i>)
    return (
        <Col>
            <Button> {content} </Button>
        </Col>
    )
}