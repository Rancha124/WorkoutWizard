import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#1FB141" fontWeight="600" fontSize="26px">Workout Wizard</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Transform Your Tomorrow <br/> One Rep at a Time!
    </Typography>
    <Typography fontSize="22px" lineHeight="35px">
    Your Personalized Path to Fitness Success
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#1FB141', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#1FB141" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
