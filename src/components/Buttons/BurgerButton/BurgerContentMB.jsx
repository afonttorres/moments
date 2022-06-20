import React, { useState } from "react";
import { useEffect } from "react";
import { NoScrollContainer, Row } from "../../../pages/Styles.styled";
import { BBBar, BBContent } from "../Buttons.styled";


export const BurgerContentMB = (props) => {

    const [content, setContent] = useState([
        { icon: 'icon', content: 'edit', action: () => update() },
        { icon: 'icon', content: 'delete', action: () => erase() }
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

    const update = () => {
        console.log('update: ', props.data);
        props.toggleContent(false);
        //props.foo
    }

    const erase = () => {
        console.log('delete: ', props.data);
        props.toggleContent(false);
        //props.foo
    }



    return (
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
    )
}