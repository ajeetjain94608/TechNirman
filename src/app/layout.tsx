"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Sell (Organizations)", href: "/sell-org" },
    { label: "Sell (Individuals)", href: "/sell-ind" },
    { label: "Contact", href: "/contact" },
    { label: "Cart", href: "/cart", color: "secondary" },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable}`}>
        <ThemeRegistry>
          <CartProvider>
            <AppBar position="static" color="default" elevation={1}>
              <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 1, sm: 2 } }}>
                <Typography
                  variant="h3"
                  color="secondary"
                  sx={{
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
                    fontSize: { xs: 24, sm: 32, md: 40 },
                  }}
                >
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "inherit", display: 'inline-block' }}
                  >
                    TECHNIRMAN
                  </Link>
                </Typography>
                {/* Desktop Nav */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                  {navLinks.map((nav) => (
                    <Button
                      key={nav.label}
                      component={Link}
                      href={nav.href}
                      color={nav.color === 'secondary' ? 'secondary' : 'primary'}
                      sx={{ fontWeight: nav.color === 'secondary' ? 700 : 500, ml: nav.color === 'secondary' ? 2 : 0 }}
                    >
                      {nav.label}
                    </Button>
                  ))}
                </Box>
                {/* Mobile Nav */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{ sx: { width: 240 } }}
                  >
                    <List>
                      {navLinks.map((nav) => (
                        <ListItem key={nav.label} disablePadding>
                          <ListItemButton component={Link} href={nav.href} onClick={handleDrawerToggle}>
                            <ListItemText primary={nav.label} primaryTypographyProps={{ fontWeight: nav.color === 'secondary' ? 700 : 500, color: nav.color === 'secondary' ? 'secondary.main' : 'inherit' }} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Drawer>
                </Box>
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
