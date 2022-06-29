import React, { useState, useEffect } from "react";
import { HiddenContainerDT, HiddenContainerMB, Row } from "../../../pages/Styles.styled";
import { MBurgerContentMB } from "./MBurgerContentMB";
import { Button } from "../Buttons.styled";
import { MBurgerContentDT } from "./MBurgerContentDT";

export const MBurgerButton = (props) => {
    const [button, setButton] = useState(<i className="fa-solid fa-ellipsis"></i>)
    const [contetIsOpened, setContentIsOpened] = useState(false);

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

    return (
        <>
            <Button onClick={toggleContent}> {button} </Button>
            <>
                {!contetIsOpened ? null :
                    <>
                        <HiddenContainerMB>
                            <MBurgerContentDT toggleContent={setContentIsOpened} update={update} erase={erase}/>
                        </HiddenContainerMB>
                        <HiddenContainerDT>
                            <MBurgerContentMB toggleContent={setContentIsOpened}  update={update} erase={erase}/>
                        </HiddenContainerDT>
                    </>
                }</>
        </>
    )
}