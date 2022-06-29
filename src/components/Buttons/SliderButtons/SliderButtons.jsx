import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "../../../pages/Styles.styled";
import { SliderLeft, SliderRight } from "../Buttons.styled";
export const SliderButtons = (props) => {

    const [buttons, setButtons] = useState(
        {
            left:
                { content: <i className="fa-solid fa-chevron-left"></i> },
            right: { content: <i className="fa-solid fa-angle-right"></i> }
        }
    )

    return (
        <Row>
            <SliderLeft onClick={() => props.slide('back')}>{buttons.left.content}</SliderLeft>
            <SliderRight onClick={() =>  props.slide('forward')}>{buttons.right.content}</SliderRight>
        </Row>
    )
}