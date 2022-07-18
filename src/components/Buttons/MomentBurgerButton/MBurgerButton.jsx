import React, { useState } from "react";
import { HiddenContainerDT, HiddenContainerMB, Row } from "../../../pages/Styles.styled";
import { MBurgerContentMB } from "./MBurgerContentMB";
import { Button } from "../Buttons.styled";
import { MBurgerContentDT } from "./MBurgerContentDT";
import { useNavigate } from "react-router-dom";

export const MBurgerButton = (props) => {
    const [button, setButton] = useState(<i className="fa-solid fa-ellipsis"></i>)
    const [contetIsOpened, setContentIsOpened] = useState(false);

    const navigate = useNavigate();
    const s = 1;
    const ms = s * 1000;

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
                            <MBurgerContentDT toggleContent={setContentIsOpened} update={update} erase={erase} print={print}/>
                        </HiddenContainerMB>
                        <HiddenContainerDT>
                            <MBurgerContentMB toggleContent={setContentIsOpened} update={update} erase={erase} print={print}/>
                        </HiddenContainerDT>
                    </>
                }</>
        </>
    )
}