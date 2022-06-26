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
     @media (max-width: 820px) {
        min-height: 70vh;
        height: fit-content;
        justify-content: center;
        gap: 0;
    }
`;

export const SuggestionsCol = styled(Col)`
        align-items: flex-start;
        width: 85%;
        height: fit-content;
`;

export const FeedImg = styled(Img)`
    height: 12vh;
    width: 12vh;
    margin: 1%;
    &:hover, &:focus, &:active{
        opacity: var(--opacity);
    }
`;