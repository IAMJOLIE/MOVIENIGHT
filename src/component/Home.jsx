
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Home = () => {

 const [feedback, setFeedback] = useState(null)
  const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const fadeInScale = keyframes`
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  `;

  const feedbackLike = () => {
    setFeedback('like')
  }

  const feedbackDisLike = () => {
    setFeedback ('dislike')
  }
 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        background: 'linear-gradient(270deg, #ff6b6b, #f8b500, #4e54c8, #8e2de2)',
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
      }}
    >
        
      <Typography variant="h1" sx={{ mt: 8, mb: 2, animation: `${fadeInScale} 1s ease forwards` }}>Welcome to MovieNight</Typography>

      <Box sx={{ opacity: 0, transform: 'translateY(20px)', animation: `${fadeInScale} 1.5s ease forwards`, mb: 4 }}>
        <Typography variant="h4">Our Collection</Typography>
        <Typography variant="body1">Explore thousands of movies curated for you.</Typography>
      </Box>

      <Box sx={{ opacity: 0, transform: 'translateY(20px)', animation: `${fadeInScale} 1.5s ease forwards`, mb: 4 }}>
        <Typography variant="h4">Exclusive Features</Typography>
        <Typography variant="body1">Experience cinema at your fingertips.</Typography>
      </Box>



      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Did you like our app?</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
           <IconButton
           color={feedback === 'like' ? 'primary' : 'default'}
            onClick=  {feedbackLike}>
           <ThumbUpIcon  fontSize="large" />
           </IconButton>
        
        
           <IconButton 
            color={feedback === 'dislike' ? 'primary' : 'default'}
            onClick=  {feedbackDisLike}
           >
           <ThumbUpIcon  fontSize="large" />
           </IconButton>

        </Box>
           {feedback && (
          <Typography variant="body2" sx={{ mt: 1, color: feedback === 'like' ? 'primary.light' : 'primary.main' }}>
            {feedback === 'like' ? "Thank you for your feedback!" : "We're sorry you didn't enjoy the app."}
          </Typography>
        )}
      </Box>

     
     
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          p: 4,
          mt: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>About MovieNight</Typography>
        <Typography variant="body2" sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}>
          MovieNight is your go-to platform for discovering amazing movies and series. With our curated collection and exclusive features, you can find and enjoy cinema at your fingertips.
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>Stay Connected</Typography>

       
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            maxWidth: 400,
            mx: 'auto',
            mb: 2,
          }}
        >
          <TextField
            variant="outlined"
            label="Your Email"
            type="email"
            fullWidth
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: 1,
            }}
          />
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

