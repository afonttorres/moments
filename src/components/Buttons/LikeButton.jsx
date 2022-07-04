import React, { useEffect, useState } from "react";
import { Col } from "../../pages/Styles.styled";
import { Button } from "./Buttons.styled";

export const LikeButton = (props) => {
    const [content, setContent] = useState(props.data.liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>)
    
    useEffect(() => {
        setContent(props.data.liked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>)
    }, [props.data.liked])

    return (
            <Button onClick={props.like ? ()=>props.like(props.data) : ()=>console.log('still not implemented')} size={props.size}> {content} </Button>
    )
}