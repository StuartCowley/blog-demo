import Styled from 'styled-components';

export const PageWrapper = Styled.div`
    height: 100vh;
`;

export const PageContainer = Styled.div`
    display: block;
    max-width: 1024px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
`;

export const StyledHeader = Styled.header`
    font-size: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 40px;
    .header__title {
        margin-bottom: 20px;
    }
    .header__button-wrap {
        display: flex;
        flex-grow: 1
    }
`;

export const StyledButton = Styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 700;
`;
