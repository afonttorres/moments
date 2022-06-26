import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import data from '../../mockMoments.json';
import { TitleCapi } from "../../pages/Styles.styled";
import { SearchContainer, SuggestionsCol, FeedImg } from "./Feed.styled";

export const SearchFeed = (props) => {

    const [moments, setMoments] = useState([...data, ...data, ...data]);

    console.log(props.suggestions)

    return (
        <SearchContainer>{props.suggestions == undefined ?
            <>{moments.map((moment, key) => (
                <Link key={key} to={`/profile/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
            ))}
            </> :
            <>
                <SuggestionsCol><TitleCapi>Suggestions</TitleCapi></SuggestionsCol>
                {props.suggestions.map((moment, key) => (
                    <Link key={key} to={`/profile/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
                ))
                }
            </>}
        </SearchContainer>
    )
}