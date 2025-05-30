import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { ThemeContext } from './useThemeContext'; // CORRETO

type Props = {
  children: ReactNode;
};

export const ThemeProviderCustom = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
        },
      }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};