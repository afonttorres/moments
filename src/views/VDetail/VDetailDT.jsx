import React from "react";
import { OverlayContainer, NoScrollContainer } from "../../pages/Styles.styled";
import { DetailCardDT } from "../../components/Cards/DetailCardDT";
import { CloseButton } from "../../components/Buttons/CloseButton";
import { SliderButtons } from "../../components/Buttons";

export const VDetailDT = (props) => {

    return (
        <NoScrollContainer>
            <CloseButton location={props.location} color={"--font-color-plain-bg"} />
            <OverlayContainer>
                <DetailCardDT moment={props.moment} user={props.user} update={props.update} erase={props.erase} like={props.like} save={props.save}/>
            </OverlayContainer>
            {props.location === 'profile' ? <SliderButtons slide={props.slide}/> : null}
        </NoScrollContainer>
    )
}
