import React, { useContext } from 'react';

// contexts
import { ThemeContext } from '../contexts/ThemeContext';

import { PageContainer } from '../styles/GlobalStyles';

const Header = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <header className="App-header">
            <PageContainer>
                <h1>Blog Demo</h1>
                <div>
                    <button type="button" onClick={() => setTheme('light')}>
                        light
                    </button>
                    <button type="button" onClick={() => setTheme('dark')}>
                        dark
                    </button>
                </div>
            </PageContainer>
        </header>
    );
};

export default Header;
