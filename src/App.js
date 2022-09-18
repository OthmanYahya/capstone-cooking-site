import React from 'react'
import Pages from './pages/Pages'
import Category from './components/Category';
import Search from './components/Search';
import BasicAppBar from './components/BasicAppBar'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box>
      <BasicAppBar />
      <Pages />
    </Box>
  )
}

export default App