import styled from "styled-components";
export const MainContainer = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--main-cont-gap);
    overflow: hidden;
    position: relative;
`;
export const ViewContainer = styled(Container)`
    height: 100vh;
`;
export const Text = styled.span`
    font-size: var(--font-size-plain);
    font-family: var(--font-family-plain);
    color: var(--font-color-plain-noBg);
`;

export const TextCapi = styled(Text)`
    &::first-letter{
        text-transform: uppercase;
    }
`;

export const Title = styled(Text)`
    font-size: var(--font-size-main);
    font-weight: 900;
`;
export const MainTitle = styled(Title)`
        font-size: var(--font-size-main);
        font-family: var(--font-family-main);
        width: 50%;
`;
export const TextBold = styled(Text)`
    font-weight: 900;
`;

export const TextBoldCapi = styled(TextBold)`
    &::first-letter{
        text-transform: uppercase;
    }
`;
export const DetailText = styled(Text)`
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain-small);
`;

export const DetailTextCapi = styled(DetailText)`
     &::first-letter{
        text-transform: uppercase;
    }
`;
export const ReturnButton = styled.button`
    height: fit-content;
    width: fit-content;
    border: none;
    box-shadow: none;
    outline: none;
    cursor:pointer;
    position: absolute;
    top: 5vh;
    right: 5vh;
    color: var(--font-color-plain-noBg);
    color: var(${props => props.color});
    background-color: var(--no-bg);
    &:hover, &:focus, &:active{
       color: var(--text-opacity);
    }
`;

export const BackButton = styled(ReturnButton)`
    top: 5vh;
    left: 10vh;
    @media (max-width: 820px) {
        top: 5vh;
        left: 5vh;
    }
`;

export const CloseButton = styled(ReturnButton)`
    top: 5vh;
    right: 10vh;
    @media (max-width: 820px) {
        top: 5vh;
        right: 15vh;
    }

`;
export const Col = styled(Container)`
    flex-direction: column;
`;

export const Row = styled(Container)`
    flex-direction: row;
    @media (min-width: 820px) {
        gap: ${props => props.gap};
    }
`;

export const HiddenContainerMB = styled(MainContainer)`
    @media (max-width: 820px) {
        display: none;
    }
`;
export const HiddenContainerDT = styled(MainContainer)`
    display: none;
    @media (max-width: 820px) {
        display: flex;
    }
`;
export const OverlayContainer = styled(ViewContainer)`
    position: fixed;
    top: 10%;
    left: 10%;
    z-index: 5;
    background-color: rgba(255, 255, 255, 85%);
    height: 80%;
    width: 80%;
    margin: 0 auto;
    border-radius: 0.75rem;
    display: flex;
`;

export const NoScrollContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: block;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 4;
    overflow: hidden;
    background-color: var(--blocked-bg);
`;

export const Img = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.75rem;
`;

export const TextLine = styled(Text)`
    cursor: pointer;
    & *{
        width: fit-content;
        height: inherit;
    }
`;