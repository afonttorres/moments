import styled from "styled-components";
import { Col, Img, Row } from "../../pages/Styles.styled";

export const FeedContainer = styled.section`
    height: fit-content;
    width: 90%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;   
    overflow-y: scroll;
    min-height: 65vh;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (max-width: 820px) {
        justify-content: center;
        width: 100%;
        min-height: 65vh;
        overflow: scroll;
        gap: var(--mid-gap);
    }
`;

export const SearchContainer = styled(FeedContainer)`
        min-height: 19vh;
        max-height: 70vh;
        height: fit-content;
        justify-content: center;
        position: absolute;
        top: 6vh;
     @media (max-width: 820px) {
        gap: 0;
    }
`;

export const SuggestionsCol = styled(Col)`
        align-items: flex-start;
        width: 100%;
        height: 5vh;
        & > *{
            width: 85%;
            margin: 0 auto;
        }
`;

export const FeedImg = styled(Img)`
    height: 12vh;
    width: 12vh;
    margin: 1%;
    &:hover, &:focus, &:active{
        opacity: var(--opacity);
    }
`;

export const ProfileFeedContainer = styled(SearchContainer)`
    max-height: calc(100% - 10vh - 40%);
    position: absolute;
    top: 40%;
    @media (max-width: 820px) {
        height: calc(50% - 10vh);
        max-height: 35vh;
        top: 50%;
        padding-top: 5%;
    }
`;

export const UserFeed = styled.section`
    height: calc(80vh - 58vh - 10vh);
    width: 95%;
    display: -webkit-inline-box;
    column-gap: 2%;;
    /* grid-auto-flow: column; */
    overflow-x: scroll;
    align-items: center;
    justify-content: flex-start;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (min-width: 820px) {
        height: 20%;
        & > *{
            padding-bottom: 5%;
            width: 5%;
        }
    }
`;

export const TitleRow = styled(Row)`
    height: 10vh;
    width: 85%;
    margin: 0 auto;
    position: absolute;
    top: 0vh;
    justify-content: flex-start;
    
`;
export const LikesSavesFeed = styled(SearchContainer)`
    position: absolute;
    top: calc(10vh + 2vh);
    width: 99%;
    margin: 0 auto;
`;