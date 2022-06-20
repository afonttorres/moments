import React, { useState } from "react";
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

    useEffect(() => {
        setContent(momentContent);
    }, [props])

    useEffect(() => {
        setBottom('0vh');
    }, []);

    useEffect(() => {
        if (!isTouched) return;
        closeContent();
    }, [isTouched])

    const closeContent = () => {
        const s = 1;
        const ms = s * 1000;
        let bottomToNum = parseInt(bottom.split("vh")[0]);

        let start = touches[0];
        let end = touches[touches.length - 1];

        if (start < end) {
            setBottom(`${bottomToNum -= 25}vh`);
            setTimeout(() =>{ 
                setIsOpened(false)
                console.log('done');
            }, ms)
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