import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
   & > *{
    color: var(--font-color-plain-noBg);
    font-size: ${props => props.size ? props.size : null}
   }
   & :hover{
    opacity: var(--text-opacity);
   }
`;