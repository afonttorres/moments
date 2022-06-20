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
    top: 5vh;
    right: 5vh;
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
    @media (max-width: 820px) {
        left: 5vh;
    }
`;
export const SCloseButton = styled(ReturnButton)`
    right: 10vh;
    @media (max-width: 820px) {
        right: 15vh;
    }

`;
export const BBContent = styled(Col)`
    position: absolute;
    bottom: ${props => props.bottom ? props.bottom : '-25vh'};
    left: .75%;
    height: 25vh;
    width: 98.5%;
    border-radius: 2rem 2rem 0 0;
    background: var(--main-bg);
    justify-content: center;
    align-items: center;
    transition: bottom 1s;
    & > * {
        width: 25%;
    height: 20%;
    border: 1px solid var(--ux-bg);
    border-radius: 0.75rem;
    background-color: var(--interaction-opacity);
    color: var(--font-color-plain-bg);
    font-size: var(--font-size-plain);
    font-family: var(--font-family-plain);
    text-transform: capitalize;   
}
`;

export const BBBar = styled.div`
    position: absolute;
    margin: 0 auto;
    height: 0.3em;
    width: 10%;
    top: 2vh;
`;