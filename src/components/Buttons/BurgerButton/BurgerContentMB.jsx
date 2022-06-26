import React, { useState } from "react";
import { useEffect } from "react";
import { NoScrollContainer, Row } from "../../../pages/Styles.styled";
import { BBMBar, BBMContent } from "../Buttons.styled";


export const BurgerContentMB = (props) => {

    const [content, setContent] = useState([
        { icon: 'icon', content: 'edit', action: props.update },
        { icon: 'icon', content: 'delete', action: props.erase }
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
            <BBMContent id={'dragBar'} bottom={bottom}>
                <BBMBar onTouchMove={handleTouches} />
                <>
                    {content.map((button, key) => (
                        <Row key={key} onClick={button.action}>{button.content}</Row>
                    ))}
                </>
            </BBMContent>
        </NoScrollContainer>
    )
}