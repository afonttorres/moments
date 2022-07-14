import React from "react";
import { NoScrollContainer, Text } from "../../pages/Styles.styled";
import { ModalButton, ModalContainer } from "./Modals.styled";

export const InfoModal = ({msg, closeModal, index}) => {

    return (
        <NoScrollContainer index={index}>
            <ModalContainer>
                <Text>{msg}</Text>
                <ModalButton onClick={closeModal}>Ok</ModalButton>
            </ModalContainer>
        </NoScrollContainer>
    )
}