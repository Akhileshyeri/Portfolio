import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import BeingMashServices from "../assets/bms.png";
import Sharnbasva from "../assets/sb.png";

const MotionTimelineItem = motion(TimelineItem);

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  width: "2px",
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
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
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const experiences = [
  {
    period: "July 2025 – March 2026",
    title: "React Developer",
    company: "BeingMash Services",
    location: "Kalaburagi, India",
    type: "Full-time",
    icon: <WorkIcon />,
    description:
      "Developed multiple applications including an Online Exam App, School ERP system,Question Bank, Kissan App, and Widey App using React.js and React Native. Built responsive and scalable UI components with Tailwind CSS and MUI. Integrated REST APIs and implemented real-time features for better user interaction. Focused on performance optimization, clean architecture, and seamless user experience across web and mobile platforms.",
  },
  {
    period: "Dec 2024 – June 2025",
    title: "Software Engineer",
    company: "Minds NXT",
    location: "Kalaburagi, India",
    type: "Full-time",
    icon: <WorkIcon />,
    description:
      "Worked on frontend development and testing including unit testing, API testing, and manual testing. Contributed to the Pod Health iOS application for medicine tracking and migrated it to a responsive web platform using React.js. Collaborated with cross-functional teams to build UI components and maintain consistent user experience.",
  },
  {
    period: "2020 - 2024",
    title: "B.Tech (ECE)",
    company: "Sharnbasva University",
    location: "Karnataka, India",
    type: "Education",
    icon: <SchoolIcon />,
    description:
      "Focused on Embedded Systems and Software Engineering fundamentals. Graduated with a strong foundation in problem-solving.",
  },
];

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <SectionTitle variant="h2">Experience & Education</SectionTitle>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              px: { xs: 2, md: 0 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            My professional journey and academic background
          </Typography>
        </Box>

        <Timeline position={isMobile ? "right" : "alternate"}>
          {experiences.map((exp, index) => (
            <MotionTimelineItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              sx={{
                "&:before": {
                  display: isMobile ? "none" : "block",
                },
              }}
            >
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "secondary.main" }}
                  >
                    {exp.period}
                  </Typography>
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "primary.main",
                    p: { xs: 1, md: 1.5 },
                    boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
                  }}
                >
                  {exp.icon}
                </TimelineDot>
                {index !== experiences.length - 1 && (
                  <StyledTimelineConnector />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: { xs: 1, md: 2 } }}>
                <ExperienceCard elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                      gap: 2,
                      flexWrap: "wrap",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.25rem", sm: "1.5rem" },
                        order: { xs: 1, sm: index === 1 ? 2 : 1 },
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      {exp.title}
                    </Typography>

                    <Chip
                      label={exp.type}
                      size="small"
                      sx={{
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(203, 167, 124, 0.1)"
                            : "rgba(45, 48, 71, 0.05)",
                        color: "secondary.main",
                        fontWeight: 600,
                        borderRadius: "6px",
                        order: { xs: 2, sm: index === 1 ? 1 : 2 },
                        alignSelf: { xs: "flex-start", sm: "auto" },
                      }}
                    />
                  </Box>

                  {isMobile && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={600}
                      sx={{ display: "block", mb: 1.5, mt: 0.5 }}
                    >
                      {exp.period}
                    </Typography>
                  )}

                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "primary.light",
                      fontWeight: 500,
                      mb: 1,
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                    }}
                  >
                    {exp.company}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      mb: 2,
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        fontSize: "0.9rem",
                        color: "text.disabled",
                        mr: 0.5,
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {exp.location}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: { xs: "0.85rem", md: "0.875rem" },
                    }}
                  >
                    {exp.description}
                  </Typography>
                </ExperienceCard>
              </TimelineContent>
            </MotionTimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;