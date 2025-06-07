import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RecyclingIcon from "@mui/icons-material/Recycling";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightModeIcon from '@mui/icons-material/LightMode';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export default function Home() {
  return (
    <Box>
      {/* Futuristic Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'transparent',
          color: 'primary.main',
          borderRadius: 5,
          boxShadow: 12,
          p: { xs: 6, md: 12 },
          mb: 10,
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 60% 40%, #00eaff33 0%, #0a192f 80%)',
          transition: 'background 0.7s cubic-bezier(.4,2,.6,1)',
        }}
      >
        <BlurOnIcon sx={{ position: 'absolute', top: 20, right: 40, fontSize: 180, opacity: 0.12, color: '#ff00c8' }} />
        <Box flex={1} mb={{ xs: 4, md: 0 }}>
          <Typography variant="h1" fontWeight={900} gutterBottom sx={{ letterSpacing: 4, textShadow: '0 8px 64px #00eaff44', color: 'secondary.main', fontSize: { xs: 36, md: 64 } }}>
            The Future of E-Waste is Circular
          </Typography>
          <Typography variant="h4" fontWeight={700} mb={4} sx={{ maxWidth: 700, color: 'white', textShadow: '0 2px 24px #00eaff22' }}>
            TECHNIRMAN is building India&#39;s first AI-powered, transparent, and scalable e-waste marketplace. We turn discarded electronics into opportunity, profit, and a cleaner planet.
          </Typography>
          <Typography variant="h5" fontWeight={400} mb={4} sx={{ maxWidth: 600 }}>
            Buy &amp; sell used electronics, support sustainability, and make tech affordable for all.<br/>
            <span style={{ color: '#00eaff', fontWeight: 700 }}>Platform Independent:</span> Use TECHNIRMAN from any device, OS, or browser—no app install needed.
          </Typography>
          <Box display="flex" gap={3}>
            <Button component={Link} href="/marketplace" variant="contained" color="secondary" size="large" startIcon={<RocketLaunchIcon />} sx={{ fontWeight: 900, fontSize: 22, px: 5, py: 2 }}>
              Explore Marketplace
            </Button>
            <Button component={Link} href="/sell-org" variant="outlined" color="primary" size="large" sx={{ fontWeight: 900, fontSize: 22, px: 5, py: 2, borderWidth: 2 }}>
              Sell Old Components
            </Button>
          </Box>
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <Avatar sx={{ bgcolor: 'white', width: 220, height: 220, boxShadow: 12, border: '6px solid #00eaff' }}>
            <PublicIcon sx={{ color: 'primary.main', fontSize: 160 }} />
          </Avatar>
        </Box>
      </Box>

      {/* Investor Pitch Section */}
      <Box mb={8}>
        <Typography variant="h4" fontWeight={800} color="secondary.main" mb={2}>
          Why Invest in TECHNIRMAN?
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={4}>
          <Card elevation={6} sx={{ flex: 1, minWidth: 260, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <LightModeIcon color="warning" />
                <Typography variant="h6" fontWeight={700}>AI-Driven Sorting</Typography>
              </Box>
              <Typography color="text.secondary">
                Proprietary AI sorts, tests, and values components for maximum recovery and resale value.
              </Typography>
            </CardContent>
          </Card>
          <Card elevation={6} sx={{ flex: 1, minWidth: 260, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <RocketLaunchIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>Scalable Platform</Typography>
              </Box>
              <Typography color="text.secondary">
                Built for rapid expansion across India, with B2B, B2C, and institutional partnerships.
              </Typography>
            </CardContent>
          </Card>
          <Card elevation={6} sx={{ flex: 1, minWidth: 260, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 4 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <GroupsIcon color="success" />
                <Typography variant="h6" fontWeight={700}>Social & Environmental Impact</Typography>
              </Box>
              <Typography color="text.secondary">
                Reducing landfill, empowering education, and creating green jobs for India&#39;s youth.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Value Propositions */}
      <Box display="flex" flexWrap="wrap" gap={4} mb={8}>
        <Card elevation={2} sx={{ flex: 1, minWidth: 220, bgcolor: 'rgba(10,25,47,0.95)', color: 'primary.main', border: '2px solid #00eaff', borderRadius: 4, boxShadow: '0 4px 32px 0 #00eaff44', transition: 'all 0.4s cubic-bezier(.4,2,.6,1)', '&:hover': { boxShadow: '0 8px 48px 0 #ff00c844', borderColor: '#ff00c8', transform: 'scale(1.04)' } }}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <RecyclingIcon color="success" />
              <Typography variant="h6">Eco-Friendly</Typography>
            </Box>
            <Typography variant="body2">
              Every transaction helps reduce e-waste and protect the environment.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ flex: 1, minWidth: 220, bgcolor: 'rgba(10,25,47,0.95)', color: 'primary.main', border: '2px solid #00eaff', borderRadius: 4, boxShadow: '0 4px 32px 0 #00eaff44', transition: 'all 0.4s cubic-bezier(.4,2,.6,1)', '&:hover': { boxShadow: '0 8px 48px 0 #ff00c844', borderColor: '#ff00c8', transform: 'scale(1.04)' } }}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <EmojiEventsIcon color="warning" />
              <Typography variant="h6">Quality Assured</Typography>
            </Box>
            <Typography variant="body2">
              All products are tested and certified for performance and reliability.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ flex: 1, minWidth: 220, bgcolor: 'rgba(10,25,47,0.95)', color: 'primary.main', border: '2px solid #00eaff', borderRadius: 4, boxShadow: '0 4px 32px 0 #00eaff44', transition: 'all 0.4s cubic-bezier(.4,2,.6,1)', '&:hover': { boxShadow: '0 8px 48px 0 #ff00c844', borderColor: '#ff00c8', transform: 'scale(1.04)' } }}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <GroupsIcon color="primary" />
              <Typography variant="h6">Community Impact</Typography>
            </Box>
            <Typography variant="body2">
              Supporting education, innovation, and affordable access to technology.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Main Actions */}
      <Box display="flex" flexWrap="wrap" gap={4}>
        <Box flex={1} minWidth={280}>
          <Card elevation={6} sx={{ border: '2px solid #00eaff', borderRadius: 4, bgcolor: 'rgba(10,25,47,0.95)', color: 'primary.main', boxShadow: '0 4px 32px 0 #00eaff44', transition: 'all 0.4s cubic-bezier(.4,2,.6,1)', '&:hover': { boxShadow: '0 8px 48px 0 #ff00c844', borderColor: '#ff00c8', transform: 'scale(1.04)' } }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <GroupsIcon color="primary" />
                <Typography variant="h6">Sell as Organization</Typography>
              </Box>
              <Typography variant="body2">
                Colleges and organizations can sell project e-waste and unused components easily.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/sell-org" color="secondary" variant="contained" sx={{ fontWeight: 700, fontSize: 18, px: 3, py: 1.5 }}>Sell Now</Button>
            </CardActions>
          </Card>
        </Box>
        <Box flex={1} minWidth={280}>
          <Card elevation={6} sx={{ border: '2px solid #00eaff', borderRadius: 4, bgcolor: 'rgba(10,25,47,0.95)', color: 'primary.main', boxShadow: '0 4px 32px 0 #00eaff44', transition: 'all 0.4s cubic-bezier(.4,2,.6,1)', '&:hover': { boxShadow: '0 8px 48px 0 #ff00c844', borderColor: '#ff00c8', transform: 'scale(1.04)' } }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <RecyclingIcon color="success" />
                <Typography variant="h6">Sell as Individual</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Students and individuals can sell their used components or projects for cash.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/sell-ind" color="secondary" variant="contained" sx={{ fontWeight: 700, fontSize: 18, px: 3, py: 1.5 }}>Sell Now</Button>
            </CardActions>
          </Card>
        </Box>
        <Box flex={1} minWidth={280}>
          <Card elevation={6} sx={{ border: '2px solid #00eaff', borderRadius: 4, bgcolor: 'rgba(10,25,47,0.95)', color: 'primary.main', boxShadow: '0 4px 32px 0 #00eaff44', transition: 'all 0.4s cubic-bezier(.4,2,.6,1)', '&:hover': { boxShadow: '0 8px 48px 0 #ff00c844', borderColor: '#ff00c8', transform: 'scale(1.04)' } }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <StorefrontIcon color="secondary" />
                <Typography variant="h6">Marketplace</Typography>
              </Box>
              <Typography variant="body2">
                Buy tested, affordable electronics and components from our curated marketplace.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/marketplace" color="secondary" variant="contained" sx={{ fontWeight: 700, fontSize: 18, px: 3, py: 1.5 }}>Shop Now</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
