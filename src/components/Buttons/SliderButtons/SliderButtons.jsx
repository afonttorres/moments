import React from "react";
import { Row } from "../../../pages/Styles.styled";
import { SliderLeft, SliderRight } from "../Buttons.styled";
export const SliderButtons = ({ slide }) => {

    const buttons =
    {
        left:
            { content: <i className="fa-solid fa-chevron-left"></i> },
        right: { content: <i className="fa-solid fa-angle-right"></i> }
    }

    return (
        <Row>
            <SliderLeft onClick={() => slide('back')}>{buttons.left.content}</SliderLeft>
            <SliderRight onClick={() => slide('forward')}>{buttons.right.content}</SliderRight>
        </Row>
    )
}