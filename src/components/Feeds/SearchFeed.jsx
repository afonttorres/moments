import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from '../../mockMoments.json';
import { SearchContainer, FeedImg } from "./Feed.styled";
export const SearchFeed = (props) => {

    const [moments, setMoments] = useState(data);

    return (
        <SearchContainer>{[...moments,...moments,...moments,...moments].map((moment, key) => (
            <Link to={`/profile/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
        ))}
        </SearchContainer>
    )
}