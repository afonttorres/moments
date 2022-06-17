import styled from "styled-components";
export const MainContainer = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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