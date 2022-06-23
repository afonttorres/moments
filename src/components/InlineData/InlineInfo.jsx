import React from "react";
import { TextBold } from "../../pages/Styles.styled";
import { generalServices } from "../../services/generalServices";
import { Avatar } from "../Avatar/Avatar";
import { BurgerButton } from "../Buttons";
import { ButtonCol, InfoCol, InlineCont, LocationText } from "./InlineData.styled";

export const InlineInfo = (props) => {
    return (
        <InlineCont id="InlineInfo">
            <ButtonCol>
                <Avatar data={props.moment} />
            </ButtonCol>
            <InfoCol>
                <TextBold>{props.moment.user.alias}</TextBold>
                <LocationText>{props.moment.location}</LocationText>
            </InfoCol>
            <ButtonCol display={props.display}>
                <BurgerButton location={props.location} data={props.moment} update={props.update} erase={props.erase}/>
            </ButtonCol>
        </InlineCont>
    )
}