import styled from "styled-components";

export const NavigationBarContainer = styled.div`
    background: linear-gradient(
        ${({ theme }) => theme.colors.gold},
        ${({ theme }) => theme.colors.goldenGrass}
    );
    width: 100vw;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
`;

export const NavigationBarWrapper = styled.div`
    margin: 0 auto;
    width: 800px;
    max-width: 90%;
`;

export const NavigationBarHeading = styled.h1`
    margin: 0;
    font-size: 26px;
`;