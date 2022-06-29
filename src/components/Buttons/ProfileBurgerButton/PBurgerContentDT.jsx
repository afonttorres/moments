import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NoScrollContainer } from "../../../pages/Styles.styled";
import { BBDContent, BgButton } from "../Buttons.styled";
import { CloseButton } from "../CloseButton";

export const PBurgerContentDT = (props) => {
    const [content, setContent] = useState([
        { icon: 'icon', content: 'settings' },
        { icon: 'icon', content: 'saved' },
        { icon: 'icon', content: 'favorites' }
    ]);

    return (
        <NoScrollContainer id="burgerCont">
            <CloseButton color={`--font-color-plain-bg`} index={'--last-i'} action={() => props.toggleContent(false)} />
            <BBDContent>{content.map((button, key) => (
                <BgButton key={key}><Link to={`/${button.content}`}>{button.content}</Link></BgButton>
            ))}
            </BBDContent>
        </NoScrollContainer>
    )
}