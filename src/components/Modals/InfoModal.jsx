import React from "react";
import { NoScrollContainer, Text } from "../../pages/Styles.styled";
import { ModalButton, ModalContainer } from "./Modals.styled";

export const InfoModal = (props) => {
    return (
        <NoScrollContainer>
            <ModalContainer>
                <Text>{props.msg}</Text>
                <ModalButton onClick={props.closeModal}>Ok</ModalButton>
            </ModalContainer>
        </NoScrollContainer>
    )
}