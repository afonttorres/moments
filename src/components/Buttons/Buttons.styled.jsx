import styled from "styled-components";
import { Col } from "../../pages/Styles.styled";

export const Button = styled.button`
    height: fit-content;
    width: fit-content;
    border: none;
    box-shadow: none;
    outline: none;
    background-color: var(--no-bg);
    cursor: pointer;
   & > *{
    color: var(--font-color-plain-noBg);
    font-size: ${props => props.size ? props.size : null}
   }
   & :hover{
    opacity: var(--text-opacity);
   }
`;
export const ReturnButton = styled(Button)`
    position: absolute;
    display: block;
    top: 5vh;
    right: 5vh;
    z-index: var(${props => props.index ? props.index : '--return-buttons-i'});
    top: ${props => props.top};
    right: ${props => props.right};
    color: var(${props => props.color ? props.color : '--font-color-plain-noBg'});
    & > *{
        color: var(${props => props.color ? props.color : '--font-color-plain-noBg'});
   }
    &:hover, &:focus, &:active{
       color: var(--text-opacity);
    }
`;
export const SBackButton = styled(ReturnButton)`
    left: 10vh;
    top: ${props => props.top};
    right: ${props => props.right};
    @media (max-width: 820px) {
        left: 5vh;
    }
`;
export const SCloseButton = styled(ReturnButton)`
    right: 10vh;
    top: ${props => props.top};
    right: ${props => props.right};
    @media (max-width: 820px) {
        right: 15vh;
    }

`;
export const BBMContent = styled(Col)`
    position: absolute;
    bottom: ${props => props.bottom ? props.bottom : '-25vh'};
    left: .75%;
    height: 25vh;
    width: 98.5%;
    border-radius: 2rem 2rem 0 0;
    background: var(--main-bg);
    z-index: var(--burgers-i);
    transition: bottom 1s;
    & > * {
        color: var(--font-color-plain-bg);
        font-size: var(--font-size-plain);
        font-family: var(--font-family-plain);
        text-transform: capitalize;
        width: var(--button-width);
        height: var(--button-height);
        border-radius: var(--button-border);
        background-color: var(--button-bg-color);   
}
`;

export const BBMBar = styled.div`
    position: absolute;
    margin: 0 auto;
    height: 0.5em;
    width: 10%;
    top: 2vh;
`;

export const BBDContent = styled(Col)`
    border: 1px solid var(--button-bg-color);
    border-radius: 0.75rem;
    width: 25%;
    height: fit-content;
    background: var(--main-bg);
    gap: 0;
    padding: 2.5%;
    & > *{
        color: var(--font-color-plain-bg);
        font-size: var(--font-size-plain);
        font-family: var(--font-family-plain);
        text-transform: capitalize;
        height: var(--button-height);
        width: var(--button-width);
        margin: 2.5%;
        border-radius: var(--button-border);
        background-color: var(--button-bg-color);
        cursor: pointer;
    }
`;