// theme/theme.js
import { createTheme } from '@mui/material/styles';

// Light theme - Warm & Sophisticated
const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2D3047', // Deep indigo-gray
      light: '#4A4E6B',
      dark: '#1A1C2C',
    },
    secondary: {
      main: '#E0A458', // Warm amber
      light: '#E8B87A',
      dark: '#C68B3C',
    },
    accent: {
      main: '#419D78', // Muted green (for additional accent)
      light: '#6BBE9A',
      dark: '#2D7A5C',
    },
    text: {
      primary: '#2D3047',
      secondary: '#5A5F7A',
      disabled: '#9CA3AF',
    },
    background: {
      default: '#F8F7F4', // Warm off-white
      paper: '#FFFFFF',
      subtle: '#F2F0EA', // Very light warm gray
    },
    divider: '#E5E2DB',
    success: {
      main: '#419D78',
    },
    warning: {
      main: '#E0A458',
    },
    error: {
      main: '#C44545',
    },
    info: {
      main: '#5A7D9C',
    },
  },
};

// Dark theme - Deep & Moody (true black based)
const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#A9B7C0', // Soft gray-blue
      light: '#C5D0D7',
      dark: '#8A9BA8',
    },
    secondary: {
      main: '#CBA77C', // Warm sand
      light: '#DDC09E',
      dark: '#B38955',
    },
    accent: {
      main: '#6B8F7A', // Sage green
      light: '#8AAB96',
      dark: '#4D705C',
    },
    text: {
      primary: '#E8E6E1', // Warm white
      secondary: '#B7B5AD',
      disabled: '#6B6A64',
    },
    background: {
      default: '#000000', // True black
      paper: '#1A1A1A', // Charcoal
      subtle: '#242424', // Slightly lighter for contrast
    },
    divider: '#2D2D2D',
    success: {
      main: '#6B8F7A',
    },
    warning: {
      main: '#CBA77C',
    },
    error: {
      main: '#C57C7C',
    },
    info: {
      main: '#7A9CB3',
    },
  },
};

const getTheme = (mode) => {
  const themeConfig = mode === 'dark' ? darkTheme : lightTheme;
  
  return createTheme({
    palette: themeConfig.palette,
    typography: {
      fontFamily: '"Inter", "DM Sans", "Poppins", "Roboto", sans-serif',
      h1: {
        fontSize: '4rem',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        fontWeight: 400,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        fontWeight: 400,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
        letterSpacing: '0.02em',
      },
    },
    shape: {
      borderRadius: 12, // Slightly more rounded corners for modern look
    },
    shadows: [
      'none',
      mode === 'dark' 
        ? '0 4px 12px rgba(0, 0, 0, 0.6)' 
        : '0 4px 12px rgba(45, 48, 71, 0.08)',
      mode === 'dark'
        ? '0 8px 24px rgba(0, 0, 0, 0.8)'
        : '0 8px 24px rgba(45, 48, 71, 0.12)',
      ...Array(23).fill('none'), // Fill remaining shadows with none
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '12px 28px',
            fontSize: '1rem',
            fontWeight: 600,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: mode === 'dark' 
                ? '0 8px 16px rgba(0, 0, 0, 0.8)' 
                : '0 8px 16px rgba(45, 48, 71, 0.15)',
            },
          },
          outlined: {
            borderColor: mode === 'dark' 
              ? themeConfig.palette.primary.main 
              : themeConfig.palette.primary.main,
            color: mode === 'dark' 
              ? themeConfig.palette.primary.main 
              : themeConfig.palette.primary.main,
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: mode === 'dark'
                ? 'rgba(169, 183, 192, 0.08)'
                : 'rgba(45, 48, 71, 0.04)',
            },
          },
          contained: {
            backgroundColor: themeConfig.palette.primary.main,
            color: mode === 'dark' ? '#000000' : '#FFFFFF',
            '&:hover': {
              backgroundColor: themeConfig.palette.primary.dark,
            },
          },
          containedSecondary: {
            backgroundColor: themeConfig.palette.secondary.main,
            color: mode === 'dark' ? '#000000' : '#FFFFFF',
            '&:hover': {
              backgroundColor: themeConfig.palette.secondary.dark,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: themeConfig.palette.background.paper,
            backgroundImage: 'none',
            borderRadius: 16,
            boxShadow: mode === 'dark'
              ? '0 8px 24px rgba(0, 0, 0, 0.8)'
              : '0 8px 24px rgba(45, 48, 71, 0.08)',
          },
          elevation1: {
            boxShadow: mode === 'dark'
              ? '0 4px 12px rgba(0, 0, 0, 0.6)'
              : '0 4px 12px rgba(45, 48, 71, 0.08)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
          filled: {
            backgroundColor: mode === 'dark' 
              ? themeConfig.palette.primary.main + '20'
              : themeConfig.palette.primary.main + '10',
            color: themeConfig.palette.text.primary,
          },
          outlined: {
            borderColor: themeConfig.palette.divider,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: themeConfig.palette.text.primary,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: mode === 'dark'
                ? themeConfig.palette.primary.main + '20'
                : themeConfig.palette.primary.main + '10',
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: themeConfig.palette.background.paper,
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' 
              ? 'rgba(0, 0, 0, 0.8)' 
              : 'rgba(248, 247, 244, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom: `1px solid ${themeConfig.palette.divider}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            overflow: 'hidden',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: themeConfig.palette.divider,
          },
        },
      },
    },
  });
};

export default getTheme;