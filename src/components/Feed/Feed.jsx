import React, { useEffect, useState } from "react";
import data from '../../mockMoments.json';
import { ViewContainer } from "../../pages/Pages.styled";
import { Card } from '../Card/Card';
import { FeedContainer } from "./Feed.styled";

export const Feed = (props) => {

    const [moments, setMoments] = useState([]);

    useEffect(() => {
        setMoments(data);
    }, [])

    return (
        <ViewContainer>
            <FeedContainer>{moments.map((moment, key) =>
                <Card key={moment.id} moment={moment} location={props.location}/>)}
            </FeedContainer>
        </ViewContainer>
    );
}