import React from "react";
import { TextBold } from "../../pages/Styles.styled";
import { generalServices } from "../../services/generalServices";
import { Avatar } from "../Avatar/Avatar";
import { MBurgerButton } from "../Buttons/MomentBurgerButton/MBurgerButton";
import { ButtonCol, InfoCol, InlineCont, LocationText } from "./InlineData.styled";

export const InlineInfo = (props) => {

    return (
        <InlineCont>
            <ButtonCol>
                <Avatar user={props.user ? props.user : props.moment.userId} />
            </ButtonCol>
            <InfoCol>
                <TextBold>{props.user ? props.user.username : props.moment.userId.username}</TextBold>
                <LocationText>{props.moment.location}</LocationText>
            </InfoCol>
            <ButtonCol display={props.display}>
                <MBurgerButton location={props.location} data={props.moment} update={props.update} erase={props.erase} />
            </ButtonCol>
        </InlineCont>
    )
}