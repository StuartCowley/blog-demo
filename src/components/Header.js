import React, { useContext } from 'react';

// contexts
import { ThemeContext } from '../contexts/ThemeContext';

import {
    PageContainer,
    StyledHeader,
    StyledButton,
} from '../styles/GlobalStyles';

const Header = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <PageContainer>
            <StyledHeader className="header">
                <h1 className="header__title">Blog Demo</h1>
                <div className="header__button-wrap">
                    <StyledButton
                        type="button"
                        onClick={() => setTheme('light')}
                    >
                        light
                    </StyledButton>
                    <StyledButton
                        primary
                        type="button"
                        onClick={() => setTheme('dark')}
                    >
                        dark
                    </StyledButton>
                </div>
            </StyledHeader>
        </PageContainer>
    );
};

export default Header;
