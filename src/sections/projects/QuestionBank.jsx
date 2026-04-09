import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Button,
  Paper,
  Avatar,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StorageIcon from "@mui/icons-material/Storage";
import SearchIcon from "@mui/icons-material/Search";
import PrintIcon from "@mui/icons-material/Print";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

import dashboard from "../../assets/dashboard.png";
import permission from "../../assets/permission.png";
import rec2 from "../../assets/rec2.mov";
import rec3 from "../../assets/rec3.mov";
import rec4 from "../../assets/rec4.mov";




// Styled Components
const MotionBox = motion(Box);
const GradientBg = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`,
  borderRadius: "48px",
}));

// --- Paste this right above "function QuestionBank() {" ---

const LaptopFrame = ({ children }) => {
  
  
  return (
    <Box sx={{ width: "100%", position: "relative", maxWidth: "800px", mx: "auto" }}>
      
      {/* Screen */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "24px 24px 0 0",
          background: "#111",
          padding: "14px",
          border: "1px solid #333",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: "4px",
            background: "#000",
            overflow: "hidden",
            position: "relative",
            aspectRatio: "17/10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Bottom strip */}
      <Box
        sx={{
          bgcolor: "#191919",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "-1px",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "#666", fontSize: "0.6rem", letterSpacing: "1px" }}
        >
          MacBook Air
        </Typography>
      </Box>

      {/* Base */}
      <Box
        sx={{
          position: "relative",
          height: "10px",
          width: "116%",
          left: "-8%",
          background: "linear-gradient(to bottom, #ABACB1 0%, #222 100%)",
          borderRadius: "2px 2px 10px 10px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            background: "rgba(0,0,0,0.3)",
            borderRadius: "0 0 8px 8px",
          }
        }}
      />
    </Box>
  );
};

const FeatureCard = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "24px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
    boxShadow: `0 20px 40px -12px ${theme.palette.primary.main}20`,
  },
}));
const GradientText = styled("span")(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
  borderRadius: "32px",
  border: `1px solid ${theme.palette.divider}`,
}));

const WorkflowStep = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: "20px",
  transition: "all 0.2s ease",
  "&:hover": {
    background: `${theme.palette.primary.main}08`,
  },
}));

const screenshots = [
  {
    title: "Smart Question Selection",
    desc: "Filter and pick questions intelligently from the bank",
    url: rec3,
    type: "video",
  },
  {
    title: "Instant Paper Generation",
    desc: "Auto-formatted exam papers ready for print",
    url: rec2,
    type: "video",
  },
  {
    title: "Performance Analytics",
    desc: "Track student performance in real-time",
    url: rec4,
    type: "video",
  },
  {
    title: "Role-Based Access",
    desc: "Granular permissions for staff management",
    url: permission,
    type: "image",
  },
  {
    title: "Analytics Dashboard",
    desc: "Comprehensive insights and trends",
    url: dashboard,
    type: "image",
  },
];



function QuestionBank() {
  const theme = useTheme();
  const showcaseRef = useRef(null);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      {/* Simple Hero Section */}
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 12, md: 12 }, pb: { xs: 6, md: 8 }, mt: 8 }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
             <Typography
  variant="h1"
  sx={{
    fontSize: { xs: "2rem", md: "3rem" },
    fontWeight: 800,
    mb: 2,
  }}
>
  <GradientText>
    Question Bank Management System
  </GradientText>
</Typography>
              <Typography
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                A comprehensive platform for managing questions, generating exam
                papers, and tracking student performance analytics.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToShowcase}
                  sx={{ borderRadius: "12px", px: 4 }}
                >
                  View Gallery
                </Button>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid item size={{ xs: 12, md: 5 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  border: `1px solid ${theme.palette.divider}`,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}02, ${theme.palette.secondary.main}02)`,
                }}
              >
              <Grid container spacing={2}>
  {[
    {
      value: "100K+",
      label: "Questions",
      icon: <StorageIcon />,
      color: theme.palette.primary.main,
      bg: `${theme.palette.primary.main}10`,
    },
    {
      value: "85%",
      label: "Time Saved",
      icon: <TrendingUpIcon />,
     color: theme.palette.primary.main,
      bg: `${theme.palette.primary.main}10`,
    },
    {
      value: "80+",
      label: "Staff Users",
      icon: <SecurityIcon />,
     color: theme.palette.primary.main,
      bg: `${theme.palette.primary.main}10`,
    },
    {
      value: "20+",
      label: "System Modules",
      icon: <PrintIcon />,
      color: theme.palette.primary.main,
      bg: `${theme.palette.primary.main}10`,
    },
  ].map((item, i) => (
    <Grid item size={{ xs: 6 }} key={i}>
      <MotionBox
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        sx={{
          p: 3,
          textAlign: "center",
          borderRadius: "18px",
          border: `1px solid ${theme.palette.divider}`,
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${item.bg})`,
        }}
      >
        <Avatar
          sx={{
            bgcolor: item.bg,
            color: item.color,
            width: 42,
            height: 42,
            mx: "auto",
            mb: 1.5,
          }}
        >
          {item.icon}
        </Avatar>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: item.color,
            lineHeight: 1,
          }}
        >
          {item.value}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.label}
        </Typography>
      </MotionBox>
    </Grid>
  ))}
</Grid>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Platform Features - Card Grid (Unchanged) */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip label="Core Capabilities" sx={{ mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Platform Features
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Comprehensive tools designed for efficient exam management
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            {
              icon: <StorageIcon sx={{ fontSize: 40 }} />,
              title: "Question Repository",
              desc: "Centralized storage for 100,000+ questions with subject, topic, and difficulty categorization",
            },
            {
              icon: <SearchIcon sx={{ fontSize: 40 }} />,
              title: "Advanced Filtering",
              desc: "Powerful search and filter capabilities to quickly locate and select questions",
            },
            {
              icon: <PrintIcon sx={{ fontSize: 40 }} />,
              title: "Paper Generation",
              desc: "Instant creation of professionally formatted exam papers with one click",
            },
            {
              icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
              title: "Performance",
              desc: "Comprehensive insights into student performance and subject-wise trends",
            },
          ].map((feature, i) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <FeatureCard elevation={0}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Workflow - Horizontal Timeline Style (Unchanged) */}
      <GradientBg sx={{ py: 8, mb: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Workflow
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {[
              {
                step: "01",
                title: "Question Management",
                desc: "Upload, organize, and categorize questions with metadata",
                icon: <StorageIcon />,
              },
              {
                step: "02",
                title: "Paper Generation",
                desc: "Select questions and generate formatted exam papers",
                icon: <PrintIcon />,
              },
              {
                step: "03",
                title: "Performance Analysis",
                desc: "Track results and analyze student performance metrics",
                icon: <TrendingUpIcon />,
              },
            ].map((step, i) => (
              <Grid item size={{ xs: 12, md: 4 }} key={i}>
                <WorkflowStep>
                  <Avatar
                    sx={{
                      bgcolor: `${theme.palette.primary.main}15`,
                      color: "primary.main",
                      width: 56,
                      height: 56,
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Step {step.step}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.desc}
                    </Typography>
                  </Box>
                </WorkflowStep>
              </Grid>
            ))}
          </Grid>
        </Container>
      </GradientBg>

      {/* Gallery Section - Full Width Showcase (Unchanged) */}
    {/* Gallery Section - Laptop Showcase */}
      <Container ref={showcaseRef} maxWidth="lg" sx={{ mb: 12 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Platform Showcase
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Visual walkthrough of the desktop management interface
            </Typography>
          </Box>
        
        </Stack>

       <Box sx={{ px: { md: 10 }, position: "relative" }}>
  <AnimatePresence mode="wait">
    <MotionBox
      key={currentIndex}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <LaptopFrame>
        {screenshots[currentIndex].type === "video" ? (
          <video
            src={screenshots[currentIndex].url}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <img
            src={screenshots[currentIndex].url}
            alt={screenshots[currentIndex].title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        )}
      </LaptopFrame>
    </MotionBox>
  </AnimatePresence>

  {/* 🔥 LEFT BUTTON */}
  <IconButton
    onClick={handlePrev}
    sx={{
      position: "absolute",
      top: "50%",
      left: { xs: -10, md: 0 },
      transform: "translateY(-50%)",
      bgcolor: "rgba(0,0,0,0.5)",
      color: "#fff",
      backdropFilter: "blur(6px)",
      "&:hover": {
        bgcolor: "primary.main",
      },
      zIndex: 10,
    }}
  >
    <ChevronLeftIcon />
  </IconButton>

  {/* 🔥 RIGHT BUTTON */}
  <IconButton
    onClick={handleNext}
    sx={{
      position: "absolute",
      top: "50%",
      right: { xs: -10, md: 0 },
     
      bgcolor: "rgba(0,0,0,0.5)",
      color: "#fff",
      backdropFilter: "blur(6px)",
      "&:hover": {
        bgcolor: "primary.main",
      },
      zIndex: 10,
    }}
  >
    <ChevronRightIcon />
  </IconButton>
</Box>

        {/* Caption and Dots */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {screenshots[currentIndex].title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {screenshots[currentIndex].desc}
          </Typography>
          
          <Stack direction="row" spacing={1} justifyContent="center">
            {screenshots.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrentIndex(i)}
                sx={{
                  width: i === currentIndex ? 32 : 8,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: i === currentIndex ? "primary.main" : "divider",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Problem & Solution - Split Layout (Unchanged) */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "32px",
                border: `1px solid ${theme.palette.divider}`,
                height: "100%",
                background: `linear-gradient(135deg, ${theme.palette.error.main}02, transparent)`,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 2, color: "error.main" }}
              >
                Challenges
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Educational institutions face significant challenges with
                traditional exam management approaches.
              </Typography>
              <Stack spacing={1}>
                {[
                  "Fragmented question storage across multiple systems",
                  "Time-intensive manual paper compilation and formatting",
                  "Limited visibility into student performance trends",
                  "Complex user access and permission management",
                ].map((item, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Box sx={{ color: "error.main", fontSize: "1rem" }}>•</Box>
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "32px",
                border: `1px solid ${theme.palette.divider}`,
                height: "100%",
                background: `linear-gradient(135deg, ${theme.palette.success.main}02, transparent)`,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 2, color: "success.main" }}
              >
                Solution Approach
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                A unified platform designed to streamline the complete exam
                management lifecycle.
              </Typography>
              <Stack spacing={1}>
                {[
                  "Centralized question repository with 100K+ capacity and smart categorization",
                  "Automated paper generation with professional formatting templates",
                  "Real-time analytics dashboards for performance tracking",
                  "Granular role-based access control for secure management",
                ].map((item, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <CheckCircleIcon
                      color="success"
                      sx={{ fontSize: "1rem" }}
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default QuestionBank;
