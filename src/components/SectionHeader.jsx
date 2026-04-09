import React from 'react';
import { Box, Typography } from '@mui/material';

function SectionHeader({ number, title }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h6" 
        color="primary" 
        sx={{ 
          fontSize: '1rem',
          letterSpacing: '2px',
          mb: 1,
          fontFamily: 'monospace',
        }}
      >
        ( {number} )
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SectionHeader;