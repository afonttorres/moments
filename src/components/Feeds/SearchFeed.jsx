import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import data from '../../mockMoments.json';
import { TextCapi, TitleCapi, Col } from "../../pages/Styles.styled";
import { SearchContainer, SuggestionsCol, FeedImg } from "./Feed.styled";

export const SearchFeed = (props) => {

    const [moments, setMoments] = useState([...data, ...data, ...data]);

    return (
        <SearchContainer>{props.suggestions == undefined ?
            <>{moments.map((moment, key) => (
                <Link key={key} to={`/profile/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
            ))}
            </> :
            <>
                <SuggestionsCol><TitleCapi>Suggestions</TitleCapi></SuggestionsCol>
                {props.suggestions.length < 1 ?
                    <Col><TextCapi>Sorry, we did not found "{props.search}"</TextCapi></Col>
                    :
                    <>{props.suggestions.map((moment, key) => (
                        <Link key={key} to={`/profile/detail/${moment.id}`}><FeedImg key={key} imgUrl={moment.imgUrl} /></Link>
                    ))
                    }
                    </>}
            </>}
        </SearchContainer>
    )
}