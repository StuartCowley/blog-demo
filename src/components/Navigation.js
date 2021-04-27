import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { PageContainer } from '../styles/GlobalStyles';

const StyledNav = Styled.nav`
    height: 48px;    
    display: flex;
    align-items: center;
    margin: 0px;
`;

const Navigation = () => {
    return (
        <StyledNav>
            <PageContainer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/create">Create</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </PageContainer>
        </StyledNav>
    );
};
export default Navigation;
