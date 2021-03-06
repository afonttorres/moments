import styled from "styled-components";
import { Col } from "../../pages/Styles.styled";

export const Button = styled.button`
    height: fit-content;
    width: fit-content;
    border: none;
    box-shadow: none;
    outline: none;
    background-color: var(--no-bg);
    cursor: pointer;
   & > *{
    color: var(--font-color-plain-noBg);
    font-size: ${props => props.size ? props.size : null}
   }
   & :hover{
    opacity: var(--text-opacity);
   }
`;
export const ReturnButton = styled(Button)`
    position: absolute;
    display: block;
    top: 5vh;
    right: 5vh;
    z-index: var(${props => props.index ? props.index : '--return-buttons-i'});
    top: ${props => props.top};
    right: ${props => props.right};
    color: var(${props => props.color ? props.color : '--font-color-plain-noBg'});
    & > *{
        color: var(${props => props.color ? props.color : '--font-color-plain-noBg'});
   }
    &:hover, &:focus, &:active{
       color: var(--text-opacity);
    }
`;
export const SBackButton = styled(ReturnButton)`
    left: 10vh;
    top: ${props => props.top};
    right: ${props => props.right};
    @media (max-width: 820px) {
        left: 5vh;
    }
`;
export const SCloseButton = styled(ReturnButton)`
    right: 10vh;
    top: ${props => props.top};
    right: ${props => props.right};
    @media (max-width: 820px) {
        right: 15vh;
    }

`;
export const BBMContent = styled(Col)`
    position: absolute;
    bottom: ${props => props.bottom ? props.bottom : '-25vh'};
    height:${props => props.height ? props.height : '25vh'};
    width: 99%;
    gap: 5%;
    border-radius: 2rem 2rem 0 0;
    background: var(--main-bg);
    z-index: var(--burgers-i);
    transition: bottom 1s;
`;

export const BBMBar = styled.div`
    position: absolute;
    margin: 0 auto;
    height: 0.5em;
    width: 10%;
    top: 2vh;
    background-color: var(--button-bg-color);
    border-radius: var(--button-border); 
`;

export const BBDContent = styled(Col)`
    border: 1px solid var(--button-bg-color);
    border-radius: 0.75rem;
    width: 25%;
    height: 20vh;
    background: var(--main-bg);
    gap: 10%;
    padding: 2.5%;
`;

export const MainButton = styled(Button)`
        font-size: var(--font-size-plain);
        font-family: var(--font-family-plain);
        text-transform: capitalize;
        height: var(--button-height);
        width: calc(var(--button-width)/${props => props.div ? props.div : '1'});
        border-radius: var(--button-border);
        cursor: pointer;
        align-self: center;
`;

export const BgButton = styled(MainButton)`
    color: var(--font-color-plain-bg);
    background-color: var(--button-bg-color);
    & > *{
        color: var(--font-color-plain-bg);
    }
    & > * :hover, & > *:focus, & > *:active{
        color: var(--font-color-plain-bg);
    }
`;

export const NoBgButton = styled(MainButton)`
    color: var(--font-color-plain-NoBg);
    background-color: var(--main-bg);
    border: 1px solid var(--ux-border-color);
    & > *{
        color: var(--font-color-plain-NoBg);
    }
    & > * :hover, & > *:focus, & > *:active{
        color: var(--font-color-plain-NoBg);
    }
`;

export const MainSliderButton = styled(Button)`
    position: absolute;
    background-color: rgba(255,255,255,75%);
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
`;

export const SliderLeft = styled(MainSliderButton)`
    left: 5%;
`;

export const SliderRight = styled(MainSliderButton)`
    right: 5%;
`;