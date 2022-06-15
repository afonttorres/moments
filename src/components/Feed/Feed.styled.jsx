import styled from "styled-components";

export const FeedContainer = styled.section`
    height: fit-content;
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: 30vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;   
    overflow-y: scroll;
    @media (max-width: 820px) {
        justify-content: center;
        width: 100%;
        height: 58vh;
        overflow: scroll;
    }
`;