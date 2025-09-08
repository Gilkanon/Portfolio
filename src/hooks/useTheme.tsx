import { useContext } from "react";
import { ThemeProviderContext } from "../utils/themeProvider";

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error("useTheme must be used with a ThemeProvider");
    }
    return context;
};
