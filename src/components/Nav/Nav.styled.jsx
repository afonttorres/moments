import styled from "styled-components";

export const NavWrapper = styled.nav`
        height: 10vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        display: flex;
        background-color: var(--main-bg)
`;
export const NavRow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15%;
        width: 50%;
        height: 100%;
`;
export const NavTitleRow = styled(NavRow)`
        float: left;
        text-align: left;
`;
export const Title = styled.span`
        font-size: var(--font-size-main);
        font-family: var(--font-family-main);
        font-weight: bold;
        width: 50%;
`;


export const NavItemsCol = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
`;
export const NavItemsColDT = styled(NavItemsCol)`
    @media (max-width: 820px) {
        display: none;
    }
`;
export const NavItemsColMB = styled(NavItemsCol)`
    @media (min-width: 820px) {
        display: none;
    }
`;

export const NavItemsRowDT = styled(NavRow)`
        float: right;
        justify-content: flex-end;
        gap: 20%;
        @media (max-width: 820px) {
        display: none;
        & > * {
            display:none;
        }
    }
`;


export const NavItemsRowMB = styled(NavRow)`
        float: right;
        justify-content: flex-end;
        width: 50%;
        @media (min-width: 820px) {
        display: none;
    }
`;


export const NavItem = styled.span`
        text-align: center;
        & > *{
            color: var(--font-color-plain-noBg);
        }
        & > a{
            font-family: var(--font-family-plain);
            font-size: var(--font-size-plain);
            text-transform: capitalize;
        }
        & > i{
            font-size: var(--font-size-icon)
        }
        &:hover{
            opacity: var(--text-opacity);
        }
`;