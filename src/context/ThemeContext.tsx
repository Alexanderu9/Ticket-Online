import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeContext } from './useThemeContext';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ThemeProviderCustom = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDark ? 'dark' : 'light',
        background: {
          default: isDark ? '#121212' : '#f5f5f5', // Fondo principal
          paper: isDark ? '#1e1e1e' : '#fff',      // Fondo de caixas (como formulário)
        },
        text: {
          primary: isDark ? '#ffffff' : '#000000',
        },
      },
    });
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};