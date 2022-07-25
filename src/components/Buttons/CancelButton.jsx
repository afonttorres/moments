import React from "react";
import { DetailText } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const CancelButton = (props) => {
    const content = 'cancel';
    return (
        <Button onClick={props.action}>
            <DetailText>
                {content}
            </DetailText>
        </Button>
    )
}