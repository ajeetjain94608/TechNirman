"use client";
import React from "react";
import { useCart } from "../CartContext";
import { Box, Typography, IconButton, Button, TextField, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ py: 6, maxWidth: 700, mx: "auto" }}>
      <Typography variant="h3" fontWeight={700} color="primary.main" mb={3}>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography color="text.secondary">Your cart is empty.</Typography>
      ) : (
        <>
          {cart.map((item, idx) => (
            <Box key={item.name} display="flex" alignItems="center" gap={2} mb={2} p={2} bgcolor="#181828" borderRadius={2}>
              <img src={item.img} alt={item.name} style={{ width: 80, height: 60, objectFit: 'contain', background: '#fff', borderRadius: 8 }} />
              <Box flex={1}>
                <Typography fontWeight={700}>{item.name}</Typography>
                <Typography color="text.secondary" fontSize={14}>{item.desc}</Typography>
                <Typography color="secondary" fontWeight={700}>₹{item.price}</Typography>
                <Typography fontSize={13} color="text.secondary">Available: {item.available}</Typography>
              </Box>
              <TextField
                type="number"
                size="small"
                value={item.quantity}
                onChange={e => updateQuantity(item.name, Number(e.target.value))}
                inputProps={{ min: 1, max: item.available, style: { width: 60 } }}
                sx={{ mr: 1 }}
              />
              <IconButton color="error" onClick={() => removeFromCart(item.name)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Divider sx={{ my: 3 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={700}>Total: ₹{total}</Typography>
            <Button variant="contained" color="secondary" size="large" disabled={cart.length === 0}>
              Checkout
            </Button>
            <Button variant="outlined" color="primary" onClick={clearCart} disabled={cart.length === 0} sx={{ ml: 2 }}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
