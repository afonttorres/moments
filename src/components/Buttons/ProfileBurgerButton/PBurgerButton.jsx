import React from "react";
import { HiddenContainerDT, HiddenContainerMB } from "../../../pages/Styles.styled";
import { PBurgerContentDT } from "./PBurgerContentDT";
import { PBurgerContentMB } from "./PBurgerContentMB";
import { Button } from "../Buttons.styled";
import { useState } from "react";
export const PBurgerButton = (props) =>{
    const [button, setButton] = useState(<i className="fa-solid fa-bars"></i>)
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
                            <PBurgerContentDT toggleContent={setContentIsOpened} update={update} erase={erase}/>
                        </HiddenContainerMB>
                        <HiddenContainerDT>
                            <PBurgerContentMB toggleContent={setContentIsOpened}  update={update} erase={erase}/>
                        </HiddenContainerDT>
                    </>
                }</>
        </>
    )
}