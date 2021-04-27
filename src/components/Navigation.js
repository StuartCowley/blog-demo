import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { PageContainer } from '../styles/GlobalStyles';

const StyledNavWrap = Styled.nav`
    height: 4rem;
    display: flex;
    align-items: center;
    background-color: #2f6c00;
`;

const StyledNav = Styled.ul`
    list-style: none;
    display: inline-flex;
    li:not(:last-of-type) {
        margin-right: 3rem;
    }
    a {
        position: relative;
        font-size: 2rem;
        color: #eee;

        &::after {
            content: '';
            display: block;
            background-color: #eee;
            width: 0%;
            height: 2px;
            transition: width 0.5s;
        }
        &:hover::after {
            width: 100%;
        }
    }
`;

const Navigation = () => {
    return (
        <StyledNavWrap>
            <PageContainer>
                <StyledNav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </StyledNav>
            </PageContainer>
        </StyledNavWrap>
    );
};
export default Navigation;
