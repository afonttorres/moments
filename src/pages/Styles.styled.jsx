import styled from "styled-components";

//CONTAINERS
export const MainContainer = styled.main`
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
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    gap: ${props => props.gap ? props.gap : 'var(--main-cont-gap)'};
`;
export const View = styled(Container)`
    height: 80%;
    border-radius: .75rem;
    background-color: var(${props => props.bgColor ? props.bgColor : '--no-bg'}); 
`;
export const ViewContainer = styled(Container)`
    height: 100vh;
`;
export const OverlayContainer = styled(ViewContainer)`
    position: fixed;
    top: 10%;
    left: 10%;
    z-index: var(--overlay-cont-i);
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
    top: 0;
    left: 0;
    position: fixed;
    z-index: ${props => props.index? props.index :  'var(--noScroll-cont-i)'};
    overflow: hidden;
    background-color: var(--blocked-bg);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HiddenContainerDT = styled(MainContainer)`
    position: absolute;
    top:0;
    left: 0;
    display: none;
    @media (max-width: 820px) {
        display: flex;
    }
`;
export const HiddenContainerMB = styled(MainContainer)`
    position: absolute;
    top:0;
    left: 0;
    @media (max-width: 820px) {
        display: none;
    }
`;

//FLEX MODEL
export const Col = styled(Container)`
    flex-direction: column;
`;

export const Row = styled(Container)`
    flex-direction: row;
    @media (min-width: 820px) {
        gap: ${props => props.gap};
    }
`;

//TOUCHABLE CONTENT
export const Touchable = styled(Col)`
    height: fit-content;
    width: fit-content;
    gap: inherit;
`;

export const NonTouchable = styled(Col)`
    position: absolute;
    height: ${props => props.heightDT ? props.heightDT : '100 %'};
    top: 0vh;
    left: 0vh;
    width: 100%;
    z-index: var(--last-i);
    background: transparent;
    @media (max-width: 820px) {
        height: ${props => props.heightMB ? props.heightMB : '100 %'};
    }
`;
//TEXT
export const Text = styled.span`
    font-size: var(--font-size-plain);
    font-family: var(--font-family-plain);
    color: var(--font-color-plain-noBg);
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
export const DetailText = styled(Text)`
    opacity: var(--text-opacity);
    font-size: var(--font-size-plain-small);
`;
export const TitleCapi = styled(Title)`
 &::first-letter{
        text-transform: uppercase;
    }
`;

export const TextCapi = styled(Text)`
    & > *::first-letter{
        text-transform: uppercase;
    }
`;
export const TextBoldCapi = styled(TextBold)`
    &::first-letter{
        text-transform: uppercase;
    }
`;
export const DetailTextCapi = styled(DetailText)`
     &::first-letter{
        text-transform: uppercase;
    }
`;

//TEXT LINE
export const TextLine = styled.span`
    cursor: pointer;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
`;

//IMG
export const Img = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.75rem;
`;

