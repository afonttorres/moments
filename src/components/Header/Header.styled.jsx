import styled from "styled-components";
import { Col, Row } from "../../pages/Styles.styled";
export const HeaderContainer = styled(Col)`
    border-bottom: 1px solid var(--border-color);
    height: 50%;
    position: absolute;
    top: 0vh;
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
    top: 40%;
    height: fit-content;
    width: 40%;
`;
export const DataRow = styled(Row)`
    width: 85%;
    height: 30%;
`;
export const DescRow = styled(Row)`
    width: 60%;
    height: 40%;
    align-items: center;
    text-align: center;
`;

export const ButtonsRow = styled(DataRow)`
`;