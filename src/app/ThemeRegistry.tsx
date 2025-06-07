"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./muiCache";
import { Rajdhani } from 'next/font/google';

// Create the cache ONCE per session, not per render
const muiCache = createEmotionCache();

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rajdhani',
});

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00eaff",
    },
    secondary: {
      main: "#ff00c8",
    },
    background: {
      default: "#0a192f",
      paper: "#111a2b",
    },
  },
  typography: {
    fontFamily: [
      'var(--font-rajdhani)',
      'Rajdhani',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightBold: 900,
    fontWeightMedium: 700,
    fontWeightRegular: 500,
    h1: {
      fontFamily: 'var(--font-rajdhani), Rajdhani, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 900,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'var(--font-rajdhani), Rajdhani, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 800,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'var(--font-rajdhani), Rajdhani, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: 1,
          transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
          boxShadow: '0 2px 24px 0 #00eaff44',
          '&:hover': {
            boxShadow: '0 4px 32px 0 #ff00c844',
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: 'linear-gradient(135deg, #111a2b 60%, #1a2a40 100%)',
          boxShadow: '0 4px 32px 0 #00eaff22',
          transition: 'box-shadow 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1)',
          '&:hover': {
            boxShadow: '0 8px 48px 0 #ff00c822',
            transform: 'translateY(-4px) scale(1.03)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #0a192f 60%, #1a2a40 100%)',
          boxShadow: '0 2px 24px 0 #00eaff22',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          transition: 'background 0.5s',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <div className={rajdhani.variable}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}
