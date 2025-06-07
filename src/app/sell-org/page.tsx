"use client";

import React, { useState } from "react";
import { Box, Typography, Card, CardContent, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

export default function SellOrgPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    orgName: "",
    orgType: "",
    contact: "",
    email: "",
    projectTitle: "",
    projectType: "",
    year: "",
    components: "",
    originalValue: "",
    price: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    orgName?: string;
    orgType?: string;
    contact?: string;
    email?: string;
    projectTitle?: string;
    projectType?: string;
    year?: string;
    components?: string;
    originalValue?: string;
    price?: string;
    details?: string;
  }>({});
  const steps = ["Organization Info", "Project Details", "Review & Submit"];

  function validateEmail(email: string) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  }

  const handleNext = () => {
    const newErrors: typeof errors = {};
    if (activeStep === 0) {
      if (!form.orgName.trim()) newErrors.orgName = "Organization name is required.";
      if (!form.orgType) newErrors.orgType = "Select organization type.";
      if (!form.contact.trim()) newErrors.contact = "Contact number is required.";
      else if (!/^\d{10}$/.test(form.contact)) newErrors.contact = "Enter a valid 10-digit number.";
      if (!form.email.trim()) newErrors.email = "Email is required.";
      else if (!validateEmail(form.email)) newErrors.email = "Enter a valid email address.";
    }
    if (activeStep === 1) {
      if (!form.projectTitle.trim()) newErrors.projectTitle = "Project title is required.";
      if (!form.projectType) newErrors.projectType = "Select project type.";
      if (!form.year.trim()) newErrors.year = "Year is required.";
      else if (!/^\d{4}$/.test(form.year) || +form.year > new Date().getFullYear()) newErrors.year = "Enter a valid year.";
      if (!form.components.trim()) newErrors.components = "Component list is required.";
      if (!form.originalValue.trim() || isNaN(Number(form.originalValue))) newErrors.originalValue = "Enter a valid amount.";
      if (!form.price.trim() || isNaN(Number(form.price))) newErrors.price = "Enter a valid price.";
      if (!form.details.trim()) newErrors.details = "Project details are required.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setActiveStep((s) => s + 1);
  };
  const handleBack = () => setActiveStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ py: 6, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h3" fontWeight={700} color="primary.main" mb={2}>
        Sell Old Components (Organizations/Colleges)
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={4}>
        If you are an organization or college with old, unused, or surplus electronic components or project parts, fill out the form below to sell your components to TECHNIRMAN and support the circular tech economy.
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
                  <TextField label="Organization/College Name" name="orgName" value={form.orgName} onChange={handleChange} required fullWidth error={!!errors.orgName} helperText={errors.orgName} />
                  <TextField label="Contact Person Number" name="contact" value={form.contact} onChange={handleChange} required fullWidth error={!!errors.contact} helperText={errors.contact} type="tel" inputProps={{ maxLength: 10 }} />
                  <TextField label="Contact Email" name="email" value={form.email} onChange={handleChange} required fullWidth type="email" error={!!errors.email} helperText={errors.email} />
                  <TextField select label="Organization Type" name="orgType" value={form.orgType} onChange={handleChange} required fullWidth error={!!errors.orgType} helperText={errors.orgType} SelectProps={{ native: true }}>
                    <option value="">Select</option>
                    <option value="college">College / Institute</option>
                    <option value="company">Company / Industry</option>
                    <option value="other">Other</option>
                  </TextField>
                </Box>
              )}
              {activeStep === 1 && (
                <Box display="flex" flexDirection="column" gap={2}>
                  <TextField label="Project Name/Title" name="projectTitle" value={form.projectTitle} onChange={handleChange} required fullWidth error={!!errors.projectTitle} helperText={errors.projectTitle} />
                  <TextField select label="Type of Project" name="projectType" value={form.projectType} onChange={handleChange} required fullWidth error={!!errors.projectType} helperText={errors.projectType} SelectProps={{ native: true }}>
                    <option value="">Select</option>
                    <option value="academic">Academic</option>
                    <option value="rnd">R&D</option>
                    <option value="prototype">Prototype</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </TextField>
                  <TextField label="Year of Completion/Submission" name="year" value={form.year} onChange={handleChange} required fullWidth error={!!errors.year} helperText={errors.year} type="number" inputProps={{ min: 2000, max: new Date().getFullYear() }} />
                  <TextField label="Component List (comma separated)" name="components" value={form.components} onChange={handleChange} required fullWidth error={!!errors.components} helperText={errors.components} multiline rows={2} />
                  <TextField label="Estimated Original Value (₹)" name="originalValue" value={form.originalValue} onChange={handleChange} required fullWidth error={!!errors.originalValue} helperText={errors.originalValue} type="number" />
                  <TextField label="Preferred Selling Price (₹)" name="price" value={form.price} onChange={handleChange} required fullWidth error={!!errors.price} helperText={errors.price} type="number" />
                  <TextField label="Project Details / Description" name="details" value={form.details} onChange={handleChange} required fullWidth error={!!errors.details} helperText={errors.details} multiline rows={3} />
                </Box>
              )}
              {activeStep === 2 && (
                <Box>
                  <Typography mb={2}>Review your details and submit:</Typography>
                  <Typography><b>Organization:</b> {form.orgName}</Typography>
                  <Typography><b>Type:</b> {form.orgType}</Typography>
                  <Typography><b>Contact:</b> {form.contact}</Typography>
                  <Typography><b>Email:</b> {form.email}</Typography>
                  <Typography><b>Project Title:</b> {form.projectTitle}</Typography>
                  <Typography><b>Project Type:</b> {form.projectType}</Typography>
                  <Typography><b>Year:</b> {form.year}</Typography>
                  <Typography><b>Components:</b> {form.components}</Typography>
                  <Typography><b>Original Value:</b> ₹{form.originalValue}</Typography>
                  <Typography><b>Preferred Price:</b> ₹{form.price}</Typography>
                  <Typography><b>Details:</b> {form.details}</Typography>
                </Box>
              )}
              <Box display="flex" gap={2} mt={3}>
                {activeStep > 0 && (
                  <Button onClick={handleBack} variant="outlined">Back</Button>
                )}
                {activeStep < steps.length - 1 && (
                  <Button onClick={handleNext} variant="contained" color="primary" disabled={
                    (activeStep === 0 && (!form.orgName || !form.email)) ||
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
