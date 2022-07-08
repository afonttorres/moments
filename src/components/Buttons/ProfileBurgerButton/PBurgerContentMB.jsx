import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoScrollContainer } from '../../../pages/Styles.styled';
import { BBMContent, BgButton, BBMBar } from '../Buttons.styled';

export const PBurgerContentMB = (props) => {
    const [content, setContent] = useState([
        { icon: 'icon', content: 'settings' },
        { icon: 'icon', content: 'saved' },
        { icon: 'icon', content: 'favorites' }
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
                        <BgButton key={key}><Link to={`/${button.content}`}>{button.content}</Link></BgButton>
                    ))}
                </>
            </BBMContent>
        </NoScrollContainer>
    )
}