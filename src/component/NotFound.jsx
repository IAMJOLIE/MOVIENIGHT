import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Definiera en keyframe-animation för gradienten
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        color: 'text.primary',
        background: "linear-gradient(270deg, #ff6b6b, #f8b500, #4e54c8, #8e2de2)", 
        backgroundSize: "400% 400%", 
        animation: `${gradientAnimation} 15s ease infinite`, 
      }}
    >
      <Typography variant="h1" color="text.primary">
        404
      </Typography>
      <Typography variant="h6" color="text.secondary">
        <h2> Oops! The page you're looking for doesn't exist.</h2>
       
      </Typography>
    </Box>
  );
};

export default NotFound;