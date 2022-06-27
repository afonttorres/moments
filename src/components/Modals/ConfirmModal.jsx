import React from "react";
import { NoScrollContainer, Text } from "../../pages/Styles.styled";
import { ModalButton, ModalContainer, ButtonsRow } from "./Modals.styled";

export const ConfirmModal = (props) =>{
    return (
        <NoScrollContainer>
            <ModalContainer>
                <Text>{props.question}</Text>
                <ButtonsRow>
                    <ModalButton onClick={props.closeDialog}>No</ModalButton>
                    <ModalButton onClick={()=> props.confirm(props.data)}>Yes</ModalButton>
                </ButtonsRow>
            </ModalContainer>
        </NoScrollContainer>
    )
}