import React, { useState, useEffect } from "react";
import { Col, DetailText } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const CancelButton = (props) => {
    const [content, setContent] = useState('Cancel')
    return (
        <Col>
            <Button onClick={props.action}>
                <DetailText>
                    {content}
                </DetailText>
            </Button>
        </Col>
    )
}