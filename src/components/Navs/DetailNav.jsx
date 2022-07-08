import React from "react";
import { Row, Col, Text, Title } from "../../pages/Styles.styled";
import { BackButton } from "../Buttons/BackButton";
import { NavWrapper } from "./Nav.styled";
export const DetailNav = (props) => {

    return (
        <NavWrapper>
            <Row>
                <BackButton top={'unset'} location={props.location}/>
                <Col>
                    <Title>{props.moment.creator.username}</Title>
                    <Text>PUBLICATIONS</Text>
                </Col>
            </Row>
        </NavWrapper>
    )
}