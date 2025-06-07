"use client";

import React, { useState } from "react";
import { Box, Typography, Card, CardContent, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

export default function SellIndPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; details?: string }>({});
  const steps = ["Your Info", "Component Details", "Submit"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function validateEmail(email: string) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  }

  const handleNext = () => {
    const newErrors: typeof errors = {};
    if (activeStep === 0) {
      if (!form.name.trim()) newErrors.name = "Name is required.";
      if (!form.email.trim()) newErrors.email = "Email is required.";
      else if (!validateEmail(form.email)) newErrors.email = "Enter a valid email address.";
    }
    if (activeStep === 1) {
      if (!form.details.trim()) newErrors.details = "Details are required.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setActiveStep((s) => s + 1);
  };
  const handleBack = () => setActiveStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ py: 6, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h3" fontWeight={700} color="primary.main" mb={2}>
        Sell Your Old Components (Individuals)
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={4}>
        Are you a student, hobbyist, or individual with old or unused electronic components or projects? Fill out the form below to sell your items to TECHNIRMAN and give them a new life.
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
            {steps.map((label) => (
              <Step key={label}><StepLabel>{label}</StepLabel></Step>
            ))}
          </Stepper>
          {submitted ? (
            <Typography color="success.main" fontWeight={600}>
              Thank you! Your submission has been received. We will contact you soon.
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              {activeStep === 0 && (
                <Box display="flex" flexDirection="column" gap={2}>
                  <TextField label="Your Name" name="name" value={form.name} onChange={handleChange} required fullWidth error={!!errors.name} helperText={errors.name} />
                  <TextField label="Contact Email" name="email" value={form.email} onChange={handleChange} required fullWidth type="email" error={!!errors.email} helperText={errors.email} />
                </Box>
              )}
              {activeStep === 1 && (
                <TextField label="Details of Components/Project" name="details" value={form.details} onChange={handleChange} required fullWidth multiline rows={4} error={!!errors.details} helperText={errors.details} />
              )}
              {activeStep === 2 && (
                <Box>
                  <Typography mb={2}>Review your details and submit:</Typography>
                  <Typography><b>Name:</b> {form.name}</Typography>
                  <Typography><b>Email:</b> {form.email}</Typography>
                  <Typography><b>Details:</b> {form.details}</Typography>
                </Box>
              )}
              <Box display="flex" gap={2} mt={3}>
                {activeStep > 0 && (
                  <Button onClick={handleBack} variant="outlined">Back</Button>
                )}
                {activeStep < steps.length - 1 && (
                  <Button onClick={handleNext} variant="contained" color="primary" disabled={
                    (activeStep === 0 && (!form.name || !form.email)) ||
                    (activeStep === 1 && !form.details)
                  }>
                    Next
                  </Button>
                )}
                {activeStep === steps.length - 1 && (
                  <Button type="submit" variant="contained" color="secondary">Submit</Button>
                )}
              </Box>
            </form>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
