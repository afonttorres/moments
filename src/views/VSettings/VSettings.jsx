import React from "react";
import { SettingsForm } from "../../components/Forms/SettingsForm";
import { Header } from "../../components/Header/Header";
import { MainContainer, NonTouchable } from "../../pages/Styles.styled";

export const VSettings = ({ user, checkUser, showPreview, update, openModal }) => {
    return (
        <MainContainer>
            <NonTouchable heightMB={'50%'} heightDT={'35%'} />
            <Header user={user} />
            <SettingsForm user={user} checkUser={checkUser} showPreview={showPreview} update={update} openModal={openModal} />
        </MainContainer>
    );
}