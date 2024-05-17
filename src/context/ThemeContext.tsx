// src/context/ThemeContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../app/theme';
import { GlobalStyles } from './GlobalStyles';

interface ThemeContextProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeToggleContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeToggleProvider');
  }
  return context;
};

interface ThemeToggleProviderProps {
  children: ReactNode;
}

export const ThemeToggleProvider = ({ children }: ThemeToggleProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, isDarkTheme: theme === 'dark' }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
