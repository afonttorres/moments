import React, { useState, useEffect } from "react";
import { Row, Col, Text } from "../../pages/Styles.styled";
import { LikeButton, CommentButton, SaveButton, SendButton } from "../Buttons";
import { InlineCont } from "../InlineData/InlineData.styled";

export const InlineButtons = (props) => {
    const [buttons, setButtons] = useState([
        { button: <LikeButton like={props.like} data={props.moment} />, content: props.moment.likes }
        , { button: <CommentButton />, content: props.moment.comments }
        , { button: <SaveButton save={props.save} data={props.moment} />, content: props.moment.saves }
    ]);

    useEffect(() => {
        setButtons([
            { button: <LikeButton like={props.like} data={props.moment} />, content: props.moment.likes }
            , { button: <CommentButton />, content: props.moment.comments }
            , { button: <SaveButton save={props.save} data={props.moment} />, content: props.moment.saves }
        ])
    }, [props])

    return (
        <InlineCont width={props.width} >{buttons.map((button, key) => (
            <Col key={key}>
                <Row gap={'20%'} key={key}>
                    {button.button}
                    <Text key={key}>{button.content}</Text>
                </Row>
            </Col>))}
            <Col></Col>
            <Col>
                <SendButton />
            </Col>
        </InlineCont>
    )
}