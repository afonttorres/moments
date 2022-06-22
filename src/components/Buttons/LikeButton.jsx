import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const LikeButton = (props) => {
    const [content, setContent] = useState(props.isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>)
    
    useEffect(() => {
        setContent(props.isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>)
    }, [props.isLiked])

    return (
        <Col>
            <Button size={props.size}> {content} </Button>
        </Col>
    )
}