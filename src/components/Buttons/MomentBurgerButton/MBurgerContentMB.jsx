import React, { useState, useEffect } from "react";
import { NoScrollContainer } from "../../../pages/Styles.styled";
import { BBMBar, BBMContent, BgButton } from "../Buttons.styled";


export const MBurgerContentMB = (props) => {

    const content = [
        { icon: 'icon', content: 'edit', action: props.update },
        { icon: 'icon', content: 'delete', action: props.erase },
        { icon: 'icon', content: 'print', action: props.print }
    ];

    const [bottom, setBottom] = useState('-25vh');
    const [startTouch, setStartTouch] = useState();
    const s = 1;
    const ms = s*1000;


    useEffect(() => {
        setBottom('0vh');
    }, []);

    const setDisplay = (e) =>{
        const endTouch = e.changedTouches[0].screenY;
        if(startTouch < endTouch){
            setBottom(`${parseInt(bottom.split("vh")[0]) - 25}vh`);
            setTimeout(()=>{props.toggleContent(false)},ms);
        }
    }

    return (
        <NoScrollContainer id={'noscroll'}>
            <BBMContent onTouchStart={(e)=>{setStartTouch(e.changedTouches[0].screenY)}} onTouchEnd={(e)=>setDisplay(e)} bottom={bottom}>
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