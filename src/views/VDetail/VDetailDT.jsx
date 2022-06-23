import React from "react";
import { OverlayContainer, NoScrollContainer } from "../../pages/Styles.styled";
import { DetailCardDT } from "../../components/Cards/DetailCardDT";
import { CloseButton } from "../../components/Buttons/CloseButton";

export const VDetailDT = (props) => {

    return (
        <NoScrollContainer>
            <CloseButton location={props.location} color={"--font-color-plain-bg"} />
            <OverlayContainer>
                <DetailCardDT moment={props.moment} update={props.update} erase={props.erase} />
            </OverlayContainer>
        </NoScrollContainer>
    )
}
