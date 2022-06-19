import styled from "styled-components";
import { Row } from "../../pages/Styles.styled";

export const MBFooter = styled.footer`
    height: 10vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-bg);
    @media (min-width: 820px) {
        display: none;
    }
`;
export const MBFooterRow = styled(Row)`
    height: 100%;
    width: 70%;
    justify-content: space-between;
    gap: 5%;
`;

export const MBFooterItem = styled.span`
    text-align: center;
    & > *{
            color: var(--font-color-plain-noBg);
            color: ${props => props.color};
        }
`;

export const AddIcon = styled.span`
    font-size: xxx-large;
    font-weight: 900;
    border: 3px solid var(--font-color-plain-noBg);
    border-radius: 50%;
    height: fit-content;
    width: 3.5rem;
    text-align: center;
`;