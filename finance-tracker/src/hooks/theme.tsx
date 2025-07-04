import React, { createContext, useState, useContext, ReactNode } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

interface ITheme {
  title: string;
  colors: {
    back: string;
    backie: string;
    background: string;

    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    dashboard: string;
    entry: string;
    exit: string;
    register: string;
    gradient: string;
  };
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const storedTheme = localStorage.getItem("@finance-tracker:theme");
    return storedTheme ? JSON.parse(storedTheme) : dark;
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@finance-tracker:theme", JSON.stringify(light));
    }
    else {
      setTheme(dark);
        localStorage.setItem("@finance-tracker:theme", JSON.stringify(dark));
    }

  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };