import React from "react";
import { ProfileFeed } from "../../components/Feeds/ProfileFeed";
import { Header } from "../../components/Header/Header";
import { MainContainer } from "../../pages/Styles.styled";

export const VProfile = (props) => {

    return (
        <MainContainer>
            <Header user={props.user} />
            <ProfileFeed moments={props.moments} />
        </MainContainer>
    )
}