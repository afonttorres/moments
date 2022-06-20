import styled from "styled-components";

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
    color: var(${props => props.color ? props.color: '--font-color-plain-noBg'});
    & > *{
        color: var(${props => props.color ? props.color: '--font-color-plain-noBg'});
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