import React from "react";
import { ViewContainer } from "../../pages/Styles.styled";
import { Spinner } from "./Loader.styled";

export const Loader = () => {
    return (
        <ViewContainer>
            <Spinner />
        </ViewContainer>
    );
}