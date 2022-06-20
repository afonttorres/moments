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
        <NoScrollContainer>
            <CloseButton color={`--font-color-plain-bg`} action={() => props.toggleContent(false)} />
            <BBDContent>{content.map((button, key) => (
                <Row onClick={button.action}><TextCapi>{button.content}</TextCapi></Row>
            ))}
            </BBDContent>
        </NoScrollContainer>
    )
}