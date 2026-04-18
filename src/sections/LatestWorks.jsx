import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import examAppMockup from '../assets/exam_app_mockup.png';
import erpsImg from '../assets/Erps.png';
import schoolErpImg from '../assets/SchoolERP.png';

// Styled Components
const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  margin: '10px', // Reduced margin for mobile
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('sm')]: {
    margin: '5px', // Even tighter on mobile
    '&:hover': {
      transform: 'none', // Disable hover lift on mobile for better UX
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 260,
  position: 'relative',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#FFFFFF', // Set all containers to unified white
  [theme.breakpoints.down('sm')]: {
    height: 200, // Slightly shorter images on mobile
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  // Responsive Font Size
  fontSize: "2rem",
  [theme.breakpoints.up('md')]: {
    fontSize: "3rem",
  },
}));

const projects = [
  {
    title: 'Exam App',
    description: 'Advanced online examination platform with real-time test monitoring, OMR support, and performance analytics.',
    image: examAppMockup,
    tech: ['React Native', 'Firebase', 'MUI'],
    demo: '/exam-app',
    code: '#'
  },
  {
    title: 'Question Bank',
    description: 'Dynamic system to manage and generate exam papers with filters, templates, and LaTeX support.',
    image: erpsImg,
    tech: ['React.js', 'Bootstrap'],
    demo: '/question-bank',
    code: '#'
  },
  {
    title: 'School ERP',
    description: 'Complete institutional management system covering student records, fee management, and staff payroll.',
    image: schoolErpImg,
    tech: ['React.js', 'TailwindCSS',],
    demo: '/erp',
    code: '#'
  },
  // {
  //   title: 'POP Kissan',
  //   description: 'Complete institutional management system covering student records, fee management, and staff payroll.',
  //   image: 'https://via.placeholder.com/600x400/34a853/FFFFFF?text=School+ERP',
  //   tech: ['React', 'Node.js', 'PostgreSQL'],
  //   demo: '/erp',
  //   code: '#'
  // },
  // {
  //   title: 'widely-app',
  //   description: 'Complete institutional management system covering student records, fee management, and staff payroll.',
  //   image: 'https://via.placeholder.com/600x400/34a853/FFFFFF?text=School+ERP',
  //   tech: ['React', 'Node.js', 'PostgreSQL'],
  //   demo: '/erp',
  //   code: '#'
  // }
];

function LatestWorks() {
  const theme = useTheme();
  const navigate = useNavigate();
  // We use MUI's robust breakpoint system to absolutely guarantee 1 slide on mobile
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // anything below 900px will safely drop
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm')); // anything below 600px

  let slidesToShowCount = 3;
  if (isMobile) slidesToShowCount = 2;
  if (isSmallMobile) slidesToShowCount = 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShowCount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Box
      component="section"
      id="works"
      sx={{
        py: { xs: 6, md: 10 }, // Responsive padding
        backgroundColor: 'background.default',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <SectionTitle variant="h2">Latest Works</SectionTitle>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              px: 2 // Padding for mobile text wrapping
            }}
          >
            A curated selection of my most recent development projects and digital solutions.
          </Typography>
        </Box>

        <Box sx={{ mx: { xs: 0, sm: -2 } }}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ pb: 5, px: 1 }}>
                <ProjectCard elevation={0}>
                  <StyledCardMedia
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent sx={{ p: { xs: 2, sm: 3 }, flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'text.primary',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: 'text.secondary',
                        // Maintain consistent height or use minHeight
                        minHeight: '45px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description || "Project details coming soon. Stay tuned for more updates."}
                    </Typography>

                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.tech.map((t, i) => (
                        <Chip
                          key={i}
                          label={t}
                          size="small"
                          sx={{
                            fontSize: '0.65rem',
                            height: '24px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 'auto' }}>
                      <Button
                        variant="contained"
                        size="medium"
                        disableElevation
                        color="primary"
                        startIcon={<LaunchIcon />}
                        onClick={() => navigate(project.demo)}
                        sx={{ borderRadius: '10px', textTransform: 'none' }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </CardContent>
                </ProjectCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}

export default LatestWorks;