import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

/**
 * Custom React Hook for managing and persisting the theme (light/dark mode).
 * It uses localStorage to remember the user's preference and applies the theme
 * to the document's <html> element.
 *
 * @returns An object containing the current theme and a function to toggle it.
 */
export const useTheme = () => {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    // This runs only once on initial render
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      // Check for user's system preference if no theme is stored
      if (storedTheme) {
        return storedTheme as Theme;
      }
      // If no stored theme, check system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    }
    return "light"; // Default theme
  });

  // Effect to apply the theme class to the document's <html> tag
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]); // Re-run whenever the theme changes

  // Callback to toggle the theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
};
