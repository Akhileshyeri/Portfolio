import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  transition: 'transform 0.3s ease',
});

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: theme.palette.primary.main,
  border: '1px solid rgba(100, 255, 218, 0.3)',
}));

function ProjectCard({ project }) {
  return (
    <StyledCard>
      <StyledCardMedia
        image={project.image}
        title={project.title}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          {project.client}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: '#ccd6f6' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" paragraph sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {project.technologies.map((tech, index) => (
            <TechChip key={index} label={tech} size="small" />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="small"
            href={project.demoLink}
            target="_blank"
          >
            Live Demo
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="small"
            href={project.codeLink}
            target="_blank"
          >
            Source Code
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default ProjectCard;