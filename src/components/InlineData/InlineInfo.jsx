import React from "react";
import { TextBold } from "../../pages/Styles.styled";
import { Avatar } from "../Avatar/Avatar";
import { MBurgerButton } from "../Buttons/MomentBurgerButton/MBurgerButton";
import { ButtonCol, InfoCol, InlineCont, LocationText } from "./InlineData.styled";

export const InlineInfo = (props) => {

    return (
        <InlineCont>
            <ButtonCol>
                <Avatar user={props.moment.creator} />
            </ButtonCol>
            <InfoCol>
                <TextBold>{props.moment.creator.username}</TextBold>
                <LocationText>{props.moment.location}</LocationText>
            </InfoCol>
            <ButtonCol display={props.display}>
                <MBurgerButton location={props.location} data={props.moment} update={props.update} erase={props.erase} />
            </ButtonCol>
        </InlineCont>
    )
}