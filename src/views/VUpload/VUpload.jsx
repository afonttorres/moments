import React from "react";
import { View, Title, MainContainer } from "../../pages/Styles.styled";
import { Link } from 'react-router-dom';
import { MomentForm } from '../../components/Forms/MomentForm';
import { BackButton } from "../../components/Buttons/BackButton";


export const VUpload = (props) => {

    return (
        <MainContainer>
            <BackButton location={props.location} action={props.closeUpdate} />
            <View>
                <Title>{props.moment ? 'Update' : 'Upload'}</Title>
                <MomentForm action={props.action} moment={props.moment} />
            </View>
        </MainContainer>
    )
}