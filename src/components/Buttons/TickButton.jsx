import React, { useState, useEffect } from "react";
import { Col } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const TickButton = (props) => {
    const [content, setContent] = useState(<i className="fa-solid fa-check"></i>)
    return (
        <Col>
            <Button onClick={props.action}> {content} </Button>
        </Col>
    )
}