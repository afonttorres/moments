import React, { useEffect } from "react"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { momentAPIService } from '../../services/momentAPIService';
import { commentAPIService } from "../../services/commentAPIService";
import { Col, ViewContainer } from "../Styles.styled";
import { PreviewCard } from "../../components/Cards/PreviewCard";
import { Comments } from "../../components/Comments/Comments";
import { InlineDesc } from "../../components/InlineData/InlineDesc";
import { VPrint } from "../../views/VPrint/VPrint";

export const Print = () => {

    const [moment, setMoment] = useState();
    const [comments, setComments] = useState();
    const { momentId } = useParams();

    const navigate = useNavigate();
    const printDelay = 3*1000;
    const backDelay = 15*1000;

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
            if (res) {
                setMoment(res)
                getComments();
            }
        })
    }

    const getComments = () => {
        commentAPIService.getMomentComents(momentId).then(res => {
            if (res) setComments(res);
        })
    }

    const print = () => {
        window.print();
    }

    if (comments)
        return (
            <ViewContainer>
                <VPrint moment={moment} comments={comments} />
            </ViewContainer>
        )

}