import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ColourPalette = {
    white: '#eee',
    black: '#333',
    green: '#2f6c00',
    grey: '#A9A9A9',
};

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
    ${props =>
        props.primary &&
        css`
            background: ${ColourPalette.grey};
        `};
`;

export const StyledNav = Styled.ul`
    list-style: none;
    display: inline-flex;
    li:not(:last-of-type) {
        margin-right: 3rem;
    }
`;

export const NavLink = Styled(Link)`
    position: relative;
    font-size: 2rem;
    color: ${ColourPalette.white};

    &::after {
        content: '';
        display: block;
        background-color: ${ColourPalette.white};
        width: 0%;
        height: 2px;
        transition: width 0.5s;
    }
    &:hover::after {
        width: 100%;
    }
`;

export const PlainLink = Styled(Link)`
    color: ${props => props.theme};
`;
