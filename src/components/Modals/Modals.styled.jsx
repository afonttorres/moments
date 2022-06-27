import styled from "styled-components";
import { Row } from "../../pages/Styles.styled";

export const ModalContainer = styled.dialog`
    width: 25%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid var(--button-bg-color);
    border-radius: 0.75rem;
    background: var(--main-bg);
    gap: 30%;
    padding: 2.5%;
    & > *{
        text-align: center;
    }
    @media (max-width: 820px) {
        width: 85%;
    }
`;

export const ModalButton = styled.button`
    height: var(--button-height);
    width: calc(var(--button-width)/2);
    margin: 2.5%;
    background-color: var(--button-bg-color);
    border-radius: var(--button-border);
    color: var(--font-color-plain-bg);
    font-family: var(--font-family-plain);
    box-shadow: none;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const ButtonsRow = styled(Row)`
    height: fit-content;
`;