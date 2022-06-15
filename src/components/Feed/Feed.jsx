import React, { useEffect, useState } from "react";
import data from '../../mockData.json';
import { Card } from '../Card/Card';
import { FeedContainer } from "./Feed.styled";

export const Feed = (props) => {

    const [moments, setMoments] = useState([]);

    useEffect(() => {
        setMoments(data);
    }, [])

    console.log(moments);
    return (
        <FeedContainer>{moments.map((moment, key) =>
            <Card key={moment.id} moment={moment} />)}
        </FeedContainer>
    );
}