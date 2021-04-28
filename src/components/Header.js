import React, { useContext } from 'react';

// contexts
import { ThemeContext } from '../contexts/ThemeContext';

import { StyledHeader, StyledButton } from '../styles/GlobalStyles';

const Header = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <StyledHeader className="App-header">
            <h1 className="header__title">Blog Demo</h1>
            <div className="header__button-wrap">
                <StyledButton
                    primary
                    type="button"
                    onClick={() => setTheme('light')}
                >
                    light
                </StyledButton>
                <StyledButton
                    secondary
                    type="button"
                    onClick={() => setTheme('dark')}
                >
                    dark
                </StyledButton>
            </div>
        </StyledHeader>
    );
};

export default Header;
