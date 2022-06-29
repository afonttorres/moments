import styled from "styled-components";
import { Col, Img } from "../../pages/Styles.styled";

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
    min-height: 60vh;
    @media (max-width: 820px) {
        justify-content: center;
        width: 100%;
        height: 58vh;
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