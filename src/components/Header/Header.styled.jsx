import styled from "styled-components";
import { Col, Row } from "../../pages/Styles.styled";
export const HeaderContainer = styled(Col)`
    border-bottom: 1px solid var(--border-color);
    height: 35%;
    position: absolute;
    top: 0vh;
    gap: 0;
    z-index: var(--overlay-i);
    @media (max-width: 820px) {
        height: 50%;
        z-index: var(--burgers-i);
    }
`;
export const Banner = styled(Col)`
    &:before{
        background-image: url(${props => props.imgUrl});
        background-color: lavender;
        background-position: center;
        background-size: cover;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        opacity: .5;
    }
`;
export const AvatarContainer = styled(Col)`
    position: absolute;
    top: 35%;
    height: 0;
    width: 5%;
    padding-top: 5%;
    border-radius: 50%;
    justify-content: end;
    align-items: center;
    @media (max-width: 820px) {
        width: 25%;
        top: 39%;
        padding-top: 25%;
    }
`;

export const BurgerContainer = styled(Col)`
    height: calc(var(--font-size-icon) + 3vh);
    width: calc(var(--font-size-icon) + 3vh);
    line-height: calc(10vh * 0.5);
    border-radius: 50%;
    background-color: rgba(255,255,255,70%);
    opacity: 100%;
    position: absolute;
    right: 44%;
    border: 1px solid var(--ux-border-color);
    & > *{ & > *{ 
        color: var(--interaction-color);
        }
    }
    @media (max-width: 820px) {
        display: none;
    }
`;

export const DataRow = styled(Row)`
    width: 35%;
    height: 25%;
    @media (max-width: 820px) {
        width: 85%;
    }
`;

export const ButtonsRow = styled(DataRow)`
    height: 35%;
`;
export const DescRow = styled(Row)`
    width: 15%;
    height: 40%;
    align-items: center;
    text-align: center;
    @media (max-width: 820px) {
        width: 60%;
    }
`;