import React, { useEffect, useState } from "react";
import data from '../../mockMoments.json';
import { MainContainer } from "../../pages/Styles.styled";
import { Card } from '../Cards/Card';
import { FeedContainer } from "./Feed.styled";

export const Feed = (props) => {

    const [moments, setMoments] = useState([]);

    useEffect(() => {
        setMoments(data);
    }, [])

    return (
        <MainContainer>
            <FeedContainer>{moments.map((moment, key) =>
                <Card key={moment.id} moment={moment} location={props.location}/>)}
            </FeedContainer>
        </MainContainer>
    );
}