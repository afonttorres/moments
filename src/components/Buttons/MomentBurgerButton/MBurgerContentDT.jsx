import React, { useState, useEffect } from "react";
import { NoScrollContainer} from "../../../pages/Styles.styled";
import { CloseButton } from "../CloseButton";
import { BBDContent, BgButton } from "../Buttons.styled";

export const MBurgerContentDT = (props) => {
    const [content, setContent] = useState([
        { icon: 'icon', content: 'edit', action: props.update },
        { icon: 'icon', content: 'delete', action: props.erase },
        { icon: 'icon', content: 'print', action: props.print }
    ]);

    return (
        <NoScrollContainer id="burgerCont">
            <CloseButton color={`--font-color-plain-bg`} index={'--last-i'} action={() => props.toggleContent(false)} />
            <BBDContent>{content.map((button, key) => (
                <BgButton key={key} onClick={button.action}>{button.content}</BgButton>
            ))}
            </BBDContent>
        </NoScrollContainer>
    )
}