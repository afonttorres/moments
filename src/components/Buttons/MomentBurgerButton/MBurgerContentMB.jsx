import React, { useState, useEffect } from "react";
import { NoScrollContainer, Row } from "../../../pages/Styles.styled";
import { BBMBar, BBMContent, BgButton } from "../Buttons.styled";


export const MBurgerContentMB = (props) => {

    const [content, setContent] = useState([
        { icon: 'icon', content: 'edit', action: props.update },
        { icon: 'icon', content: 'delete', action: props.erase },
        { icon: 'icon', content: 'print', action: props.print }
    ]);

    const [bottom, setBottom] = useState('-25vh');
    const [isTouched, setIsTouched] = useState(false);
    const [touches, setTouches] = useState([]);

    useEffect(() => {
        setBottom('0vh');
    }, []);

    useEffect(() => {
        if (!isTouched) return;
        closeContent();
    }, [isTouched])


    const handleTouches = (event) => {
        let touch = event.changedTouches[0].screenY;
        setTouches([...touches, touch]);
        if (touches.length >= 3) setIsTouched(true);
    }

    const closeContent = () => {
        const s = 1;
        const ms = s * 1000;
        let bottomToNum = parseInt(bottom.split("vh")[0]);

        let start = touches[0];
        let end = touches[touches.length - 1];

        if (start < end) {
            setBottom(`${bottomToNum -= 25}vh`);
            setTimeout(() => {
                props.toggleContent(false);
            }, ms)
        }
    }

    return (
        <NoScrollContainer id={'noscroll'}>
            <BBMContent onTouchMove={handleTouches} id={'dragBar'} bottom={bottom}>
                <BBMBar />
                <>
                    {content.map((button, key) => (
                        <BgButton key={key} onClick={button.action}>{button.content}</BgButton>
                    ))}
                </>
            </BBMContent>
        </NoScrollContainer>
    )
}