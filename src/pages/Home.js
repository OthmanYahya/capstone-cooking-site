import React from 'react'
import Category from '../components/Category'
import Popular from '../components/Popular'
import Search from '../components/Search'
import Veggie from '../components/Veggie'
import Container from '@mui/material/Container';

function Home() {
    return (
        <Container maxWidth='xl'>
            <Search />
            <Category />
            <Popular />
            <Veggie />
        </Container>
    )
}

export default Home