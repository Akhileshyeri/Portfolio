import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// Styled Components consistent with your About.js
const SkillCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.03)" : "transparent",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  textAlign: "center",
  height: "100%",
  "&:hover": {
    borderColor: theme.palette.secondary.main,
    transform: "translateY(-8px)",
    boxShadow: `0 12px 30px -10px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.1)"
      }`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const SkillLogo = styled("img")(({ theme }) => ({
  width: "60px",
  height: "60px",
  marginBottom: "16px",
  objectFit: "contain",
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
  },
}));

const DotContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "6px",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    gap: "4px",
    marginTop: theme.spacing(1.5),
  },
}));

const SkillDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active
    ? "#FF6B35"
    : theme.palette.mode === "dark" ? "#333" : "#D1D5DB",
  [theme.breakpoints.down("sm")]: {
    width: "7px",
    height: "7px",
  },
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    marginBottom: theme.spacing(3),
  },
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "text.primary",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));

const skillsData = [
  { name: "React js", icon: "react", level: 5 },
  { name: "JavaScript", icon: "javascript", level: 5 },
  { name: "React Expo", icon: "expo", level: 5 },
  { name: "Material UI", icon: "mui", level: 5 },
  { name: "Tailwind CSS", icon: "tailwindcss", level: 5 },
  { name: "CSS3", icon: "css", level: 5 },
  { name: "Bootstrap", icon: "bootstrap", level: 4 },
  { name: "GitHub", icon: "github", level: 4 },
];

const TechnicalSkills = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 6, md: 12 },
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader variant="h2">Technical Skills</SectionHeader>
        </motion.div>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {skillsData.map((skill, index) => (
            <Grid item size={{ xs: 6, sm: 6, md: 3 }} key={skill.name}>
              <SkillCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillLogo
                  src={`https://cdn.simpleicons.org/${skill.icon}/${skill.icon === "express" ? "888" : "default"
                    }`}
                  alt={skill.name}
                />
                <SkillName variant="h6">
                  {skill.name}
                </SkillName>

                {/* Skill Rating Dots from Screenshot */}
                <DotContainer>
                  {[...Array(5)].map((_, i) => (
                    <SkillDot key={i} active={i < skill.level} />
                  ))}
                </DotContainer>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalSkills;