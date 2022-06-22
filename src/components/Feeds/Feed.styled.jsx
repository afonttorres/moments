import styled from "styled-components";
import { Img } from "../../pages/Styles.styled";

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
    z-index: 0;
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
        height: 70vh;
        justify-content: center;
        gap: 0;
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