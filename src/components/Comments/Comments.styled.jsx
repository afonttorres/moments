import styled from "styled-components";
import { Col } from "../../pages/Styles.styled";

export const CommentsCont = styled(Col)`
    height: 60%;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 2.5% 0 2.5% 0;
    border: 1px solid var(--border-color);
`;