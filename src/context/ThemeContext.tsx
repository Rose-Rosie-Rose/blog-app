import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleMode: () => {},
});
