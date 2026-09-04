'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      document.body?.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body?.classList.remove('dark');
    }
  };

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem('orqis_theme') as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setThemeState(savedTheme);
        applyTheme(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeState('dark');
        applyTheme('dark');
      } else {
        setThemeState('light');
        applyTheme('light');
      }
    } catch {
      applyTheme('light');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem('orqis_theme', newTheme);
    } catch {
      // ignore storage error
    }
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try {
        localStorage.setItem('orqis_theme', next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
