import React, { useState } from "react";
import { Button } from "./Buttons.styled";
import {InfoModal} from "../Modals/InfoModal";

export const SendButton = ({moment}) => {
    const content = <i className="fa-regular fa-paper-plane"></i>;
    const [msg, setMsg] = useState();

    const shareLink = () => {
        let text;
        window.location.pathname.includes('detail') ? text = window.location.href : text = setPath(window.location.href);
        navigator.clipboard.writeText(text);
        console.log(text);
        openModal('Link copied to clipboard!');
    }

    const setPath = (path)=>{
        let href = path.substring(0, path.lastIndexOf('/'));
        let endpoint = path.substring(path.lastIndexOf('/'), path.lenght)+`/detail/${moment.id}`;
        return href+endpoint;
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
            <Button onClick={shareLink}> {content} </Button>
            <>{msg ? <InfoModal msg={msg} closeModal={closeModal} />: null}</>
            
        </>
    )
}