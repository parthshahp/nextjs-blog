'use client';

import { useTheme } from '../context/theme-context';
import styles from './theme-toggle.module.css'; // Import the CSS Module

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme between light and dark"
      title="Toggle theme"
      className={styles.themeToggleButton} // Apply the main button style
    >
      <div className={styles.iconContainer}>
        {/* Sun Icon Wrapper: Active when theme is 'light' */}
        <div className={`${styles.iconWrapper} ${theme === 'light' ? styles.active : styles.inactive}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5} // React uses camelCase for SVG attributes
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round" // React uses camelCase
              strokeLinejoin="round" // React uses camelCase
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
        {/* Moon Icon Wrapper: Active when theme is 'dark' */}
        <div className={`${styles.iconWrapper} ${theme === 'dark' ? styles.active : styles.inactive}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
