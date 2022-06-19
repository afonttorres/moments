import React, { useState, useEffect } from "react";
import { Row, Col, Text } from "../../pages/Styles.styled";
import { LikeButton, CommentButton, SaveButton, SendButton } from "../Buttons";

export const InlineButtons = (props) => {
    const [buttons, setButtons] = useState([
        { button: <LikeButton isLiked={props.moment.isLiked} />, content: props.moment.likes }
        , { button: <CommentButton />, content: props.moment.comments }
        , { button: <SaveButton isSaved={props.moment.isSaved} />, content: props.moment.saves }
    ]);

    useEffect(() => { }, [props])

    return (
        <Row>{buttons.map((button, key) => (
            <Col key={key}>
                <Row key={key}>
                    {button.button}
                    <Text key={key}>{button.content}</Text>
                </Row>
            </Col>))}
            <Col></Col>
            <Col>
                <SendButton />
            </Col>
        </Row>
    )
}