// components/ThemeToggle.js
import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '../context/ThemeContext';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(1),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(180deg)',
  },
}));

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <StyledIconButton onClick={toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </StyledIconButton>
  );
};

export default ThemeToggle;