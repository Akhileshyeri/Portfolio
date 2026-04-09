import React from "react";
import { Box, Container, Typography, IconButton, Stack, Tooltip } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TerminalIcon from '@mui/icons-material/Terminal';
import FavoriteIcon from '@mui/icons-material/Favorite';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.4; }
  100% { transform: scale(1); opacity: 1; }
`;

const FooterWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(5, 5, 5, 0.8)' : 'rgba(248, 247, 244, 0.8)',
  backdropFilter: "blur(12px)",
  borderTop: `1px solid ${theme.palette.divider}`,
  overflow: "hidden",
}));

const SocialIconButton = styled(motion(IconButton))(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: '10px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
  '&:hover': {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {/* Brand & Status */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '8px',
                background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 10%, ${theme.palette.secondary.main} 100%)`,
                color: 'white'
              }}
            >
              <TerminalIcon sx={{ fontSize: '1.2rem' }} />
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                Akhilesh
              </Typography>

            </Box>
          </Stack>

          {/* Copyright & Made with (Desktop) */}
          <Box sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Akhilesh. All rights reserved.
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mt: 0.5 }}>
              Built with <FavoriteIcon sx={{ fontSize: '0.8rem', color: '#ff4d4f' }} /> using React & Material-UI
            </Typography>
          </Box>

          {/* Social Links */}
          <Stack direction="row" spacing={1.5}>
            {[
              { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/Akhileshyeri", name: "GitHub" },
              { icon: <LinkedInIcon fontSize="small" />, link: "https://linkedin.com/in/akhileshyeri", name: "LinkedIn" },
            ].map((social, i) => (
              <Tooltip title={social.name} key={i} arrow placement="top">
                <SocialIconButton
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </SocialIconButton>
              </Tooltip>
            ))}
          </Stack>
        </Stack>

        {/* Copyright & Made with (Mobile) */}
        <Box sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' }, mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Akhilesh. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mt: 0.5 }}>
            Built with <FavoriteIcon sx={{ fontSize: '0.8rem', color: '#ff4d4f' }} /> using React & MUI
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;