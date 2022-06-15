import styled from "styled-components";

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

export const InfoIconsCol = styled(SCardCol)`  
    width: 20%;
`;
export const InfoDataCol = styled(SCardCol)`  
    width: 60%;
    align-items: flex-start;
    justify-content: center;
    gap: 10%;
`;
export const Text = styled.span`
    font-size: var(--font-size-plain);
    font-family: var(--font-family-plain);
    color: var(--font-color-plain-noBg);
    text-transform: capitalize;
`;

export const UserText = styled(Text)`
    font-weight: 900;
`;
export const LocationText = styled(Text)`
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain-small);
`;

export const ImgRow = styled(SCardRow)`
    height: 25vh;
    border-radius: .75rem;
    background: url(${(props) => props.imgUrl});
    background-size: cover;
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
export const SCardAvatar = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: url(${props => props.imgUrl}) content-box;
    border: 1px dashed var(--interaction-color);
    background-size: cover;
    background-position: center;
    padding: 0.05em;
`;
