import React from "react";
import { DetailTextCapi, TextBold } from "../../pages/Styles.styled";
import { generalServices } from "../../services/generalServices";
import { Avatar } from "../Avatar/Avatar";
import { ButtonCol, InfoCol, InlineCont } from "./InlineData.styled";

export const InlineInfo = (props) => {
    return (
        <InlineCont id="InlineInfo">
            <ButtonCol>
                <Avatar data={props.moment} />
            </ButtonCol>
            <InfoCol>
                <TextBold>{props.moment.user}</TextBold>
                <DetailTextCapi>{props.moment.location}</DetailTextCapi>
            </InfoCol>
            <ButtonCol>
                <i className="fa-solid fa-ellipsis"></i>
            </ButtonCol>
        </InlineCont>
    )
}