// sections/Hero.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import InteractiveSquares from "./InteractiveSquares";
import { useThemeMode } from "../context/ThemeContext";

// Styled components with motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const ReactSvgIcon = (props) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  transition: "background-color 0.3s ease",
  padding: theme.spacing(2, 0), // Added vertical padding for mobile
}));

const GlassCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    textAlign: "center", // Center text on mobile
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(59, 130, 246, 0.1)" : "#ffffff",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 4px 12px rgba(0, 0, 0, 0.3)"
      : "0 4px 12px rgba(0,0,0,0.05)",
  "&:hover": {
    transform: "translateY(-4px)",
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(59, 130, 246, 0.2)" : "#ffffff",
  },
  transition: "all 0.3s ease",
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

const nameVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const skillVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      stiffness: 200,
    },
  }),
};

const GradientText = styled("span")(({ theme }) => ({
  display: "inline-block",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

const socialIconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1 + custom * 0.1,
      type: "spring",
      stiffness: 200,
    },
  }),
  hover: {
    y: -5,
    rotate: 5,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

function Hero() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDarkMode = mode === "dark";

  const skills = ["React.js", "React Native",];

  return (
    <HeroSection>
      {/* Background Animated React Icons */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
        {[
          { top: '15%', right: '40%', size: 45, delay: 0, duration: 4 }, // Top middle-right
          { top: '35%', right: '15%', size: 90, delay: 1.5, duration: 5 }, // Large middle-right
          { top: '20%', right: '5%', size: 50, delay: 0.5, duration: 4.5 }, // Top right edge
          { bottom: '20%', right: '25%', size: 70, delay: 2, duration: 4.2 }, // Bottom right
        ].map((item, i) => (
          <MotionBox
            key={i}
            sx={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              color: 'primary.main',
              opacity: 0.15,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: {
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotate: {
                duration: item.duration * 3,
                repeat: Infinity,
                ease: "linear",
              }
            }}
          >
            <ReactSvgIcon style={{ width: item.size, height: item.size }} />
          </MotionBox>
        ))}
      </Box>

      <InteractiveSquares
        squareSize={50}
        borderColor={
          isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
        }
        hoverFillColor={
          isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.03)"
        }
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 7 }}>
            <GlassCard>
              <MotionBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <MotionTypography
                  variant="h1"
                  variants={itemVariants}
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: theme.palette.text.primary,
                    // Responsive Font Size
                    fontSize: { xs: "2.5rem", sm: "3.0rem", md: "3.0rem" },
                  }}
                >
                  I'm{" "}
                  <motion.span
                    variants={nameVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <GradientText>Akhilesh</GradientText>
                  </motion.span>
                </MotionTypography>

                <MotionTypography
                  variant="h4"
                  variants={itemVariants}
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    mb: 3,
                    // Responsive Font Size
                    fontSize: { xs: "1.25rem", sm: "1.25rem", md: "1.25rem" },
                  }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  React Developer
                </MotionTypography>

                <MotionTypography
                  variants={itemVariants}
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    maxWidth: { xs: "100%", md: "500px" },
                    fontWeight: 500,
                    mx: { xs: "auto", md: 0 }, // Center text block on mobile
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {skills.map((skill, index) => (
                      <React.Fragment key={skill}>
                        {index > 0 && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            {" • "}
                          </motion.span>
                        )}
                        <motion.span
                          custom={index}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{
                            scale: 1.1,
                            color: theme.palette.primary.main,
                            transition: { duration: 0.2 },
                          }}
                          style={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            position: "relative",
                            display: "inline-block",
                            cursor: "default",
                          }}
                        >
                          | {skill}
                        </motion.span>
                      </React.Fragment>
                    ))}
                  </Box>
                </MotionTypography>

                <MotionBox
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // Column on mobile
                    gap: 2,
                    mb: 5,
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                  }}
                  variants={itemVariants}
                >
                  <MotionButton
                    variant="contained"
                    size="large"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                      const latestWorksSection = document.getElementById('works');
                      if (latestWorksSection) {
                        latestWorksSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      borderRadius: "12px",
                      px: 4,
                      width: { xs: "100%", sm: "auto" }, // Full width on mobile
                      position: "relative",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transform: "translateX(-100%)",
                      },
                      "&:hover::after": {
                        transform: "translateX(100%)",
                        transition: "transform 0.8s ease",
                      },
                    }}
                  >
                    Latest Work
                  </MotionButton>

                  <MotionButton
                    component="a"
                    href="/akhilesh_resume.pdf"
                    download="akhilesh_resume.pdf"
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    sx={{
                      borderRadius: "12px",
                      px: 4,
                      width: { xs: "100%", sm: "auto" }, // Full width on mobile
                      backgroundColor: isDarkMode ? "transparent" : "#fff",
                      borderColor: isDarkMode
                        ? "rgba(59, 130, 246, 0.5)"
                        : undefined,
                      "&:hover": {
                        backgroundColor: isDarkMode
                          ? "rgba(59, 130, 246, 0.08)"
                          : "#fff",
                        borderColor: isDarkMode
                          ? "rgba(59, 130, 246, 0.8)"
                          : undefined,
                      },
                    }}
                  >
                    Resume
                  </MotionButton>
                </MotionBox>

                <MotionBox
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                  variants={itemVariants}
                >
                  {[
                    {
                      Icon: GitHubIcon,
                      url: "https://github.com/Akhileshyeri",
                      delay: 0,
                    },
                    {
                      Icon: LinkedInIcon,
                      url: "https://www.linkedin.com/in/akhileshyeri/",
                      delay: 1,
                    },

                  ].map((social, index) => (
                    <MotionIconButton
                      key={index}
                      custom={index}
                      variants={socialIconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(social.url, "_blank")}
                      sx={{
                        backgroundColor: isDarkMode
                          ? `rgba(59, 130, 246, 0.1)`
                          : "#ffffff",
                      }}
                    >
                      <social.Icon />
                    </MotionIconButton>
                  ))}
                </MotionBox>
              </MotionBox>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>


    </HeroSection>
  );
}

export default Hero;
