// sections/QuestionBank.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Stack,
  Card,
  CardContent,
  Button,
  Divider,
  Avatar,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  MenuBook as MenuBookIcon,
  School as SchoolIcon,
  AutoStories as AutoStoriesIcon,
  QuestionAnswer as QuestionAnswerIcon,
  PictureAsPdf as PdfIcon,
  People as PeopleIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Functions as FunctionsIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Timeline as TimelineIcon,
  CloudDone as CloudDoneIcon,
  BugReport as BugReportIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Settings as SettingsIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Assessment as AssessmentIcon,
  ExpandMore as ExpandMoreIcon,
  Category as CategoryIcon,
  Layers as LayersIcon,
  CompareArrows as CompareArrowsIcon,
  ShowChart as ShowChartIcon,
  Work as WorkIcon,
  Add as AddIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);
const MotionCard = motion(Card);
const MotionChip = motion(Chip);

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
`;

const FeatureCard = styled(MotionCard)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "24px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px -12px ${
      theme.palette.mode === "dark" 
        ? "rgba(0,0,0,0.8)" 
        : theme.palette.primary.main + "40"
    }`,
  },
}));

const StatCard = styled(MotionPaper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  border: `1px solid ${theme.palette.divider}`,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const MetricCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function QuestionBank() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
      title: "Question Bank Management",
      description: "Structured academic hierarchy with Class → Subject → Chapter → Topic → Questions organization. Support for LaTeX equations and images.",
      details: [
        "Bulk import/export via CSV, Excel",
        "Advanced tagging and categorization",
        "Version history and audit trails",
        "Question difficulty levels",
        "Bloom's taxonomy classification",
      ],
      color: "#2D3047",
    },
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 40 }} />,
      title: "Question Paper Generator",
      description: "Create custom papers manually or automatically. Multiple layouts and export formats with real-time preview.",
      details: [
        "Smart algorithm for balanced papers",
        "Customizable templates (20+ layouts)",
        "Multiple export formats (PDF, DOC)",
        "Section-wise question distribution",
        "Marks and time allocation",
      ],
      color: "#E0A458",
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: "Staff & Role-Based Access",
      description: "Granular permission system for administrators and staff. Control access for content creation and paper generation.",
      details: [
        "5 distinct user roles with custom permissions",
        "Two-factor authentication support",
        "Activity logging and monitoring",
        "Department-level access control",
        "Approval workflows for content",
      ],
      color: "#419D78",
    },
    {
      icon: <FunctionsIcon sx={{ fontSize: 40 }} />,
      title: "LaTeX Math Support",
      description: "Full LaTeX rendering for mathematical equations using MathJax. Perfect for scientific and mathematical content.",
      details: [
        "Real-time equation preview",
        "Support for complex notations",
        "Chemical equations support",
        "Diagram embedding",
        "MathML compatibility",
      ],
      color: "#C44545",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "Performance & Scalability",
      description: "Optimized for large databases with thousands of active users. Fast filtering and real-time search.",
      details: [
        "Database indexing for quick searches",
        "Caching layer with Redis",
        "Load balancing support",
        "CDN for static assets",
        "Auto-scaling configuration",
      ],
      color: "#5A7D9C",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Custom Paper Creation",
      description: "Section-wise question limits, exam templates, and collaborative paper creation for teachers.",
      details: [
        "Real-time collaboration features",
        "Paper versioning and history",
        "Comment and review system",
        "Custom branding options",
        "Watermark and security features",
      ],
      color: "#CBA77C",
    },
  ];

  const questionTypes = [
    { type: "Multiple Choice", count: "250K+", percentage: 45, color: "#2D3047" },
    { type: "True/False", count: "100K+", percentage: 18, color: "#E0A458" },
    { type: "Short Answer", count: "75K+", percentage: 15, color: "#419D78" },
    { type: "Long Answer", count: "50K+", percentage: 12, color: "#C44545" },
    { type: "Numerical", count: "25K+", percentage: 10, color: "#5A7D9C" },
  ];

  const userRoles = [
    { role: "Super Admin", permissions: ["Full access", "System config", "User management"], users: 5, color: "#2D3047" },
    { role: "Content Manager", permissions: ["Question management", "Paper approval", "Category management"], users: 25, color: "#E0A458" },
    { role: "Teacher", permissions: ["Paper generation", "View questions", "Export papers"], users: 500, color: "#419D78" },
    { role: "Reviewer", permissions: ["Review papers", "Provide feedback", "Quality check"], users: 50, color: "#C44545" },
    { role: "Viewer", permissions: ["Read-only access", "Download papers", "Analytics view"], users: 2000, color: "#5A7D9C" },
  ];

  const performanceMetrics = [
    { metric: "API Response Time", value: "120ms", target: "<200ms", status: "good", icon: <SpeedIcon /> },
    { metric: "Question Load Time", value: "0.8s", target: "<1s", status: "good", icon: <TimelineIcon /> },
    { metric: "Paper Generation", value: "2.5s", target: "<3s", status: "good", icon: <AutoStoriesIcon /> },
    { metric: "Concurrent Users", value: "8,500", target: "10,000", status: "warning", icon: <PeopleIcon /> },
    { metric: "Uptime", value: "99.97%", target: "99.9%", status: "good", icon: <CloudDoneIcon /> },
    { metric: "Error Rate", value: "0.02%", target: "<0.1%", status: "good", icon: <BugReportIcon /> },
  ];

  const technologies = [
    { 
      category: "Frontend", 
      icon: <CodeIcon />,
      items: [
        { name: "React.js 18", description: "Component-based UI" },
        { name: "Material-UI v5", description: "Design system" },
        { name: "MathJax 3", description: "LaTeX rendering" },
        { name: "Redux Toolkit", description: "State management" },
      ]
    },
    { 
      category: "Backend", 
      icon: <StorageIcon />,
      items: [
        { name: "Node.js 20", description: "Runtime environment" },
        { name: "Express.js", description: "API framework" },
        { name: "JWT & OAuth2", description: "Authentication" },
        { name: "Redis", description: "Caching layer" },
      ]
    },
    { 
      category: "Database", 
      icon: <StorageIcon />,
      items: [
        { name: "MongoDB", description: "Question documents" },
        { name: "PostgreSQL", description: "User data & permissions" },
        { name: "Elasticsearch", description: "Search optimization" },
      ]
    },
  ];

  const roadmapSteps = [
    {
      label: "Question Bank Setup",
      description: "Initialize academic hierarchy and question database structure",
      status: "completed",
      date: "Q1 2023",
    },
    {
      label: "Paper Generator Core",
      description: "Develop manual and automatic paper generation algorithms",
      status: "completed",
      date: "Q2 2023",
    },
    {
      label: "Role-Based Access Control",
      description: "Implement multi-tier permission system for staff management",
      status: "completed",
      date: "Q3 2023",
    },
    {
      label: "LaTeX Integration",
      description: "Add MathJax support for mathematical equations",
      status: "completed",
      date: "Q4 2023",
    },
    {
      label: "Performance Optimization",
      description: "Scale system for 10,000+ concurrent users",
      status: "in-progress",
      date: "Q1 2024",
    },
  ];

  return (
    <MotionBox
      component="section"
      id="question-bank"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
      variants={containerVariants}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <MotionBox variants={itemVariants} sx={{ mb: 6, textAlign: "center" }}>
          <Chip
            label="🚀 Enterprise Production"
            color="primary"
            sx={{ mb: 2, fontSize: "0.9rem", py: 2 }}
          />
          
          <SectionTitle variant="h2" sx={{ mb: 2 }}>
            Question Bank & Exam Management System
          </SectionTitle>
          
          <MotionTypography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: "900px",
              mx: "auto",
              mb: 4,
              fontWeight: 400,
            }}
          >
            A comprehensive platform serving <strong>10,000+ educators</strong> across <strong>500+ institutions</strong>,
            managing <strong>500K+ questions</strong> with intelligent paper generation
          </MotionTypography>

          {/* Live Status Bar */}
          <Paper
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 3,
              p: 1.5,
              px: 3,
              borderRadius: "50px",
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#4caf50", animation: `${pulseAnimation} 2s infinite` }} />
              <Typography variant="body2">Live System</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PeopleIcon fontSize="small" color="primary" />
              <Typography variant="body2">847 active now</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TimelineIcon fontSize="small" color="success" />
              <Typography variant="body2">99.97% uptime</Typography>
            </Box>
          </Paper>

          {/* Tech Stack */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 2 }}
          >
            {[
              { name: "React 18", icon: "⚛️" },
              { name: "Node.js 20", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "MathJax", icon: "📐" },
            ].map((tech, index) => (
              <MotionChip
                key={tech.name}
                label={`${tech.icon} ${tech.name}`}
                variant="outlined"
                variants={itemVariants}
                sx={{
                  borderRadius: "20px",
                  px: 2,
                  py: 2.5,
                  fontSize: "0.9rem",
                }}
              />
            ))}
          </Stack>
        </MotionBox>

        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard variants={itemVariants}>
              <Box sx={{ fontSize: "3rem", mb: 1 }}>📚</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                528K
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Total Questions
              </Typography>
              <Box sx={{ width: "100%", mt: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                  <Typography variant="caption">Growth +12.5%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ height: 4, borderRadius: 2 }}
                />
              </Box>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard variants={itemVariants}>
              <Box sx={{ fontSize: "3rem", mb: 1 }}>👥</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                10.2K
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Active Users
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
                <TrendingUpIcon color="success" fontSize="small" />
                <Typography variant="caption">+847 online now</Typography>
              </Box>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard variants={itemVariants}>
              <Box sx={{ fontSize: "3rem", mb: 1 }}>📄</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                50K+
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Papers Generated
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
                <Typography variant="caption">Avg. 342/day</Typography>
              </Box>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard variants={itemVariants}>
              <Box sx={{ fontSize: "3rem", mb: 1 }}>🏫</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                528
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Institutions
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
                <Typography variant="caption">Across 15 countries</Typography>
              </Box>
            </StatCard>
          </Grid>
        </Grid>

        {/* Academic Hierarchy */}
        <MotionPaper variants={itemVariants} sx={{ p: 4, mb: 8, borderRadius: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}>
            Academic Hierarchy Structure
          </Typography>
          
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mx: "auto", mb: 1 }}>
                  <SchoolIcon />
                </Avatar>
                <Typography variant="h6">Class</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main" }}>8-12</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={0.5} sx={{ display: { xs: "none", sm: "block" } }}>
              <CompareArrowsIcon sx={{ fontSize: 40, color: "text.disabled" }} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56, mx: "auto", mb: 1 }}>
                  <MenuBookIcon />
                </Avatar>
                <Typography variant="h6">Subject</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "secondary.main" }}>15+</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={0.5} sx={{ display: { xs: "none", sm: "block" } }}>
              <CompareArrowsIcon sx={{ fontSize: 40, color: "text.disabled" }} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar sx={{ bgcolor: "success.main", width: 56, height: 56, mx: "auto", mb: 1 }}>
                  <LayersIcon />
                </Avatar>
                <Typography variant="h6">Chapter</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "success.main" }}>200+</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={0.5} sx={{ display: { xs: "none", sm: "block" } }}>
              <CompareArrowsIcon sx={{ fontSize: 40, color: "text.disabled" }} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar sx={{ bgcolor: "warning.main", width: 56, height: 56, mx: "auto", mb: 1 }}>
                  <CategoryIcon />
                </Avatar>
                <Typography variant="h6">Topic</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "warning.main" }}>1K+</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={0.5} sx={{ display: { xs: "none", sm: "block" } }}>
              <CompareArrowsIcon sx={{ fontSize: 40, color: "text.disabled" }} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar sx={{ bgcolor: "error.main", width: 56, height: 56, mx: "auto", mb: 1 }}>
                  <QuestionAnswerIcon />
                </Avatar>
                <Typography variant="h6">Questions</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "error.main" }}>528K</Typography>
              </Box>
            </Grid>
          </Grid>
        </MotionPaper>

        {/* Question Types and Roles */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <MotionPaper variants={itemVariants} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                Question Distribution
              </Typography>
              
              {questionTypes.map((type) => (
                <Box key={type.type} sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body2">{type.type}</Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {type.count} ({type.percentage}%)
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={type.percentage}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: type.color + "20",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: type.color,
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              ))}
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionPaper variants={itemVariants} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                Role-Based Access Control
              </Typography>
              
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Role</TableCell>
                      <TableCell>Users</TableCell>
                      <TableCell>Key Permissions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userRoles.map((role) => (
                      <TableRow key={role.role}>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: role.color }} />
                            {role.role}
                          </Box>
                        </TableCell>
                        <TableCell>{role.users}</TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                            {role.permissions.slice(0, 2).map((perm) => (
                              <Chip key={perm} label={perm} size="small" variant="outlined" />
                            ))}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MotionPaper>
          </Grid>
        </Grid>

        {/* Key Features */}
        <MotionBox variants={itemVariants} sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ textAlign: "center", mb: 4, fontWeight: 600 }}>
            Comprehensive Feature Set
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Accordion
                  component={MotionCard}
                  variants={itemVariants}
                  sx={{
                    borderRadius: "16px !important",
                    overflow: "hidden",
                    "&:before": { display: "none" },
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      minHeight: 100,
                      "& .MuiAccordionSummary-content": {
                        alignItems: "center",
                        gap: 2,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: "16px",
                        backgroundColor: feature.color + "20",
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {feature.details.map((detail, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="success" sx={{ fontSize: 18 }} />
                        <Typography variant="body2">{detail}</Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Performance Metrics */}
        <MotionPaper variants={itemVariants} sx={{ p: 4, mb: 8, borderRadius: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
            System Performance Metrics
          </Typography>
          
          <Grid container spacing={3}>
            {performanceMetrics.map((metric) => (
              <Grid item xs={12} sm={6} md={4} key={metric.metric}>
                <MetricCard>
                  <Avatar sx={{ bgcolor: metric.status === "good" ? "success.main" : "warning.main", width: 48, height: 48 }}>
                    {metric.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">{metric.metric}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{metric.value}</Typography>
                    <Typography variant="caption" color="text.secondary">Target: {metric.target}</Typography>
                  </Box>
                </MetricCard>
              </Grid>
            ))}
          </Grid>
        </MotionPaper>

        {/* Technology Stack */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <MotionPaper variants={itemVariants} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                <CodeIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                Technology Stack
              </Typography>
              
              <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ mb: 3, borderBottom: 1, borderColor: "divider" }}>
                {technologies.map((tech) => (
                  <Tab key={tech.category} label={tech.category} icon={tech.icon} iconPosition="start" />
                ))}
              </Tabs>
              
              <Box>
                {technologies[activeTab].items.map((item, index) => (
                  <Box key={item.name} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1.5, borderBottom: index < technologies[activeTab].items.length - 1 ? "1px solid" : "none", borderColor: "divider" }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{item.description}</Typography>
                    </Box>
                    <Chip label="Production" size="small" color="success" variant="outlined" />
                  </Box>
                ))}
              </Box>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionPaper variants={itemVariants} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                <WorkIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                Development Roadmap
              </Typography>
              
              <Stepper orientation="vertical" activeStep={4}>
                {roadmapSteps.map((step) => (
                  <Step key={step.label} active={step.status === "in-progress"} completed={step.status === "completed"}>
                    <StepLabel optional={<Typography variant="caption" color="text.secondary">{step.date}</Typography>}>
                      <Typography variant="subtitle2">{step.label}</Typography>
                      <Typography variant="caption" color="text.secondary">{step.description}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Chip label={step.status} size="small" color={step.status === "completed" ? "success" : "warning"} />
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </MotionPaper>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <MotionBox variants={itemVariants} sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
          <Button variant="contained" size="large" startIcon={<LaunchIcon />} sx={{ px: 4, py: 1.5, borderRadius: 50 }}>
            Live Demo
          </Button>
          <Button variant="outlined" size="large" startIcon={<GitHubIcon />} sx={{ px: 4, py: 1.5, borderRadius: 50 }}>
            View Source Code
          </Button>
          <Button variant="outlined" size="large" startIcon={<AssessmentIcon />} sx={{ px: 4, py: 1.5, borderRadius: 50 }}>
            Case Study
          </Button>
        </MotionBox>

        {/* Footer Note */}
        <MotionBox variants={itemVariants} sx={{ mt: 8, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            ⚡ Serving over 10,000 educators daily • 99.97% uptime SLA • Enterprise-grade security
          </Typography>
        </MotionBox>
      </Container>
    </MotionBox>
  );
}

export default QuestionBank;