import styled from "styled-components";
import { Col, Container, DetailText, Img, Row, Text } from "../../pages/Styles.styled";

export const SCard = styled.article`
    height: 60%;
    width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1%;
    margin: 1%;
    @media (max-width: 820px) {
        width: 100%;
        height: 100%;
    }
`;

export const SCardRow = styled(Row)`
    width: 80%;
    align-items: center;
    margin: 0 auto;
`;

export const SCardCol = styled.div`
    width: 31%;
    height: 100%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InfoRow = styled(SCardRow)`
    height: 10%;
    width: 85%;
    justify-content: flex-start;
    margin-right: 10%;
`;

export const TitleRow = styled(SCardRow)`
    height: 5%;
    justify-content: flex-start;
    width: 75%;
    margin: 2.5% auto 0 auto;
`;

export const CDetailText = styled(DetailText)`
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain-small);
    text-transform: capitalize;
`;

export const ImgRow = styled(SCardRow)`
    height: 72.5%;
    border-radius: .75rem;
`;
export const ButtonsRow = styled(SCardRow)`
    height: 10%;
    width: 80%;
`;
//Desktop
export const DCImgCol = styled(Col)`
    width: 60%;
`;
export const DCInfoCol = styled(Col)`
    width: 40%;
`;
export const DCImg = styled(Img)`
    border-radius: .75rem 0 0 .75rem;
`;
export const DCMainRow = styled(Row)`
    gap: 0;
`;
//Mobile
export const MCInfoRow = styled(Row)`
    height: fit-content;
    margin: 2.5%;
`;
export const MCImgRow = styled(Row)`    
    width: 85%;
    height: 50%;
`;
export const MCCommentsCol = styled(Col)`
    height: 40%;
`;