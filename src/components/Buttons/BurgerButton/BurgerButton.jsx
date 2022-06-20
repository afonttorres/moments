import React, { useState, useEffect } from "react";
import { Col, HiddenContainerDT, HiddenContainerMB, Row } from "../../../pages/Styles.styled";
import { BurgerContentMB } from "./BurgerContentMB";
import { Button } from "../Buttons.styled";

export const BurgerButton = (props) => {
    const [button, setButton] = useState(<i className="fa-solid fa-ellipsis"></i>)
    const [contetIsOpened, setContentIsOpened] = useState(false);

    const toggleContent = () => {
        setContentIsOpened(!contetIsOpened)
    }

    return (
        <Col>
            <Button onClick={toggleContent}> {button} </Button>
            <>
                {!contetIsOpened ? null :
                    <>
                        <HiddenContainerMB>
                            {/* Burger desktop */}
                        </HiddenContainerMB>
                        <HiddenContainerDT>
                            <BurgerContentMB location={props.location} data={props.data} toggleContent={setContentIsOpened} />
                        </HiddenContainerDT>
                    </>
                }</>
        </Col>
    )
}