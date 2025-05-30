import { createContext } from 'react';

export type ThemeContextType = {
  toggleTheme: () => void;
  isDark: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDark: false,
});