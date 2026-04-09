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
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BiometricIcon from "@mui/icons-material/Fingerprint";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import BarChartIcon from "@mui/icons-material/BarChart";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import studentData from "../../assets/studentsData.png";
import feesRec from "../../assets/feesRec.mov";
import attendance from "../../assets/attendance.png";
import attendanceReport from "../../assets/attendanceReport.mov";
import feeReport from "../../assets/feeReport.mov";

import certificates from "../../assets/certificates.png";

const LaptopFrame = ({ children }) => {
  

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        maxWidth: "800px",
        mx: "auto",
      }}
    >
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
          },
        }}
      />
    </Box>
  );
};

const showcaseSlides = [
  {
    title: "Attendance Report",
    desc: "View attendance analytics including Present, Absent, Late and Half Day statistics.",
    url: attendanceReport,
    type: "video",
  },
  {
    title: "Financial Reports",
    desc: "Complete fee analytics showing total fees collected and pending fee statistics.",
    url: feeReport,
    type: "video",
  },
  {
    title: "Attendance Management",
    desc: "Easily mark attendance for students using a clean and fast interface.",
    url: attendance,
    type: "image",
  },
  {
    title: "Fee Collection System",
    desc: "Manage student fee collection and generate receipts for each payment.",
    url: feesRec,
    type: "video",
  },
  {
    title: "Student Management System",
    desc: "Manage students with features like Student List, Create Admission, and Import Students.",
    url: studentData,
    type: "image",
  },
  {
    title: "Certificate Generation",
    desc: "Generate certificates like TC, Study Certificate, Character Certificate and Bonafide.",
    url: certificates,
    type: "image",
  },
];

// Styled Components
const MotionBox = motion(Box);
const GradientBg = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`,
  borderRadius: "48px",
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "24px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  height: "100%",
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

const ModuleCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "24px",
  transition: "all 0.3s ease",
  height: "100%",
  border: `1px solid ${theme.palette.divider}`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
}));

const TechBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}10`,
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: "0.75rem",
  borderRadius: "12px",
}));

function SchoolERP() {
  const theme = useTheme();
  const showcaseRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length,
    );
  };

  // Module data
  const modules = [
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: "Student Management System",
      description:
        "Complete student information system with advanced filtering, search capabilities, and bulk operations for efficient student data management.",
      features: [
        "Advanced search & filter",
        "Bulk operations",
        "Profile management",
        "Document tracking",
      ],
      tech: ["React Table", "Formik + Yup", "REST API"],
    },
    {
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
      title: "Fee Management Module",
      description:
        "Comprehensive fee management system with payment processing, receipt generation, and financial reporting capabilities.",
      features: [
        "Multiple payment modes",
        "Receipt generation",
        "Due date reminders",
        "Financial reports",
      ],
      tech: [
        "Payment Gateway API",
        "PDF Generation",
        "Chart.js",
        "Secure Transactions",
      ],
    },
    {
      icon: <FactCheckIcon sx={{ fontSize: 40 }} />,
      title: "Attendance Tracking",
      description:
        "Responsive attendance system that works seamlessly on desktop and mobile devices, allowing teachers to mark attendance from anywhere.",
      features: [
        "Biometric integration",
        "Mobile-friendly",
        "Reporting analytics",
        "Export functionality",
      ],
      tech: [
        "PWA Capabilities",
        "Chart.js",
        "Excel Export",
        "Push Notifications",
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      {/* Hero Section */}
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
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                <GradientText>School ERP Software</GradientText>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mb: 3,
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                End-to-end school management solution
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                From creating admission to collecting fees and issuing
                certificates — a complete platform to digitize and streamline
                all school operations.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToShowcase}
                  sx={{ borderRadius: "12px", px: 4 }}
                >
                  Explore Features
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
                      value: "All-in-One",
                      label: "Unified School ERP",
                      icon: <StorageIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                    {
                      value: "Real-time",
                      label: "Analytics & Reports",
                      icon: <BarChartIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                    {
                      value: "Easy",
                      label: "Fee Collection",
                      icon: <ReceiptIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                    {
                      value: "Centralized",
                      label: "Student Data System",
                      icon: <PeopleIcon />,
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
                          borderRadius: "16px",
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
                          variant="h5"
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

      {/* Core Modules Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip label="Core Modules" sx={{ mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Complete School Management Suite
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Three powerful modules that cover every aspect of school
            administration
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {modules.map((module, index) => (
            <Grid item size={{ xs: 12, md: 4 }} key={index}>
              <ModuleCard elevation={0}>
                <Box sx={{ color: "primary.main", mb: 2 }}>{module.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {module.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {module.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                  Key Features
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 2 }}
                >
                  {module.features.map((feature, i) => (
                    <Chip
                      key={i}
                      label={feature}
                      size="small"
                      sx={{
                        bgcolor: `${theme.palette.primary.main}08`,
                        borderRadius: "12px",
                        fontSize: "0.7rem",
                      }}
                    />
                  ))}
                </Stack>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                  Technical Highlights
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {module.tech.map((tech, i) => (
                    <TechBadge key={i} label={tech} size="small" />
                  ))}
                </Stack>
              </ModuleCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Additional Features Grid */}
      <GradientBg sx={{ py: 8, mb: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Platform Capabilities
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Built with modern technology stack for reliability and performance
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                icon: <SearchIcon />,
                title: "Advanced Search & Filter",
                desc: "Powerful filtering with multiple criteria to find student records instantly",
              },
              {
                icon: <StorageIcon />,
                title: "Bulk Operations",
                desc: "Efficiently manage large datasets with import/export and batch updates",
              },
              {
                icon: <ReceiptIcon />,
                title: "Smart Receipt Generation",
                desc: "Auto-generated PDF receipts with unique transaction IDs",
              },
              {
                icon: <NotificationsActiveIcon />,
                title: "Due Date Reminders",
                desc: "Automated notifications for fee payments and document submissions",
              },
              {
                icon: <BiometricIcon />,
                title: "Biometric Integration",
                desc: "Seamless integration with biometric devices for accurate attendance",
              },
              {
                icon: <BarChartIcon />,
                title: "Analytics Dashboard",
                desc: "Real-time insights with Chart.js visualizations and exportable reports",
              },
              {
                icon: <FilePresentIcon />,
                title: "Certificate Management",
                desc: "Generate Study Certificates, Transfer Certificates, and more",
              },
              {
                icon: <QrCodeScannerIcon />,
                title: "Secure Transactions",
                desc: "Encrypted payment processing with multiple gateway support",
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
      </GradientBg>

      {/* Workflow Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Complete Student Lifecycle Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            From admission to graduation, manage every step efficiently
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            {
              step: "01",
              title: "Admission",
              desc: "Digital application forms, document verification, and enrollment management",
              icon: <SchoolIcon />,
            },
            {
              step: "02",
              title: "Fee Collection",
              desc: "Track dues, collect payments, generate receipts, and manage scholarships",
              icon: <AccountBalanceWalletIcon />,
            },
            {
              step: "03",
              title: "Attendance",
              desc: "Daily attendance, grade management, and performance tracking",
              icon: <FactCheckIcon />,
            },
            {
              step: "04",
              title: "Certificate",
              desc: "Generate and issue study certificates, TC, and other official documents",
              icon: <FilePresentIcon />,
            },
          ].map((step, i) => (
            <Grid item size={{ xs: 12, md: 3 }} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  textAlign: "center",
                  border: `1px solid ${theme.palette.divider}`,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: `${theme.palette.primary.main}08`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: `${theme.palette.primary.main}15`,
                    color: "primary.main",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {step.icon}
                </Avatar>
                <Typography variant="caption" color="text.secondary">
                  Step {step.step}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container ref={showcaseRef} maxWidth="lg" sx={{ mb: 12 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Platform Showcase
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Visual walkthrough of key features and functionality
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
        {showcaseSlides[currentIndex].type === "video" ? (
          <video
            src={showcaseSlides[currentIndex].url}
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
            src={showcaseSlides[currentIndex].url}
            alt={showcaseSlides[currentIndex].title}
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
        {/* 👇 ADD THIS HERE (OUTSIDE the above Box) */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {showcaseSlides[currentIndex].title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {showcaseSlides[currentIndex].desc}
          </Typography>
        </Box>
      </Container>

      {/* Problem & Solution Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Grid container spacing={4}>
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
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Schools and educational institutions face numerous operational
                challenges with traditional management methods.
              </Typography>
              <List>
                {[
                  "Manual student data management leads to errors and inefficiency",
                  "Fee collection tracking and receipt generation is time-consuming",
                  "Attendance marking is prone to errors and proxy marking",
                  "Certificate generation and issuance delays",
                  "No centralized view of student lifecycle",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box sx={{ color: "error.main", fontSize: "1rem" }}>
                        •
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
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
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                A unified School ERP platform that digitizes and streamlines all
                administrative processes.
              </Typography>
              <List>
                {[
                  "Centralized student database with advanced search and bulk operations",
                  "Integrated fee management with multiple payment modes and auto-receipts",
                  "Biometric and mobile-responsive attendance system with analytics",
                  "Automated certificate generation with digital signatures",
                  "Comprehensive dashboards and exportable reports",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon
                        color="success"
                        sx={{ fontSize: "1rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Technical Stack Section */}
      <GradientBg sx={{ py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Technical Excellence
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Modern technologies powering the School ERP platform
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {[
              "React with Hooks & Context API",
              "React Table for data grids",
              "Formik & Yup Validation",
              "REST API Integration",
              "Payment Gateway APIs",
              "PDF Generation Libraries",
              "Chart.js Visualizations",
              "PWA Capabilities",
              "Excel Export Functionality",
              "Push Notifications",
              "Biometric Device Integration",
              "Secure Authentication",
            ].map((tech, i) => (
              <Grid item key={i}>
                <Chip
                  label={tech}
                  sx={{
                    bgcolor: "background.paper",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "20px",
                    py: 2,
                    px: 1,
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </GradientBg>
    </Box>
  );
}

export default SchoolERP;
