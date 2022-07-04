import React, { useState } from "react";
import { OverlayContainer, NoScrollContainer } from "../../pages/Styles.styled";
import { DetailCardDT } from "../../components/Cards/DetailCardDT";
import { CloseButton } from "../../components/Buttons/CloseButton";
import { SliderButtons } from "../../components/Buttons";
import { Profile } from "../../pages/Profile/Profile";
import { Home } from "../../pages/Home/Home";
import { useParams } from "react-router-dom";

export const VDetailDT = (props) => {

    return (
        <>
            <NoScrollContainer>
                <CloseButton location={props.nextLocation} color={"--font-color-plain-bg"} />
                <OverlayContainer>
                    <DetailCardDT moment={props.moment} user={props.user} update={props.update} erase={props.erase} like={props.like} save={props.save} createComment={props.createComment} />
                </OverlayContainer>
                {props.location.includes("profile") ? <SliderButtons slide={props.slide} /> : null}
            </NoScrollContainer>
            <>{props.location.includes("profile") ? <Profile /> : <Home />}</>
        </>
    )
}
