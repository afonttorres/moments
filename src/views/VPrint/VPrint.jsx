import React from "react";
import { useState, useEffect } from "react";
import { InlineDesc } from "../../components/InlineData/InlineDesc";
import { Title, View } from "../../pages/Styles.styled";
import { generalServices } from "../../services/generalServices";
import { PrintCard, PrintImg, PrintOverlay, PrintInfoContainer, PrintImgContainer } from "./Print.styled";


export const VPrint = ({ moment, comments }) => {

    const [styles, setStyles] = useState();
    const [commentsSize, setCommentsSize] = useState();
    const s = 1;
    const ms = s * 1000;

    useEffect(() => {
        setSize();
        setTimeout(() => {
            setStyles({
                bottom: '-25em',
                opacity: '0'
            })
        }, ms)
    }, [])

    const setSize = () =>{
        comments.length < 5 ? setCommentsSize(comments.length) : setCommentsSize(5);
    }
    
    return (
        <View>
            <PrintCard>
                <PrintImgContainer>
                    <PrintImg imgUrl={moment.imgUrl} />
                    <PrintOverlay bottom={styles ? styles.bottom : null} opacity={styles ? styles.opacity : null} />
                </PrintImgContainer>
                <PrintInfoContainer comments={commentsSize}>
                    <Title>{generalServices.capitalize(moment.description)}</Title>
                    {comments ? comments.map((comment, key) => (
                        <>{key >= comments.length - commentsSize? <InlineDesc key={comment.id} data={comment} /> : null}</>
                    )).reverse() : null}
                </PrintInfoContainer>
            </PrintCard>
        </View>
    );
}