import React from "react";
import { View, TitleCapi, MainContainer } from "../../pages/Styles.styled";
import { MomentForm } from '../../components/Forms/MomentForm';
import { BackButton } from "../../components/Buttons/BackButton";
import { useEffect } from "react";


export const VUpload = (props) => {

    useEffect(() => { }, [props])
    
    return (
        <MainContainer>
            <BackButton location={props.location} action={props.closeUpdate} />
            <View>
                <TitleCapi>{props.title}</TitleCapi>
                <MomentForm action={props.action} uploadImg={props.uploadImg} moment={props.moment} title={props.title} openModal={props.openModal}/>
            </View>
        </MainContainer>
    )
}