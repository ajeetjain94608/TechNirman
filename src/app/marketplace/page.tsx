import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

export default function MarketplacePage() {
  // Sample products
  const products = [
    {
      name: 'Arduino Uno',
      price: '₹799',
      img: '/public/arduino.jpg',
      desc: 'Tested, genuine Arduino Uno board. Perfect for projects.'
    },
    {
      name: 'Raspberry Pi 3B',
      price: '₹2,499',
      img: '/public/raspberrypi.jpg',
      desc: 'Refurbished Raspberry Pi 3B, ready for your next innovation.'
    },
    {
      name: 'Assorted Sensors Pack',
      price: '₹299',
      img: '/public/sensors.jpg',
      desc: 'Pack of 10+ tested sensors for all your DIY needs.'
    },
    {
      name: 'Stepper Motor',
      price: '₹199',
      img: '/public/stepper.jpg',
      desc: 'High-quality stepper motor, ideal for robotics.'
    },
  ];
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} color="primary.main" mb={3}>
        Marketplace
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={5}>
        Discover a curated selection of tested, affordable electronics and components. Our AI-driven platform ensures quality, transparency, and the best value for every buyer and seller. Join the circular revolution—shop with impact!
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={4}>
        {products.map((product, idx) => (
          <Card elevation={6} sx={{ width: 320, display: 'flex', flexDirection: 'column', borderRadius: 4, bgcolor: 'rgba(0,0,0,0.85)', color: 'white', boxShadow: 8 }} key={idx}>
            <CardMedia
              component="img"
              height="160"
              image={product.img}
              alt={product.name}
              sx={{ objectFit: 'contain', bgcolor: '#222' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight={700}>{product.name}</Typography>
              <Typography color="secondary.main" mb={1}>{product.desc}</Typography>
              <Typography variant="subtitle1" color="secondary" fontWeight={800}>{product.price}</Typography>
            </CardContent>
            <Button variant="contained" color="secondary" sx={{ m: 2, fontWeight: 700 }} disabled>
              Buy Now
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
