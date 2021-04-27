import React from 'react';
import Styled from 'styled-components';

import { PageContainer, StyledNav, NavLink } from '../styles/GlobalStyles';

const StyledNavWrap = Styled.nav`
    height: 4rem;
    display: flex;
    align-items: center;
    background-color: #2f6c00;
`;

const Navigation = () => {
    return (
        <StyledNavWrap>
            <PageContainer>
                <StyledNav>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </StyledNav>
            </PageContainer>
        </StyledNavWrap>
    );
};
export default Navigation;
