import styled from "styled-components";

export const Container = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: var(--main-cont-gap);
`;

export const Text = styled.p`
    font-size: var(--font-size-plain);
    font-family: var(--font-family-plain);
    color: var(--font-color-plain-noBg);
`;

export const Title = styled(Text)`
    font-size: var(--font-size-main);
    font-weight: 900;
`;