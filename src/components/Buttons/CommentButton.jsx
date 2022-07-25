import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Buttons.styled";

export const CommentButton = ({ data }) => {
    const content = <i className="fa-regular fa-comment-dots"></i>;
    const location = useLocation().pathname;


    const navigate = useNavigate();

    const routing = () =>{
        if(location.includes('profile')) return;
        navigate(`/home/detail/${data.id}`);
    }

    return (
        <Button onClick={routing}> {content} </Button>
    )
}