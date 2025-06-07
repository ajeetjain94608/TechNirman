import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Link from "next/link";
import ThemeRegistry from "./ThemeRegistry";
import { CartProvider } from "./CartContext";
import { Rajdhani } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: "TECHNIRMAN - E-Waste Solutions & Affordable Electronics",
  description:
    "TECHNIRMAN collects, tests, and resells used electronic components to reduce e-waste and make electronics affordable in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable}`}>
        <ThemeRegistry>
          <CartProvider>
            <AppBar position="static" color="default" elevation={1}>
              <Toolbar>
                <Typography
                  variant="h3"
                  color="secondary"
                  sx={{
                    flexGrow: 1,
                    fontWeight: 900,
                    fontFamily: 'var(--font-rajdhani), Rajdhani, Roboto, Helvetica, Arial, sans-serif',
                    letterSpacing: 6,
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #00eaff 20%, #ff00c8 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 24px #00eaff88, 0 4px 32px #ff00c888',
                    transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
                    cursor: 'pointer',
                    '&:hover': {
                      letterSpacing: 10,
                      textShadow: '0 8px 48px #ff00c8cc, 0 2px 24px #00eaffcc',
                    },
                  }}
                >
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "inherit", display: 'inline-block' }}
                  >
                    TECHNIRMAN
                  </Link>
                </Typography>
                <Button color="primary" component={Link} href="/about">
                  About
                </Button>
                <Button color="primary" component={Link} href="/marketplace">
                  Marketplace
                </Button>
                <Button color="primary" component={Link} href="/sell-org">
                  Sell (Organizations)
                </Button>
                <Button color="primary" component={Link} href="/sell-ind">
                  Sell (Individuals)
                </Button>
                <Button color="primary" component={Link} href="/contact">
                  Contact
                </Button>
                <Button color="secondary" component={Link} href="/cart" sx={{ ml: 2, fontWeight: 700 }}>
                  Cart
                </Button>
              </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ py: 4 }}>
              {children}
            </Container>
          </CartProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
