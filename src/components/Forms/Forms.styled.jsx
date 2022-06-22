import styled from "styled-components";
import { Row, Col } from "../../pages/Styles.styled";
export const Form = styled.form`
    height: ${props => props.heightMB ? props.heightMB : '100%'};
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    gap:var(--form-gap);
    background-color: var(--main-bg);
    border-radius: .75rem;
    @media (min-width: 820px) {
        height: ${props => props.heightDT ? props.heightDT : '50%'};
        width: 30%;
    }
`;
export const Label = styled.label`
    width: 90%;
    margin: 0 auto;
    font-family: var(--font-family-plain);
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain);
    font-weight: var(--font-weight);

    color: var(${props => props.color});

    &::first-letter{
        text-transform: uppercase;
    }
`;
export const Input = styled.input`
    height: var(--input-height);
    width: var(--input-width);
    border: none;
    align-self: center;
    padding-left: 3%;
    font-family: var(--font-family-plain);
    color: var(--font-family-plain);
    font-size: var(--font-size-plain);
    outline: none;
    background-color: transparent;
    box-shadow: none;
    border-bottom: ${props => props.border};

    &:focus&:hover&:active{
        border-bottom: ${props => props.border};
    }
    &::placeholder{
        text-transform: capitalize;
    }
`;

export const TextArea = styled.textarea`
    height: calc(var(--input-height)*2);
    width: var(--input-width);
    border: none;
    align-self: center;
    padding-left: 3%;
    font-family: var(--font-family-plain);
    color: var(--font-family-plain);
    font-size: var(--font-size-plain);
    outline: none;
    background-color: transparent;
    box-shadow: none;
    border-bottom: ${props => props.border};
    line-height: calc(var(--input-height)*2);
    &:focus&:hover&:active{
        border-bottom: ${props => props.border};
    }
    &::placeholder{
        text-transform: capitalize;
    }
`;

export const Button = styled.button`
    height: var(--button-height);
    width: var(--button-width);
    background-color: var(--button-bg-color);
    border-radius: var(--button-border);
    color: var(--font-color-plain-bg);
    align-self: center;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    &::first-letter{
        text-transform: uppercase;
    }
    &:hover, &:focus, &:active{
        background-color: var(--interaction-opacity);
    }
`;

export const SearchBar = styled(Row)`
    height: var(--input-height);
    width: 100%;
    gap: 0;
    border-bottom: ${props => props.border};
`;
export const SIconCol = styled(Col)`
    width: calc(100% - var(--input-width));
    & > *{
        color: var(${props => props.color});
            & > *{
                color: var(${props => props.color});
                & > *{
                color: var(${props => props.color});
            }
        }
    }
`;