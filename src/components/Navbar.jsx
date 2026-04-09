// components/Navbar.js
import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Container,
  IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ scrolled, theme }) => ({
  backgroundColor: scrolled
    ? theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.7)'
      : 'rgba(255, 255, 255, 0.7)'
    : 'transparent',
  backdropFilter: scrolled ? 'blur(12px)' : 'none',
  boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
  paddingTop: scrolled ? '4px' : '12px',
  paddingBottom: scrolled ? '4px' : '12px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  borderBottom: scrolled
    ? theme.palette.mode === 'dark'
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : '1px solid rgba(255, 255, 255, 0.3)'
    : 'none',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  fontSize: '0.95rem',
  fontWeight: 500,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: 6,
    left: '50%',
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    '&::after': { width: '60%' }
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.6rem',
  letterSpacing: '-1px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textDecoration: 'none',
}));

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'works', label: 'Works' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <StyledAppBar position="fixed" scrolled={scrolled ? 1 : 0} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Logo variant="h4" component="a" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            Portfolio
          </Logo>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeToggle />

            {isMobile ? (
              <IconButton onClick={() => setMobileOpen(true)} sx={{ color: 'primary.main', ml: 1 }}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {sections.map((s) => (
                  <NavButton key={s.id} onClick={() => handleNavClick(s.id)}>
                    {s.label}
                  </NavButton>
                ))}
                <Button
                  variant="contained"
                  sx={{ ml: 4, borderRadius: '50px', px: 4 }}
                  onClick={() => handleNavClick('contact')}
                >
                  Hire Me
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 250, pt: 5 }}>
          {sections.map((s) => (
            <ListItem
              button
              key={s.id}
              onClick={() => handleNavClick(s.id)}
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <ListItemText primary={s.label} />
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </StyledAppBar>
  );
}

export default Navbar;