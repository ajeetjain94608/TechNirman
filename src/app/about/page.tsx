"use client";

import React from "react";
import { Container, Typography, Box, Card, CardContent, Avatar } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import RecyclingIcon from '@mui/icons-material/Recycling';
import GroupsIcon from '@mui/icons-material/Groups';

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
          <PublicIcon fontSize="large" />
        </Avatar>
        <Typography variant="h3" fontWeight={700} color="primary.main">
          About TECHNIRMAN
        </Typography>
      </Box>
      <Typography variant="h6" color="text.secondary" mb={4}>
        TECHNIRMAN is dedicated to reducing e-waste in India by collecting used electronic components from colleges, organizations, and individuals. We test and resell these components at affordable prices, making electronics accessible and sustainable.
      </Typography>
      <Typography variant="subtitle1" color="secondary.main" mb={4}>
        <b>Platform Independent:</b> Access TECHNIRMAN from any device, operating system, or browser—no installation required. Our platform is built for everyone, everywhere.
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={4} mb={6}>
        <Box flex={1} minWidth={280}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <RecyclingIcon color="success" fontSize="large" />
                <Typography variant="h5" fontWeight={600}>Our Mission</Typography>
              </Box>
              <Typography>
                To create a circular economy for electronics, reduce environmental impact, and provide affordable components for students, companies, and hobbyists.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box flex={1} minWidth={280}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <GroupsIcon color="primary" fontSize="large" />
                <Typography variant="h5" fontWeight={600}>Why TECHNIRMAN?</Typography>
              </Box>
              <Typography>
                We combine technology, transparency, and a passion for sustainability to deliver real impact. Our platform is designed for scale, trust, and measurable results.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* Impact Section */}
      <Box mt={6}>
        <Typography variant="h4" fontWeight={700} color="secondary.main" mb={2}>
          Our Impact
        </Typography>
        <Box display="flex" gap={4} flexWrap="wrap">
          <Card elevation={2} sx={{ flex: 1, minWidth: 200, textAlign: 'center', p: 2, bgcolor: 'rgba(0,0,0,0.85)', color: 'white' }}>
            <CardContent>
              <Typography variant="h3" color="secondary.main" fontWeight={800}>10,000+</Typography>
              <Typography variant="subtitle1">Components Recycled</Typography>
            </CardContent>
          </Card>
          <Card elevation={2} sx={{ flex: 1, minWidth: 200, textAlign: 'center', p: 2, bgcolor: 'rgba(0,0,0,0.85)', color: 'white' }}>
            <CardContent>
              <Typography variant="h3" color="secondary.main" fontWeight={800}>500+</Typography>
              <Typography variant="subtitle1">Organizations & Colleges</Typography>
            </CardContent>
          </Card>
          <Card elevation={2} sx={{ flex: 1, minWidth: 200, textAlign: 'center', p: 2, bgcolor: 'rgba(0,0,0,0.85)', color: 'white' }}>
            <CardContent>
              <Typography variant="h3" color="secondary.main" fontWeight={800}>2,000+</Typography>
              <Typography variant="subtitle1">Happy Customers</Typography>
            </CardContent>
          </Card>
          <Card elevation={2} sx={{ flex: 1, minWidth: 200, textAlign: 'center', p: 2, bgcolor: 'rgba(0,0,0,0.85)', color: 'white' }}>
            <CardContent>
              <Typography variant="h3" color="secondary.main" fontWeight={800}>100+ Tons</Typography>
              <Typography variant="subtitle1">E-Waste Diverted from Landfill</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
