/* // components/theme-provider.jsx (or .tsx)
'use client'; // Ensure this is a client component

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = useState("dark");  // Initialize with default

  useEffect(() => {
    setMounted(true);

    // Try to get the theme from local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme); //apply theme
    localStorage.setItem('theme', theme); //set in localstorage to persist

  }, [mounted, theme]);


  if (!mounted) {
    return <>{children}</>; // Render children without theme until mounted
  }
  return <NextThemesProvider attribute="class" defaultTheme={theme}  {...props}>{children}</NextThemesProvider>;
}  */


'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
