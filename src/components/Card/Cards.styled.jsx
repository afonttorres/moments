import styled from "styled-components";
import { Col, DetailText, Img, Row, Text } from "../../pages/Pages.styled";

export const SCard = styled.article`
    height: fit-content;
    width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1%;
    @media (max-width: 820px) {
        width: 100%;
        height: 60%;
    }
`;

export const SCardRow = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
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
    height: 6vh;
    width: 85%;
    justify-content: flex-start;
    margin: auto;
    margin-right: 10%;
    @media (max-width: 820px) {
        height: 15%;
    }
`;

export const TitleRow = styled(SCardRow)`
    justify-content: flex-start;
    width: 75%;
    margin: 1.5% auto;
`;

export const InfoIconsCol = styled(SCardCol)`  
    width: 20%;
`;
export const InfoDataCol = styled(SCardCol)`  
    width: 60%;
    align-items: flex-start;
    justify-content: center;
    gap: 10%;
`;

export const CDetailText = styled(DetailText)`
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain-small);
    text-transform: capitalize;
`;

export const CText = styled(Text)`
    &::first-letter{
        text-transform: uppercase;
    }
`;

export const ImgRow = styled(SCardRow)`
    height: 25vh;
    border-radius: .75rem;
    @media (max-width: 820px) {
        height: 70%;
    }
`;
export const ButtonsRow = styled(SCardRow)`
    height: 6vh;
    width: 60%;
    margin-right: 30%;
    @media (max-width: 820px) {
        height: 15%;
    }
`;

export const ButtonsCol = styled(SCardCol)`
    flex-direction: row;
    justify-content: space-around;
`;

export const SButton = styled.button`
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
   & > *{
    color: var(--font-color-plain-noBg);
   }
   & :hover{
    opacity: var(--text-opacity);
   }
`;

export const DCImgCol = styled(Col)`
    width: 60%;
`;
export const DCImgInfo = styled(Col)`
    width: 40%;
`;
export const DCImg = styled(Img)`
    border-radius: .75rem 0 0 .75rem;
`;
export const DCMainRow = styled(Row)`
    gap: 0;
`;
