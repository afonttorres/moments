import React, { useState, useEffect } from "react";
import { HiddenContainerDT, HiddenContainerMB } from "../../../pages/Styles.styled";
import { MBurgerContentMB } from "./MBurgerContentMB";
import { Button } from "../Buttons.styled";
import { MBurgerContentDT } from "./MBurgerContentDT";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const MBurgerButton = (props) => {
    const button = <i className="fa-solid fa-ellipsis"></i>;
    const [contetIsOpened, setContentIsOpened] = useState(false);

    const [content, setContent] = useState([
        { icon: 'icon', content: 'edit', action: () => update() },
        { icon: 'icon', content: 'delete', action: () => erase() },
        { icon: 'icon', content: 'print', action: () => print() }
    ])

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

    useEffect(() => {
        !AuthService.isCreator(props.data) ? setContent([{ icon: 'icon', content: 'print', action: ()=>print() }]) : setContent(content);
    }, [])

    const toggleContent = () => {
        setContentIsOpened(!contetIsOpened)
    }

    const update = () => {
        toggleContent(false);
        props.update(props.data);
    }

    const erase = () => {
        toggleContent(false);
        props.erase(props.data);
    }

    const print = () => {
        toggleContent(false);
        setTimeout(() => { navigate(`/moments/${props.data.id}/print`) }, ms);
    }

    return (
        <>
            <Button onClick={toggleContent}> {button} </Button>
            <>
                {!contetIsOpened ? null :
                    <>
                        <HiddenContainerMB>
                            <MBurgerContentDT toggleContent={setContentIsOpened} content={content} />
                        </HiddenContainerMB>
                        <HiddenContainerDT>
                            <MBurgerContentMB toggleContent={setContentIsOpened} content={content} />
                        </HiddenContainerDT>
                    </>
                }</>
        </>
    )
}