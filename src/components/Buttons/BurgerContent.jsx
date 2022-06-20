import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { NoScrollContainer, Row } from "../../pages/Styles.styled";
import { BBBar, BBContent } from "./Buttons.styled";
export const BurgerContent = (props) => {

    const [content, setContent] = useState([]);
    const [isOpened, setIsOpened] = useState(true);

    const [momentContent, setMomentContent] = useState([
        { icon: 'icon', content: 'edit', action: () => setIsOpened(false) }, //link to update
        { icon: 'icon', content: 'delete', action: () => setIsOpened(false) } //link to delete
    ]);

    const [bottom, setBottom] = useState('-25vh');
    const [isTouched, setIsTouched] = useState(false);
    const [touches, setTouches] = useState([]);
    const ms = 1;

    useEffect(() => {
        setContent(momentContent);
    }, [props])

    useEffect(() => {
        let bottomToNum = parseInt(bottom.split("vh")[0]);
        let timerID = setInterval(openBurger, ms);
        if (bottomToNum >= 0) clearInterval(timerID);
        return () => clearInterval(timerID);
    }, [bottom]);

    useEffect(() => {
        if (!isTouched) return;
        closeBurger();
    }, [isTouched])

    useEffect(() => {
    }, [bottom])

    const closeBurger = () => {
        let bottomToNum = parseInt(bottom.split("vh")[0]);

        let start = touches[0];
        let end = touches[touches.length - 1];

        if (start < end) {
            setInterval(() => {
                setBottom(`${bottomToNum -= 1}vh`);
                if (bottomToNum <= -25) setIsOpened(false);
            }, 5)
        }
    }

    const openBurger = () => {
        let bottomToNum = parseInt(bottom.split("vh")[0]);
        setBottom(`${bottomToNum += 1}vh`);
        if (bottomToNum >= 0) {
            setBottom('0vh');
        }
    }

    const handleTouches = (event) => {
        let touch = event.changedTouches[0].screenY;
        setTouches([...touches, touch]);
        if (touches.length >= 3) setIsTouched(true);
    }

    console.log(props.location)
    return (
        <>{isOpened ?
            <NoScrollContainer>
                <BBContent id={'dragBar'} bottom={bottom}>
                    <BBBar onTouchMove={handleTouches} />
                    <>
                        {content.map((button, key) => (
                            <Row onClick={button.action}>{button.content}</Row>
                        ))}
                    </>
                </BBContent>
            </NoScrollContainer>
            : null}
        </>

    )
}