"use client";
import { useEffect, useState } from 'react';
type DarkModeHook = [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>];

const useDarkMode = (): DarkModeHook => {
  const [theme, setTheme] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(localStorage.theme);
    }
  }, []);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    
    if (theme) {
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  if (typeof window !== "undefined") {
    return [theme, setTheme];
  }

  return ["light", () => {}];

}


export default useDarkMode;