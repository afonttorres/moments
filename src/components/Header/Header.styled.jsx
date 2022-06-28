import styled from "styled-components";
import { Col, Row } from "../../pages/Styles.styled";
export const HeaderContainer = styled(Col)`
    border-bottom: 1px solid var(--border-color);
    height: 35%;
    position: absolute;
    top: 0vh;
    gap: 0;
    @media (max-width: 820px) {
        height: 50%;
    }
`;
export const Banner = styled(Col)`
    &:before{
        background-image: url(${props => props.imgUrl});
        background-position: center;
        background-size: cover;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        opacity: .75;
    }
`;
export const AvatarContainer = styled(Col)`
    position: absolute;
    top: 30%;
    height: fit-content;
    width: 12%;
    @media (max-width: 820px) {
        width: 40%;
        top: 40%;
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