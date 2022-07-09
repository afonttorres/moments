import styled from "styled-components";
import { Col, Img } from "../../pages/Styles.styled";

export const PrintCard = styled(Col)`
    height: fit-content;
    width: calc(20em + 6em);
    border-radius: .75rem;
    position: relative;
    box-shadow: 1px 2px 10px var(--border-color);
`;

export const PrintImg = styled(Img)`
    position: relative;
    height: 25em;
    width: 20em;
    top: 2em;
    margin: 0 auto;
    border-radius: 0%;
`;

export const PrintOverlay = styled.div`
    position: absolute;
    margin: 0 auto;
    height: calc(25em - 2em);
    width: 20em;
    bottom: 0;
    opacity: 1;
    bottom: ${props => props.bottom};
    opacity: ${props => props.opacity};
    background-color: black;
    transition: opacity 5s, bottom 2s;
`;
export const PrintImgContainer = styled(Col)`
    height: fit-content;
`;

export const PrintInfoContainer = styled(Col)`
    height: calc(7vh + (7vh * ${props => props.comments == 0 ? 1 : props.comments}));
    width: 85%;
    margin: 0 auto;
`;