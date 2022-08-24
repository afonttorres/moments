import React, { useEffect } from "react"
import { useState } from "react";
import { NoBgButton } from "./Buttons.styled";
export const ChangeImageButton = ({ action }) => {
    const content = 'Change image';
    const [styles, setStyles] = useState();

    useEffect(() => { }, [styles]);

    const handleClick = (e) => {
        action(e);
        setStyles({ display: 'none' })
    }

    return (
        <NoBgButton style={styles && styles} onClick={handleClick}> {content} </NoBgButton>
    )
}