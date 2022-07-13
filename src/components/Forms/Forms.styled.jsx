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
    text-transform: ${props => props.capi ? props.capi : 'none'};
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
    line-height: calc(var(--input-height)/2);
    &:focus&:hover&:active{
        border-bottom: ${props => props.border};
    }
    &::placeholder{
        text-transform: capitalize;
    }
`;

export const SearcherForm = styled(Form)`
    position: absolute;
    top: 0vh;
`;
export const SearchBar = styled(Row)`
    height: var(--input-height);
    width: 100%;
    gap: 0;
    border-bottom: ${props => props.border};
`;
export const FCancelCol = styled(Col)`
    width: 30%;
`;
export const FIconCol = styled(Col)`
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
export const ComForm = styled(Form)`
    height: fit-content;
    background-color: transparent;
    @media (min-width: 820px) {
        width: 85%;
    }
`;

export const ComBar = styled(Row)`
    height: fit-content;
    gap: 0;
   
    & > input{
       border: 1px solid var(--border-color);
       border-radius: .25rem;
    }
`;

export const SetForm = styled(Form)`
    padding: 2.5%;
    height: calc(100% - ${props => props.heightDT ? props.heightDT : '35%'} - 10vh - 5%);
    position: absolute;
    top: calc(${props => props.heightDT ? props.heightDT : '35%'} + 2.5%);
    box-shadow: 0px 3px 10px var(--border-color);
    @media (max-width: 820px) {
        /* border: 1px solid var(--border-color); */
        box-shadow: none;
        
        height: calc(100% - ${props => props.heightMB ? props.heightMB : '50%'} - 10vh - 5%);
        top: calc(${props => props.heightMB ? props.heightMB : '50%'} + 1%);
    }
    & > input{
        border: solid;
    }
`;

export const SetBtnPos = styled.div`
    height: fit-content;
    width: fit-content;
    position: fixed;
    top: 5vh;
    right: 5vh;
    z-index: var(--last-i);
    & > button{
        width: calc(var(--button-width)/2)
    }
    @media (max-width: 820px) {
        top: 2.5vh;
        right: 2.5vh;
    }
`;

export const SetFormRow = styled(Row)`
    height: fit-content;
    width: 100%;
    & > label{
        height: 100%;
        width: 25%;
        line-height: var(--input-height);
    }
    & > input{
        width: 100%;
    }
`;