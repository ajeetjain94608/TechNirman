"use client";
import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../CartContext';

export default function MarketplacePage() {
  // Updated products with correct images, prices, and available quantity
  const products = [
    {
      name: 'Raspberry Pi 3B',
      price: 1500,
      img: '/Product_images/Raspberry Pi 3B.jpg',
      desc: 'Refurbished Raspberry Pi 3B, ready for your next innovation.',
      available: 5
    },
    {
      name: 'Assorted Sensors Pack',
      price: 200,
      img: '/Product_images/Assorted Sensors Pack.webp',
      desc: 'Pack of 10+ tested sensors for all your DIY needs.',
      available: 10
    },
    {
      name: 'Stepper Motor',
      price: 300,
      img: '/Product_images/Stepper Motor.webp',
      desc: 'High-quality stepper motor, ideal for robotics.',
      available: 7
    },
    {
      name: 'Arduino Uno',
      price: 100,
      img: '/Product_images/Arduino_Uno.webp',
      desc: 'Tested, genuine Arduino Uno board. Perfect for projects.',
      available: 12
    },
  ];
  const { addToCart, cart } = useCart();
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQtyChange = (idx: number, value: number, max: number) => {
    setQuantities(qs => qs.map((q, i) => i === idx ? Math.max(1, Math.min(value, max)) : q));
  };

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} color="primary.main" mb={3}>
        Marketplace
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={5}>
        Discover a curated selection of tested, affordable electronics and components. Our AI-driven platform ensures quality, transparency, and the best value for every buyer and seller. Join the circular revolution—shop with impact!
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={4}>
        {products.map((product, idx) => {
          const inCart = cart.find(item => item.name === product.name)?.quantity || 0;
          return (
            <Card elevation={6} sx={{ width: 320, display: 'flex', flexDirection: 'column', borderRadius: 4, bgcolor: 'rgba(0,0,0,0.85)', color: 'white', boxShadow: 8 }} key={idx}>
              <CardMedia
                component="img"
                height="160"
                image={product.img}
                alt={product.name}
                sx={{ objectFit: 'contain', bgcolor: '#fff', p: 2, borderRadius: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={700}>{product.name}</Typography>
                <Typography color="secondary.main" mb={1}>{product.desc}</Typography>
                <Typography variant="subtitle1" color="secondary" fontWeight={800}>₹{product.price}</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  <b>Available:</b> {product.available - inCart}
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <TextField
                    type="number"
                    size="small"
                    value={quantities[idx]}
                    onChange={e => handleQtyChange(idx, Number(e.target.value), product.available - inCart)}
                    inputProps={{ min: 1, max: product.available - inCart, style: { width: 60 } }}
                    disabled={product.available - inCart === 0}
                  />
                  <IconButton
                    color="secondary"
                    onClick={() => addToCart(product, quantities[idx])}
                    disabled={product.available - inCart === 0 || quantities[idx] > (product.available - inCart)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
