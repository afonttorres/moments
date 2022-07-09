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
    margin: .5%;
    padding: .5%;
    background-color: var(--main-bg);
    box-shadow: 1px 2px 10px var(--border-color);
    border-radius: 0.75rem;
    @media (max-width: 820px) {
        width: 100%;
        height: 100%;
        box-shadow: 0px 3px 10px var(--border-color);
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
    height: 10%;
    justify-content: flex-start;
    width: 75%;
`;

export const ScrollableDesc = styled(TitleRow)`
    height: fit-content;
    overflow-y: scroll;
    padding-top: 5%;
    padding-right: 5%;
    align-items: flex-start;
`;

export const CDetailText = styled(DetailText)`
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain-small);
    text-transform: capitalize;
`;

export const ImgRow = styled(SCardRow)`
    height: 70%;
    border-radius: .75rem;
`;
export const ButtonsRow = styled(SCardRow)`
    height: 10%;
    width: 80%;
`;
//DetailDesktop
export const DCImgCol = styled(Col)`
    width: 60%;
`;
export const DCInfoCol = styled(Col)`
    width: 40%;
    gap: 1%;
`;
export const DCImg = styled(Img)`
    border-radius: .75rem 0 0 .75rem;
`;
export const DCMainRow = styled(Row)`
    gap: 0;
`;
//DetailMobile
export const MCInfoRow = styled(Row)`
    height: fit-content;
    padding: 2.5%;
`;
export const MCImgRow = styled(Row)`    
    width: 85%;
    height: 100%;
`;
export const MCCommentsCol = styled(Col)`
    height: 40%;
`;
//Preview
export const PrevContainer = styled(SCard)`
    margin:0;
    height: 75%;
    width: 28%;
    border-radius: .75rem;
    @media (max-width: 820px) {
        height: 87.25%;
        width: 98%;
    }
`;
export const PrevNav = styled(Row)`
    gap: 0;
    height: 10vh;
    border-bottom: ${props => props.border ? props.border : 'none'};
`;
export const PreNavButtonsCol = styled(Col)`
    width: 20%;
`;
export const PreNavTitleCol = styled(Col)`
    width: 60%;
`;