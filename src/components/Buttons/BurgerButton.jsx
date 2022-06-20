import React, { useState, useEffect } from "react";
import { Col, Row } from "../../pages/Styles.styled";
import { BBContainer } from '../Buttons/Buttons.styled';
import { BurgerContent } from "./BurgerContent";
import { Button } from "./Buttons.styled";

export const BurgerButton = (props) => {
    const [button, setButton] = useState(<i className="fa-solid fa-ellipsis"></i>)
    const [contetIsOpened, setContentIsOpened] = useState(false);

    const toggleContent = () => {
        setContentIsOpened(!contetIsOpened)
    }

    return (
        <Col>
            <Button onClick={toggleContent}> {button} </Button>
            <>{!contetIsOpened ? null : <BurgerContent location={props.location} data={props.data} />}</>
        </Col>
    )
}