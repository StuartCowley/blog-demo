import { createContext } from 'react';

export const ThemeContext = createContext('light');

export const ThemeConfig = {
    light: { background: '#eee', color: '#333' },
    dark: { background: '#333', color: '#eee' },
};
