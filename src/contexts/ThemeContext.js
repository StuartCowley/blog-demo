import { createContext } from 'react';

import { ColourPalette } from '../styles/GlobalStyles';

export const ThemeContext = createContext('light');

export const ThemeConfig = {
    light: { background: ColourPalette.white, color: ColourPalette.black },
    dark: { background: ColourPalette.black, color: ColourPalette.white },
};
