import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NoScrollContainer } from '../../../pages/Styles.styled';
import { BBMContent, BgButton, BBMBar } from '../Buttons.styled';
import { InfoModal } from "../../Modals/InfoModal";

export const PBurgerContentMB = (props) => {

    const navigate = useNavigate();

    const [content, setContent] = useState([
        { icon: 'icon', content: 'settings', action: () => navigate(`/settings`) },
        { icon: 'icon', content: 'saved', action: () => navigate(`/saved`) },
        { icon: 'icon', content: 'favorites', action: () => navigate(`/favorites`) },
        { icon: 'icon', content: 'log out', action: () => logOut() }
    ]);

    const [bottom, setBottom] = useState('-35vh');
    const [startTouch, setStartTouch] = useState();
    const [msg, setMsg] = useState();

    useEffect(() => {
        setBottom('0vh');
    }, []);

    const logOut = () => {
        const s = 3;
        const ms = s * 1000;
        localStorage.removeItem('log');
        setTimeout(() => { openModal(`Logged out successfully!`) }, [0 * 1000]);
        // setTimeout(() => { props.toggleContent(false) }, [ms]);
        setTimeout(() => { navigate('/log-in') }, ms);
    }

    const setDisplay = (e) => {
        const s = 1;
        const ms = s * 1000;
        const endTouch = e.changedTouches[0].screenY;
        if (startTouch < endTouch) {
            setBottom(`${parseInt(bottom.split("vh")[0]) - 35}vh`);
            setTimeout(() => { props.toggleContent(false) }, ms);
        }
    }

    //MODALS
    const openModal = (msg) => {
        setMsg(msg)
    }

    const closeModal = () => {
        setMsg();
    }

    return (
        <>
            <NoScrollContainer id={'noscroll'}>
                <BBMContent onTouchStart={(e) => { setStartTouch(e.changedTouches[0].screenY) }} onTouchEnd={(e) => setDisplay(e)} height={'35vh'} bottom={bottom}>
                    <BBMBar />
                    <>
                        {content.map((button, key) => (
                            <BgButton onClick={button.action} key={key}>{button.content}</BgButton>
                        ))}
                    </>
                </BBMContent>
            </NoScrollContainer>
            <>{msg !== undefined ? <InfoModal id='MODAL' msg={msg} closeModal={closeModal} /> : null}</>
        </>
    )
}