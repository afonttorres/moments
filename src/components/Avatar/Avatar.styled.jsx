import styled from "styled-components";
import { Container, Img } from "../../pages/Styles.styled";

export const CircleContainer = styled(Container)`
    border-radius: 50%;
    width: ${props => props.width ? props.width : '50%'};
    padding-bottom: ${props => props.width ? props.width : '50%'};
    border: 2px dashed var(--interaction-color);
    height: 0;
    position: relative;
    background-color: white;
`;

export const BorderContainer = styled(CircleContainer)`
    height: 0;
    width: 98%;
    padding-bottom: 98%;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 0;
    margin-top: 1%;
`;
export const AvatarImg = styled(Img)`
    position: absolute;
    top: 0;
    height: 100%;
    width: fit-content;
    object-position: center;
    border-radius: 50%;
    cursor: pointer;
`;