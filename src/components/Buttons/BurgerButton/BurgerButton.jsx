import React, { useState, useEffect } from "react";
import { Col, HiddenContainerDT, HiddenContainerMB, Row } from "../../../pages/Styles.styled";
import { BurgerContentMB } from "./BurgerContentMB";
import { Button } from "../Buttons.styled";
import { BurgerContentDT } from "./BurgerContentDT";

export const BurgerButton = (props) => {
    const [button, setButton] = useState(<i className="fa-solid fa-ellipsis"></i>)
    const [contetIsOpened, setContentIsOpened] = useState(false);

    const toggleContent = () => {
        setContentIsOpened(!contetIsOpened)
    }

    const update = () => {
        console.log('update: ', props.data);
        toggleContent(false);
        //props.foo
    }

    const erase = () => {
        console.log('delete: ', props.data);
        toggleContent(false);
        //props.foo
    }

    return (
        <Col>
            <Button onClick={toggleContent}> {button} </Button>
            <>
                {!contetIsOpened ? null :
                    <>
                        <HiddenContainerMB>
                            <BurgerContentDT toggleContent={setContentIsOpened} update={update} erase={erase}/>
                        </HiddenContainerMB>
                        <HiddenContainerDT>
                            <BurgerContentMB toggleContent={setContentIsOpened}  update={update} erase={erase}/>
                        </HiddenContainerDT>
                    </>
                }</>
        </Col>
    )
}