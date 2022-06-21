import styled from "styled-components";
import { Col, DetailText, Row, Text } from "../../pages/Styles.styled";

export const InlineCont = styled(Row)`
    min-height: 5vh;
    height: 5vh;
`;
export const ButtonCol = styled(Col)`
    width: 20%;
    overflow: visible;
`;
export const InfoCol = styled(Col)`
    align-items: flex-start;
    justify-content: center;
    gap: 10%;
    width: 60%;
`;
export const InfoRow = styled(Row)`
    justify-content: flex-start;
`;
export const LocationText = styled(DetailText)`
    text-transform: capitalize;
`;