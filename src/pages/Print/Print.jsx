import React, { useEffect } from "react"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { momentAPIService } from '../../services/momentAPIService';
import { commentAPIService } from "../../services/commentAPIService";
import { ViewContainer } from "../Styles.styled";
import { VPrint } from "../../views/VPrint/VPrint";

export const Print = () => {

    const [moment, setMoment] = useState();
    const [comments, setComments] = useState();
    const { momentId } = useParams();

    const navigate = useNavigate();
    const printDelay = 3 * 1000;
    const backDelay = 10 * 1000;

    useEffect(() => {
        if (!momentId) return;
        getMoment();
    }, [momentId]);

    useEffect(() => {
        if (!comments) return;
        setTimeout(() => { print() }, printDelay);
        setTimeout(() => { navigate(`/home/detail/${momentId}`) }, backDelay);
    }, [comments])

    const getMoment = () => {
        momentAPIService.getMoment(momentId).then(res => {
            if (!res || res.error) return;
            setMoment(res)
            getComments();
        })
    }

    const getComments = () => {
        commentAPIService.getMomentComments(momentId).then(res => {
            if (!res || res.error) return;
            setComments(res);
        })
    }

    const print = () => {
        window.print();
    }
    
    return (
        <ViewContainer>
            {comments ? <VPrint moment={moment} comments={comments} /> : null}
        </ViewContainer>
    )

}