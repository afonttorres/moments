import styled from "styled-components";
export const Form = styled.form`
    height: 50%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap:var(--form-gap);
    @media (max-width: 820px) {
        height: 50%;
        width: 85%;
    }
`;
export const Label = styled.label`
    width: 90%;
    margin: 0 auto;
    font-family: var(--font-family-plain);
    color: var(--font-color-plain-noBg);
    color: var(${props => props.color});
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain);
    font-weight: 900;
    &::first-letter{
        text-transform: uppercase;
    }
`;
export const Input = styled.input`
    min-height: 7.5%;
    width: 90%;
    border: none;
    align-self: center;
    border-bottom: 1px solid var(--border-color);
    border-bottom: ${props => props.border};
    padding-left: 3%;
    font-family: var(--font-family-plain);
    color: var(--font-family-plain);
    font-size: var(--font-size-plain);
    outline: none;
    background-color: transparent;
    box-shadow: none;
    &:focus&:hover&:active{
        border-bottom: 2px solid var(--ux-border-color);
    }
    &::placeholder{
        text-transform: capitalize;
    }
`;
export const SButton = styled.button`
    height: 4vh;
    width: 25vh;
    background-color: var(--ux-bg);
    border-radius: 2rem;
    color: var(--font-color-plain-bg);
    align-self: center;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 3%;
    cursor: pointer;
    &::first-letter{
        text-transform: uppercase;
    }
    &:hover, &:focus, &:active{
        background-color: var(--interaction-opacity);
    }
`;

export const MForm = styled(Form)` 
    height: ${props => props.formHeight};
    height: 75%;
`;

export const MInput = styled(Input)`
    min-height: ${props => props.inputHeight};
    min-height: 5%;
`;