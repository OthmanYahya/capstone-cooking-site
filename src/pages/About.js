import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <Box>
            <Box component='img' alt='food' src='https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                sx={{ backgroundSize: 'fit', width: '100%', opacity: 0.8, display: { xs: 'auto', sm: 'block' } }} />
            <Box>
                <Box sx={{
                    position: 'absolute',
                    background: 'white',
                    height: '60%',
                    width: '100%',
                    opacity: 0.45,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: { xs: 'none', sm: 'block' }
                }} />
                <Typography variant='h2' sx={{
                    textAlign: 'center',
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -20%)',
                    fontWeight: 'bold',
                }}>
                    About us
                </Typography>
                <Typography variant='h5' sx={{
                    marginTop: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    position: ' absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -0%)',

                }}>
                    We share the best food recipes from across the world, explore our delicious picks that fits everyone's taste!
                </Typography>
            </Box>
        </Box >
    )
}

export default About