"use client";

import React, { useState } from "react";
import { Box, Typography, Card, CardContent, TextField, Button, Avatar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validateEmail(email: string) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) newErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };
  return (
    <Box sx={{ py: 6, maxWidth: 600, mx: "auto" }}>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
          <SupportAgentIcon fontSize="large" />
        </Avatar>
        <Typography variant="h3" fontWeight={700} color="primary.main">
          Contact TECHNIRMAN
        </Typography>
      </Box>
      <Typography variant="h6" color="text.secondary" mb={3}>
        For queries, partnerships, or support, please reach out to us!
      </Typography>
      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2} mb={1}>
            <EmailIcon color="secondary" />
            <Typography variant="subtitle1" fontWeight={600}>info@technirman.com</Typography>
          </Box>
        </CardContent>
      </Card>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={2}>Send us a message</Typography>
          {submitted ? (
            <Typography color="success.main" fontWeight={600}>
              Thank you! Your message has been sent. We&#39;ll get back to you soon.
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField label="Your Name" name="name" value={form.name} onChange={handleChange} required fullWidth error={!!errors.name} helperText={errors.name} />
                <TextField label="Your Email" name="email" value={form.email} onChange={handleChange} required fullWidth type="email" error={!!errors.email} helperText={errors.email} />
                <TextField label="Message" name="message" value={form.message} onChange={handleChange} required fullWidth multiline rows={4} error={!!errors.message} helperText={errors.message} />
                <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'flex-end' }}>Send</Button>
              </Box>
            </form>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
