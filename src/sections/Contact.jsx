import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

const ContactPaper = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(26, 26, 26, 0.8)" : "#ffffff",
  borderRadius: "24px",
  backdropFilter: "blur(12px)",
  border: `1px solid ${theme.palette.divider}`,
  height: "100%",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0,0,0,0.4)"
      : "0 8px 32px rgba(0,0,0,0.05)",
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: "44px",
  height: "44px",
  borderRadius: "10px",
  backgroundColor: theme.palette.secondary.main + "20", // 20% opacity of your theme amber
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
  color: theme.palette.secondary.main,
}));

// The Interactive Image Component
// New Reliable Interactive Illustration
const ContactIllustration = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "280px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 4,
        perspective: "1000px",
      }}
    >
      {/* Decorative background glow */}
      <Box
        sx={{
          position: "absolute",
          width: "180px",
          height: "180px",
          bgcolor: "secondary.main",
          filter: "blur(70px)",
          opacity: 0.15,
          zIndex: 0,
        }}
      />

      {/* The Main Illustration (Pure SVG for reliability) */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ zIndex: 1 }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Envelope Body */}
          <motion.rect
            x="20"
            y="50"
            width="160"
            height="110"
            rx="15"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "#E0A458" }} // Uses your Amber theme color
          />
          {/* Envelope Top Flap */}
          <path
            d="M20 60L100 110L180 60"
            stroke="#E0A458"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Floating 'Smart' Nodes (Represents Tech Stack) */}
          <motion.circle
            cx="40"
            cy="30"
            r="8"
            fill="#E0A458"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="160"
            cy="40"
            r="5"
            fill="#2D3047"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </Box>
  );
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.01)",
    "& fieldset": { borderColor: theme.palette.divider },
    "&:hover fieldset": { borderColor: theme.palette.secondary.main },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "2px",
    },
  },
}));

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:akhileshyeri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Typography
              variant="overline"
              color="secondary"
              sx={{ fontWeight: 800, letterSpacing: 3 }}
            >
              Ready to help
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Create Together
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 5 }}>
            <ContactPaper
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactIllustration />

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Contact Info
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form or reach out via my social handles.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 4 }}>
                {[
                  {
                    icon: EmailIcon,
                    label: "Email",
                    val: "akhileshyeri@gmail.com",
                  },
                  { icon: PhoneIcon, label: "Phone", val: "+91 9591925302" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                      <IconCircle>
                        <Icon fontSize="small" />
                      </IconCircle>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {item.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {item.val}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </ContactPaper>
          </Grid>

          <Grid item size={{ xs: 12, md: 7 }}>
            <ContactPaper
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                Direct Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <StyledTextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <StyledTextField fullWidth label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <StyledTextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <StyledTextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item size={{ xs: 12 }}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{
                        py: 1.8,
                        mt: 1,
                        bgcolor: "secondary.main",
                        color: "#000",
                        fontWeight: 700,
                        "&:hover": { bgcolor: "secondary.dark" },
                      }}
                      endIcon={<SendIcon />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </ContactPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
