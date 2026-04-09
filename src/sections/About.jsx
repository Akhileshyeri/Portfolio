// sections/About.js
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import mypic from "../assets/Mindspic.jpeg";

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);
const MotionChip = motion(Chip);

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
`;

const AnimatedAvatar = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "380px",
  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
  border: `4px solid ${theme.palette.primary.main}`,
  animation: `${floatAnimation} 6s ease-in-out infinite`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)"
      : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
}));

const TechCard = styled(MotionPaper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(0, 0, 0, 0.02)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 10px 30px -15px ${theme.palette.primary.main}`,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const StatusDot = styled(Box)(({ theme }) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: "#4caf50",
  marginRight: theme.spacing(1),
  animation: `${pulseAnimation} 2s infinite`,
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const leftColumnVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.2,
    },
  },
};

const rightColumnVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.4,
    },
  },
};

const statCardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3 + custom * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const chipVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.6 + custom * 0.05,
    },
  }),
  hover: {
    scale: 1.1,
    backgroundColor: "primary.main",
    color: "white",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const sectionTitleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const techStackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

function About() {
  const techStack = {
    frontend: ["React.js", "React Native", "JavaScript", "Redux", "Material-UI", "Tailwind Css"],
    api: ["REST APIS", "Socket Connection"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Vercel", "Netlify"],
  };

  const quickStats = [
    { label: "Years Experience", value: "1+", icon: "🚀" },
    { label: "Projects Completed", value: "5+", icon: "💻" },
    { label: "Coffee Consumed", value: "∞", icon: "☕" },
  ];

  return (
    <MotionBox
      component="section"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      variants={containerVariants}
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Content */}
          <MotionGrid
            item
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            order={{ xs: 2, md: 1 }}
            variants={leftColumnVariants}
          >
            <MotionBox variants={containerVariants} sx={{ mb: 3 }}>
              <MotionTypography
                variant="overline"
                variants={itemVariants}
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  mb: 1,
                  display: "block",
                }}
              >
                👋 Hello, I'm
              </MotionTypography>

              <MotionTypography
                variant="h2"
                variants={sectionTitleVariants}
                sx={{
                  fontSize: {
                    xs: "1.9rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                  },
                  textAlign: { xs: "center", md: "left" },
                  fontWeight: 700,
                  marginBottom: 1,
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                React Developer
              </MotionTypography>
            </MotionBox>

            <MotionTypography
              variant="body1"
              variants={itemVariants}
              sx={{
                fontSize: "1.1rem",
                color: "text.secondary",
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              I'm a passionate React Developer with a strong interest in
              building modern, user-friendly Web Applications and Mobile Apps. I enjoy bridging the gap between design,
              functionality, and technology to create seamless digital
              experiences.
            </MotionTypography>

            {/* Tech Stack Categories */}
            <MotionBox variants={techStackVariants} sx={{ mb: 4 }}>
              <MotionTypography
                variant="h6"
                variants={itemVariants}
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Tech Stack
              </MotionTypography>
              <Stack spacing={2}>
                <MotionBox variants={itemVariants}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <LanguageIcon color="primary" fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Frontend
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {techStack.frontend.map((tech, index) => (
                      <MotionChip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        custom={index}
                        variants={chipVariants}
                        sx={{
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </Box>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <StorageIcon color="primary" fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      APIs & Integrations
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {techStack.api.map(
                      (tech, index) => (
                        <MotionChip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          custom={index}
                          variants={chipVariants}
                          sx={{
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        />
                      ),
                    )}
                  </Box>
                </MotionBox>
              </Stack>
            </MotionBox>

            {/* Quick Stats - Compact Design */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {quickStats.map((stat, index) => (
                <Grid item size={{ xs: 4 }} key={index}>
                  <MotionBox
                    custom={index}
                    variants={statCardVariants}
                    whileHover="hover"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.5,
                      borderRadius: "12px",

                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 36,
                        height: 36,
                        borderRadius: "8px",
                        background: (theme) =>
                          `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }}
                    >
                      {stat.icon}
                    </Box>

                    {/* Text */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.7rem",
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>

            {/* GitHub Link */}
            {/* <MotionBox
              component="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              variants={githubLinkVariants}
              whileHover="hover"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                color: "text.primary",
                p: 1.5,
                borderRadius: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <GitHubIcon />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Check out my GitHub
              </Typography>
              <MotionTypography 
                variant="body2" 
                color="primary" 
                sx={{ ml: 1 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </MotionTypography>
            </MotionBox> */}
          </MotionGrid>

          {/* Right Column - Image */}
          <MotionGrid
            item
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            order={{ xs: 1, md: 2 }}
            variants={rightColumnVariants}
          >
            <MotionBox
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatedAvatar src={mypic} alt="Profile" variant="square" />

              <MotionBox
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                sx={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  backgroundColor: "background.paper",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  boxShadow: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  cursor: "default",
                }}
              >
                <StatusDot />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Available for work
                </Typography>
              </MotionBox>
            </MotionBox>
          </MotionGrid>
        </Grid>
      </Container>
    </MotionBox>
  );
}

export default About;
