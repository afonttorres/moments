import React, { useState } from "react";
import { useEffect } from "react";
import { NoScrollContainer, Row, TextCapi } from "../../../pages/Styles.styled";
import { CloseButton } from "../CloseButton";
import { BBDContent } from "../Buttons.styled";

export const BurgerContentDT = (props) => {
    const [content, setContent] = useState([
        { icon: 'icon', content: 'edit', action: props.update },
        { icon: 'icon', content: 'delete', action: props.erase }
    ]);

    return (
        <NoScrollContainer id="burgerCont">
            <CloseButton color={`--font-color-plain-bg`} index={'--last-i'} action={() => props.toggleContent(false)} />
            <BBDContent>{content.map((button, key) => (
                <Row key={key} onClick={button.action}>{button.content}</Row>
            ))}
            </BBDContent>
        </NoScrollContainer>
    )
}