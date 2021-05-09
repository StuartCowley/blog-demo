import React from 'react';

import { StyledNavWrap, StyledNav, NavLink } from '../styles/GlobalStyles';

const Navigation = () => {
    return (
        <StyledNavWrap>
            <StyledNav>
                <li className="header__title">
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
        </StyledNavWrap>
    );
};
export default Navigation;
