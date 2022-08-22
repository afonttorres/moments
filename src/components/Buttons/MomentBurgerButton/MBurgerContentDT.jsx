import React from "react";
import { NoScrollContainer } from "../../../pages/Styles.styled";
import { CloseButton } from "../CloseButton";
import { BBDContent, BgButton } from "../Buttons.styled";

export const MBurgerContentDT = (props) => {

    return (
        <NoScrollContainer id="burgerCont">
            <CloseButton color={`--font-color-plain-bg`} index={'--last-i'} action={() => props.toggleContent(false)} />
            <BBDContent>{props.content && props.content.map((button, key) => (
                <BgButton key={key} onClick={() => { button.action() }}>{button.content}</BgButton>
            ))}
            </BBDContent>
        </NoScrollContainer>
    )
}