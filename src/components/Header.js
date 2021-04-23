import React, { useContext } from 'react';

// contexts
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <header className="App-header">
            <h1>Blog Demo</h1>
            <div>
                <button type="button" onClick={() => setTheme('light')}>
                    light
                </button>
                <button type="button" onClick={() => setTheme('dark')}>
                    dark
                </button>
            </div>
        </header>
    );
};

export default Header;
