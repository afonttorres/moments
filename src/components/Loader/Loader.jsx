import React from "react";
import { ViewContainer } from "../../pages/Styles.styled";
import { Spinner } from "./Loader.styled";

export const Loader = ({index, bg, position}) => {
    return (
        <ViewContainer id='loader' index={index} bg={bg} position={position}>
            <Spinner />
        </ViewContainer>
    );
}